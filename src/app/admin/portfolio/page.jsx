"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Plus,
    Trash2,
    Edit,
    Globe,
    Code2,
    Image as ImageIcon,
    FolderKanban,
} from "lucide-react";


const initialProjects = [
    {
        id: 1,
        title: "Modern Business Website",
        description:
            "A premium responsive business website built with Next.js.",
        category: "Web Development",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        live:
            "https://example.com",
        code:
            "https://github.com",
    },

    {
        id: 2,
        title: "Admin Dashboard",
        description:
            "Advanced analytics dashboard with modern UI.",
        category: "Dashboard",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        live:
            "https://example.com",
        code:
            "https://github.com",
    },
];


export default function Portfolio() {


    const [projects, setProjects] = useState(initialProjects);
    const [editingId, setEditingId] = useState(null);

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("All");


    const categories = [
        "All",
        "Web Development",
        "Dashboard",
        "Mobile App",
        "UI/UX",
    ];

    const [form, setForm] = useState({
        title: "",
        description: "",
        category: "",
        image: "",
        live: "",
        code: "",
    });


    const [preview, setPreview] = useState("");



    const handleImage = (e) => {

        const file = e.target.files[0];

        if (file) {

            const url = URL.createObjectURL(file);

            setPreview(url);

            setForm({
                ...form,
                image: url
            });

        }

    };



    const handleSubmit = (e) => {

        e.preventDefault();


        if (!form.title) return;



        if (editingId) {


            setProjects(
                projects.map((project) => (
                    project.id === editingId
                        ?
                        {
                            ...project,
                            ...form
                        }
                        :
                        project
                ))
            );


            setEditingId(null);


        }
        else {


            const newProject = {

                id: Date.now(),
                ...form,

            };


            setProjects([
                newProject,
                ...projects
            ]);


        }



        setForm({

            title: "",
            description: "",
            category: "",
            image: "",
            live: "",
            code: "",

        });


        setPreview("");

    };
    const editProject = (project) => {


        setForm({

            title: project.title,
            description: project.description,
            category: project.category,
            image: project.image,
            live: project.live,
            code: project.code,

        });


        setPreview(project.image);

        setEditingId(project.id);


        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });


    };
    const filteredProjects = projects.filter((project) => {


        const matchSearch =
            project.title
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
            ||
            project.category
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                );


        const matchCategory =
            filter === "All"
            ||
            project.category === filter;



        return matchSearch && matchCategory;


    });



    return (

        <div className="space-y-8">


            {/* Header */}


            <div className="
            flex
            flex-col
            md:flex-row
            justify-between
            gap-5
            ">

                <div>

                    <h1 className="
                    text-3xl
                    font-bold
                    text-white
                    ">
                        Portfolio Management
                    </h1>


                    <p className="
                    text-gray-400
                    mt-2
                    ">
                        Manage company projects and showcase work.
                    </p>

                </div>



                <div className="
                flex
                items-center
                gap-3
                bg-gradient-to-r
                from-blue-500
                to-purple-500
                px-5
                py-3
                rounded-xl
                text-white
                ">
                    <FolderKanban size={22} />
                    {projects.length} Projects
                </div>


            </div>





            {/* Stats */}


            <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            ">


                {
                    [
                        {
                            title: "Total Projects",
                            value: projects.length
                        },
                        {
                            title: "Active Projects",
                            value: "42"
                        },
                        {
                            title: "Categories",
                            value: "4"
                        }

                    ].map((item, index) => (


                        <motion.div

                            key={index}

                            whileHover={{
                                y: -5
                            }}

                            className="
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/10
                        rounded-2xl
                        p-6
                        "

                        >

                            <p className="text-gray-400">
                                {item.title}
                            </p>


                            <h2 className="
                            text-3xl
                            font-bold
                            text-white
                            mt-2
                            ">
                                {item.value}
                            </h2>


                        </motion.div>


                    ))
                }


            </div>
            {/* Search & Filter */}


            <motion.div

                initial={{
                    opacity: 0,
                    y: 20
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

                className="
    bg-white/10
    backdrop-blur-xl
    border
    border-white/10
    rounded-2xl
    p-6
    "

            >


                <div className="
    flex
    flex-col
    md:flex-row
    gap-5
    items-center
    ">


                    {/* Search Input */}


                    <div className="
        relative
        flex-1
        w-full
        ">


                        <input

                            type="text"

                            placeholder="Search projects..."

                            value={search}

                            onChange={(e) =>
                                setSearch(e.target.value)
                            }

                            className="
                w-full
                bg-black/20
                border
                border-white/20
                rounded-xl
                px-5
                py-4
                text-white
                placeholder-gray-400
                outline-none
                focus:border-purple-500
                "

                        />


                        <Code2

                            className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-gray-400
                "

                            size={22}

                        />


                    </div>



                    {/* Category Filter */}


                    <select

                        value={filter}

                        onChange={(e) =>
                            setFilter(e.target.value)
                        }

                        className="
            w-full
            md:w-64
            bg-black/20
            border
            border-white/20
            rounded-xl
            px-5
            py-4
            text-white
            outline-none
            "

                    >


                        {
                            categories.map((cat) => (

                                <option

                                    key={cat}

                                    value={cat}

                                    className="
                        bg-slate-900
                        "

                                >

                                    {cat}

                                </option>

                            ))
                        }


                    </select>


                </div>


            </motion.div>


            {/* Add New Project */}

            <motion.div

                initial={{
                    opacity: 0,
                    y: 40
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

                className="
relative
overflow-hidden
rounded-3xl
p-8
bg-gradient-to-br
from-white/10
to-white/5
backdrop-blur-2xl
border
border-white/20
shadow-xl
"

            >


                {/* Glow */}

                <div className="
absolute
-top-20
-right-20
w-60
h-60
rounded-full
bg-purple-500/30
blur-3xl
"/>



                <div className="relative z-10">


                    <div className="
flex
items-center
justify-between
mb-8
">


                        <div>
                            <h2 className="
text-2xl
font-bold
text-white
">

                                {
                                    editingId
                                        ?
                                        "Edit Project ✏️"
                                        :
                                        "Add New Project 🚀"
                                }

                            </h2>
                            <p className="
text-gray-400
mt-1
">

                                Create a new portfolio project

                            </p>

                        </div>


                        <div className="
p-4
rounded-2xl
bg-gradient-to-r
from-blue-500
to-purple-500
">

                            <Plus
                                className="text-white"
                            />

                        </div>


                    </div>




                    <form
                        onSubmit={handleSubmit}
                        className="
grid
grid-cols-1
md:grid-cols-2
gap-5
"
                    >


                        <input

                            type="text"

                            placeholder="Project Title"

                            value={form.title}

                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    title: e.target.value
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
placeholder-gray-400
outline-none
focus:border-purple-500
"

                        />



                        <select

                            value={form.category}

                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    category: e.target.value
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
focus:border-purple-500
"

                        >

                            <option
                                value=""
                                className="bg-slate-900"
                            >
                                Select Category
                            </option>


                            {
                                categories
                                    .filter((cat) => cat !== "All")
                                    .map((cat) => (

                                        <option

                                            key={cat}

                                            value={cat}

                                            className="bg-slate-900"

                                        >

                                            {cat}

                                        </option>

                                    ))
                            }


                        </select>




                        <textarea

                            placeholder="Project Description"

                            value={form.description}

                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    description: e.target.value
                                })
                            }

                            className="
md:col-span-2
h-36
rounded-xl
bg-black/20
border
border-white/20
px-5
py-4
text-white
placeholder-gray-400
outline-none
focus:border-purple-500
"

                        />



                        <input

                            type="url"

                            placeholder="Live Website URL"

                            value={form.live}

                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    live: e.target.value
                                })
                            }

                            className="
rounded-xl
bg-black/20
border
border-white/20
px-5
py-4
text-white
placeholder-gray-400
"

                        />



                        <input

                            type="url"

                            placeholder="Github / Source Code URL"

                            value={form.code}

                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    code: e.target.value
                                })
                            }

                            className="
rounded-xl
bg-black/20
border
border-white/20
px-5
py-4
text-white
placeholder-gray-400
"

                        />




                        <div className="
md:col-span-2
">

                            <label className="
block
text-gray-300
mb-3
">

                                Project Image

                            </label>


                            <input

                                type="file"

                                onChange={handleImage}

                                className="
text-gray-300
"

                            />
                            {
                                preview && (

                                    <div className="
mt-5
">

                                        <p className="
text-gray-400
mb-3
">

                                            Preview

                                        </p>


                                        <img

                                            src={preview}

                                            alt="preview"

                                            className="
w-full
h-48
object-cover
rounded-2xl
border
border-white/20
"

                                        />


                                    </div>

                                )
                            }

                        </div>


                        <div className="
md:col-span-2
flex
items-center
gap-4
mt-4
">
                            <button

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
                                        ?
                                        "Update Project"
                                        :
                                        "Save Project"
                                }

                            </button>
                            <button

                                type="button"

                                onClick={() => {

                                    setEditingId(null);

                                    setForm({
                                        title: "",
                                        description: "",
                                        category: "",
                                        image: "",
                                        live: "",
                                        code: "",
                                    });

                                    setPreview("");

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
                                Cancel Edit

                            </button>
                        </div>


                    </form>


                </div>


            </motion.div>
            {
                filteredProjects.length === 0 && (

                    <div className="
text-center
py-20
text-gray-400
">

                        <h3 className="
text-2xl
text-white
font-bold
">

                            No Projects Found

                        </h3>


                        <p className="mt-2">

                            Try changing search or category filter.

                        </p>


                    </div>

                )
            }

            {/* Portfolio Cards */}


            <div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-6
">


                {
                    filteredProjects.map((project) => (


                        <motion.div

                            key={project.id}

                            initial={{
                                opacity: 0,
                                y: 30
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            whileHover={{
                                y: -8
                            }}

                            className="
bg-white/10
backdrop-blur-xl
border
border-white/10
rounded-3xl
overflow-hidden
shadow-xl
"

                        >


                            {/* Image */}


                            <div className="
h-52
overflow-hidden
bg-black/20
">


                                {
                                    project.image ? (

                                        <img

                                            src={project.image}

                                            alt={project.title}

                                            className="
w-full
h-full
object-cover
hover:scale-110
transition
duration-500
"

                                        />

                                    )

                                        :

                                        (

                                            <div className="
h-full
flex
items-center
justify-center
text-gray-400
">

                                                <ImageIcon size={45} />

                                            </div>

                                        )

                                }


                            </div>




                            {/* Content */}


                            <div className="p-6">


                                <div className="
flex
justify-between
items-start
gap-3
">


                                    <div>

                                        <h3 className="
text-xl
font-bold
text-white
">

                                            {project.title}

                                        </h3>


                                        <p className="
text-sm
text-purple-400
mt-1
">

                                            {project.category}

                                        </p>


                                    </div>


                                    <Globe

                                        size={22}

                                        className="
text-blue-400
"

                                    />


                                </div>




                                <p className="
text-gray-400
mt-4
line-clamp-3
">

                                    {project.description}

                                </p>





                                {/* Buttons */}


                                <div className="
flex
items-center
gap-3
mt-6
">


                                    <a
                                        href={project.live}
                                        target="_blank"
                                        className="
flex-1
flex
items-center
justify-center
gap-2
py-3
rounded-xl
bg-gradient-to-r
from-blue-500/20
to-cyan-500/20
border
border-blue-400/20
text-blue-300
font-medium
hover:scale-105
transition
"
                                    >

                                        <Globe size={18} />

                                        View

                                    </a>



                                    <button

                                        onClick={() => editProject(project)}

                                        className="
w-12
h-12
flex
items-center
justify-center
rounded-xl
bg-yellow-500/20
border
border-yellow-400/20
text-yellow-400
hover:scale-110
transition
"

                                    >

                                        <Edit size={18} />

                                    </button>



                                    <button

                                        onClick={() => deleteProject(project.id)}

                                        className="
w-12
h-12
flex
items-center
justify-center
rounded-xl
bg-red-500/20
border
border-red-400/20
text-red-400
hover:scale-110
transition
"

                                    >

                                        <Trash2 size={18} />

                                    </button>


                                </div>
                            </div>


                        </motion.div>


                    ))

                }


            </div>
        </div>

    );
}