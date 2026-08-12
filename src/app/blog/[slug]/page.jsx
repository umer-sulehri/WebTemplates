"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getBlogs } from "@/lib/api/blogs";

export default function SingleBlogPage() {
    const { slug } = useParams();

    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetchBlog();
    }, [slug]);

    const fetchBlog = async () => {
        try {
            const data = await getBlogs();

            const singleBlog = data.find(
                (item) => item.slug === slug
            );

            setBlog(singleBlog);
        } catch (error) {
            console.log(error);
        }
    };

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Loading...
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
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Back Button */}

                    <Link
                        href="/blog"
                        className="flex items-center gap-2 text-[#52B788]"
                    >
                        <ArrowLeft size={18} />
                        Back to Blogs
                    </Link>

                    {/* Image */}

                    <img
                        src={
                            blog.image
                                ? `http://127.0.0.1:8000/storage/${blog.image}`
                                : "/default-blog.jpg"
                        }
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

                    <p className="mt-8 text-[#52B788] font-semibold">
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
                        <span className="flex items-center gap-2">
                            <User size={16} />
                            {blog.author}
                        </span>

                        <span className="flex items-center gap-2">
                            <Calendar size={16} />
                            {new Date(blog.created_at).toLocaleDateString(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}
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