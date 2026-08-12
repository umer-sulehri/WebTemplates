"use client";
import { useEffect, useState } from "react";
import { getPortfolios } from "@/lib/api/portfolio";
import Navbar from "@/Components/Navbar";
import FAQ from "@/Components/FAQ";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
const categories = [
    "All",
    "Website",
    "App",
    "Dashboard",
    "E-Commerce",
    "Landing Page"
];

export default function Portfoliopage() {
    const [projects, setProjects] = useState([]);


    useEffect(() => {

        fetchProjects();

    }, []);


    const fetchProjects = async () => {

        try {

            const data = await getPortfolios();

            setProjects(data);

        }
        catch (error) {

            console.log(error);

        }

    };
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
                                                (
                                                    Array.isArray(project.technologies)
                                                        ? project.technologies
                                                        : typeof project.technologies === "string"
                                                            ? project.technologies.split(",")
                                                            : []
                                                ).map((tech) => (
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
                                                href={project.project_url}
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
                                                href={project.github_url}
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