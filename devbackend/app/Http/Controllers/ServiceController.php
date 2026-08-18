<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class ServiceController extends Controller
{
    // Get All Services
    public function index()
    {
        $services = Service::latest()->get();

        $services->transform(function ($service) {
            if ($service->image) {
                $service->image = asset('storage/' . $service->image);
            }

            return $service;
        });

        return response()->json($services);
    }


    // Add Service
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'learnmore' => 'required',
            'icon' => 'required',
            'image' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $image = $request->file('image')->store('services', 'public');

        $service = Service::create([
            'title' => $request->title,
            'description' => $request->description,
            'learnmore' => $request->learnmore,
            'icon' => $request->icon,
            'image' => $image,
            'status' => 1,
        ]);

        return response()->json([
            'message' => 'Service Added Successfully',
            'service' => $service,
        ]);
    }


    // Get Single Service
    public function show($id)
    {
        return response()->json(
            Service::findOrFail($id)
        );
    }


    // Update Service
    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id);

        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'learnmore' => 'required',
            'icon' => 'required',
        ]);

        if ($request->hasFile('image')) {

            if ($service->image && Storage::disk('public')->exists($service->image)) {
                Storage::disk('public')->delete($service->image);
            }

            $image = $request->file('image')->store('services', 'public');
            $service->image = $image;
        }

        $service->title = $request->title;
        $service->description = $request->description;
        $service->learnmore = $request->learnmore;
        $service->icon = $request->icon;

        $service->save();

        return response()->json([
            'message' => 'Service updated successfully',
            'service' => $service,
        ]);
    }


    // Delete Service
    public function destroy($id)
    {
        Service::findOrFail($id)->delete();


        return response()->json([
            'message' => 'Service Deleted Successfully'
        ]);
    }
}