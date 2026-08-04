<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Testimonial;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Testimonial::truncate();

        $testimonials = [

            [
                'image' => 'testimonials/user1.jpg',
                'name' => 'Ali Khan',
                'role' => 'Student',
                'designation' => null,
                'message' => 'This digital library platform made finding and reading books extremely easy. The experience is smooth and modern.',
                'rating' => 5,
                'status' => 1,
            ],

            [
                'image' => 'testimonials/user2.jpg',
                'name' => 'Sarah Ahmed',
                'role' => 'Researcher',
                'designation' => null,
                'message' => 'Amazing collection of books with a clean interface. I can quickly search and access resources whenever I need.',
                'rating' => 5,
                'status' => 1,
            ],

            [
                'image' => 'testimonials/user3.jpg',
                'name' => 'Hamza Malik',
                'role' => 'Software Developer',
                'designation' => null,
                'message' => 'A beautifully designed platform with excellent performance. The animations and user experience feel premium.',
                'rating' => 4,
                'status' => 1,
            ],

            [
                'image' => 'testimonials/user4.jpg',
                'name' => 'Ahmed Raza',
                'role' => 'Book Lover',
                'designation' => null,
                'message' => 'The reading experience is fantastic. The platform is fast, organized and very easy to use.',
                'rating' => 5,
                'status' => 1,
            ],

            [
                'image' => 'testimonials/user5.jpg',
                'name' => 'Ayesha Noor',
                'role' => 'University Student',
                'designation' => null,
                'message' => 'I love the modern design and huge collection of resources. Finding books has become much easier.',
                'rating' => 5,
                'status' => 1,
            ],

            [
                'image' => 'testimonials/user6.jpg',
                'name' => 'Usman Tariq',
                'role' => 'Teacher',
                'designation' => null,
                'message' => 'A helpful platform for students and teachers. The interface is clean and provides a great digital library experience.',
                'rating' => 4,
                'status' => 1,
            ],

        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }
    }
}