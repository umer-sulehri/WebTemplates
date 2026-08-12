"use client";
import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ArrowRight,
} from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

{/* FAQ Section */ }

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer:
            "Most business websites are completed within 2–4 weeks depending on the project requirements.",
    },
    {
        question: "Do you develop mobile applications?",
        answer:
            "Yes. We develop Android, iOS and cross-platform mobile applications using modern technologies.",
    },
    {
        question: "Can you redesign my existing website?",
        answer:
            "Absolutely! We can redesign your current website with a modern UI, better performance and improved SEO.",
    },
    {
        question: "Do you provide website maintenance?",
        answer:
            "Yes, we offer maintenance, security updates, backups and ongoing technical support.",
    },
];

const contactInfo = [
    {
        icon: MapPin,
        title: "Office Address",
        value: "Lahore, Punjab, Pakistan",
        description: "Visit our office for meetings and project discussions.",
    },
    {
        icon: Phone,
        title: "Phone Number",
        value: "+92 300 1234567",
        description: "Available Monday to Saturday (9 AM – 6 PM).",
    },
    {
        icon: Mail,
        title: "Email Address",
        value: "info@yourcompany.com",
        description: "We usually reply within 24 hours.",
    },
    {
        icon: Clock,
        title: "Working Hours",
        value: "Mon - Sat",
        description: "09:00 AM - 06:00 PM",
    },
];

export default function Contact() {
    const [openFAQ, setOpenFAQ] = useState(null);
    return (
        <main
            className="
                        overflow-hidden
                        bg-gradient-to-b
                        from-[#081C15]
                        via-[#123524]
                        to-[#081C15]
                        "
        >
            <Navbar />
            <section
                className="
            relative
            overflow-hidden
            bg-gradient-to-b
            from-[#081C15]
            via-[#123524]
            to-[#081C15]
            py-28
            "
            >
                {/* Background Glow */}

                <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-[#52B788]/20 blur-3xl" />

                <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

                {/* Floating Circles */}

                <motion.div
                    animate={{
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                    }}
                    className="
                absolute
                top-36
                right-32
                h-8
                w-8
                rounded-full
                bg-[#52B788]/40
                "
                />

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                    }}
                    className="
                absolute
                bottom-36
                left-32
                h-5
                w-5
                rounded-full
                bg-emerald-300/50
                "
                />

                <div className="relative mx-auto max-w-7xl px-6">

                    {/* Hero */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="mx-auto max-w-3xl text-center"
                    >

                        <span
                            className="
                        inline-flex
                        rounded-full
                        border
                        border-[#52B788]/30
                        bg-[#52B788]/10
                        px-5
                        py-2
                        text-sm
                        font-semibold
                        text-[#52B788]
                        "
                        >
                            Contact Us
                        </span>

                        <h1
                            className="
                        mt-6
                        text-4xl
                        font-bold
                        leading-tight
                        text-white
                        md:text-6xl
                        "
                        >
                            Let's Build Something
                            <span className="text-[#52B788]">
                                {" "}Amazing Together
                            </span>
                        </h1>

                        <p
                            className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        text-lg
                        leading-relaxed
                        text-slate-300
                        "
                        >
                            Whether you need a modern website, web application,
                            branding or digital solutions, our team is ready
                            to help turn your ideas into reality.
                        </p>
                        <Link href="/Form">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="
                        mt-10
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        bg-[#52B788]
                        px-8
                        py-4
                        font-semibold
                        text-black
                        transition
                        hover:gap-5
                        "
                            >
                                Start Your Project
                                <ArrowRight size={20} />
                            </motion.button>
                        </Link>

                    </motion.div>

                    {/* Contact Cards */}

                    <div
                        className="
                    mt-20
                    grid
                    gap-8
                    sm:grid-cols-2
                    lg:grid-cols-4
                    "
                    >

                        {contactInfo.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: index * 0.15,
                                        duration: 0.6,
                                    }}
                                    whileHover={{
                                        y: -10,
                                    }}
                                    className="
                                group
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/5
                                p-8
                                backdrop-blur-xl
                                transition-all
                                duration-300
                                hover:border-[#52B788]/50
                                "
                                >

                                    <div
                                        className="
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-[#52B788]/15
                                    text-[#52B788]
                                    transition
                                    group-hover:rotate-6
                                    group-hover:scale-110
                                    "
                                    >
                                        <Icon size={30} />
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 font-semibold text-[#52B788]">
                                        {item.value}
                                    </p>

                                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                                        {item.description}
                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>
                    {/* Contact Form + Google Map */}

                    <div className="mt-24 grid gap-10 lg:grid-cols-2">

                        {/* Contact Form */}

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        "
                        >

                            <h2 className="text-3xl font-bold text-white">
                                Send Us a Message
                            </h2>

                            <p className="mt-3 text-slate-300">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>

                            <form className="mt-8 space-y-6">

                                <div className="grid gap-6 md:grid-cols-2">

                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-4
                    text-white
                    outline-none
                    transition
                    focus:border-[#52B788]
                    focus:ring-2
                    focus:ring-[#52B788]/30
                    "
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-4
                    text-white
                    outline-none
                    transition
                    focus:border-[#52B788]
                    focus:ring-2
                    focus:ring-[#52B788]/30
                    "
                                    />

                                </div>

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                text-white
                outline-none
                transition
                focus:border-[#52B788]
                focus:ring-2
                focus:ring-[#52B788]/30
                "
                                />

                                <textarea
                                    rows={6}
                                    placeholder="Write your message..."
                                    className="
                w-full
                resize-none
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                text-white
                outline-none
                transition
                focus:border-[#52B788]
                focus:ring-2
                focus:ring-[#52B788]/30
                "
                                />

                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="
                flex
                items-center
                gap-3
                rounded-xl
                bg-[#52B788]
                px-8
                py-4
                font-semibold
                text-black
                transition
                hover:gap-5
                "
                                >
                                    Send Message
                                    <ArrowRight size={20} />
                                </motion.button>

                            </form>

                        </motion.div>

                        {/* Google Map */}

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        "
                        >

                            <div className="p-8">

                                <h2 className="text-3xl font-bold text-white">
                                    Find Our Office
                                </h2>

                                <p className="mt-3 text-slate-300">
                                    Visit us or schedule a meeting to discuss your next project.
                                </p>

                            </div>

                            <iframe
                                src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
                                className="h-[450px] w-full border-0"
                                loading="lazy"
                                allowFullScreen
                            />

                        </motion.div>

                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="mt-28"
                >

                    <div className="text-center">

                        <h2 className="text-4xl font-bold text-white">
                            Frequently Asked Questions
                        </h2>

                        <p className="mt-4 text-slate-300">
                            Everything you need to know before starting your project.
                        </p>

                    </div>

                    <div className="mx-auto mt-12 max-w-4xl space-y-5">

                        {faqs.map((faq, index) => (

                            <motion.div

                                key={index}

                                whileHover={{ scale: 1.01 }}

                                className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                "

                            >

                                <button

                                    onClick={() =>
                                        setOpenFAQ(openFAQ === index ? null : index)
                                    }

                                    className="
                    flex
                    w-full
                    items-center
                    justify-between
                    p-6
                    text-left
                    "

                                >

                                    <h3 className="font-semibold text-white">
                                        {faq.question}
                                    </h3>

                                    <ChevronDown

                                        className={`transition duration-300 ${openFAQ === index ? "rotate-180" : ""
                                            }`}

                                    />

                                </button>

                                <motion.div

                                    initial={false}

                                    animate={{
                                        height: openFAQ === index ? "auto" : 0,
                                        opacity: openFAQ === index ? 1 : 0,
                                    }}

                                    className="overflow-hidden"

                                >

                                    <p className="px-6 pb-6 text-slate-300">

                                        {faq.answer}

                                    </p>

                                </motion.div>

                            </motion.div>

                        ))}

                    </div>

                </motion.div>
                <motion.div

                    initial={{ opacity: 0, y: 50 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .7 }}

                    className="
    mt-24
    rounded-[40px]
    bg-gradient-to-r
    from-[#52B788]
    to-[#40916C]
    p-12
    text-center
    "

                >

                    <h2 className="text-4xl font-bold text-[#081C15]">

                        Ready to Start Your Next Project?

                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-[#123524]">

                        Let's build a fast, modern and high-quality website that helps
                        your business grow.

                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        <Link href="/Form">
                            <button
                                className="
            rounded-full
            bg-[#081C15]
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
            "
                            >
                                Get Started
                            </button>
                        </Link>
                        <Link href="/schedule-call">
                            <button
                                className="
            rounded-full
            border
            border-[#081C15]
            px-8
            py-4
            font-semibold
            text-[#081C15]
            transition
            hover:bg-[#081C15]
            hover:text-white
            "
                            >
                                Schedule a Call
                            </button>
                        </Link>
                    </div>

                </motion.div>
            </section>
        </main>
    );
}