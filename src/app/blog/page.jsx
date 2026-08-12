"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlogs } from "@/lib/api/blogs";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/Components/Navbar";

import {
    ArrowRight,
    Calendar,
    User,
    Sparkles,
} from "lucide-react";


const categories = [
    "All",
    "Development",
    "Backend",
    "Design",
    "AI",
    "Business",
];


const blogs = [

    {
        id: 1,
        slug: "how-to-build-modern-websites-with-nextjs",
        title: "How to Build Modern Websites with Next.js",
        category: "Development",
        image: "/blog-1.jpg",
        date: "July 29, 2026",
        author: "Admin",
        description:
            "Learn how to create fast, scalable and modern websites using Next.js, React and Tailwind CSS.",
        content:
            "Next.js provides powerful features like server rendering, routing and optimization tools to build professional web applications.",
    },


    {
        id: 2,
        slug: "complete-guide-to-laravel-backend-development",
        title: "Complete Guide to Laravel Backend Development",
        category: "Backend",
        image: "/blog-2.jpg",
        date: "July 22, 2026",
        author: "Admin",
        description:
            "Explore Laravel features and learn how to build secure and scalable backend systems.",
        content:
            "Laravel is one of the most popular PHP frameworks because of its clean structure, powerful database tools and API support.",
    },


    {
        id: 3,
        slug: "creating-premium-ui-with-framer-motion",
        title: "Creating Premium UI With Framer Motion",
        category: "Design",
        image: "/blog-3.jpg",
        date: "July 18, 2026",
        author: "Admin",
        description:
            "Learn how animations can improve user experience and make websites more engaging.",
        content:
            "Framer Motion allows developers to create smooth animations, transitions and interactive user interfaces.",
    },


    {
        id: 4,
        slug: "future-of-artificial-intelligence-in-development",
        title: "Future of Artificial Intelligence in Development",
        category: "AI",
        image: "/blog-4.jpg",
        date: "July 14, 2026",
        author: "Admin",
        description:
            "Discover how artificial intelligence is changing the future of software development.",
        content:
            "AI is helping developers automate tasks, improve productivity and create smarter applications.",
    },


    {
        id: 5,
        slug: "building-modern-ecommerce-platforms",
        title: "Building Modern E-Commerce Platforms",
        category: "Business",
        image: "/blog-5.jpg",
        date: "July 10, 2026",
        author: "Admin",
        description:
            "A complete overview of creating powerful online shopping platforms.",
        content:
            "Modern e-commerce platforms require responsive design, secure payments and excellent user experience.",
    },


    {
        id: 6,
        slug: "react-vs-nextjs-which-one-to-use",
        title: "React vs Next.js: Which One Should You Use?",
        category: "Development",
        image: "/blog-6.jpg",
        date: "July 05, 2026",
        author: "Admin",
        description:
            "Understand the differences between React and Next.js and choose the right technology.",
        content:
            "React is a UI library while Next.js provides a complete framework with routing and optimization features.",
    },


    {
        id: 7,
        slug: "importance-of-responsive-web-design",
        title: "Importance of Responsive Web Design",
        category: "Design",
        image: "/blog-7.jpg",
        date: "June 28, 2026",
        author: "Admin",
        description:
            "Why responsive design is important for modern websites and better user experience.",
        content:
            "Responsive design ensures websites work perfectly across mobile, tablet and desktop devices.",
    },


    {
        id: 8,
        slug: "building-secure-web-applications",
        title: "Building Secure Web Applications",
        category: "Backend",
        image: "/blog-8.jpg",
        date: "June 20, 2026",
        author: "Admin",
        description:
            "Learn important security practices for developing reliable web applications.",
        content:
            "Security includes authentication, authorization, data protection and secure coding practices.",
    },


    {
        id: 9,
        slug: "how-cloud-computing-is-changing-business",
        title: "How Cloud Computing is Changing Business",
        category: "Business",
        image: "/blog-9.jpg",
        date: "June 15, 2026",
        author: "Admin",
        description:
            "Explore how cloud technology helps businesses grow faster and smarter.",
        content:
            "Cloud computing provides flexible infrastructure, better performance and reduced operational costs.",
    },


    {
        id: 10,
        slug: "top-web-development-trends-2026",
        title: "Top Web Development Trends 2026",
        category: "Development",
        image: "/blog-10.jpg",
        date: "June 10, 2026",
        author: "Admin",
        description:
            "Explore the latest trends shaping the future of web development.",
        content:
            "Modern web development is moving towards AI integration, better performance and immersive experiences.",
    },

];


export default function Blog() {

    const [blogs, setBlogs] = useState([]);

    const [active, setActive] = useState("All");

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const data = await getBlogs();

            const activeBlogs = data.filter((item) => item.status == 1);

            setBlogs(activeBlogs);
        } catch (error) {
            console.log(error);
        }
    };

    const filteredBlogs =
        active === "All"
            ?
            blogs
            :
            blogs.filter(
                blog => blog.category === active
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
                h-96
                w-96
                -translate-x-1/2
                rounded-full
                bg-[#52B788]/20
                blur-3xl
                "
                />



                <div className="
            relative
            mx-auto
            max-w-7xl
            px-6
            ">


                    {/* Hero */}

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
                            duration: .7
                        }}

                        className="text-center"

                    >

                        <div className="
                    flex
                    justify-center
                    gap-2
                    text-[#52B788]
                    "
                        >

                            <Sparkles size={20} />

                            Our Blog

                        </div>


                        <h1
                            className="
                    mt-5
                    text-4xl
                    font-bold
                    text-white
                    md:text-6xl
                    "
                        >

                            Latest

                            <span className="text-[#52B788]">
                                {" "}Insights
                            </span>

                        </h1>


                        <p className="
                    mx-auto
                    mt-5
                    max-w-2xl
                    text-slate-300
                    "
                        >

                            Explore tutorials, technology updates and
                            development guides.

                        </p>


                    </motion.div>



                    {/* Stats */}


                    <div className="
                mt-10
                grid
                gap-5
                md:grid-cols-3
                ">


                        {
                            [
                                [blogs.length, "Articles"],
                                [new Set(blogs.map((b) => b.category)).size, "Categories"],
                                ["1000+", "Readers"],

                            ].map((item, index) => (

                                <motion.div

                                    key={index}

                                    whileHover={{
                                        y: -8
                                    }}

                                    className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-5
                            text-center
                            backdrop-blur-xl
                            "

                                >

                                    <h3 className="
                                text-3xl
                                font-bold
                                text-[#52B788]
                                ">
                                        {item[0]}
                                    </h3>


                                    <p className="
                                text-slate-300
                                ">
                                        {item[1]}
                                    </p>

                                </motion.div>

                            ))
                        }


                    </div>




                    {/* Filters */}


                    <div className="
                mt-14
                flex
                flex-wrap
                justify-center
                gap-4
                ">


                        {
                            categories.map(category => (

                                <button

                                    key={category}

                                    onClick={() => setActive(category)}

                                    className={`
                        rounded-full
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        transition

                        ${active === category
                                            ?
                                            "bg-[#52B788] text-black"
                                            :
                                            "bg-white/10 text-white hover:bg-white/20"
                                        }

                        `}

                                >

                                    {category}

                                </button>

                            ))
                        }


                    </div>





                    {/* Cards */}


                    <motion.div

                        layout

                        className="
                mt-14
                grid
                gap-8
                md:grid-cols-2
                lg:grid-cols-3
                "

                    >


                        <AnimatePresence>


                            {
                                filteredBlogs.map((blog, index) => (


                                    <motion.article

                                        layout

                                        key={blog.id}

                                        initial={{
                                            opacity: 0,
                                            y: 40
                                        }}

                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}

                                        exit={{
                                            opacity: 0,
                                            scale: .8
                                        }}

                                        transition={{
                                            delay: index * .1
                                        }}


                                        whileHover={{
                                            y: -10
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

                                        <div className="
                    relative
                    overflow-hidden
                    ">

                                            <img

                                                src={
                                                    blog.image
                                                        ? `http://127.0.0.1:8000/storage/${blog.image}`
                                                        : "/default-blog.jpg"
                                                }
                                                alt={blog.title}
                                                className="
                        h-60
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-110
                        "

                                            />


                                            <div
                                                className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#081C15]
                        to-transparent
                        "
                                            />

                                        </div>



                                        <div className="p-6">


                                            <span className="
                    rounded-full
                    bg-[#52B788]/20
                    px-4
                    py-1
                    text-xs
                    text-[#95D5B2]
                    "
                                            >

                                                {blog.category}

                                            </span>



                                            <h2 className="
                    mt-5
                    text-xl
                    font-bold
                    text-white
                    "
                                            >

                                                {blog.title}

                                            </h2>



                                            <p className="
                    mt-3
                    text-sm
                    text-slate-300
                    "
                                            >

                                                {blog.description}

                                            </p>




                                            <div className="
                    mt-5
                    flex
                    gap-4
                    text-xs
                    text-slate-400
                    ">


                                                <span className="
                    flex
                    items-center
                    gap-1
                    ">
                                                    <User size={14} />
                                                    {blog.author}
                                                </span>


                                                <span className="
                    flex
                    items-center
                    gap-1
                    ">
                                                    <Calendar size={14} />
                                                    {new Date(blog.created_at).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}
                                                </span>


                                            </div>




                                            <Link
                                                href={`/blog/${blog.slug}`}
                                                className="mt-6 flex items-center gap-2 font-semibold text-[#52B788] hover:gap-4 transition-all"
                                            >
                                                Read Article
                                                <ArrowRight size={18} />
                                            </Link>



                                        </div>


                                    </motion.article>


                                ))
                            }


                        </AnimatePresence>


                    </motion.div>



                </div>


            </section>
        </main>
    );

}