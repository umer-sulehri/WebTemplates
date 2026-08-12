"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getTeams } from "@/lib/api/team";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    ArrowUpRight,
    Mail,
    Phone,
    BriefcaseBusiness,
    GraduationCap,
} from "lucide-react";
import {
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
    FaTwitter,
} from "react-icons/fa";



export default function TeamPage() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const data = await getTeams();

                console.log("Team API Response:", data);

                setTeamMembers(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Failed to fetch team:", error);
                setTeamMembers([]);
            } finally {
                setLoading(false);
            }
        };

        fetchTeams();
    }, []);
    return (
        <main className="min-h-screen overflow-hidden bg-[#081C15] text-white">
            <Navbar />
            {/* =====================================================
          HERO
      ====================================================== */}

            <section className="relative px-6 pb-24 pt-24 md:pb-32 md:pt-28">

                {/* Background Glow */}
                <motion.div
                    animate={{
                        x: [0, 80, -40, 0],
                        y: [0, -30, 50, 0],
                        scale: [1, 1.15, 0.95, 1],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#52D681]/10 blur-[120px]"
                />

                <motion.div
                    animate={{
                        x: [0, -60, 30, 0],
                        y: [0, 40, -30, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-[#7AE582]/10 blur-[120px]"
                />

                <div className="mx-auto max-w-7xl">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* LEFT */}
                        <div>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#52D681]/30 bg-[#52D681]/10 px-5 py-2 text-sm font-medium text-[#7AE582]"
                            >
                                <span className="h-2 w-2 animate-pulse rounded-full bg-[#52D681]" />
                                OUR TEAM
                            </motion.div>

                            <div className="overflow-hidden">

                                <motion.h1
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[82px]"
                                >
                                    Meet
                                    <span className="block bg-gradient-to-r from-[#7AE582] to-[#52D681] bg-clip-text text-transparent">
                                        Our Team
                                    </span>
                                </motion.h1>

                            </div>

                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 110 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="mt-7 h-1 rounded-full bg-[#52D681]"
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="mt-7 max-w-xl text-lg leading-8 text-gray-300"
                            >
                                Meet the talented people behind our ideas, designs and
                                digital experiences. Different skills, one vision.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="mt-10 flex gap-10"
                            >
                                <div>
                                    <h3 className="text-3xl font-bold text-white">20+</h3>
                                    <p className="mt-1 text-sm text-gray-400">
                                        Team Members
                                    </p>
                                </div>

                                <div className="h-12 w-px bg-white/10" />

                                <div>
                                    <h3 className="text-3xl font-bold text-[#7AE582]">
                                        100+
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-400">
                                        Projects
                                    </p>
                                </div>

                                <div className="h-12 w-px bg-white/10" />

                                <div>
                                    <h3 className="text-3xl font-bold text-white">8+</h3>
                                    <p className="mt-1 text-sm text-gray-400">
                                        Years
                                    </p>
                                </div>
                            </motion.div>

                        </div>

                        {/* HERO IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, x: 80, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative mx-auto w-full max-w-[500px]"
                        >

                            {/* Rotating Circle */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-dashed border-[#52D681]/40"
                            />

                            {/* Main Image */}
                            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#102E22] p-3 shadow-2xl">

                                <div className="relative overflow-hidden rounded-[25px]">

                                    <motion.img
                                        src={teamMembers[0]?.image || "/devonsite.jpg"}
                                        alt="Team member"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="aspect-[0.9] w-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#081C15] via-transparent to-transparent" />

                                    <div className="absolute bottom-7 left-7">

                                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7AE582]">
                                            Together We Create
                                        </p>

                                        <h3 className="mt-2 text-2xl font-bold">
                                            Ideas Into Reality
                                        </h3>

                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -left-6 top-12 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#52D681]/30 bg-[#102E22]/90 shadow-[0_0_35px_rgba(82,214,129,.2)] backdrop-blur-xl"
                            >
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-[#7AE582]">
                                        01
                                    </p>
                                    <p className="text-[9px] uppercase tracking-widest text-gray-400">
                                        Team
                                    </p>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          TEAM SECTION
      ====================================================== */}

            <section className="px-6 pb-32">

                <div className="mx-auto max-w-7xl">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mx-auto max-w-3xl text-center"
                    >

                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7AE582]">
                            THE PEOPLE
                        </p>

                        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                            The Minds Behind
                            <span className="block text-[#7AE582]">
                                Our Work
                            </span>
                        </h2>

                        <p className="mt-5 text-gray-300">
                            Get to know the talented people who bring creativity,
                            technology and strategy together.
                        </p>

                    </motion.div>

                    {/* CARDS */}
                    <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

                        {loading ? (
                            <div className="col-span-full py-20 text-center">
                                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-[#52D681]/30 border-t-[#52D681]" />
                                <p className="mt-4 text-gray-400">
                                    Loading team members...
                                </p>
                            </div>
                        ) : teamMembers.length === 0 ? (
                            <div className="col-span-full py-20 text-center">
                                <p className="text-gray-400">
                                    No team members found.
                                </p>
                            </div>
                        ) : (
                            teamMembers.map((member, index) => (
                                <motion.button
                                    key={member.id}
                                    initial={{
                                        opacity: 0,
                                        y: 60,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.15,
                                    }}
                                    transition={{
                                        duration: 0.65,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{
                                        y: -10,
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    onClick={() => setSelectedMember(member)}
                                    className="group text-left"
                                >

                                    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#102E22]">

                                        {/* Image */}
                                        <div className="relative aspect-[0.9] overflow-hidden">

                                            <motion.img
                                                src={member.image}
                                                alt={member.name}
                                                whileHover={{ scale: 1.08 }}
                                                transition={{ duration: 0.6 }}
                                                className="h-full w-full object-cover"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#081C15] via-transparent to-transparent" />

                                            {/* Number */}
                                            <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#081C15]/70 backdrop-blur-md">
                                                <span className="text-sm font-bold text-[#7AE582]">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            {/* Arrow */}
                                            <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#52D681] text-[#081C15] opacity-0 transition-all duration-300 group-hover:opacity-100">
                                                <ArrowUpRight size={19} />
                                            </div>

                                            {/* Name */}
                                            <div className="absolute bottom-6 left-6 right-6">

                                                <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-[#7AE582]">
                                                    {member.name}
                                                </h3>

                                                <p className="mt-1 text-sm font-medium text-[#7AE582]">
                                                    {member.role}
                                                </p>

                                            </div>

                                        </div>

                                        {/* Bottom */}
                                        <div className="flex items-center justify-between border-t border-white/10 px-6 py-5">

                                            <span className="text-sm text-gray-400">
                                                View Details
                                            </span>

                                            <span className="text-[#7AE582] transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>

                                        </div>

                                    </div>
                                </motion.button>
                            ))
                        )}

                    </div>
                </div>
            </section>

            {/* =====================================================
          SIDE DETAIL PANEL
      ====================================================== */}

            <AnimatePresence>

                {selectedMember && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
                        />

                        {/* Side Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 280,
                                damping: 30,
                            }}
                            className="fixed right-0 top-0 z-50 h-full w-full max-w-xl overflow-y-auto border-l border-white/10 bg-[#081C15] shadow-2xl"
                        >

                            {/* Close */}
                            <div className="sticky top-0 z-20 flex justify-end bg-[#081C15]/80 p-5 backdrop-blur-xl">

                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-[#52D681] hover:text-[#081C15]"
                                >
                                    <X size={20} />
                                </button>

                            </div>

                            <div className="px-6 pb-12 sm:px-8">

                                {/* Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="overflow-hidden rounded-[28px] border border-white/10"
                                >
                                    <img
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        className="aspect-[1.05] w-full object-cover"
                                    />
                                </motion.div>

                                {/* Name */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="mt-7"
                                >
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7AE582]">
                                        {selectedMember.role}
                                    </p>

                                    <h2 className="mt-2 text-4xl font-black">
                                        {selectedMember.name}
                                    </h2>
                                </motion.div>

                                {/* About */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-8"
                                >
                                    <h3 className="text-lg font-bold">
                                        About
                                    </h3>

                                    <p className="mt-3 leading-7 text-gray-300">
                                        {selectedMember.bio}
                                    </p>
                                </motion.div>

                                {/* Info */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-8 grid grid-cols-2 gap-4"
                                >

                                    <div className="rounded-2xl border border-white/10 bg-[#102E22] p-5">

                                        <BriefcaseBusiness
                                            className="text-[#7AE582]"
                                            size={21}
                                        />

                                        <p className="mt-3 text-xs uppercase tracking-wider text-gray-500">
                                            Experience
                                        </p>

                                        <p className="mt-1 font-bold">
                                            {selectedMember.experience}
                                        </p>

                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-[#102E22] p-5">

                                        <GraduationCap
                                            className="text-[#7AE582]"
                                            size={21}
                                        />

                                        <p className="mt-3 text-xs uppercase tracking-wider text-gray-500">
                                            Education
                                        </p>

                                        <p className="mt-1 font-bold">
                                            {selectedMember.education}
                                        </p>

                                    </div>

                                </motion.div>

                                {/* Skills */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-8"
                                >

                                    <h3 className="text-lg font-bold">
                                        Expertise
                                    </h3>

                                    <div className="mt-4 flex flex-wrap gap-2">

                                        {(Array.isArray(selectedMember.skills)
                                            ? selectedMember.skills
                                            : JSON.parse(selectedMember.skills || "[]")
                                        ).map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-[#52D681]/25 bg-[#52D681]/10 px-4 py-2 text-sm text-[#7AE582]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                </motion.div>

                                {/* Contact */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-8"
                                >

                                    <h3 className="text-lg font-bold">
                                        Contact
                                    </h3>

                                    <div className="mt-4 space-y-3">

                                        <a
                                            href={`mailto:${selectedMember.email}`}
                                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#102E22] p-4 text-gray-300 transition hover:border-[#52D681]/30 hover:text-[#7AE582]"
                                        >
                                            <Mail size={18} />
                                            {selectedMember.email}
                                        </a>

                                        <a
                                            href={`tel:${selectedMember.phone}`}
                                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#102E22] p-4 text-gray-300 transition hover:border-[#52D681]/30 hover:text-[#7AE582]"
                                        >
                                            <Phone size={18} />
                                            {selectedMember.phone}
                                        </a>

                                    </div>

                                </motion.div>

                                {/* Social */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="mt-8"
                                >

                                    <h3 className="text-lg font-bold">
                                        Social Profiles
                                    </h3>

                                    <div className="mt-4 flex gap-3">

                                        <a
                                            href={selectedMember.linkedin}
                                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#102E22] text-gray-300 transition hover:bg-[#52D681] hover:text-[#081C15]"
                                        >
                                            <FaLinkedinIn />
                                        </a>

                                        <a
                                            href={selectedMember.instagram}
                                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#102E22] text-gray-300 transition hover:bg-[#52D681] hover:text-[#081C15]"
                                        >
                                            <FaInstagram />
                                        </a>

                                        <a
                                            href={selectedMember.facebook}
                                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#102E22] text-gray-300 transition hover:bg-[#52D681] hover:text-[#081C15]"
                                        >
                                            <FaFacebookF />
                                        </a>

                                        <a
                                            href={selectedMember.twitter}
                                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#102E22] text-gray-300 transition hover:bg-[#52D681] hover:text-[#081C15]"
                                        >
                                            <FaTwitter />
                                        </a>

                                    </div>

                                </motion.div>

                            </div>
                        </motion.div>
                    </>
                )}

            </AnimatePresence>
        </main>
    );
}