<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Blog;

class BlogSeeder extends Seeder
{
    public function run(): void
    {
        $blogs = [

            [
                "title" => "How to Build Modern Websites with Next.js",
                "slug" => "how-to-build-modern-websites-with-nextjs",
                "category" => "Development",
                "image" => "blogs/blog-1.jpg",
                "author" => "Admin",
                "description" => "Learn how to create fast, scalable and modern websites using Next.js, React and Tailwind CSS.",
                "content" => "Next.js provides powerful features like server rendering, routing and optimization tools to build professional web applications.",
                "featured" => 1,
                "status" => 1,
            ],

            [
                "title" => "Complete Guide to Laravel Backend Development",
                "slug" => "complete-guide-to-laravel-backend-development",
                "category" => "Backend",
                "image" => "blogs/blog-2.jpg",
                "author" => "Admin",
                "description" => "Explore Laravel features and learn how to build secure and scalable backend systems.",
                "content" => "Laravel is one of the most popular PHP frameworks because of its clean structure, powerful database tools and API support.",
                "featured" => 0,
                "status" => 1,
            ],

            [
                "title" => "Creating Premium UI With Framer Motion",
                "slug" => "creating-premium-ui-with-framer-motion",
                "category" => "Design",
                "image" => "blogs/blog-3.jpg",
                "author" => "Admin",
                "description" => "Learn how animations can improve user experience and make websites more engaging.",
                "content" => "Framer Motion allows developers to create smooth animations, transitions and interactive user interfaces.",
                "featured" => 1,
                "status" => 1,
            ],

            [
                "title" => "Future of Artificial Intelligence in Development",
                "slug" => "future-of-artificial-intelligence-in-development",
                "category" => "AI",
                "image" => "blogs/blog-4.jpg",
                "author" => "Admin",
                "description" => "Discover how artificial intelligence is changing the future of software development.",
                "content" => "AI is helping developers automate tasks, improve productivity and create smarter applications.",
                "featured" => 0,
                "status" => 1,
            ],

            [
                "title" => "Building Modern E-Commerce Platforms",
                "slug" => "building-modern-ecommerce-platforms",
                "category" => "Business",
                "image" => "blogs/blog-5.jpg",
                "author" => "Admin",
                "description" => "A complete overview of creating powerful online shopping platforms.",
                "content" => "Modern e-commerce platforms require responsive design, secure payments and excellent user experience.",
                "featured" => 1,
                "status" => 1,
            ],

            [
                "title" => "React vs Next.js: Which One Should You Use?",
                "slug" => "react-vs-nextjs-which-one-to-use",
                "category" => "Development",
                "image" => "blogs/blog-6.jpg",
                "author" => "Admin",
                "description" => "Understand the differences between React and Next.js and choose the right technology.",
                "content" => "React is a UI library while Next.js provides a complete framework with routing and optimization features.",
                "featured" => 0,
                "status" => 1,
            ],

            [
                "title" => "Importance of Responsive Web Design",
                "slug" => "importance-of-responsive-web-design",
                "category" => "Design",
                "image" => "blogs/blog-7.jpg",
                "author" => "Admin",
                "description" => "Why responsive design is important for modern websites and better user experience.",
                "content" => "Responsive design ensures websites work perfectly across mobile, tablet and desktop devices.",
                "featured" => 0,
                "status" => 1,
            ],

            [
                "title" => "Building Secure Web Applications",
                "slug" => "building-secure-web-applications",
                "category" => "Backend",
                "image" => "blogs/blog-8.jpg",
                "author" => "Admin",
                "description" => "Learn important security practices for developing reliable web applications.",
                "content" => "Security includes authentication, authorization, data protection and secure coding practices.",
                "featured" => 0,
                "status" => 1,
            ],

            [
                "title" => "How Cloud Computing is Changing Business",
                "slug" => "how-cloud-computing-is-changing-business",
                "category" => "Business",
                "image" => "blogs/blog-9.jpg",
                "author" => "Admin",
                "description" => "Explore how cloud technology helps businesses grow faster and smarter.",
                "content" => "Cloud computing provides flexible infrastructure, better performance and reduced operational costs.",
                "featured" => 1,
                "status" => 1,
            ],

            [
                "title" => "Top Web Development Trends 2026",
                "slug" => "top-web-development-trends-2026",
                "category" => "Development",
                "image" => "blogs/blog-10.jpg",
                "author" => "Admin",
                "description" => "Explore the latest trends shaping the future of web development.",
                "content" => "Modern web development is moving towards AI integration, better performance and immersive experiences.",
                "featured" => 1,
                "status" => 1,
            ],

        ];

        foreach ($blogs as $blog) {
            Blog::create($blog);
        }
    }
}