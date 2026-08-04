<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        Service::insert([


            [
                'title' => "Web Development",
                'description' => "Modern, responsive and high-performance websites tailored for your business.",
                'image' => "/service-1.jpg",
                'icon' => "Globe",
                'learnmore' => 'Custom websites with modern technologies and responsive designs.',
            ],
            [
                'title' => "Mobile App Development",
                'description' => "Beautiful Android & iOS applications with exceptional user experience.",
                'image' => "/service-2.jpg",
                'icon' => "Smartphone",
                'learnmore' => 'Custom websites with modern technologies and responsive designs.',
            ],
            [
                'title' => "React & Next.js",
                'description' => "Lightning-fast frontend applications using the latest React ecosystem.",
                'image' => "/service-3.jpg",
                'icon' => "Code2",
                'learnmore' => 'Custom websites with modern technologies and responsive designs.',
            ],

            [
                'title' => "Backend Development",
                'description' => "Powerful APIs and scalable backend systems with Node.js & Laravel.",
                'image' => "/service-4.jpg",
                'icon' => "Database",
                'learnmore' => 'Custom websites with modern technologies and responsive designs.',
            ],

            [
                'title' => "WordPress",
                'description' => "Professional CMS websites with custom themes and functionality.",
                'image' => "/service-5.jpg",
                'icon' => "LayoutDashboard",
                'learnmore' => 'Custom websites with modern technologies and responsive designs.',
            ],

            [
                'title' => "Cloud Solutions",
                'description' => "Cloud deployment, DevOps and secure infrastructure management.",
                'image' => "/service-6.jpg",
                'icon' => "Cloud",
                'learnmore' => 'Custom websites with modern technologies and responsive designs.',
            ],

            [
                'title' => "UI / UX Design",
                'description' => "Creative interfaces focused on usability and modern user experiences.",
                'image' => "/services-7.jpg",
                'icon' => "MonitorSmartphone",
                'learnmore' => 'Custom websites with modern technologies and responsive designs.',
            ],

            [
                'title' => "SEO Optimization",
                'description' => "Increase visibility, traffic and business growth through smart SEO.",
                'image' => "/service-8.jpg",
                'icon' => "Search",
                'learnmore' => 'Custom websites with modern technologies and responsive designs.',
            ]

        ]);
    }
}