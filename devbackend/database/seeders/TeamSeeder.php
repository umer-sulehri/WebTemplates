<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Team;

class TeamSeeder extends Seeder
{
    public function run(): void
    {
        Team::create([
            'name' => 'Alex Morgan',
            'role' => 'Chief Executive Officer',
            'image' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85',
            'bio' => 'Alex leads the team with a strong focus on innovation, business strategy and building meaningful digital experiences.',
            'experience' => '10+ Years',
            'education' => 'MBA — Business & Technology',
            'email' => 'alex@example.com',
            'phone' => '+92 300 1234567',
            'skills' => json_encode([
                'Leadership',
                'Strategy',
                'Business Development',
            ]),
            'linkedin' => '#',
            'instagram' => '#',
            'facebook' => '#',
            'twitter' => '#',
        ]);

        Team::create([
            'name' => 'Sophia Williams',
            'role' => 'Creative Director',
            'image' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85',
            'bio' => 'Sophia turns ideas into strong visual identities and engaging digital experiences through creativity and design.',
            'experience' => '8+ Years',
            'education' => 'MA — Graphic Design',
            'email' => 'sophia@example.com',
            'phone' => '+92 301 1234567',
            'skills' => json_encode([
                'UI/UX',
                'Branding',
                'Creative Direction',
            ]),
            'linkedin' => '#',
            'instagram' => '#',
            'facebook' => '#',
            'twitter' => '#',
        ]);

        Team::create([
            'name' => 'Daniel Carter',
            'role' => 'Lead Developer',
            'image' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85',
            'bio' => 'Daniel develops scalable applications and robust technical solutions using modern web technologies.',
            'experience' => '7+ Years',
            'education' => 'BS — Computer Science',
            'email' => 'daniel@example.com',
            'phone' => '+92 302 1234567',
            'skills' => json_encode([
                'Next.js',
                'Laravel',
                'React',
                'APIs',
            ]),
            'linkedin' => '#',
            'instagram' => '#',
            'facebook' => '#',
            'twitter' => '#',
        ]);

        Team::create([
            'name' => 'Emily Johnson',
            'role' => 'UI/UX Designer',
            'image' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85',
            'bio' => 'Emily creates clean, intuitive and user-focused interfaces that make digital products easier and more enjoyable to use.',
            'experience' => '6+ Years',
            'education' => 'BS — Interaction Design',
            'email' => 'emily@example.com',
            'phone' => '+92 303 1234567',
            'skills' => json_encode([
                'UI Design',
                'UX Research',
                'Prototyping',
            ]),
            'linkedin' => '#',
            'instagram' => '#',
            'facebook' => '#',
            'twitter' => '#',
        ]);

        Team::create([
            'name' => 'Michael Brown',
            'role' => 'Backend Engineer',
            'image' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85',
            'bio' => 'Michael works on backend architecture, APIs and databases to create secure and reliable applications.',
            'experience' => '6+ Years',
            'education' => 'BS — Software Engineering',
            'email' => 'michael@example.com',
            'phone' => '+92 304 1234567',
            'skills' => json_encode([
                'PHP',
                'Laravel',
                'MySQL',
                'REST API',
            ]),
            'linkedin' => '#',
            'instagram' => '#',
            'facebook' => '#',
            'twitter' => '#',
        ]);

        Team::create([
            'name' => 'Olivia Smith',
            'role' => 'Project Manager',
            'image' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85',
            'bio' => 'Olivia manages projects, timelines and communication to ensure every project reaches its goals smoothly.',
            'experience' => '7+ Years',
            'education' => 'BS — Project Management',
            'email' => 'olivia@example.com',
            'phone' => '+92 305 1234567',
            'skills' => json_encode([
                'Leadership',
                'Strategy',
                'Business Development'
            ]),
            'linkedin' => '#',
            'instagram' => '#',
            'facebook' => '#',
            'twitter' => '#',
        ]);
    }
}