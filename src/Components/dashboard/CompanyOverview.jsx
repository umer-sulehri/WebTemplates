"use client";

import { motion } from "framer-motion";
import {
    BriefcaseBusiness,
    Settings,
    FileText,
    Star,
    Users,
    Mail,
} from "lucide-react";


const overview = [
    {
        title: "Portfolio Projects",
        value: "48",
        description: "Total projects added",
        icon: BriefcaseBusiness,
        color: "from-blue-500 to-cyan-400",
    },
    {
        title: "Services",
        value: "12",
        description: "Active services",
        icon: Settings,
        color: "from-purple-500 to-pink-400",
    },
    {
        title: "Blog Posts",
        value: "86",
        description: "Published articles",
        icon: FileText,
        color: "from-orange-500 to-yellow-400",
    },
    {
        title: "Testimonials",
        value: "124",
        description: "Customer reviews",
        icon: Star,
        color: "from-green-500 to-emerald-400",
    },
    {
        title: "Team Members",
        value: "18",
        description: "Active members",
        icon: Users,
        color: "from-indigo-500 to-blue-400",
    },
    {
        title: "Messages",
        value: "56",
        description: "New inquiries",
        icon: Mail,
        color: "from-red-500 to-rose-400",
    },
];


export default function CompanyOverview() {

    return (

        <section className="
        mt-10
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        ">

            {
                overview.map((item, index) => {

                    const Icon = item.icon;

                    return (

                        <motion.div

                            key={item.title}

                            initial={{
                                opacity: 0,
                                y: 30
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                delay: index * 0.1
                            }}

                            whileHover={{
                                y: -8
                            }}

                            className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        p-6
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/10
                        "

                        >


                            <div
                                className={`
                        absolute
                        -right-8
                        -top-8
                        w-32
                        h-32
                        rounded-full
                        bg-gradient-to-r
                        ${item.color}
                        blur-3xl
                        opacity-40
                        `}
                            />


                            <div className="relative z-10">


                                <div
                                    className={`
                            w-12
                            h-12
                            flex
                            items-center
                            justify-center
                            rounded-xl
                            bg-gradient-to-r
                            ${item.color}
                            `}
                                >

                                    <Icon
                                        className="text-white"
                                        size={24}
                                    />

                                </div>


                                <h3 className="
                            mt-5
                            text-gray-300
                            text-sm
                            ">
                                    {item.title}
                                </h3>


                                <h2 className="
                            text-3xl
                            font-bold
                            text-white
                            mt-2
                            ">
                                    {item.value}
                                </h2>


                                <p className="
                            text-gray-400
                            text-sm
                            mt-2
                            ">
                                    {item.description}
                                </p>


                            </div>


                        </motion.div>

                    )

                })
            }


        </section>

    );
}