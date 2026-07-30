"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Plus,
    Edit,
    Trash2,
    Search,
    BookOpen,
    Calendar,
    User,
    Clock3,
    Star,
    Newspaper,
} from "lucide-react";

const categories = [
    "All",
    "Web Development",
    "UI / UX",
    "React",
    "Next.js",
    "Laravel",
    "Mobile App",
    "AI",
    "SEO",
];

const initialBlogs = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        category: "Next.js",
        title: "Why Next.js Is Perfect For Modern Websites",
        description:
            "Learn why Next.js has become the first choice for building modern, scalable and SEO friendly websites.",
        content: "Full blog content...",
        author: "Admin",
        readTime: "5 min",
        date: "30 Jul 2026",
        featured: true,
        status: "Published",
    },

    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        category: "React",
        title: "React Best Practices Every Developer Should Know",
        description:
            "Simple and effective React techniques to write cleaner and faster applications.",
        content: "Full blog content...",
        author: "Admin",
        readTime: "7 min",
        date: "28 Jul 2026",
        featured: false,
        status: "Published",
    },
];

export default function Blogs() {

    const [blogs, setBlogs] = useState(initialBlogs);

    const [editingId, setEditingId] = useState(null);

    const [search, setSearch] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("All");

    const [statusFilter, setStatusFilter] = useState("All");

    const [imagePreview, setImagePreview] = useState("");

    const [form, setForm] = useState({
        image: "",
        category: "Web Development",
        title: "",
        description: "",
        content: "",
        author: "Admin",
        readTime: "5 min",
        featured: false,
        status: "Published",
    });

    // Upload Image
    const handleImage = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const url = URL.createObjectURL(file);

        setImagePreview(url);

        setForm({
            ...form,
            image: url,
        });
    };

    // Save / Update Blog
    const handleSubmit = (e) => {

        e.preventDefault();

        if (!form.title) return;

        if (editingId) {

            setBlogs(
                blogs.map((item) =>
                    item.id === editingId
                        ? {
                            ...item,
                            ...form,
                        }
                        : item
                )
            );

            setEditingId(null);

        } else {

            setBlogs([
                {
                    id: Date.now(),
                    ...form,
                    date: new Date().toLocaleDateString(),
                },
                ...blogs,
            ]);
        }

        setForm({
            image: "",
            category: "Web Development",
            title: "",
            description: "",
            content: "",
            author: "Admin",
            readTime: "5 min",
            featured: false,
            status: "Published",
        });

        setImagePreview("");
    };

    // Edit
    const editBlog = (blog) => {

        setEditingId(blog.id);

        setForm(blog);

        setImagePreview(blog.image);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Delete
    const deleteBlog = (id) => {

        setBlogs(
            blogs.filter((item) => item.id !== id)
        );
    };

    // Search + Filter
    const filteredBlogs = blogs.filter((item) => {

        const matchSearch =
            item.title
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            item.category
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchCategory =
            selectedCategory === "All" ||
            item.category === selectedCategory;

        const matchStatus =
            statusFilter === "All" ||
            item.status === statusFilter;

        return (
            matchSearch &&
            matchCategory &&
            matchStatus
        );
    });

    // Statistics
    const totalBlogs = blogs.length;

    const publishedBlogs =
        blogs.filter(
            (item) => item.status === "Published"
        ).length;

    const featuredBlogs =
        blogs.filter(
            (item) => item.featured
        ).length;

    const totalCategories =
        categories.length - 1;
    return (

        <div className="space-y-8">

            {/* Header */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>

                    <h1 className="text-4xl font-bold text-white">
                        Blogs Management
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Manage all blogs, categories and published articles.
                    </p>

                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 text-white">

                    <Newspaper size={24} />

                    <div>

                        <h3 className="font-semibold">
                            {totalBlogs} Blogs
                        </h3>

                        <p className="text-sm text-white/80">
                            {totalCategories} Categories
                        </p>

                    </div>

                </div>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                {
                    [
                        {
                            title: "Total Blogs",
                            value: totalBlogs,
                            icon: Newspaper,
                            color: "from-blue-500 to-cyan-500",
                        },

                        {
                            title: "Published",
                            value: publishedBlogs,
                            icon: BookOpen,
                            color: "from-green-500 to-emerald-500",
                        },

                        {
                            title: "Featured",
                            value: featuredBlogs,
                            icon: Star,
                            color: "from-yellow-500 to-orange-500",
                        },

                        {
                            title: "Categories",
                            value: totalCategories,
                            icon: Search,
                            color: "from-purple-500 to-pink-500",
                        },

                    ].map((card, index) => {

                        const Icon = card.icon;

                        return (

                            <motion.div

                                key={index}

                                whileHover={{
                                    y: -6,
                                }}

                                className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6"

                            >

                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center`}>

                                    <Icon className="text-white" size={26} />

                                </div>

                                <h3 className="text-gray-400 mt-5">
                                    {card.title}
                                </h3>

                                <h2 className="text-4xl font-bold text-white mt-2">
                                    {card.value}
                                </h2>

                            </motion.div>

                        );

                    })

                }

            </div>

            {/* Search & Filters */}

            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                    {/* Search */}

                    <div className="relative">

                        <Search
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input

                            type="text"

                            placeholder="Search blog..."

                            value={search}

                            onChange={(e) =>
                                setSearch(e.target.value)
                            }

                            className="w-full rounded-xl bg-black/20 border border-white/20 py-4 pl-12 pr-4 text-white outline-none focus:border-blue-500"

                        />

                    </div>

                    {/* Category */}

                    <select

                        value={selectedCategory}

                        onChange={(e) =>
                            setSelectedCategory(e.target.value)
                        }

                        className="rounded-xl bg-black/20 border border-white/20 px-5 py-4 text-white outline-none"

                    >

                        {

                            categories.map((category) => (

                                <option
                                    key={category}
                                    value={category}
                                    className="bg-slate-900"
                                >

                                    {category}

                                </option>

                            ))

                        }

                    </select>

                    {/* Status */}

                    <select

                        value={statusFilter}

                        onChange={(e) =>
                            setStatusFilter(e.target.value)
                        }

                        className="rounded-xl bg-black/20 border border-white/20 px-5 py-4 text-white outline-none"

                    >

                        <option value="All" className="bg-slate-900">
                            All Status
                        </option>

                        <option value="Published" className="bg-slate-900">
                            Published
                        </option>

                        <option value="Draft" className="bg-slate-900">
                            Draft
                        </option>

                    </select>

                </div>

            </div>
            {/* Add / Edit Blog Form */}

            <motion.div

                initial={{
                    opacity: 0,
                    y: 40,
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                }}

                className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-8
"

            >

                <h2 className="
text-2xl
font-bold
text-white
mb-8
">

                    {
                        editingId
                            ? "Edit Blog ✏️"
                            : "Add New Blog 🚀"
                    }

                </h2>

                <form

                    onSubmit={handleSubmit}

                    className="
grid
grid-cols-1
md:grid-cols-2
gap-6
"

                >

                    {/* Blog Image */}

                    <div>

                        <label className="
block
text-gray-300
mb-3
">

                            Featured Image

                        </label>

                        <input

                            type="file"

                            onChange={handleImage}

                            className="
text-gray-300
"

                        />

                        {

                            imagePreview && (

                                <img

                                    src={imagePreview}

                                    alt="Preview"

                                    className="
mt-5
w-full
h-56
rounded-2xl
object-cover
border
border-white/20
"

                                />

                            )

                        }

                    </div>

                    {/* Category */}

                    <div>

                        <label className="
block
text-gray-300
mb-3
">

                            Category

                        </label>

                        <select

                            value={form.category}

                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    category: e.target.value,
                                })
                            }

                            className="
w-full
rounded-xl
bg-black/20
border
border-white/20
px-5
py-4
text-white
outline-none
"

                        >

                            {

                                categories
                                    .filter(
                                        (item) => item !== "All"
                                    )
                                    .map((category) => (

                                        <option

                                            key={category}

                                            value={category}

                                            className="bg-slate-900"

                                        >

                                            {category}

                                        </option>

                                    ))

                            }

                        </select>

                    </div>

                    {/* Blog Title */}

                    <div className="md:col-span-2">

                        <label className="
block
text-gray-300
mb-3
">

                            Blog Title

                        </label>

                        <input

                            type="text"

                            placeholder="Enter Blog Title"

                            value={form.title}

                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    title: e.target.value,
                                })
                            }

                            className="
w-full
rounded-xl
bg-black/20
border
border-white/20
px-5
py-4
text-white
outline-none
focus:border-blue-500
"

                        />

                    </div>

                    {/* Short Description */}

                    <div className="md:col-span-2">

                        <label className="
block
text-gray-300
mb-3
">

                            Short Description

                        </label>

                        <textarea

                            rows={4}

                            placeholder="Write short description..."

                            value={form.description}

                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    description: e.target.value,
                                })
                            }

                            className="
w-full
rounded-xl
bg-black/20
border
border-white/20
px-5
py-4
text-white
outline-none
resize-none
focus:border-blue-500
"

                        />

                    </div>
                    {/* Full Blog Content */}

                    <div className="md:col-span-2">

                        <label className="block text-gray-300 mb-3">
                            Full Blog Content
                        </label>

                        <textarea

                            rows={8}

                            placeholder="Write full blog content..."

                            value={form.content}

                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    content: e.target.value,
                                })
                            }

                            className="
w-full
rounded-xl
bg-black/20
border
border-white/20
px-5
py-4
text-white
outline-none
resize-none
focus:border-blue-500
"

                        />

                    </div>

                    {/* Read Time */}

                    <div>

                        <label className="block text-gray-300 mb-3">
                            Read Time
                        </label>

                        <input

                            type="text"

                            placeholder="5 min"

                            value={form.readTime}

                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    readTime: e.target.value,
                                })
                            }

                            className="
w-full
rounded-xl
bg-black/20
border
border-white/20
px-5
py-4
text-white
outline-none
"

                        />

                    </div>

                    {/* Author */}

                    <div>

                        <label className="block text-gray-300 mb-3">
                            Author
                        </label>

                        <input

                            type="text"

                            value={form.author}

                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    author: e.target.value,
                                })
                            }

                            className="
w-full
rounded-xl
bg-black/20
border
border-white/20
px-5
py-4
text-white
outline-none
"

                        />

                    </div>

                    {/* Status */}

                    <div>

                        <label className="block text-gray-300 mb-3">
                            Status
                        </label>

                        <select

                            value={form.status}

                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    status: e.target.value,
                                })
                            }

                            className="
w-full
rounded-xl
bg-black/20
border
border-white/20
px-5
py-4
text-white
outline-none
"

                        >

                            <option
                                value="Published"
                                className="bg-slate-900"
                            >
                                Published
                            </option>

                            <option
                                value="Draft"
                                className="bg-slate-900"
                            >
                                Draft
                            </option>

                        </select>

                    </div>

                    {/* Featured */}

                    <div className="flex items-center gap-3 mt-10">

                        <input

                            type="checkbox"

                            checked={form.featured}

                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    featured: e.target.checked,
                                })
                            }

                        />

                        <label className="text-gray-300">
                            Featured Blog ⭐
                        </label>

                    </div>

                    {/* Buttons */}

                    <div className="md:col-span-2 flex gap-4 mt-4">

                        <button

                            type="submit"

                            className="
flex-1
py-4
rounded-xl
font-semibold
text-white
bg-gradient-to-r
from-blue-500
to-purple-600
hover:scale-[1.02]
transition
"

                        >

                            {
                                editingId
                                    ? "Update Blog"
                                    : "Save Blog"
                            }

                        </button>

                        <button

                            type="button"

                            onClick={() => {

                                setEditingId(null);

                                setImagePreview("");

                                setForm({
                                    image: "",
                                    category: "Web Development",
                                    title: "",
                                    description: "",
                                    content: "",
                                    author: "Admin",
                                    readTime: "5 min",
                                    featured: false,
                                    status: "Published",
                                });

                            }}

                            className="
flex-1
py-4
rounded-xl
font-semibold
text-white
bg-white/10
border
border-white/20
hover:bg-white/20
transition
"

                        >

                            Cancel

                        </button>

                    </div>

                </form>

            </motion.div>
            {/* Blogs Grid */}

            <div
                className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-7
"
            >

                {

                    filteredBlogs.map((item) => (

                        <motion.div

                            key={item.id}

                            initial={{
                                opacity: 0,
                                y: 30,
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                            }}

                            whileHover={{
                                y: -8,
                            }}

                            className="
relative
overflow-hidden
rounded-3xl
border
border-white/20
bg-white/10
backdrop-blur-xl
"

                        >

                            {/* Blog Image */}

                            <div className="relative overflow-hidden">

                                <img

                                    src={item.image}

                                    alt={item.title}

                                    className="
w-full
h-60
object-cover
transition
duration-700
group-hover:scale-110
"

                                />

                                {/* Category */}

                                <div
                                    className="
absolute
top-5
left-5
px-4
py-2
rounded-full
bg-blue-600
text-white
text-sm
font-medium
"
                                >

                                    {item.category}

                                </div>

                                {/* Read Time */}

                                <div
                                    className="
absolute
bottom-5
left-5
flex
items-center
gap-2
rounded-full
bg-black/70
px-4
py-2
text-sm
text-white
"
                                >

                                    <Clock3 size={15} />

                                    {item.readTime}

                                </div>

                                {

                                    item.featured && (

                                        <div
                                            className="
absolute
top-5
right-5
rounded-full
bg-yellow-500
px-4
py-2
text-sm
font-semibold
text-white
"
                                        >

                                            ⭐ Featured

                                        </div>

                                    )

                                }

                            </div>

                            {/* Content */}

                            <div className="p-6">
                                {/* Title */}

                                <h3 className="text-2xl font-bold text-white line-clamp-2">
                                    {item.title}
                                </h3>

                                {/* Description */}

                                <p className="mt-4 text-gray-400 line-clamp-3">
                                    {item.description}
                                </p>

                                {/* Author & Date */}

                                <div className="mt-6 flex items-center justify-between text-sm text-gray-400">

                                    <div className="flex items-center gap-2">
                                        <User size={16} />
                                        <span>{item.author}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>{item.date}</span>
                                    </div>

                                </div>

                                {/* Buttons */}

                                <div className="mt-6 flex items-center justify-between">

                                    <button
                                        className="
        px-5
        py-2
        rounded-xl
        bg-gradient-to-r
        from-blue-500
        to-purple-600
        text-white
        font-medium
    "
                                    >
                                        Read More
                                    </button>

                                    <div className="flex gap-3">

                                        <button
                                            onClick={() => editBlog(item)}
                                            className="
            w-10
            h-10
            rounded-xl
            bg-yellow-500/20
            text-yellow-400
            flex
            items-center
            justify-center
            hover:scale-110
            transition
        "
                                        >
                                            <Edit size={18} />
                                        </button>

                                        <button
                                            onClick={() => deleteBlog(item.id)}
                                            className="
            w-10
            h-10
            rounded-xl
            bg-red-500/20
            text-red-400
            flex
            items-center
            justify-center
            hover:scale-110
            transition
        "
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </div>
        </div>
    );
}
