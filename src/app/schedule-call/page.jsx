"use client";
import { createScheduleCall } from "@/lib/api/sheduleCalls";
import { motion } from "framer-motion";
import {
    Calendar,
    Clock3,
    PhoneCall,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";

import Link from 'next/link';

export default function ScheduleCallPage() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            await createScheduleCall({
                ...form,
                status: "pending",
            });

            router.push("/#home");

        } catch (error) {
            console.log(error.response?.data);
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#061A16]">

            {/* Background */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#061A16] via-[#0B2B25] to-[#061A16]" />

            <motion.div
                animate={{
                    x: [0, 80, 0],
                    y: [0, -60, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 12,
                }}
                className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]"
            />

            <motion.div
                animate={{
                    x: [0, -60, 0],
                    y: [0, 60, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                }}
                className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-teal-500/20 blur-[120px]"
            />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">

                <div className="grid w-full overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl lg:grid-cols-2">

                    {/* LEFT */}

                    <div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r">

                        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-300">
                            FREE CONSULTATION
                        </span>

                        <h1 className="mt-8 text-5xl font-bold leading-tight text-white">

                            Schedule a

                            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                                Strategy Call
                            </span>

                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-300">

                            Book a free consultation with our experts.
                            We'll discuss your project, timeline,
                            budget and the best solution for your business.

                        </p>

                        <div className="mt-10 space-y-5">

                            {[
                                "30-Minute Free Consultation",
                                "Project Planning",
                                "Budget Estimation",
                                "Technical Guidance",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500">

                                        <CheckCircle2 className="text-white" />

                                    </div>

                                    <span className="text-slate-200">
                                        {item}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="p-10">

                        <div>

                            <span className="text-sm uppercase tracking-[4px] text-emerald-400">
                                BOOK NOW
                            </span>

                            <h2 className="mt-3 text-4xl font-bold text-white">
                                Schedule Your Meeting
                            </h2>

                            <p className="mt-3 text-slate-400">
                                Fill out the form below and choose your preferred meeting time.
                            </p>

                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-10 space-y-6"
                        >
                            {/* Name & Email */}

                            <div className="grid gap-5 md:grid-cols-2">

                                <div>
                                    <label className="mb-2 block text-sm text-slate-300">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Smith"
                                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-slate-500 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm text-slate-300">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-slate-500 outline-none"
                                    />
                                </div>

                            </div>

                            {/* Phone & Company */}

                            <div className="grid gap-5 md:grid-cols-2">

                                <div>
                                    <label className="mb-2 block text-sm text-slate-300">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+92 3000000000"
                                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-slate-500 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm text-slate-300">
                                        Company Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Your Company"
                                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-emerald-500"
                                    />
                                </div>

                            </div>

                            {/* Service */}

                            <div>

                                <label className="mb-2 block text-sm text-slate-300">
                                    Service Required
                                </label>

                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white"
                                >
                                    <option className="bg-[#0B2B25]">Website Development</option>
                                    <option className="bg-[#0B2B25]">Web Application</option>
                                    <option className="bg-[#0B2B25]">Dashboard Development</option>
                                    <option className="bg-[#0B2B25]">Mobile App</option>
                                    <option className="bg-[#0B2B25]">UI / UX Design</option>
                                    <option className="bg-[#0B2B25]">SEO</option>
                                </select>

                            </div>

                            {/* Date & Time */}

                            <div className="grid gap-5 md:grid-cols-2">

                                <div>

                                    <label className="mb-2 flex items-center gap-2 text-sm text-slate-300">
                                        <Calendar size={16} />
                                        Preferred Date
                                    </label>

                                    <input
                                        type="date"
                                        name="date"
                                        value={form.date}
                                        onChange={handleChange}
                                        required
                                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white"
                                    />

                                </div>

                                <div>

                                    <label className="mb-2 flex items-center gap-2 text-sm text-slate-300">
                                        <Clock3 size={16} />
                                        Preferred Time
                                    </label>

                                    <input
                                        type="time"
                                        name="time"
                                        value={form.time}
                                        onChange={handleChange}
                                        required
                                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white"
                                    />

                                </div>

                            </div>

                            {/* Meeting Platform */}

                            <div>

                                <label className="mb-3 block text-sm text-slate-300">
                                    Meeting Platform
                                </label>

                                <div className="grid grid-cols-2 gap-4">

                                    {[
                                        "Google Meet",
                                        "Zoom",
                                        "Microsoft Teams",
                                        "Phone Call",
                                    ].map((item) => (

                                        <label
                                            key={item}
                                            className="cursor-pointer"
                                        >

                                            <input
                                                type="radio"
                                                name="meeting"
                                                className="hidden peer"
                                            />

                                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-slate-300 transition-all duration-300 peer-checked:border-emerald-500 peer-checked:bg-emerald-500/10 peer-checked:text-white hover:border-emerald-400">

                                                <PhoneCall
                                                    size={20}
                                                    className="mx-auto mb-2 text-emerald-400"
                                                />

                                                {item}

                                            </div>

                                        </label>

                                    ))}

                                </div>

                            </div>

                            {/* Project Details */}

                            <div>

                                <label className="mb-2 block text-sm text-slate-300">
                                    Project Details
                                </label>

                                <textarea
                                    rows={5}
                                    placeholder="Tell us about your project..."
                                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-white placeholder:text-slate-500 outline-none resize-none transition-all duration-300 focus:border-emerald-500"
                                />

                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                     group
                                     flex
                                     h-16
                                     w-full
                                     items-center
                                     justify-center
                                     gap-3
                                     rounded-2xl
                                     bg-gradient-to-r
                                     from-[#0F9D7A]
                                     via-[#16A085]
                                     to-[#0B7A63]
                                     px-8
                                     text-lg
                                     font-semibold
                                     text-white
                                     shadow-lg
                                        transition-all
                                     duration-300
                                     hover:-translate-y-1
                                     hover:scale-[1.02]
                                     hover:shadow-[0_15px_40px_rgba(16,185,129,0.35)]
                                            "
                            >
                                Book My Consultation

                                <ArrowRight
                                    size={20}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section >

    );
}