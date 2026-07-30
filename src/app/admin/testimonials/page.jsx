"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Plus,
    Edit,
    Trash2,
    Star,
    MessageSquare
} from "lucide-react";


const initialTestimonials = [

    {
        id: 1,

        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330",

        name:
            "Sarah Ahmed",

        role:
            "CEO, Tech Solutions",

        rating:
            5,

        message:
            "Amazing service and professional team. They delivered exactly what we needed.",
        featured: true

    },


    {
        id: 2,

        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

        name:
            "John Smith",

        role:
            "Founder, Startup Hub",

        rating:
            5,

        message:
            "Great experience working with this team. Highly recommended.",
        featured: true
    }

];



export default function Testimonials() {


    const [testimonials, setTestimonials] =
        useState(initialTestimonials);



    const [editingId, setEditingId] =
        useState(null);



    const [form, setForm] =
        useState({

            image: "",
            name: "",
            role: "",
            rating: 5,
            message: "",
            featured: false

        });



    const [imagePreview, setImagePreview] =
        useState("");
    // Image Upload
    const [search, setSearch] = useState("");

    const [filterRating, setFilterRating] = useState("All");
    const filteredTestimonials = testimonials.filter((item) => {


        const matchSearch =
            item.name
                .toLowerCase()
                .includes(search.toLowerCase())
            ||
            item.role
                .toLowerCase()
                .includes(search.toLowerCase());


        const matchRating =
            filterRating === "All"
            ||
            item.rating === Number(filterRating);


        return matchSearch && matchRating;

    });
    const averageRating =
        testimonials.length > 0
            ?
            (
                testimonials.reduce(
                    (total, item) => total + item.rating,
                    0
                ) / testimonials.length
            ).toFixed(1)
            :
            0;


    const featuredCount =
        testimonials.filter(
            (item) => item.featured
        ).length;


    {/* Search & Filter */ }

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
    border-white/20
    rounded-3xl
    p-6
    "

    >


        <div className="
    flex
    flex-col
    md:flex-row
    gap-5
    ">


            {/* Search */}

            <input

                type="text"

                placeholder="Search client name or role..."

                value={search}

                onChange={(e) =>
                    setSearch(e.target.value)
                }

                className="
            flex-1
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



            {/* Rating Filter */}

            <select

                value={filterRating}

                onChange={(e) =>
                    setFilterRating(e.target.value)
                }

                className="
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

                <option
                    value="All"
                    className="bg-slate-900"
                >
                    All Ratings
                </option>


                <option
                    value="5"
                    className="bg-slate-900"
                >
                    5 Stars ⭐⭐⭐⭐⭐
                </option>


                <option
                    value="4"
                    className="bg-slate-900"
                >
                    4 Stars ⭐⭐⭐⭐
                </option>


                <option
                    value="3"
                    className="bg-slate-900"
                >
                    3 Stars ⭐⭐⭐
                </option>


            </select>


        </div>


    </motion.div>



    // Add / Update Testimonial

    const handleSubmit = (e) => {

        e.preventDefault();


        if (!form.name) return;



        if (editingId) {


            setTestimonials(

                testimonials.map((item) =>

                    item.id === editingId

                        ?

                        {
                            ...item,
                            ...form
                        }

                        :

                        item

                )

            );


            setEditingId(null);


        }

        else {


            const newTestimonial = {

                id: Date.now(),

                ...form

            };


            setTestimonials([

                newTestimonial,

                ...testimonials

            ]);


        }



        setForm({

            image: "",
            name: "",
            role: "",
            rating: 5,
            message: ""

        });


        setImagePreview("");

    };






    // Edit Testimonial

    const editTestimonial = (item) => {


        setForm({

            image: item.image,

            name: item.name,

            role: item.role,

            rating: item.rating,

            message: item.message

        });


        setImagePreview(item.image);


        setEditingId(item.id);


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


    };






    // Delete Testimonial

    const deleteTestimonial = (id) => {


        setTestimonials(

            testimonials.filter(

                item => item.id !== id

            )

        );


    };

    const handleImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            const url = URL.createObjectURL(file);

            setImagePreview(url);

            setForm({
                ...form,
                image: url,
            });
        }
    };

    return (

        <div className="space-y-8">


            {/* Header */}

            <div className="
flex
items-center
justify-between
">


                <div>

                    <h1 className="
        text-3xl
        font-bold
        text-white
        ">
                        Testimonials Management
                    </h1>


                    <p className="
        text-gray-400
        mt-2
        ">
                        Manage client reviews and feedback.
                    </p>

                </div>



                <div className="
    flex
    items-center
    gap-3
    px-5
    py-3
    rounded-xl
    text-white
    bg-gradient-to-r
    from-blue-500
    to-purple-600
    ">

                    <MessageSquare size={22} />

                    {testimonials.length} Reviews

                </div>


            </div>





            {/* Stats Cards */}


            <div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
">


                {

                    [
                        {
                            title: "Total Testimonials",
                            value: testimonials.length
                        },


                        {
                            title: "Average Rating",
                            value: `${averageRating} ⭐`
                        },


                        {
                            title: "Featured Reviews",
                            value: featuredCount
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


                            <p className="
text-gray-400
">

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
            {/* Add Testimonial Form */}


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
mb-6
">

                    {
                        editingId
                            ?
                            "Edit Testimonial ✏️"
                            :
                            "Add New Testimonial 🚀"
                    }

                </h2>



                <form

                    onSubmit={handleSubmit}

                    className="
grid
grid-cols-1
md:grid-cols-2
gap-5
"

                >



                    {/* Client Image */}


                    <div>


                        <label className="
block
text-gray-300
mb-3
">

                            Client Image

                        </label>


                        <input

                            type="file"

                            onChange={handleImage}

                            className="
text-gray-300
"

                        />



                        {
                            imagePreview &&

                            <img

                                src={imagePreview}

                                className="
mt-4
w-32
h-32
rounded-2xl
object-cover
border
border-white/20
"

                            />

                        }


                    </div>





                    {/* Name */}


                    <input

                        type="text"

                        placeholder="Client Name"

                        value={form.name}

                        onChange={(e) =>

                            setForm({

                                ...form,

                                name: e.target.value

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
outline-none
focus:border-purple-500
"

                    />







                    {/* Role */}


                    <input

                        type="text"

                        placeholder="Position / Company"

                        value={form.role}

                        onChange={(e) =>

                            setForm({

                                ...form,

                                role: e.target.value

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
outline-none
focus:border-purple-500
"

                    />








                    {/* Rating */}


                    <select

                        value={form.rating}

                        onChange={(e) =>

                            setForm({

                                ...form,

                                rating: Number(e.target.value)

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
outline-none
"

                    >


                        <option value="5">
                            5 Stars ⭐⭐⭐⭐⭐
                        </option>

                        <option value="4">
                            4 Stars ⭐⭐⭐⭐
                        </option>

                        <option value="3">
                            3 Stars ⭐⭐⭐
                        </option>


                    </select>








                    {/* Message */}


                    <textarea

                        placeholder="Client Review"

                        value={form.message}

                        onChange={(e) =>

                            setForm({

                                ...form,

                                message: e.target.value

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
outline-none
focus:border-purple-500
"

                    />




                    <div className="
md:col-span-2
flex
items-center
gap-3
">


                        <input

                            type="checkbox"

                            checked={form.featured}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    featured: e.target.checked

                                })

                            }

                        />


                        <label className="
text-gray-300
">

                            Featured Testimonial ⭐

                        </label>


                    </div>


                    {/* Buttons */}


                    <div className="
md:col-span-2
flex
gap-4
">


                        <button

                            className="
flex-1
py-4
rounded-xl
text-white
font-semibold
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
                                    "Update Testimonial"
                                    :
                                    "Save Testimonial"
                            }

                        </button>




                        <button

                            type="button"

                            onClick={() => {

                                setEditingId(null);

                                setForm({

                                    image: "",
                                    name: "",
                                    role: "",
                                    rating: 5,
                                    message: ""

                                });

                                setImagePreview("");

                            }}

                            className="
flex-1
py-4
rounded-xl
text-white
font-semibold
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



            {/* Testimonials Cards */}


            {/* Testimonials Cards */}

            <div
                className="
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-6
"
            >
                {filteredTestimonials.map((item) => (

                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -8 }}
                        className="
            relative
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            p-6
            overflow-hidden
            "
                    >

                        {/* Featured Badge */}

                        {item.featured && (
                            <div
                                className="
                    absolute
                    top-5
                    left-5
                    px-4
                    py-2
                    rounded-full
                    bg-yellow-500/20
                    text-yellow-400
                    text-sm
                    border
                    border-yellow-400/20
                "
                            >
                                ⭐ Featured
                            </div>
                        )}

                        {/* Actions */}

                        <div
                            className="
                absolute
                top-5
                right-5
                flex
                gap-3
            "
                        >

                            <button
                                onClick={() => editTestimonial(item)}
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
                                onClick={() => deleteTestimonial(item.id)}
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

                        {/* Client Image */}

                        <div className="flex justify-center">

                            <img
                                src={item.image}
                                alt={item.name}
                                className="
                    w-24
                    h-24
                    rounded-full
                    object-cover
                    border
                    border-white/20
                "
                            />

                        </div>

                        {/* Name */}

                        <h3
                            className="
                text-xl
                font-bold
                text-white
                text-center
                mt-5
            "
                        >
                            {item.name}
                        </h3>

                        {/* Role */}

                        <p
                            className="
                text-purple-400
                text-center
                mt-1
            "
                        >
                            {item.role}
                        </p>

                        {/* Rating */}

                        <div
                            className="
                flex
                justify-center
                gap-1
                mt-4
            "
                        >
                            {Array.from({ length: item.rating }).map((_, index) => (

                                <Star
                                    key={index}
                                    size={18}
                                    fill="currentColor"
                                    className="text-yellow-400"
                                />

                            ))}
                        </div>

                        {/* Message */}

                        <p
                            className="
                text-gray-300
                text-center
                mt-5
                line-clamp-4
            "
                        >
                            "{item.message}"
                        </p>

                    </motion.div>

                ))}
            </div>
        </div>
    );
}