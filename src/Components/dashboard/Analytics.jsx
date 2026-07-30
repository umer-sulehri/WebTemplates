"use client";

import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { motion } from "framer-motion";


const callsData = [
    {
        name: "Mon",
        calls: 400,
    },
    {
        name: "Tue",
        calls: 700,
    },
    {
        name: "Wed",
        calls: 550,
    },
    {
        name: "Thu",
        calls: 900,
    },
    {
        name: "Fri",
        calls: 1200,
    },
    {
        name: "Sat",
        calls: 800,
    },
];


const visitorData = [
    {
        name: "Jan",
        visitors: 2400,
    },
    {
        name: "Feb",
        visitors: 3200,
    },
    {
        name: "Mar",
        visitors: 4500,
    },
    {
        name: "Apr",
        visitors: 3800,
    },
];


export default function Analytics() {

    return (

        <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">


            {/* Call Analytics */}

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
                rounded-2xl
                p-6
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                "

            >

                <h2 className="
                text-white
                text-xl
                font-semibold
                mb-6
                ">
                    Call Analytics
                </h2>


                <ResponsiveContainer width="100%" height={300}>

                    <LineChart data={callsData}>

                        <XAxis
                            dataKey="name"
                            stroke="#aaa"
                        />

                        <YAxis
                            stroke="#aaa"
                        />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="calls"
                            stroke="#38bdf8"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>


            </motion.div>



            {/* Visitor Analytics */}


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
                rounded-2xl
                p-6
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                "

            >

                <h2 className="
                text-white
                text-xl
                font-semibold
                mb-6
                ">
                    Visitors & Leads
                </h2>



                <ResponsiveContainer width="100%" height={300}>

                    <BarChart data={visitorData}>


                        <XAxis
                            dataKey="name"
                            stroke="#aaa"
                        />


                        <YAxis
                            stroke="#aaa"
                        />


                        <Tooltip />


                        <Bar
                            dataKey="visitors"
                            fill="#a855f7"
                            radius={[8, 8, 0, 0]}
                        />


                    </BarChart>


                </ResponsiveContainer>



            </motion.div>


        </section>

    );
};