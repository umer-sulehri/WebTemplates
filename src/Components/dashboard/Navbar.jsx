"use client";

import { motion } from "framer-motion";
import {
    Bell,
    CalendarDays,
    ChevronDown,
} from "lucide-react";

export default function Navbar() {

    const today = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return (

        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className=" top-0 z-40 bg-[#061A16] px-8 py-6"
        >

            <div
                className="
                    flex
                    items-center
                    justify-between
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#0B241E]
                    px-8
                    py-6
                    shadow-lg
                    shadow-black/20
                "
            >

                {/* Left */}

                <div>

                    <p className="text-sm text-slate-400">

                        Dashboard / Home

                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-white">

                        Welcome Back 👋

                    </h1>

                    <p className="mt-1 text-slate-400">

                        Here's what's happening with your website today.

                    </p>

                </div>

                {/* Right */}

                <div className="flex items-center gap-4">
                    {/* Date */}

                    <div
                        className="
                            hidden
                            lg:flex
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-white/10
                            bg-[#061A16]
                            px-5
                            py-3
                        "
                    >

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                bg-emerald-500/20
                                text-emerald-400
                            "
                        >
                            <CalendarDays size={20} />
                        </div>

                        <div>

                            <p className="text-xs text-slate-400">
                                Today
                            </p>

                            <h4 className="text-sm font-semibold text-white">
                                {today}
                            </h4>

                        </div>

                    </div>

                    {/* Notification */}

                    <button
                        className="
                            relative
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-white/10
                            bg-[#061A16]
                            text-slate-300
                            transition-all
                            duration-300
                            hover:border-emerald-500
                            hover:text-white
                        "
                    >

                        <Bell size={20} />

                        <span
                            className="
                                absolute
                                right-2
                                top-2
                                h-2.5
                                w-2.5
                                rounded-full
                                bg-emerald-400
                            "
                        />

                    </button>

                    {/* Profile */}

                    <motion.button

                        whileHover={{ scale: 1.03 }}

                        className="
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-white/10
                            bg-[#061A16]
                            px-3
                            py-2
                        "

                    >

                        <div className="relative">

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-gradient-to-r
                                    from-emerald-500
                                    to-teal-500
                                    text-lg
                                    font-bold
                                    text-white
                                "
                            >
                                A
                            </div>

                            <span
                                className="
                                    absolute
                                    bottom-0
                                    right-0
                                    h-3
                                    w-3
                                    rounded-full
                                    border-2
                                    border-[#061A16]
                                    bg-green-400
                                "
                            />

                        </div>

                        <div className="hidden text-left md:block">

                            <h4 className="font-semibold text-white">
                                Admin
                            </h4>

                            <p className="text-xs text-slate-400">
                                Super Administrator
                            </p>

                        </div>

                        <ChevronDown
                            size={18}
                            className="hidden text-slate-400 md:block"
                        />

                    </motion.button>

                </div>

            </div>

        </motion.header>

    );

};