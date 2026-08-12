"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Plus,
    Search,
    Pencil,
    Trash2,
    X,
    Upload,
    UserRound,
    BriefcaseBusiness,
    Mail,
    Phone,
    Eye,
} from "lucide-react";
import {
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
    FaTwitter,
} from "react-icons/fa";

const initialMembers = [
    {
        id: 1,
        name: "Alex Morgan",
        role: "Chief Executive Officer",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
        bio: "Alex leads the team with a strong focus on innovation, strategy and digital growth.",
        experience: "10+ Years",
        email: "alex@example.com",
        phone: "+92 300 1234567",
        status: true,
    },
    {
        id: 2,
        name: "Sophia Williams",
        role: "Creative Director",
        image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
        bio: "Sophia creates memorable digital experiences through creative direction and design.",
        experience: "8+ Years",
        email: "sophia@example.com",
        phone: "+92 301 1234567",
        status: true,
    },
    {
        id: 3,
        name: "Daniel Carter",
        role: "Lead Developer",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
        bio: "Daniel builds scalable applications and reliable technical solutions.",
        experience: "7+ Years",
        email: "daniel@example.com",
        phone: "+92 302 1234567",
        status: true,
    },
];

const emptyForm = {
    name: "",
    role: "",
    image: "",
    bio: "",
    experience: "",
    education: "",
    email: "",
    phone: "",
    skills: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    twitter: "",
    status: true,
};

export default function TeamAdminPage() {
    const [members, setMembers] = useState(initialMembers);
    const [search, setSearch] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const [form, setForm] = useState(emptyForm);
    const [preview, setPreview] = useState("");

    const activeMembers = members.filter((item) => item.status).length;
    const inactiveMembers = members.length - activeMembers;

    const filteredMembers = members.filter((member) =>
        `${member.name} ${member.role}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    // -----------------------------------------
    // FORM CHANGE
    // -----------------------------------------

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // -----------------------------------------
    // IMAGE
    // -----------------------------------------

    const handleImage = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        setPreview(imageUrl);

        setForm((prev) => ({
            ...prev,
            image: imageUrl,
        }));
    };

    // -----------------------------------------
    // ADD
    // -----------------------------------------

    const openAdd = () => {
        setSelectedMember(null);
        setForm(emptyForm);
        setPreview("");
        setShowModal(true);
    };

    // -----------------------------------------
    // EDIT
    // -----------------------------------------

    const openEdit = (member) => {
        setSelectedMember(member);

        setForm({
            name: member.name || "",
            role: member.role || "",
            image: member.image || "",
            bio: member.bio || "",
            experience: member.experience || "",
            education: member.education || "",
            email: member.email || "",
            phone: member.phone || "",
            skills: member.skills || "",
            linkedin: member.linkedin || "",
            instagram: member.instagram || "",
            facebook: member.facebook || "",
            twitter: member.twitter || "",
            status: member.status,
        });

        setPreview(member.image || "");
        setShowModal(true);
    };

    // -----------------------------------------
    // SAVE
    // -----------------------------------------

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.role) {
            alert("Name and designation are required.");
            return;
        }

        if (selectedMember) {
            setMembers((prev) =>
                prev.map((member) =>
                    member.id === selectedMember.id
                        ? {
                            ...member,
                            ...form,
                        }
                        : member
                )
            );
        } else {
            setMembers((prev) => [
                {
                    ...form,
                    id: Date.now(),
                },
                ...prev,
            ]);
        }

        closeModal();
    };

    // -----------------------------------------
    // DELETE
    // -----------------------------------------

    const deleteMember = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this team member?"
        );

        if (!confirmDelete) return;

        setMembers((prev) => prev.filter((member) => member.id !== id));
    };

    // -----------------------------------------
    // CLOSE
    // -----------------------------------------

    const closeModal = () => {
        setShowModal(false);
        setSelectedMember(null);
        setForm(emptyForm);
        setPreview("");
    };

    return (
        <div className="min-h-screen bg-[#071A16] px-4 py-5 text-white md:px-6 lg:px-8">

            {/* =====================================================
          PAGE HEADER
      ====================================================== */}

            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-center"
            >
                <div>
                    <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                        Team
                    </h1>

                    <p className="mt-1 text-sm text-[#8FA7A1]">
                        Manage your team members and their information.
                    </p>
                </div>

                <button
                    onClick={openAdd}
                    className="flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-[#168BFF] to-[#7C3AED] px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-500/10 transition hover:scale-[1.02]"
                >
                    <Plus size={18} />
                    Add Team Member
                </button>
            </motion.div>

            {/* =====================================================
          STATS
      ====================================================== */}

            <div className="mb-7 grid gap-4 md:grid-cols-3">

                <StatCard
                    title="Total Team"
                    value={members.length}
                    icon={<UserRound size={21} />}
                />

                <StatCard
                    title="Active Members"
                    value={activeMembers}
                    icon={<Eye size={21} />}
                />

                <StatCard
                    title="Inactive Members"
                    value={inactiveMembers}
                    icon={<UserRound size={21} />}
                />

            </div>

            {/* =====================================================
          MAIN CARD
      ====================================================== */}

            <div className="rounded-2xl border border-white/[0.07] bg-[#102722] shadow-xl">

                {/* CARD HEADER */}

                <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] p-5 md:flex-row md:items-center">

                    <div>
                        <h2 className="text-lg font-semibold">
                            Team Members
                        </h2>

                        <p className="mt-1 text-xs text-[#82958F]">
                            All members added to your website.
                        </p>
                    </div>

                    {/* SEARCH */}

                    <div className="relative w-full md:w-72">

                        <Search
                            size={17}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71827D]"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search members..."
                            className="w-full rounded-xl border border-white/[0.08] bg-[#0A1F1A] py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-[#63736E] focus:border-[#168BFF]/50"
                        />

                    </div>

                </div>

                {/* =================================================
            TABLE
        ================================================== */}

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[850px]">

                        <thead>
                            <tr className="border-b border-white/[0.06] text-left text-xs uppercase tracking-wider text-[#6F827C]">

                                <th className="px-5 py-4 font-medium">
                                    Member
                                </th>

                                <th className="px-5 py-4 font-medium">
                                    Role
                                </th>

                                <th className="px-5 py-4 font-medium">
                                    Experience
                                </th>

                                <th className="px-5 py-4 font-medium">
                                    Status
                                </th>

                                <th className="px-5 py-4 text-right font-medium">
                                    Actions
                                </th>

                            </tr>
                        </thead>

                        <tbody>

                            {filteredMembers.map((member, index) => (
                                <motion.tr
                                    key={member.id}
                                    initial={{
                                        opacity: 0,
                                        x: -15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: index * 0.05,
                                    }}
                                    className="border-b border-white/[0.05] transition hover:bg-white/[0.025]"
                                >

                                    {/* MEMBER */}

                                    <td className="px-5 py-4">

                                        <div className="flex items-center gap-3">

                                            <div className="h-12 w-12 overflow-hidden rounded-xl bg-[#16342C]">

                                                {member.image ? (
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center">
                                                        <UserRound
                                                            size={20}
                                                            className="text-[#55716A]"
                                                        />
                                                    </div>
                                                )}

                                            </div>

                                            <div>
                                                <p className="font-medium">
                                                    {member.name}
                                                </p>

                                                <p className="mt-0.5 text-xs text-[#71827D]">
                                                    {member.email || "No email"}
                                                </p>
                                            </div>

                                        </div>

                                    </td>

                                    {/* ROLE */}

                                    <td className="px-5 py-4">

                                        <span className="text-sm text-[#C2D0CC]">
                                            {member.role}
                                        </span>

                                    </td>

                                    {/* EXPERIENCE */}

                                    <td className="px-5 py-4">

                                        <div className="flex items-center gap-2 text-sm text-[#A8B9B4]">

                                            <BriefcaseBusiness
                                                size={16}
                                                className="text-[#168BFF]"
                                            />

                                            {member.experience || "—"}

                                        </div>

                                    </td>

                                    {/* STATUS */}

                                    <td className="px-5 py-4">

                                        <span
                                            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${member.status
                                                    ? "bg-[#168BFF]/10 text-[#56A9FF]"
                                                    : "bg-white/5 text-[#75857F]"
                                                }`}
                                        >

                                            <span
                                                className={`h-1.5 w-1.5 rounded-full ${member.status
                                                        ? "bg-[#168BFF]"
                                                        : "bg-[#687772]"
                                                    }`}
                                            />

                                            {member.status ? "Active" : "Inactive"}

                                        </span>

                                    </td>

                                    {/* ACTIONS */}

                                    <td className="px-5 py-4">

                                        <div className="flex justify-end gap-2">

                                            <button
                                                onClick={() => openEdit(member)}
                                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-[#8D9D98] transition hover:border-[#168BFF]/30 hover:bg-[#168BFF]/10 hover:text-[#56A9FF]"
                                                title="Edit"
                                            >
                                                <Pencil size={16} />
                                            </button>

                                            <button
                                                onClick={() => deleteMember(member.id)}
                                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-500/10 bg-red-500/[0.03] text-red-400 transition hover:bg-red-500/10"
                                                title="Delete"
                                            >
                                                <Trash2 size={16} />
                                            </button>

                                        </div>

                                    </td>

                                </motion.tr>
                            ))}

                        </tbody>

                    </table>

                </div>

                {/* EMPTY */}

                {filteredMembers.length === 0 && (
                    <div className="px-5 py-20 text-center">

                        <UserRound
                            size={40}
                            className="mx-auto text-[#425A53]"
                        />

                        <h3 className="mt-4 font-semibold">
                            No team members found
                        </h3>

                        <p className="mt-1 text-sm text-[#657771]">
                            Try another search or add a new member.
                        </p>

                    </div>
                )}

            </div>

            {/* =====================================================
          ADD / EDIT MODAL
      ====================================================== */}

            <AnimatePresence>

                {showModal && (
                    <>
                        {/* Overlay */}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
                        />

                        {/* Modal */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.96,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.96,
                                y: 20,
                            }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >

                            <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/[0.08] bg-[#0B201B] shadow-2xl">

                                {/* MODAL HEADER */}

                                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.07] bg-[#0B201B]/95 px-6 py-5 backdrop-blur-xl">

                                    <div>
                                        <h2 className="text-lg font-semibold">
                                            {selectedMember
                                                ? "Edit Team Member"
                                                : "Add Team Member"}
                                        </h2>

                                        <p className="mt-1 text-xs text-[#71827D]">
                                            Add member information for the website.
                                        </p>
                                    </div>

                                    <button
                                        onClick={closeModal}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-[#82938D] transition hover:bg-white/5 hover:text-white"
                                    >
                                        <X size={18} />
                                    </button>

                                </div>

                                {/* FORM */}

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6 p-6"
                                >

                                    {/* IMAGE */}

                                    <div>

                                        <label className="mb-2 block text-sm font-medium text-[#C4D0CC]">
                                            Profile Image
                                        </label>

                                        <div className="flex items-center gap-5">

                                            <div className="h-24 w-24 overflow-hidden rounded-xl border border-white/[0.08] bg-[#132D26]">

                                                {preview ? (
                                                    <img
                                                        src={preview}
                                                        alt="Preview"
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center">
                                                        <UserRound
                                                            className="text-[#526A63]"
                                                        />
                                                    </div>
                                                )}

                                            </div>

                                            <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-[#AAB9B4] transition hover:border-[#168BFF]/30 hover:text-[#56A9FF]">

                                                <Upload size={16} />

                                                Upload Image

                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImage}
                                                    className="hidden"
                                                />

                                            </label>

                                        </div>

                                    </div>

                                    {/* BASIC */}

                                    <div className="grid gap-5 md:grid-cols-2">

                                        <FormInput
                                            label="Full Name"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Alex Morgan"
                                            required
                                        />

                                        <FormInput
                                            label="Designation"
                                            name="role"
                                            value={form.role}
                                            onChange={handleChange}
                                            placeholder="Lead Developer"
                                            required
                                        />

                                        <FormInput
                                            label="Experience"
                                            name="experience"
                                            value={form.experience}
                                            onChange={handleChange}
                                            placeholder="7+ Years"
                                        />

                                        <FormInput
                                            label="Education"
                                            name="education"
                                            value={form.education}
                                            onChange={handleChange}
                                            placeholder="BS Computer Science"
                                        />

                                        <FormInput
                                            label="Email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="email@example.com"
                                            type="email"
                                        />

                                        <FormInput
                                            label="Phone"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+92 300 1234567"
                                        />

                                    </div>

                                    {/* BIO */}

                                    <div>

                                        <label className="mb-2 block text-sm font-medium text-[#C4D0CC]">
                                            Biography
                                        </label>

                                        <textarea
                                            name="bio"
                                            value={form.bio}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Write team member biography..."
                                            className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#102722] px-4 py-3 text-sm text-white outline-none placeholder:text-[#536660] focus:border-[#168BFF]/40"
                                        />

                                    </div>

                                    {/* SKILLS */}

                                    <FormInput
                                        label="Skills"
                                        name="skills"
                                        value={form.skills}
                                        onChange={handleChange}
                                        placeholder="React, Laravel, UI/UX"
                                    />

                                    {/* SOCIAL */}

                                    <div>

                                        <p className="mb-4 text-sm font-semibold text-[#C4D0CC]">
                                            Social Profiles
                                        </p>

                                        <div className="grid gap-5 md:grid-cols-2">

                                            <SocialInput
                                                icon={<FaLinkedinIn />}
                                                label="LinkedIn"
                                                name="linkedin"
                                                value={form.linkedin}
                                                onChange={handleChange}
                                            />

                                            <SocialInput
                                                icon={<FaInstagram />}
                                                label="Instagram"
                                                name="instagram"
                                                value={form.instagram}
                                                onChange={handleChange}
                                            />

                                            <SocialInput
                                                icon={<FaFacebookF />}
                                                label="Facebook"
                                                name="facebook"
                                                value={form.facebook}
                                                onChange={handleChange}
                                            />

                                            <SocialInput
                                                icon={<FaTwitter />}
                                                label="Twitter"
                                                name="twitter"
                                                value={form.twitter}
                                                onChange={handleChange}
                                            />

                                        </div>

                                    </div>

                                    {/* STATUS */}

                                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.07] bg-[#102722] p-4">

                                        <input
                                            type="checkbox"
                                            name="status"
                                            checked={form.status}
                                            onChange={handleChange}
                                            className="h-4 w-4 accent-[#168BFF]"
                                        />

                                        <div>
                                            <p className="text-sm font-medium">
                                                Active Member
                                            </p>

                                            <p className="mt-1 text-xs text-[#687A74]">
                                                Active members will appear on the website.
                                            </p>
                                        </div>

                                    </label>

                                    {/* FOOTER */}

                                    <div className="flex justify-end gap-3 border-t border-white/[0.07] pt-5">

                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="rounded-xl border border-white/[0.08] px-5 py-2.5 text-sm text-[#A0AEA9] transition hover:bg-white/5"
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="rounded-xl bg-gradient-to-r from-[#168BFF] to-[#7C3AED] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition hover:opacity-90"
                                        >
                                            {selectedMember
                                                ? "Update Member"
                                                : "Add Member"}
                                        </button>

                                    </div>

                                </form>

                            </div>

                        </motion.div>
                    </>
                )}

            </AnimatePresence>
        </div>
    );
}


/* =========================================================
   STAT CARD
========================================================= */

function StatCard({ title, value, icon }) {
    return (
        <motion.div
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-white/[0.07] bg-[#102722] p-5"
        >
            <div className="flex items-center justify-between">

                <div>
                    <p className="text-sm text-[#82958F]">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {value}
                    </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#168BFF]/15 to-[#7C3AED]/15 text-[#56A9FF]">
                    {icon}
                </div>

            </div>
        </motion.div>
    );
}


/* =========================================================
   FORM INPUT
========================================================= */

function FormInput({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    required = false,
}) {
    return (
        <div>

            <label className="mb-2 block text-sm font-medium text-[#C4D0CC]">
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full rounded-xl border border-white/[0.08] bg-[#102722] px-4 py-3 text-sm text-white outline-none placeholder:text-[#536660] focus:border-[#168BFF]/40"
            />

        </div>
    );
}


/* =========================================================
   SOCIAL INPUT
========================================================= */

function SocialInput({
    icon,
    label,
    name,
    value,
    onChange,
}) {
    return (
        <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#C4D0CC]">

                <span className="text-[#56A9FF]">
                    {icon}
                </span>

                {label}

            </label>

            <input
                type="url"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={`https://${label.toLowerCase()}.com/...`}
                className="w-full rounded-xl border border-white/[0.08] bg-[#102722] px-4 py-3 text-sm text-white outline-none placeholder:text-[#536660] focus:border-[#168BFF]/40"
            />

        </div>
    );
}