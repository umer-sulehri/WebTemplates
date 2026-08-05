"use client";

import { motion } from "framer-motion";
import {
    CheckCircle,
    MessageSquare,
    Briefcase,
    Phone,
} from "lucide-react";

import { useEffect, useState } from "react";
import { getScheduleCalls } from "@/lib/api/sheduleCalls";
import { getPortfolios } from "@/lib/api/portfolio";
import { getServices } from "@/lib/api/services";

const activities = [
    {
        title: "New Portfolio Project Added",
        time: "10 minutes ago",
        icon: Briefcase,
    },
    {
        title: "New Client Message Received",
        time: "30 minutes ago",
        icon: MessageSquare,
    },
    {
        title: "Service Updated",
        time: "1 hour ago",
        icon: CheckCircle,
    },
];


const calls = [
    {
        name: "Ali Khan",
        agent: "Ahmed",
        duration: "04:20",
        status: "Completed",
    },
    {
        name: "Sara Ahmed",
        agent: "John",
        duration: "00:00",
        status: "Missed",
    },
    {
        name: "Usman",
        agent: "Alex",
        duration: "06:10",
        status: "Completed",
    },
];


export default function RecentActivity() {

    const [activities, setActivities] = useState([]);
    const [calls, setCalls] = useState([]);

    useEffect(() => {
        fetchRecentData();
    }, []);

    const fetchRecentData = async () => {
        try {
            const [scheduleCalls, portfolios, services] =
                await Promise.all([
                    getScheduleCalls(),
                    getPortfolios(),
                    getServices(),
                ]);

            // Latest Calls (last 5)
            setCalls(
                scheduleCalls
                    .slice(0, 5)
                    .map(call => ({
                        name: call.name,
                        agent: "Website",
                        duration: call.time,
                        status:
                            call.status === "confirmed"
                                ? "Completed"
                                : call.status === "cancelled"
                                    ? "Missed"
                                    : "Pending",
                    }))
            );

            // Recent Activity
            const recentActivities = [];

            portfolios.slice(0, 2).forEach(item => {
                recentActivities.push({
                    title: `Portfolio "${item.title}" added`,
                    time: item.created_at,
                    icon: Briefcase,
                });
            });

            services.slice(0, 2).forEach(item => {
                recentActivities.push({
                    title: `Service "${item.title}" added`,
                    time: item.created_at,
                    icon: CheckCircle,
                });
            });

            scheduleCalls.slice(0, 2).forEach(item => {
                recentActivities.push({
                    title: `New call from ${item.name}`,
                    time: item.created_at,
                    icon: MessageSquare,
                });
            });

            recentActivities.sort(
                (a, b) =>
                    new Date(b.time) - new Date(a.time)
            );

            setActivities(recentActivities.slice(0, 6));

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <section className="
        mt-10
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-6
        ">


            {/* Activity */}

            <motion.div

                initial={{
                    opacity: 0,
                    y: 30
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

                <h2 className="
                text-xl
                font-semibold
                text-white
                mb-6
                ">
                    Recent Activity
                </h2>


                <div className="space-y-5">

                    {
                        activities.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={index}
                                    className="
                                flex
                                items-center
                                gap-4
                                "
                                >

                                    <div className="
                                    p-3
                                    rounded-xl
                                    bg-purple-500/20
                                    "
                                    >
                                        <Icon
                                            className="text-purple-400"
                                            size={22}
                                        />
                                    </div>


                                    <div>

                                        <h3 className="
                                        text-white
                                        text-sm
                                        ">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-400 text-xs">
                                            {new Date(item.time).toLocaleString()}
                                        </p>

                                    </div>

                                </div>

                            )

                        })
                    }

                </div>


            </motion.div>



            {/* Calls Table */}


            <motion.div

                initial={{
                    opacity: 0,
                    y: 30
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    delay: 0.2
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


                <h2 className="
                text-xl
                font-semibold
                text-white
                mb-6
                ">
                    Latest Calls
                </h2>


                <div className="space-y-4">

                    {
                        calls.map((call, index) => (

                            <div
                                key={index}
                                className="
                        flex
                        items-center
                        justify-between
                        bg-white/5
                        rounded-xl
                        p-4
                        "
                            >

                                <div className="flex gap-3 items-center">

                                    <Phone
                                        size={20}
                                        className="text-cyan-400"
                                    />

                                    <div>

                                        <p className="text-white text-sm">
                                            {call.name}
                                        </p>

                                        <p className="text-gray-400 text-xs">
                                            Agent: {call.agent}
                                        </p>

                                    </div>

                                </div>


                                <div className="text-right">

                                    <p className="text-white text-sm">
                                        {call.duration}
                                    </p>

                                    <p className={`
                                text-xs
                                ${call.status === "Missed"
                                            ? "text-red-400"
                                            : "text-green-400"}
                                `}>
                                        {call.status}
                                    </p>

                                </div>


                            </div>

                        ))
                    }

                </div>


            </motion.div>


        </section>

    );
}