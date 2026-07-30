"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import {
    LayoutDashboard,
    Briefcase,
    FolderKanban,
    MessageSquareQuote,
    Users,
    PhoneCall,
    Mail,
    Settings,
    LogOut,
    Newspaper,
} from "lucide-react";

const menu = [

    {
        title: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
    },

    {
        title: "Portfolio",
        href: "/admin/portfolio",
        icon: FolderKanban,
    },

    {
        title: "Services",
        href: "/admin/services",
        icon: Briefcase,
    },

    {
        title: "Testimonials",
        href: "/admin/testimonials",
        icon: MessageSquareQuote,
    },

    {
        title: "Blogs",
        href: "/admin/Blogs",
        icon: Newspaper,
    },
    {
        title: "Team",
        href: "/admin/team",
        icon: Users,
    },

    {
        title: "Contacts",
        href: "/admin/contacts",
        icon: Mail,
    },

    {
        title: "Schedule Calls",
        href: "/admin/schedule-calls",
        icon: PhoneCall,
    },

];

export default function Sidebar() {
    console.log(menu)
    console.log("Sidebar Updated");
    const pathname = usePathname();

    return (

        <aside
            className="
                w-[290px]
                min-h-screen
                bg-[#061A16]
                border-r
                border-white/10
                flex
                flex-col
            "
        >

            {/* Logo */}

            <div className="px-7 pt-8">

                <h1 className="text-3xl font-bold text-white">

                    Dev<span className="text-emerald-400">Frontend</span>

                </h1>

                <p className="mt-2 text-sm text-slate-400">

                    Admin Dashboard

                </p>

            </div>

            {/* Admin Card */}

            <div className="px-6 mt-8">

                <motion.div

                    whileHover={{ scale: 1.02 }}

                    className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-[#0B241E]
                        p-5
                    "

                >

                    <div className="flex items-center gap-4">

                        <div
                            className="
                                h-14
                                w-14
                                rounded-full
                                bg-gradient-to-r
                                from-emerald-500
                                to-teal-500
                                flex
                                items-center
                                justify-center
                                text-xl
                                font-bold
                                text-white
                            "
                        >
                            A
                        </div>

                        <div>

                            <h3 className="text-white font-semibold">

                                Admin

                            </h3>

                            <p className="text-sm text-slate-400">

                                Super Administrator

                            </p>

                        </div>

                    </div>

                </motion.div>

            </div>
            {/* Navigation */}

            <nav className="mt-10 flex-1 px-4">

                <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Main Menu
                </p>

                <div className="space-y-2">

                    {menu.map((item) => {

                        const active = pathname === item.href;
                        const Icon = item.icon;

                        return (

                            <Link
                                key={item.title}
                                href={item.href}
                            >

                                <motion.div

                                    whileHover={{
                                        x: 6,
                                    }}

                                    whileTap={{
                                        scale: 0.98,
                                    }}

                                    className={`
                                        group
                                        flex
                                        items-center
                                        gap-4
                                        rounded-2xl
                                        px-4
                                        py-3
                                        transition-all
                                        duration-300

                                        ${active
                                            ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20"
                                            : "text-slate-400 hover:bg-[#0B241E] hover:text-white"}
                                    `}
                                >

                                    <Icon size={20} />

                                    <span className="font-medium">
                                        {item.title}
                                    </span>

                                </motion.div>

                            </Link>

                        );

                    })}

                </div>

            </nav>

            {/* Bottom Section */}

            <div className="border-t border-white/10 p-5">

                <div className="space-y-2">
                   <Link href="/admin/settings">
                        <button
                            className="
                            flex
                            w-full
                            items-center
                            gap-4
                            rounded-2xl
                            px-4
                            py-3
                            text-slate-400
                            transition-all
                            duration-300
                            hover:bg-[#0B241E]
                            hover:text-white
                        "
                        >
                            <Settings size={20} />

                            <span>Settings</span>

                        </button>
                    </Link>
                    <button
                        className="
                            flex
                            w-full
                            items-center
                            gap-4
                            rounded-2xl
                            px-4
                            py-3
                            text-red-400
                            transition-all
                            duration-300
                            hover:bg-red-500/10
                        "
                    >

                        <LogOut size={20} />

                        <span>Logout</span>

                    </button>

                </div>

            </div>

        </aside>

    );

};