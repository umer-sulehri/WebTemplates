"use client";
import { getScheduleCalls } from "@/lib/api/sheduleCalls";
import { motion } from "framer-motion";
import {
    Bell,
    CalendarDays,
    ChevronDown,
} from "lucide-react";

import { useEffect, useState } from "react";
import apiClient from "@/lib/api/apiClient";


export default function Navbar() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await apiClient.get("/user");
                setUser(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getUser();
    }, []);


    const today = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await apiClient.get("/user");
                setUser(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);

    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    useEffect(() => {
        const getNotifications = async () => {
            try {
                const calls = await getScheduleCalls();

                const pendingCalls = calls
                    .filter(call => call.status === "pending")
                    .map(call => ({
                        id: call.id,
                        title: "New Schedule Call",
                        description: `${call.name} booked ${call.service}`,
                        time: `${call.date} ${call.time}`,
                        read: false,
                    }));

                setNotifications(pendingCalls);
                setUnreadCount(pendingCalls.length);

            } catch (error) {
                console.log(error);
            }
        };

        getNotifications();
    }, []);

    const handleNotificationClick = () => {
        setShowNotifications(!showNotifications);

        // Sab notifications read
        setUnreadCount(0);

        setNotifications(prev =>
            prev.map(item => ({
                ...item,
                read: true,
            }))
        );
    };

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

                        Welcome Back, {loading ? "..." : user?.name} 👋

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
                        onClick={handleNotificationClick}
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
                        {unreadCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                {unreadCount}
                            </span>
                        )}

                        {showNotifications && (
                            <div className="absolute right-0 top-16 w-96 rounded-2xl border border-white/10 bg-[#0B241E] shadow-xl z-50">

                                <div className="border-b border-white/10 p-4">
                                    <h3 className="text-white font-semibold">
                                        Notifications
                                    </h3>
                                </div>

                                <div className="max-h-96 overflow-y-auto">

                                    {notifications.length === 0 ? (

                                        <div className="p-6 text-center text-slate-400">
                                            No new notifications
                                        </div>

                                    ) : (


                                        notifications.map(item => (
                                            <div
                                                key={item.id}
                                                className="border-b border-white/10 p-4 hover:bg-white/5"
                                            >
                                                <div className="flex justify-between">

                                                    <div>
                                                        <p className="font-semibold text-white">
                                                            {item.title}
                                                        </p>

                                                        <p className="text-sm text-slate-400">
                                                            {item.description}
                                                        </p>

                                                        <span className="text-xs text-emerald-400">
                                                            {item.time}
                                                        </span>
                                                    </div>

                                                    {!item.read && (
                                                        <span className="h-2.5 w-2.5 rounded-full bg-green-400 mt-2"></span>
                                                    )}

                                                </div>
                                            </div>
                                        ))

                                    )

                                    }

                                </div>

                            </div>
                        )}

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
                                {user?.name?.charAt(0).toUpperCase() || "A"}
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
                                {user?.name || "Admin"}
                            </h4>

                            <p className="text-xs text-slate-400">
                                {user?.role || "Administrator"}
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