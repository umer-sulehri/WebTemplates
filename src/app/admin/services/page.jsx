"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Plus,
    Edit,
    Trash2,
    Image as ImageIcon,
    Layers,
    X
} from "lucide-react";


const initialServices = [

    {
        id: 1,
        background:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

        logo:
            "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",

        title:
            "Web Development",

        description:
            "We build modern responsive websites using latest technologies.",

        learnMore:
            "Complete web development solutions including frontend, backend and deployment."
    },


    {
        id: 2,

        background:
            "https://images.unsplash.com/photo-1558655146-d09347e92766",

        logo:
            "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",

        title:
            "UI/UX Design",

        description:
            "Creative and user friendly designs for modern applications.",

        learnMore:
            "We create beautiful interfaces with focus on user experience."
    }

];



export default function Services() {
    const [selectedService, setSelectedService] = useState(null);

    const [services, setServices] =
        useState(initialServices);



    const [editingId, setEditingId] =
        useState(null);



    const [form, setForm] =
        useState({

            background: "",
            logo: "",
            title: "",
            description: "",
            learnMore: ""

        });



    const [backgroundPreview, setBackgroundPreview] =
        useState("");



    const [logoPreview, setLogoPreview] =
        useState("");





    // Background Upload

    const handleBackground = (e) => {


        const file = e.target.files[0];


        if (file) {

            const url =
                URL.createObjectURL(file);


            setBackgroundPreview(url);


            setForm({

                ...form,

                background: url

            });


        }


    };





    // Logo Upload

    const handleLogo = (e) => {


        const file = e.target.files[0];


        if (file) {


            const url =
                URL.createObjectURL(file);


            setLogoPreview(url);


            setForm({

                ...form,

                logo: url

            });


        }


    };





    // Add / Update Service


    const handleSubmit = (e) => {


        e.preventDefault();


        if (!form.title) return;



        if (editingId) {


            setServices(

                services.map((item) =>

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


            const newService = {

                id: Date.now(),

                ...form

            };



            setServices([

                newService,

                ...services

            ]);


        }



        setForm({

            background: "",
            logo: "",
            title: "",
            description: "",
            learnMore: ""

        });


        setBackgroundPreview("");

        setLogoPreview("");

    };





    // Edit


    const editService = (service) => {


        setForm({

            background: service.background,

            logo: service.logo,

            title: service.title,

            description: service.description,

            learnMore: service.learnMore

        });


        setBackgroundPreview(service.background);

        setLogoPreview(service.logo);


        setEditingId(service.id);


    };





    // Delete


    const deleteService = (id) => {


        setServices(

            services.filter(

                (item) => item.id !== id

            )

        );


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

                        Services Management

                    </h1>


                    <p className="
text-gray-400
mt-2
">

                        Manage website services and content.

                    </p>


                </div>


                <div className="
flex
items-center
gap-3
bg-gradient-to-r
from-blue-500
to-purple-600
px-5
py-3
rounded-xl
text-white
">

                    <Layers size={22} />

                    {services.length} Services

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
                            title: "Total Services",
                            value: services.length
                        },

                        {
                            title: "Active Services",
                            value: "12"
                        },

                        {
                            title: "Featured Services",
                            value: "5"
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

            {/* Add Service Form */}


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
                            "Edit Service ✏️"
                            :
                            "Add New Service 🚀"
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




                    {/* Background Image */}


                    <div>

                        <label className="
text-gray-300
block
mb-3
">

                            Background Image

                        </label>


                        <input

                            type="file"

                            onChange={handleBackground}

                            className="
text-gray-300
"

                        />


                        {
                            backgroundPreview &&

                            <img

                                src={backgroundPreview}

                                className="
mt-4
h-40
w-full
object-cover
rounded-xl
border
border-white/20
"

                            />

                        }


                    </div>





                    {/* Logo Upload */}


                    <div>


                        <label className="
text-gray-300
block
mb-3
">

                            Service Logo

                        </label>


                        <input

                            type="file"

                            onChange={handleLogo}

                            className="
text-gray-300
"

                        />



                        {
                            logoPreview &&

                            <img

                                src={logoPreview}

                                className="
mt-4
h-24
w-24
object-contain
rounded-xl
bg-black/20
p-3
border
border-white/20
"

                            />

                        }


                    </div>







                    {/* Title */}


                    <input

                        type="text"

                        placeholder="Service Title"

                        value={form.title}

                        onChange={(e) =>

                            setForm({

                                ...form,

                                title: e.target.value

                            })

                        }

                        className="
md:col-span-2
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






                    {/* Description */}


                    <textarea

                        placeholder="Service Description"

                        value={form.description}

                        onChange={(e) =>

                            setForm({

                                ...form,

                                description: e.target.value

                            })

                        }

                        className="
md:col-span-2
h-32
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







                    {/* Learn More Content */}


                    <textarea

                        placeholder="Learn More Details"

                        value={form.learnMore}

                        onChange={(e) =>

                            setForm({

                                ...form,

                                learnMore: e.target.value

                            })

                        }

                        className="
md:col-span-2
h-40
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
                                    "Update Service"
                                    :
                                    "Save Service"

                            }

                        </button>



                        <button

                            type="button"

                            onClick={() => {

                                setEditingId(null);

                                setForm({

                                    background: "",
                                    logo: "",
                                    title: "",
                                    description: "",
                                    learnMore: ""

                                });

                                setBackgroundPreview("");

                                setLogoPreview("");

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
            {/* Services Cards */}


            <div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-6
">


                {
                    services.map((service) => (


                        <motion.div

                            key={service.id}

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
relative
overflow-hidden
rounded-3xl
h-[420px]
border
border-white/20
group
"

                        >



                            {/* Background Image */}

                            <img

                                src={service.background}

                                alt={service.title}

                                className="
absolute
inset-0
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"

                            />





                            {/* Overlay */}

                            <div className="
absolute
inset-0
bg-black/60
"/>





                            {/* Content */}

                            <div className="
relative
z-10
h-full
flex
flex-col
items-center
justify-center
text-center
p-6
">





                                {/* Logo */}


                                <div className="
w-20
h-20
rounded-2xl
bg-white/10
backdrop-blur-xl
border
border-white/20
flex
items-center
justify-center
mb-5
">


                                    <img

                                        src={service.logo}

                                        alt="logo"

                                        className="
w-12
h-12
object-contain
"

                                    />


                                </div>







                                <h3 className="
text-2xl
font-bold
text-white
">

                                    {service.title}

                                </h3>




                                <p className="
text-gray-300
mt-3
line-clamp-3
">

                                    {service.description}

                                </p>





                                <button

                                    onClick={() => setSelectedService(service)}

                                    className="
mt-6
px-6
py-3
rounded-xl
bg-gradient-to-r
from-blue-500
to-purple-600
text-white
font-medium
hover:scale-105
transition
"

                                >
                                    Learn More
                                </button>




                                {/* Actions */}


                                <div className="
absolute
top-5
right-5
flex
gap-3
">


                                    <button

                                        onClick={() => editService(service)}

                                        className="
w-10
h-10
rounded-xl
bg-yellow-500/20
border
border-yellow-400/20
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

                                        onClick={() => deleteService(service.id)}

                                        className="
w-10
h-10
rounded-xl
bg-red-500/20
border
border-red-400/20
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



                        </motion.div>


                    ))

                }

                {
                    selectedService && (

                        <motion.div

                            initial={{
                                opacity: 0
                            }}

                            animate={{
                                opacity: 1
                            }}

                            className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/70
px-5
"

                        >


                            <motion.div

                                initial={{
                                    scale: 0.8,
                                    y: 50
                                }}

                                animate={{
                                    scale: 1,
                                    y: 0
                                }}

                                className="
relative
max-w-2xl
w-full
bg-slate-900
rounded-3xl
overflow-hidden
border
border-white/20
"

                            >


                                <button

                                    onClick={() => setSelectedService(null)}

                                    className="
absolute
right-5
top-5
z-10
w-10
h-10
rounded-xl
bg-white/10
text-white
flex
items-center
justify-center
"

                                >

                                    <X size={22} />

                                </button>



                                <img

                                    src={selectedService.background}

                                    className="
w-full
h-64
object-cover
"

                                />



                                <div className="
p-8
text-center
">


                                    <img

                                        src={selectedService.logo}

                                        className="
w-20
h-20
mx-auto
rounded-2xl
bg-white/10
p-3
object-contain
"

                                    />



                                    <h2 className="
text-3xl
font-bold
text-white
mt-5
">

                                        {selectedService.title}

                                    </h2>



                                    <p className="
text-gray-300
mt-5
leading-7
">

                                        {selectedService.learnMore}

                                    </p>


                                </div>


                            </motion.div>


                        </motion.div>

                    )
                }
            </div>

        </div>

    );

}