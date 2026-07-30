"use client";
import Navbar from "@/Components/Navbar";
import FAQ from "@/Components/FAQ";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
const projects = [

    {
        title: "Libranova Digital Library",
        category: "Website",
        image: "library.jpg",
        description:
            "A modern digital library platform where users can explore books, manage collections and enjoy a smooth reading experience.",
        technologies: [
            "Next.js",
            "Laravel",
            "MySQL",
            "Tailwind CSS"
        ],
        url: "https://openlibrary.org",
    },


    {
        title: "Devonsite Business Website",
        category: "Website",
        image: "devonsite.jpg",
        description:
            "A premium business website with modern UI, smooth animations and responsive layouts for better user experience.",
        technologies: [
            "Next.js",
            "Framer Motion",
            "Tailwind CSS"
        ],
        url: "https://devonsite.com",
    },


    {
        title: "E-Commerce Shopping Platform",
        category: "E-Commerce",
        image: "/ecomerce.jpg",
        description:
            "A complete online shopping platform with product management, categories, cart system and payment integration.",
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Stripe"
        ],
        url: "https://www.shopify.com",
    },


    {
        title: "Food Delivery Application",
        category: "App",
        image: "/food.jpg",
        description:
            "A mobile food delivery application allowing users to browse restaurants, order food and track deliveries.",
        technologies: [
            "React Native",
            "Node.js",
            "Firebase"
        ],
        url: "https://www.ubereats.com",
    },


    {
        title: "Admin Analytics Dashboard",
        category: "Dashboard",
        image: "/admin.jpg",
        description:
            "A powerful dashboard with charts, statistics and data visualization for managing business operations.",
        technologies: [
            "React",
            "Chart.js",
            "Tailwind CSS"
        ],
        url: "https://vercel.com/dashboard",
    },


    {
        title: "Real Estate Website",
        category: "Website",
        image: "/realstate.jpg",
        description:
            "A modern real estate platform where users can explore properties with advanced search features.",
        technologies: [
            "Next.js",
            "Prisma",
            "PostgreSQL"
        ],
        url: "https://www.zillow.com",
    },


    {
        title: "Fitness Tracking App",
        category: "App",
        image: "/fitness.jpg",
        description:
            "A fitness application that helps users track workouts, progress and health goals.",
        technologies: [
            "React Native",
            "API",
            "Firebase"
        ],
        url: "https://www.myfitnesspal.com",
    },


    {
        title: "School Management System",
        category: "Dashboard",
        image: "/schoolmanage.jpg",
        description:
            "A complete school management system for handling students, teachers, attendance and reports.",
        technologies: [
            "Laravel",
            "MySQL",
            "Bootstrap"
        ],
        url: "https://moodle.org",
    },


    {
        title: "Travel Booking Website",
        category: "Website",
        image: "/travel.jpg",
        description:
            "A travel booking platform with beautiful destinations, packages and reservation features.",
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "API"
        ],
        url: "https://www.booking.com",
    },


    {
        title: "Restaurant Management System",
        category: "Dashboard",
        image: "/restaurant.jpg",
        description:
            "A restaurant management dashboard for orders, inventory and customer management.",
        technologies: [
            "React",
            "Node.js",
            "MongoDB"
        ],
        url: "https://www.toasttab.com",
    },


    {
        title: "Portfolio Website",
        category: "Landing Page",
        image: "/portfolio.jpg",
        description:
            "A creative portfolio website with animations, modern design and responsive layout.",
        technologies: [
            "Next.js",
            "Framer Motion",
            "Tailwind CSS"
        ],
        url: "https://www.awwwards.com",
    },


    {
        title: "SaaS Landing Page",
        category: "Landing Page",
        image: "/saas.jpg",
        description:
            "A conversion-focused SaaS landing page with modern sections and engaging animations.",
        technologies: [
            "React",
            "Tailwind CSS",
            "Framer Motion"
        ],
        url: "https://linear.app",
    },

];
const categories = [
    "All",
    "Website",
    "App",
    "Dashboard",
    "E-Commerce"
];


export default function Portfoliopage() {
    const [filter, setFilter] = useState("All");
    const filteredProjects =
        filter === "All"
            ?
            projects
            :
            projects.filter(
                (project) => project.category === filter
            );
    return (
        <main
            className="
                overflow-hidden
                bg-gradient-to-b
                from-[#081C15]
                via-[#123524]
                to-[#081C15]
                "
        >
            <Navbar />

            <section
                className="
            relative
            overflow-hidden
            bg-gradient-to-b
            from-[#081C15]
            via-[#123524]
            to-[#081C15]
            py-28
            "
            >


                {/* Glow */}

                <div
                    className="
                absolute
                left-1/2
                top-20
                h-80
                w-80
                -translate-x-1/2
                rounded-full
                bg-[#52B788]/20
                blur-3xl
                "
                />



                <div className="relative mx-auto max-w-7xl px-6">



                    {/* Heading */}

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 40
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.7
                        }}

                        viewport={{
                            once: true
                        }}

                        className="mx-auto max-w-3xl text-center"

                    >

                        <p
                            className="
                        mb-4
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.3em]
                        text-[#52B788]
                        "
                        >
                            Our Portfolio
                        </p>


                        <h2
                            className="
                        text-4xl
                        font-bold
                        text-white
                        md:text-6xl
                        "
                        >

                            Projects We Have{" "}

                            <span className="text-[#52B788]">
                                Built
                            </span>

                        </h2>


                        <p
                            className="
                        mt-6
                        text-slate-300
                        "
                        >
                            Explore our latest websites and applications
                            created with modern technologies.
                        </p>


                    </motion.div>

                    {/* Category Filter Buttons */}

                    <div
                        className="
    mt-10
    flex
    flex-wrap
    justify-center
    gap-4
    "
                    >

                        {
                            categories.map((category) => (

                                <motion.button

                                    key={category}

                                    onClick={() => setFilter(category)}

                                    whileHover={{
                                        scale: 1.05
                                    }}

                                    whileTap={{
                                        scale: 0.95
                                    }}

                                    className={`
                    rounded-full
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-300

                    ${filter === category
                                            ?
                                            "bg-[#52B788] text-black shadow-lg shadow-[#52B788]/30"
                                            :
                                            "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                                        }
                `}

                                >

                                    {category}

                                </motion.button>

                            ))
                        }


                    </div>


                    {/* Cards */}

                    <div
                        className="
                    mt-16
                    grid
                    gap-10
                    md:grid-cols-2
                    lg:grid-cols-3
                    "
                    >


                        {
                            filteredProjects.map((project, index) => (


                                <motion.div

                                    key={index}


                                    initial={{
                                        opacity: 0,
                                        x: index % 2 === 0 ? -80 : 80
                                    }}


                                    whileInView={{
                                        opacity: 1,
                                        x: 0
                                    }}


                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.2
                                    }}


                                    viewport={{
                                        once: true
                                    }}


                                    whileHover={{
                                        y: -12
                                    }}


                                    className="
                                group
                                overflow-hidden
                                rounded-3xl
                                border
                                border-[#52B788]/20
                                bg-white/5
                                backdrop-blur-xl
                                "
                                >



                                    {/* Image */}

                                    <div
                                        className="
                                    overflow-hidden
                                    "
                                    >

                                        <img

                                            src={project.image}

                                            alt={project.title}

                                            className="
                                        h-56
                                        w-full
                                        object-cover
                                        transition
                                        duration-500
                                        group-hover:scale-110
                                        "

                                        />

                                    </div>




                                    <div className="p-6">



                                        <h3
                                            className="
                                        text-xl
                                        font-bold
                                        text-white
                                        "
                                        >
                                            {project.title}
                                        </h3>




                                        <p
                                            className="
                                        mt-3
                                        text-sm
                                        leading-relaxed
                                        text-slate-300
                                        "
                                        >

                                            {project.description}

                                        </p>




                                        {/* Technologies */}

                                        <div
                                            className="
                                        mt-5
                                        flex
                                        flex-wrap
                                        gap-2
                                        "
                                        >

                                            {
                                                project.technologies.map((tech) => (
                                                    <span

                                                        key={tech}

                                                        className="
                                                    rounded-full
                                                    bg-[#52B788]/20
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    text-[#95D5B2]
                                                    "

                                                    >

                                                        {tech}

                                                    </span>
                                                ))
                                            }


                                        </div>




                                        {/* Buttons */}

                                        <div
                                            className="
                                        mt-6
                                        flex
                                        gap-3
                                        "
                                        >

                                            <a
                                                href={project.url}
                                                target="_blank"
                                                className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            bg-[#52B788]
                                            px-5
                                            py-2
                                            text-sm
                                            font-semibold
                                            text-black
                                            transition
                                            hover:scale-105
                                            "
                                            >

                                                Live
                                                <ExternalLink size={16} />

                                            </a>



                                            <a
                                                href={project.FaGithub}
                                                target="_blank"
                                                className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-white/20
                                            px-5
                                            py-2
                                            text-sm
                                            text-white
                                            transition
                                            hover:bg-white/10
                                            "
                                            >

                                                Code
                                                <FaGithub size={16} />

                                            </a>


                                        </div>


                                    </div>



                                </motion.div>


                            ))
                        }


                    </div>


                </div>


            </section>
            <FAQ />
        </main>
    );
}