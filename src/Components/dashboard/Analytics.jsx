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
import { useEffect, useState } from "react";
import { getScheduleCalls } from "@/lib/api/sheduleCalls";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



export default function Analytics() {
    const[callsData, setCallsData] = useState([]);
    const [visitorData, setVisitorData] = useState([]);

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        try {
            const calls = await getScheduleCalls();

            // Weekly Calls
            const weekly = days.map(day => ({
                name: day,
                calls: 0,
            }));

            calls.forEach(call => {
                const index = new Date(call.date).getDay();
                weekly[index].calls++;
            });

            setCallsData(weekly);

            // Monthly Calls
            const monthly = months.map(month => ({
                name: month,
                visitors: 0,
            }));

            calls.forEach(call => {
                const index = new Date(call.date).getMonth();
                monthly[index].visitors++;
            });

            setVisitorData(monthly);

        } catch (error) {
            console.log(error);
        }
    };

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