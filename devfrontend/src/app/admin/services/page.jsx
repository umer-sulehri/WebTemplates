"use client";
import { motion } from "framer-motion";
import {
    Plus,
    Edit,
    Trash2,
    Layers,
    X,
    Globe,
    Smartphone,
    Code2,
    Database,
    LayoutDashboard,
    Cloud,
    MonitorSmartphone,
    Search,
} from "lucide-react";
import { useEffect, useState } from "react";

import {
    getServices,
    createService,
    deleteService,
    updateService,
} from "@/lib/api/services";

const serviceIcons = {
    "Globe": Globe,
    "Smartphone": Smartphone,
    "Code2": Code2,
    "Database": Database,
    "LayoutDashboard": LayoutDashboard,
    "Cloud": Cloud,
    "MonitorSmartphone": MonitorSmartphone,
    "Search": Search,
};

export default function Services() {

    const [selectedService, setSelectedService] = useState(null);

    const [services, setServices] =
        useState([]);


    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const data = await getServices();
            setServices(data);
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    };

    const [editingId, setEditingId] =
        useState(null);


    const [form, setForm] = useState({
        image: "",
        icon: "",
        title: "",
        description: "",
        learnmore: "",
        status: "Active",
    });



    const [backgroundPreview, setBackgroundPreview] =
        useState("");





    // Background Upload

    const handleImage = (e) => {


        const file = e.target.files[0];


        if (file) {

            setBackgroundPreview(URL.createObjectURL(file));



            setForm({

                ...form,

                image: file

            });


        }


    };

    // Add / Update Service


    const handleSubmit = async (e) => {


        e.preventDefault();


        if (!form.title) return;

        if (editingId) {

            const formData = new FormData();

            formData.append("title", form.title);
            formData.append("description", form.description);
            formData.append("learnmore", form.learnmore);
            formData.append("icon", form.icon);

            if (form.image instanceof File) {
                formData.append("image", form.image);
            }

            await updateService(editingId, formData);

            await fetchServices();

            setEditingId(null);

        } else {

            const formData = new FormData();

            formData.append("title", form.title);
            formData.append("description", form.description);
            formData.append("learnmore", form.learnmore);
            formData.append("icon", form.icon);

            if (form.image) {
                formData.append("image", form.image);
            }

            await createService(formData);

            await fetchServices();
        }



        setForm({
            image: "",
            icon: "",
            title: "",
            description: "",
            learnmore: "",
            status: "Active",

        });


        setBackgroundPreview("");


    };





    // Edit


    const editService = (service) => {


        setForm({

            image: service.image,

            icon: service.icon,

            title: service.title,

            description: service.description,

            learnmore: service.learnmore

        });


        setBackgroundPreview(service.image);


        setEditingId(service.id);


    };





    // Delete


    const handleDelete = async (id) => {
        try {
            await deleteService(id);

            setServices(
                services.filter((service) => service.id !== id)
            );

        } catch (error) {
            console.log(error);
        }
    };

    const updateService = async (id, data) => {
        try {
            const response = await apiClient.post(
                `/services/${id}?_method=PUT`,
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw error;
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

                            onChange={handleImage}

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


                    <div className="relative">
                        <label className="mb-2 block text-sm font-medium text-gray-300">
                            Select Icon
                        </label>

                        <select
                            value={form.icon}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    icon: e.target.value,
                                })
                            }
                            className="
            w-full
            appearance-none
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            text-white
            outline-none
            backdrop-blur-xl
            transition-all
            duration-300
            focus:border-[#52D681]/50
            focus:ring-2
            focus:ring-[#52D681]/20
        "
                        >
                            <option
                                value=""
                                className="bg-[#081C15]"
                            >
                                Select Icon
                            </option>

                            <option value="Globe" className="bg-[#081C15]">
                                🌐 Globe
                            </option>

                            <option value="Smartphone" className="bg-[#081C15]">
                                📱 Smartphone
                            </option>

                            <option value="Code2" className="bg-[#081C15]">
                                💻 Code
                            </option>

                            <option value="Database" className="bg-[#081C15]">
                                🗄 Database
                            </option>

                            <option value="LayoutDashboard" className="bg-[#081C15]">
                                📊 Dashboard
                            </option>

                            <option value="Cloud" className="bg-[#081C15]">
                                ☁ Cloud
                            </option>

                            <option value="MonitorSmartphone" className="bg-[#081C15]">
                                🖥 UI / UX
                            </option>

                            <option value="Search" className="bg-[#081C15]">
                                🔍 SEO
                            </option>

                        </select>

                        {/* Dropdown Arrow */}
                        <div className="
        pointer-events-none
        absolute
        right-4
        top-[42px]
        text-gray-400
    ">
                            ▼
                        </div>
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

                        value={form.learnmore}

                        onChange={(e) =>

                            setForm({

                                ...form,

                                learnmore: e.target.value

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

                                    image: "",
                                    icon: "",
                                    title: "",
                                    description: "",
                                    learnmore: ""

                                });

                                setBackgroundPreview("");


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



                {services.map((service) => {
                    const Icon = serviceIcons[service.icon];

                    return (

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

                                src={service.image}

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


                                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center">
                                    {Icon && (
                                        <Icon
                                            size={40}
                                            className="text-white"
                                        />
                                    )}
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

                                        onClick={() => handleDelete(service.id)}

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



                    );
                })}

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

                                    src={selectedService.image}

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
                                    const SelectedIcon = serviceIcons[selectedService.icon];

                                    <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 flex items-center justify-center">

                                        {serviceIcons[selectedService.icon] &&
                                            (() => {
                                                const SelectedIcon = serviceIcons[selectedService.icon];
                                                return <SelectedIcon size={45} className="text-white" />;
                                            })()
                                        }

                                    </div>



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

                                        {selectedService.learnmore}

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