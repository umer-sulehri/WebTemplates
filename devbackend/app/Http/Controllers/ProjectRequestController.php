<?php

namespace App\Http\Controllers;

use App\Models\ProjectRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectRequestController extends Controller
{

    // Get All Requests
    public function index()
    {
        return response()->json(
            ProjectRequest::latest()->get()
        );

    }

    // Store Request
    public function store(Request $request)
    {
        $request->validate([
            // validation
        ]);

        $file = null;

        if ($request->hasFile('requirement_file')) {
            $file = $request->file('requirement_file')
                ->store('project_requests', 'public');
        }

        $project = ProjectRequest::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'company' => $request->company,
            'service' => $request->service,
            'project_title' => $request->project_title,
            'description' => $request->description,
            'budget' => $request->budget,
            'timeline' => $request->timeline,
            'contact_method' => $request->contact_method,
            'requirement_file' => $file,
            'status' => 'pending',
        ]);

        return response()->json([
            'message' => 'Project request submitted successfully',
            'project' => $project,
        ], 201);
    }

    // Show Single Request
    public function show(ProjectRequest $projectRequest)
    {
        return response()->json($projectRequest);
    }

    // Update Request
    public function update(Request $request, ProjectRequest $projectRequest)
    {
        $request->validate([
            'status' => 'nullable|string',
        ]);

        if ($request->hasFile('requirement_file')) {

            if ($projectRequest->requirement_file) {
                Storage::disk('public')->delete($projectRequest->requirement_file);
            }

            $projectRequest->requirement_file = $request
                ->file('requirement_file')
                ->store('project_requests', 'public');
        }

        $projectRequest->update($request->except('requirement_file'));

        if ($request->hasFile('requirement_file')) {
            $projectRequest->save();
        }

        return response()->json([
            'message' => 'Project request updated successfully',
            'project' => $projectRequest,
        ]);
    }

    // Delete Request
    public function destroy(ProjectRequest $projectRequest)
    {
        if ($projectRequest->requirement_file) {
            Storage::disk('public')->delete($projectRequest->requirement_file);
        }

        $projectRequest->delete();

        return response()->json([
            'message' => 'Project request deleted successfully',
        ]);
    }
}