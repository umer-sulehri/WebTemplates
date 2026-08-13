<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TeamController extends Controller
{
    // Get all team members
    public function index()
    {
        $teams = Team::latest()->get();

        $teams->transform(function ($team) {
            if ($team->image) {
                $team->image = asset('storage/' . $team->image);
            }

            return $team;
        });

        return response()->json([
            'success' => true,
            'data' => $teams,
        ]);
    }

    // Get single team member
    public function show($id)
    {
        $team = Team::findOrFail($id);

        if ($team->image) {
            $team->image = asset('storage/' . $team->image);
        }

        return response()->json([
            'success' => true,
            'data' => $team,
        ]);
    }

    // Create team member
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',

            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',

            'bio' => 'nullable|string',
            'experience' => 'nullable|string|max:255',
            'education' => 'nullable|string|max:255',
            'email' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:255',
            'skills' => 'nullable|string',

            'linkedin' => 'nullable|string|max:500',
            'instagram' => 'nullable|string|max:500',
            'facebook' => 'nullable|string|max:500',
            'twitter' => 'nullable|string|max:500',

            'status' => 'nullable|boolean',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request
                ->file('image')
                ->store('team', 'public');
        }

        // Agar status nahi bheja gaya to active rakho
        if (!isset($validated['status'])) {
            $validated['status'] = true;
        }

        $team = Team::create($validated);

        if ($team->image) {
            $team->image = asset('storage/' . $team->image);
        }

        return response()->json([
            'success' => true,
            'message' => 'Team member created successfully.',
            'data' => $team,
        ], 201);
    }

    // Update team member
    public function update(Request $request, $id)
    {
        $team = Team::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',

            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',

            'bio' => 'nullable|string',
            'experience' => 'nullable|string|max:255',
            'education' => 'nullable|string|max:255',
            'email' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:255',
            'skills' => 'nullable|string',

            'linkedin' => 'nullable|string|max:500',
            'instagram' => 'nullable|string|max:500',
            'facebook' => 'nullable|string|max:500',
            'twitter' => 'nullable|string|max:500',

            'status' => 'nullable|boolean',
        ]);

        if ($request->hasFile('image')) {

            if (
                $team->image &&
                Storage::disk('public')->exists($team->image)
            ) {
                Storage::disk('public')->delete($team->image);
            }

            $validated['image'] = $request
                ->file('image')
                ->store('team', 'public');
        }

        $team->update($validated);

        $team->refresh();

        if ($team->image) {
            $team->image = asset('storage/' . $team->image);
        }

        return response()->json([
            'success' => true,
            'message' => 'Team member updated successfully.',
            'data' => $team,
        ]);
    }

    // Delete team member
    public function destroy($id)
    {
        $team = Team::findOrFail($id);

        if (
            $team->image &&
            Storage::disk('public')->exists($team->image)
        ) {
            Storage::disk('public')->delete($team->image);
        }

        $team->delete();

        return response()->json([
            'success' => true,
            'message' => 'Team member deleted successfully.',
        ]);
    }
}