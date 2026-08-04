<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    // Get All Blogs
    public function index()
    {
        return response()->json(
            Blog::latest()->get()
        );
    }

    // Store Blog
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'description' => 'required|string',
            'content' => 'required|string',
            'featured' => 'nullable|boolean',
            'status' => 'nullable|boolean',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')
                ->store('blogs', 'public');
        }

        $blog = Blog::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title) . '-' . time(),
            'category' => $request->category,
            'author' => $request->author,
            'description' => $request->description,
            'content' => $request->content,
            'featured' => $request->featured ?? 0,
            'status' => $request->status ?? 1,
            'image' => $imagePath,
        ]);

        return response()->json($blog, 201);
    }

    // Show Single Blog
    public function show(Blog $blog)
    {
        return response()->json($blog);
    }

    // Update Blog
    public function update(Request $request, Blog $blog)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'description' => 'required|string',
            'content' => 'required|string',
            'featured' => 'nullable|boolean',
            'status' => 'nullable|boolean',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $imagePath = $blog->image;

        if ($request->hasFile('image')) {

            if ($blog->image && Storage::disk('public')->exists($blog->image)) {
                Storage::disk('public')->delete($blog->image);
            }

            $imagePath = $request->file('image')
                ->store('blogs', 'public');
        }

        $blog->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title) . '-' . $blog->id,
            'category' => $request->category,
            'author' => $request->author,
            'description' => $request->description,
            'content' => $request->content,
            'featured' => $request->featured ?? 0,
            'status' => $request->status ?? 1,
            'image' => $imagePath,
        ]);

        return response()->json($blog);
    }

    // Delete Blog
    public function destroy(Blog $blog)
    {
        if ($blog->image && Storage::disk('public')->exists($blog->image)) {
            Storage::disk('public')->delete($blog->image);
        }

        $blog->delete();

        return response()->json([
            'message' => 'Blog deleted successfully.'
        ]);
    }
    public function getBySlug($slug)
    {
        $blog = Blog::where('slug', $slug)
            ->where('status', 1)
            ->first();

        if (!$blog) {
            return response()->json([
                'message' => 'Blog not found'
            ], 404);
        }

        return response()->json($blog);
    }
}