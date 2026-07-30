"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";


const blogs = [

    {
        slug: "how-to-build-modern-websites-with-nextjs",
        title: "How to Build Modern Websites with Next.js",
        category: "Development",
        image: "/images/blog1.jpg",
        date: "July 29, 2026",
        author: "Admin",
        content:
            `
            Next.js is one of the most powerful React frameworks
            used to build fast and scalable modern websites.

            It provides features like routing, server rendering,
            optimization and better performance.
            
            Developers can create professional websites using
            Next.js, Tailwind CSS and modern animation libraries.
            `
    },


    {
        slug: "complete-guide-to-laravel-backend-development",
        title: "Complete Guide to Laravel Backend Development",
        category: "Backend",
        image: "/images/blog2.jpg",
        date: "July 22, 2026",
        author: "Admin",
        content:
            `
            Laravel is a powerful PHP framework used for building
            secure and scalable backend applications.

            It provides authentication, database management,
            APIs and many developer friendly features.
            `
    },

];


export default function SingleBlogPage({ params }) {


    const blog = blogs.find(
        (item) => item.slug === params.slug
    );


    if (!blog) {

        return (

            <div className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-[#081C15]
            ">

                <h1 className="
                text-3xl
                text-white
                ">
                    Blog Not Found
                </h1>

            </div>

        );

    }



    return (

        <main
            className="
        min-h-screen
        bg-gradient-to-b
        from-[#081C15]
        via-[#123524]
        to-[#081C15]
        py-28
        "
        >


            <article
                className="
            mx-auto
            max-w-5xl
            px-6
            "
            >


                <motion.div

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: .7
                    }}

                >



                    {/* Back Button */}

                    <Link

                        href="/blog"

                        className="
                flex
                items-center
                gap-2
                text-[#52B788]
                "
                    >

                        <ArrowLeft size={18} />

                        Back to Blogs

                    </Link>




                    {/* Image */}


                    <img

                        src={blog.image}

                        alt={blog.title}

                        className="
                mt-8
                h-[450px]
                w-full
                rounded-3xl
                object-cover
                "

                    />




                    {/* Category */}

                    <p
                        className="
                mt-8
                text-[#52B788]
                font-semibold
                "
                    >

                        {blog.category}

                    </p>




                    {/* Title */}

                    <h1
                        className="
                mt-4
                text-4xl
                font-bold
                text-white
                md:text-6xl
                "
                    >

                        {blog.title}

                    </h1>




                    {/* Meta */}


                    <div
                        className="
                mt-6
                flex
                gap-6
                text-slate-400
                "
                    >


                        <span className="
                    flex
                    items-center
                    gap-2
                    ">

                            <User size={16} />

                            {blog.author}

                        </span>



                        <span className="
                    flex
                    items-center
                    gap-2
                    ">

                            <Calendar size={16} />

                            {blog.date}

                        </span>


                    </div>





                    {/* Content */}


                    <div
                        className="
                mt-10
                whitespace-pre-line
                text-lg
                leading-relaxed
                text-slate-300
                "
                    >

                        {blog.content}

                    </div>



                </motion.div>


            </article>


        </main>

    );
};