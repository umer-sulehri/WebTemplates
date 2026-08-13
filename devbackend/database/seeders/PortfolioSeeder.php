<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Portfolio;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [

            [
                "title" => "Devonsite Business Website",
                "slug" => "devonsite-business-website",
                "category" => "Website",
                "description" => "A premium business website with modern UI, smooth animations and responsive layouts for better user experience.",
                "image" => "portfolio/devonsite.jpg",
                "project_url" => "https://devonsite.com",
                "github_url" => "https://github.com",
            ],


            [
                "title" => "E-Commerce Shopping Platform",
                "slug" => "e-commerce-shopping-platform",
                "category" => "E-Commerce",
                "description" => "A complete online shopping platform with product management, categories, cart system and payment integration.",
                "image" => "portfolio/ecomerce.jpg",
                "project_url" => "https://www.shopify.com",
                "github_url" => "https://github.com",
            ],


            [
                "title" => "Food Delivery Application",
                "slug" => "food-delivery-application",
                "category" => "App",
                "description" => "A mobile food delivery application allowing users to browse restaurants, order food and track deliveries.",
                "image" => "portfolio/food.jpg",
                "project_url" => "https://www.ubereats.com",
                "github_url" => "https://github.com",
            ],


            [
                "title" => "Admin Analytics Dashboard",
                "slug" => "admin-analytics-dashboard",
                "category" => "Dashboard",
                "description" => "A powerful dashboard with charts, statistics and data visualization for managing business operations.",
                "image" => "portfolio/admin.jpg",
                "project_url" => "https://vercel.com/dashboard",
                "github_url" => "https://github.com",
            ],


            [
                "title" => "Real Estate Website",
                "slug" => "real-estate-website",
                "category" => "Website",
                "description" => "A modern real estate platform where users can explore properties with advanced search features.",
                "image" => "portfolio/realstate.jpg",
                "project_url" => "https://www.zillow.com",
                "github_url" => "https://github.com",
            ],


            [
                "title" => "Fitness Tracking App",
                "slug" => "fitness-tracking-app",
                "category" => "App",
                "description" => "A fitness application that helps users track workouts, progress and health goals.",
                "image" => "portfolio/fitness.jpg",
                "project_url" => "https://www.myfitnesspal.com",
                "github_url" => "https://github.com",
            ],


            [
                "title" => "School Management System",
                "slug" => "school-management-system",
                "category" => "Dashboard",
                "description" => "A complete school management system for handling students, teachers, attendance and reports.",
                "image" => "portfolio/schoolmanage.jpg",
                "project_url" => "https://moodle.org",
                "github_url" => "https://github.com",
            ],


            [
                "title" => "Travel Booking Website",
                "slug" => "travel-booking-website",
                "category" => "Website",
                "description" => "A travel booking platform with beautiful destinations, packages and reservation features.",
                "image" => "portfolio/travel.jpg",
                "project_url" => "https://www.booking.com",
                "github_url" => "https://github.com",
            ],


            [
                "title" => "Restaurant Management System",
                "slug" => "restaurant-management-system",
                "category" => "Dashboard",
                "description" => "A restaurant management dashboard for orders, inventory and customer management.",
                "image" => "portfolio/restaurant.jpg",
                "project_url" => "https://www.toasttab.com",
                "github_url" => "https://github.com",
                "technologies" => [
                    "Next.js",
                    "Laravel",
                    "Tailwind CSS"
                ],
            ],


            [
                "title" => "SaaS Landing Page",
                "slug" => "saas-landing-page",
                "category" => "Landing Page",
                "description" => "A conversion-focused SaaS landing page with modern sections and engaging animations.",
                "image" => "portfolio/saas.jpg",
                "project_url" => "https://linear.app",
                "github_url" => "https://github.com",
                "technologies" => [
                    "Next.js",
                    "Laravel",
                    "Tailwind CSS"
                ],
            ],
        ];


        foreach ($projects as $project) {

            Portfolio::create([
                ...$project,
                "technologies" => isset($project["technologies"])
                    ? json_encode($project["technologies"])
                    : null,
            ]);

        }

    }
}