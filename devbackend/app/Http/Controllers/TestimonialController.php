<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Testimonial;
use Illuminate\Support\Facades\Storage;
class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(
            Testimonial::latest()->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'designation' => 'nullable|string|max:255',
            'message' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'status' => 'nullable|boolean',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('testimonials', 'public');
        }

        $testimonial = Testimonial::create([
            'name' => $request->name,
            'role' => $request->role,
            'designation' => $request->designation,
            'message' => $request->message,
            'rating' => $request->rating,
            'image' => $imagePath,
            'status' => $request->status,
        ]);

        return response()->json([
            'message' => 'Testimonial created successfully.',
            'data' => $testimonial,
        ], 201);
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'designation' => 'nullable|string|max:255',
            'message' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'status' => 'nullable|boolean',
        ]);

        if ($request->hasFile('image')) {

            if (
                $testimonial->image &&
                Storage::disk('public')->exists($testimonial->image)
            ) {
                Storage::disk('public')->delete($testimonial->image);
            }

            $testimonial->image = $request
                ->file('image')
                ->store('testimonials', 'public');
        }

        $testimonial->name = $request->name;
        $testimonial->role = $request->role;
        $testimonial->designation = $request->designation;
        $testimonial->message = $request->message;
        $testimonial->rating = $request->rating;
        $testimonial->status = $request->status;

        $testimonial->save();

        return response()->json([
            'message' => 'Testimonial updated successfully.',
            'data' => $testimonial,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $testimonial = Testimonial::findOrFail($id);

        if (
            $testimonial->image &&
            Storage::disk('public')->exists($testimonial->image)
        ) {
            Storage::disk('public')->delete($testimonial->image);
        }

        $testimonial->delete();

        return response()->json([
            'message' => 'Testimonial deleted successfully.'
        ]);
    }
}
