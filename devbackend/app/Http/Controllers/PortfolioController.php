<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PortfolioController extends Controller
{
    // Get All Projects
    public function index()
    {
        return response()->json(
            Portfolio::latest()->get()
        );
    }

    // Store Project
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'project_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'technologies' => 'nullable',
            'featured' => 'nullable|boolean',
            'status' => 'nullable|boolean',
        ]);

        $image = null;

        if ($request->hasFile('image')) {

            $image = $request
                ->file('image')
                ->store('portfolio', 'public');
        }

        $portfolio = Portfolio::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title) . "-" . time(),
            'category' => $request->category,
            'description' => $request->description,
            'image' => $image,
            'project_url' => $request->project_url,
            'github_url' => $request->github_url,
            'technologies' => $request->technologies
                ? json_encode($request->technologies)
                : null,
            'featured' => $request->featured ?? false,
            'status' => $request->status ?? true,
        ]);

        return response()->json([
            "message" => "Portfolio created successfully.",
            "data" => $portfolio,
        ], 201);
    }

    // Get Single Project
    public function show($id)
    {
        return response()->json(
            Portfolio::findOrFail($id)
        );
    }

    // Update Project
    public function update(Request $request, $id)
    {
        $portfolio = Portfolio::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'project_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'technologies' => 'nullable',
            'featured' => 'nullable|boolean',
            'status' => 'nullable|boolean',
        ]);

        if ($request->hasFile('image')) {

            if ($portfolio->image) {
                Storage::disk('public')->delete($portfolio->image);
            }

            $portfolio->image = $request
                ->file('image')
                ->store('portfolio', 'public');
        }

        $portfolio->title = $request->title;
        $portfolio->slug = Str::slug($request->title) . "-" . time();
        $portfolio->category = $request->category;
        $portfolio->description = $request->description;
        $portfolio->project_url = $request->project_url;
        $portfolio->github_url = $request->github_url;
        $portfolio->technologies = $request->technologies
            ? json_encode($request->technologies)
            : null;
        $portfolio->featured = $request->featured ?? false;
        $portfolio->status = $request->status ?? true;

        $portfolio->save();

        return response()->json([
            "message" => "Portfolio updated successfully.",
            "data" => $portfolio,
        ]);
    }

    // Delete Project
    public function destroy($id)
    {
        $portfolio = Portfolio::findOrFail($id);

        if ($portfolio->image) {
            Storage::disk('public')->delete($portfolio->image);
        }

        $portfolio->delete();

        return response()->json([
            "message" => "Portfolio deleted successfully."
        ]);
    }
}