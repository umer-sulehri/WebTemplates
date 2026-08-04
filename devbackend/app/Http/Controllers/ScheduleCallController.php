<?php

namespace App\Http\Controllers;

use App\Models\ScheduleCall;
use Illuminate\Http\Request;

class ScheduleCallController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(
            ScheduleCall::latest()->get()
        );
    }

    /**
     * Store a newly created resource.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'service' => 'nullable|string|max:255',
            'date' => 'required|date_format:Y-m-d',
            'time' => 'required|date_format:H:i',
            'message' => 'nullable|string',
            'status' => 'nullable|in:pending,confirmed,completed,cancelled',
        ]);

        $call = ScheduleCall::create($validated);

        return response()->json([
            'message' => 'Schedule call created successfully.',
            'data' => $call,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $call = ScheduleCall::findOrFail($id);

        return response()->json($call);
    }

    /**
     * Update the specified resource.
     */
    public function update(Request $request, string $id)
    {
        $call = ScheduleCall::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'service' => 'nullable|string|max:255',
            'date' => 'sometimes|required|date_format:Y-m-d',
            'time' => 'sometimes|required|date_format:H:i',
            'message' => 'nullable|string',
            'status' => 'nullable|in:pending,confirmed,completed,cancelled',
        ]);

        $call->update($validated);

        return response()->json([
            'message' => 'Schedule call updated successfully.',
            'data' => $call,
        ]);
    }

    /**
     * Remove the specified resource.
     */
    public function destroy(string $id)
    {
        $call = ScheduleCall::findOrFail($id);

        $call->delete();

        return response()->json([
            'message' => 'Schedule call deleted successfully.',
        ]);
    }
}