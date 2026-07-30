"use client";

import Navbar from "@/Components/Navbar";

import Image from "next/image";
import { motion } from "framer-motion";

import {
    Sparkles,
    ArrowRight,
    CheckCircle2,
    Globe,
    Smartphone,
    Code2,
    Database,
    LayoutDashboard,
    Cloud,
    MonitorSmartphone,
    Search,
    ArrowUpRight,
} from "lucide-react";
const highlights = [

    "Custom Web Development",

    "Mobile App Development",

    "UI / UX Design",

    "Cloud & API Solutions",

];
const services = [

    {
        title: "Web Development",
        description: "Modern, responsive and high-performance websites tailored for your business.",
        image: "/service-1.jpg",
        icon: Globe,
    },

    {
        title: "Mobile App Development",
        description: "Beautiful Android & iOS applications with exceptional user experience.",
        image: "/service-2.jpg",
        icon: Smartphone,
    },

    {
        title: "React & Next.js",
        description: "Lightning-fast frontend applications using the latest React ecosystem.",
        image: "/service-3.jpg",
        icon: Code2,
    },

    {
        title: "Backend Development",
        description: "Powerful APIs and scalable backend systems with Node.js & Laravel.",
        image: "/service-4.jpg",
        icon: Database,
    },

    {
        title: "WordPress",
        description: "Professional CMS websites with custom themes and functionality.",
        image: "/service-5.jpg",
        icon: LayoutDashboard,
    },

    {
        title: "Cloud Solutions",
        description: "Cloud deployment, DevOps and secure infrastructure management.",
        image: "/service-6.jpg",
        icon: Cloud,
    },

    {
        title: "UI / UX Design",
        description: "Creative interfaces focused on usability and modern user experiences.",
        image: "/services-7.jpg",
        icon: MonitorSmartphone,
    },

    {
        title: "SEO Optimization",
        description: "Increase visibility, traffic and business growth through smart SEO.",
        image: "/service-8.jpg",
        icon: Search,
    },

];
const technologies = [

    {
        name: "React",
        logo: "/react.jpg",
        category: "Frontend",
    },

    {
        name: "Next.js",
        logo: "/nextjs.jpg",
        category: "Framework",
    },

    {
        name: "Laravel",
        logo: "/laravel.jpg",
        category: "Backend",
    },

    {
        name: "Node.js",
        logo: "/node.jpg",
        category: "Runtime",
    },

    {
        name: "JavaScript",
        logo: "/javascript2.jpg",
        category: "Language",
    },

    {
        name: "TypeScript",
        logo: "/typescript1.jpg",
        category: "Language",
    },

    {
        name: "MySQL",
        logo: "/mysql1.jpg",
        category: "Database",
    },

    {
        name: "Docker",
        logo: "/docker.jpg",
        category: "DevOps",
    },

    {
        name: "AWS",
        logo: "/aws.jpg",
        category: "Cloud",

    },

];
export default function ServicesPage() {

    return (

        <>



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

                {/* ================= OUR SERVICES ================= */}

                <section

                    id="services"

                    className="relative py-28"

                >

                    <div

                        className="mx-auto max-w-7xl px-6"

                    >

                        {/* Heading */}

                        <motion.div

                            initial={{
                                opacity: 0,
                                y: 40,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{
                                once: true,
                            }}

                            transition={{
                                duration: 0.7,
                            }}

                            className="mx-auto max-w-3xl text-center"

                        >

                            <span

                                className="inline-flex items-center gap-2 rounded-full border border-[#52D681]/30 bg-[#52D681]/10 px-5 py-2 text-sm font-medium text-[#7AE582]"

                            >

                                OUR SERVICES

                            </span>

                            <h2

                                className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"

                            >

                                Building Digital

                                <span

                                    className="block bg-gradient-to-r from-[#7AE582] to-[#52D681] bg-clip-text text-transparent"

                                >

                                    Experiences That Matter

                                </span>

                            </h2>

                            <p

                                className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300"

                            >

                                From custom websites and mobile applications to scalable cloud
                                solutions, we deliver innovative digital services that help
                                businesses grow, perform better and stay ahead of the competition.

                            </p>

                        </motion.div>

                        {/* Services Grid */}

                        <div

                            className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"

                        >

                            {/* Services Cards */}

                            {

                                services.map((service, index) => {

                                    const Icon = service.icon;

                                    return (

                                        <motion.div

                                            key={index}

                                            initial={{
                                                opacity: 0,
                                                y: 50,
                                            }}

                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}

                                            viewport={{
                                                once: true,
                                            }}

                                            transition={{
                                                delay: index * 0.1,
                                                duration: 0.7,
                                            }}

                                            whileHover={{
                                                y: -15,
                                            }}

                                            className="group relative h-[360px] overflow-hidden rounded-[28px] border border-white/10 bg-[#102E22]"

                                        >

                                            {/* Background Image */}

                                            <div

                                                className="absolute inset-0 overflow-hidden"

                                            >

                                                <Image

                                                    src={service.image}

                                                    alt={service.title}

                                                    fill

                                                    className="object-cover transition-all duration-700 group-hover:scale-110"

                                                />

                                                <div

                                                    className="absolute inset-0 bg-gradient-to-t from-[#081C15] via-[#081C15]/70 to-transparent transition-all duration-500 group-hover:from-[#081C15]/95"

                                                />

                                            </div>



                                            {/* Light Sweep */}

                                            <div

                                                className="absolute -left-full top-0 h-full w-24 -skew-x-12 bg-white/10 blur-xl transition-all duration-700 group-hover:left-[120%]"

                                            />



                                            {/* Content */}

                                            <div

                                                className="relative z-10 flex h-full flex-col justify-end p-8"

                                            >

                                                <motion.div

                                                    whileHover={{
                                                        rotate: 12,
                                                        scale: 1.15,
                                                    }}

                                                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#52D681]/15 backdrop-blur-xl"

                                                >

                                                    <Icon

                                                        size={32}

                                                        className="text-[#7AE582]"

                                                    />

                                                </motion.div>



                                                <motion.h3

                                                    whileHover={{
                                                        y: -3,
                                                    }}

                                                    className="text-2xl font-bold text-white"

                                                >

                                                    {service.title}

                                                </motion.h3>



                                                <p

                                                    className="mt-4 leading-7 text-gray-300"

                                                >

                                                    {service.description}

                                                </p>



                                                <motion.div

                                                    whileHover={{
                                                        x: 8,
                                                    }}

                                                    className="mt-8 flex items-center gap-2 font-semibold text-[#7AE582]"

                                                >

                                                    Learn More

                                                    <ArrowUpRight

                                                        size={20}

                                                    />

                                                </motion.div>

                                            </div>



                                            {/* Glow Border */}

                                            <div

                                                className="absolute inset-0 rounded-[28px] border border-transparent transition-all duration-500 group-hover:border-[#52D681]/40 group-hover:shadow-[0_0_45px_rgba(82,214,129,.25)]"

                                            />



                                            {/* Bottom Glow */}

                                            <div

                                                className="absolute -bottom-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#52D681]/0 blur-3xl transition-all duration-500 group-hover:bg-[#52D681]/20"

                                            />

                                        </motion.div>

                                    );

                                })

                            }

                        </div>
                    </div>
                    {/* ================= TECHNOLOGIES ================= */}

                    <div

                        className="mt-32"

                    >

                        <motion.div

                            initial={{
                                opacity: 0,
                                y: 40,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{
                                once: true,
                            }}

                            transition={{
                                duration: 0.7,
                            }}

                            className="mx-auto max-w-3xl text-center"

                        >

                            <span

                                className="inline-flex items-center rounded-full border border-[#52D681]/30 bg-[#52D681]/10 px-5 py-2 text-sm font-medium text-[#7AE582]"

                            >

                                TECHNOLOGIES

                            </span>

                            <h2

                                className="mt-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl"

                            >

                                Technologies

                                <span

                                    className="block bg-gradient-to-r from-[#7AE582] to-[#52D681] bg-clip-text text-transparent"

                                >

                                    We Work With

                                </span>

                            </h2>

                            <p

                                className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300"

                            >

                                We use modern frameworks, cloud platforms and development tools
                                to build secure, scalable and high-performance digital solutions.

                            </p>

                        </motion.div>



                        <div

                            className="mx-auto mt-20 max-w-7xl px-6"

                        >

                            <div

                                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"

                            >

                                {/* Technology Cards */}
                                {

                                    technologies.map((tech, index) => (

                                        <motion.div

                                            key={index}

                                            initial={{
                                                opacity: 0,
                                                y: 40,
                                            }}

                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}

                                            viewport={{
                                                once: true,
                                            }}

                                            transition={{
                                                delay: index * 0.08,
                                                duration: 0.7,
                                            }}

                                            whileHover={{
                                                y: -10,
                                                scale: 1.05,
                                            }}

                                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#52D681]/40 hover:shadow-[0_0_40px_rgba(82,214,129,.18)]"

                                        >

                                            {/* Background Glow */}

                                            <div

                                                className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100"

                                            >

                                                <div

                                                    className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#52D681]/20 blur-3xl"

                                                ></div>

                                            </div>



                                            {/* Logo */}

                                            <motion.div

                                                whileHover={{
                                                    rotate: 10,
                                                    scale: 1.15,
                                                }}

                                                transition={{
                                                    duration: 0.3,
                                                }}

                                                className="relative flex justify-center"

                                            >

                                                <Image

                                                    src={tech.logo}

                                                    alt={tech.name}

                                                    width={65}

                                                    height={65}

                                                    className="object-contain"

                                                />

                                            </motion.div>



                                            {/* Name */}

                                            <h3

                                                className="relative mt-6 text-center text-xl font-semibold text-white transition-all duration-300 group-hover:text-[#7AE582]"

                                            >

                                                {tech.name}

                                            </h3>



                                            {/* Small Line */}

                                            <div

                                                className="mx-auto mt-5 h-[2px] w-12 rounded-full bg-[#52D681] transition-all duration-500 group-hover:w-24"

                                            ></div>

                                        </motion.div>

                                    ))

                                }
                            </div>

                        </div>

                    </div>
                </section>

            </main >

        </>

    );

}