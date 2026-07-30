"use client";

import { motion } from "framer-motion";
import {
    Phone,
    PhoneCall,
    PhoneMissed,
    Users,
} from "lucide-react";


const stats = [
    {
        title: "Total Calls",
        value: "12,540",
        growth: "+12.5%",
        icon: Phone,
        color: "from-blue-500 to-cyan-400",
    },
    {
        title: "Answered Calls",
        value: "10,850",
        growth: "+8.2%",
        icon: PhoneCall,
        color: "from-green-500 to-emerald-400",
    },
    {
        title: "Missed Calls",
        value: "1,690",
        growth: "-3.4%",
        icon: PhoneMissed,
        color: "from-red-500 to-orange-400",
    },
    {
        title: "Active Agents",
        value: "24",
        growth: "+5 New",
        icon: Users,
        color: "from-purple-500 to-pink-400",
    },
];


export default function StatsCards() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            {
                stats.map((item, index) => {

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
                                delay: index * 0.15
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.02
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
                            shadow-lg
                            "
                        >

                            {/* Gradient Glow */}

                            <div
                                className={`
                                absolute
                                -top-10
                                -right-10
                                h-32
                                w-32
                                rounded-full
                                bg-gradient-to-r
                                ${item.color}
                                blur-3xl
                                opacity-40
                                `}
                            />


                            <div className="relative z-10">

                                <div className="
                                flex
                                items-center
                                justify-between
                                ">

                                    <div
                                        className={`
                                        p-3
                                        rounded-xl
                                        bg-gradient-to-r
                                        ${item.color}
                                        `}
                                    >
                                        <Icon
                                            size={24}
                                            className="text-white"
                                        />
                                    </div>


                                    <span className="
                                    text-sm
                                    text-green-400
                                    font-medium
                                    ">
                                        {item.growth}
                                    </span>

                                </div>


                                <h3 className="
                                mt-5
                                text-gray-300
                                text-sm
                                ">
                                    {item.title}
                                </h3>


                                <h2 className="
                                mt-2
                                text-3xl
                                font-bold
                                text-white
                                ">
                                    {item.value}
                                </h2>

                            </div>


                        </motion.div>
                    )

                })
            }


        </section>
    );
}