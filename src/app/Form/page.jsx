"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Mail,
    Phone,
    Building2,
    Briefcase,
    FileText,
    ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { submitForm } from "@/lib/api/form";

export default function ContactPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        full_name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        project_title: "",
        description: "",
        budget: "",
        timeline: "",
        contact_method: "Email",
        requirement_file: null,
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {

            const formData = new FormData();

            formData.append("full_name", form.full_name);
            formData.append("email", form.email);
            formData.append("phone", form.phone);
            formData.append("company", form.company);
            formData.append("service", form.service);
            formData.append("project_title", form.project_title);
            formData.append("description", form.description);
            formData.append("budget", form.budget);
            formData.append("timeline", form.timeline);
            formData.append("contact_method", form.contact_method);


            if (form.requirement_file) {
                formData.append(
                    "requirement_file",
                    form.requirement_file
                );
            }


            const response = await submitForm(formData);

            console.log(response);

            alert("Request submitted successfully");


            setForm({
                full_name: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                project_title: "",
                description: "",
                budget: "",
                timeline: "",
                contact_method: "Email",
                requirement_file: null,
            });


        } catch (error) {

            console.log(
                error.response?.data || error.message
            );

        } finally {

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
                    y: [0, -40, 0],
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
                className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-teal-400/20 blur-[120px]"
            />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">

                <div className="grid w-full overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-3xl lg:grid-cols-2">

                    {/* LEFT */}

                    <div className="relative overflow-hidden border-b border-white/10 p-10 lg:border-b-0 lg:border-r">

                        <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-300">
                            DEVONSITE
                        </span>

                        <h1 className="mt-8 text-5xl font-bold leading-tight text-white">

                            Let's Build Your

                            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                                Dream Project
                            </span>

                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">

                            Fill out the project inquiry form and our team will contact
                            you within 24 hours with the best solution.

                        </p>

                        <div className="mt-12 space-y-5">

                            {[
                                "Modern UI/UX Design",
                                "Fast Development",
                                "SEO Friendly",
                                "Premium Support",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                                        ✓
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

                        <div className="mb-8">

                            <span className="text-sm uppercase tracking-[4px] text-emerald-400">
                                Get Started
                            </span>

                            <h2 className="mt-3 text-4xl font-bold text-white">
                                Project Inquiry Form
                            </h2>

                            <p className="mt-3 text-slate-400">
                                Complete the information below.
                            </p>

                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* Row 1 */}

                            <div className="grid gap-5 md:grid-cols-2">

                                <div className="relative">

                                    <User
                                        size={18}
                                        className="absolute left-4 top-4 text-emerald-400"
                                    />

                                    <input
                                        type="text"
                                        name="full_name"
                                        value={form.full_name}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                full_name: e.target.value
                                            })
                                        }
                                        placeholder="Full Name"
                                        required
                                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500"
                                    />
                                </div>

                                <div className="relative">

                                    <Mail
                                        size={18}
                                        className="absolute left-4 top-4 text-emerald-400"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                email: e.target.value,
                                            })
                                        }
                                        placeholder="Email Address"
                                        required
                                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500"

                                    />

                                </div>

                            </div>

                            {/* Row 2 */}

                            <div className="grid gap-5 md:grid-cols-2">

                                <div className="relative">

                                    <Phone
                                        size={18}
                                        className="absolute left-4 top-4 text-emerald-400"
                                    />

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                phone: e.target.value,
                                            })
                                        }
                                        placeholder="Phone Number"
                                        required
                                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500"

                                    />

                                </div>

                                <div className="relative">

                                    <Building2
                                        size={18}
                                        className="absolute left-4 top-4 text-emerald-400"
                                    />

                                    <input
                                        type="text"
                                        name="company"
                                        value={form.company}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                company: e.target.value,
                                            })
                                        }
                                        placeholder="Company Name"
                                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500"
                                    />

                                </div>

                            </div>
                            {/* Service */}

                            <div>
                                <label className="mb-3 block text-sm font-medium text-slate-300">
                                    Select Service
                                </label>

                                <div className="grid gap-4 md:grid-cols-2">

                                    {[
                                        "Website Development",
                                        "E-Commerce",
                                        "Dashboard",
                                        "Mobile App",
                                        "UI / UX Design",
                                        "SEO",
                                    ].map((service) => (
                                        <label
                                            key={service}
                                            className="group cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="service"
                                                value={service}
                                                checked={form.service === service}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        service: e.target.value,
                                                    })
                                                }
                                                className="hidden peer"
                                            />

                                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-emerald-400 peer-checked:border-emerald-500 peer-checked:bg-emerald-500/10">

                                                <div className="flex items-center gap-3">

                                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                                                        <Briefcase size={18} />
                                                    </div>

                                                    <div>

                                                        <h4 className="font-semibold text-white">
                                                            {service}
                                                        </h4>

                                                        <p className="text-sm text-slate-400">
                                                            Premium Quality
                                                        </p>

                                                    </div>

                                                </div>

                                            </div>

                                        </label>
                                    ))}

                                </div>

                            </div>

                            {/* Project Title */}

                            <div className="relative">

                                <FileText
                                    size={18}
                                    className="absolute left-4 top-4 text-emerald-400"
                                />

                                <input
                                    type="text"
                                    name="project_title"
                                    value={form.project_title}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            project_title: e.target.value,
                                        })
                                    }
                                    placeholder="Project Title"
                                    required
                                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500"
                                />

                            </div>

                            {/* Description */}

                            <div>

                                <textarea
                                    name="description"
                                    rows={6}
                                    value={form.description}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            description: e.target.value,
                                        })
                                    }
                                    placeholder="Describe your project..."
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-emerald-500"
                                />

                            </div>

                            {/* Budget + Timeline */}

                            <div className="grid gap-5 md:grid-cols-2">

                                <select
                                    value={form.budget}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            budget: e.target.value,
                                        })
                                    }
                                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500"
                                >
                                    <option value="">Select Budget</option>
                                    <option value="Under £500">Under £500</option>
                                    <option value="£500 - £2,000">£500 - £2,000</option>
                                    <option value="£2,000 - £5,000">£2,000 - £5,000</option>
                                    <option value="£5,000+">£5,000+</option>

                                </select>

                                <select
                                    value={form.timeline}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            timeline: e.target.value,
                                        })
                                    }
                                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500"
                                >
                                    <option value="">Timeline</option>
                                    <option value="ASAP">ASAP</option>
                                    <option value="1 Month">1 Month</option>
                                    <option value="2-3 Months">2-3 Months</option>
                                    <option value="Flexible">Flexible</option>

                                </select>

                            </div>

                            {/* File Upload */}

                            <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-emerald-500/30 bg-white/5 px-6 py-12 transition hover:border-emerald-400 hover:bg-emerald-500/5">

                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-3xl text-white">
                                    📁
                                </div>

                                <h4 className="mt-5 text-lg font-semibold text-white">
                                    Upload Requirement File
                                </h4>

                                <p className="mt-2 text-center text-sm text-slate-400">
                                    {form.requirement_file
                                        ? form.requirement_file.name
                                        : "PDF, DOCX, PNG, JPG"}
                                </p>

                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                                    onChange={(e) => {
                                        console.log(e.target.files[0]);

                                        setForm({
                                            ...form,
                                            requirement_file: e.target.files[0],
                                        });
                                    }}
                                />

                            </label>
                            {/* Preferred Contact Method */}

                            <div>
                                <label className="mb-3 block text-sm font-medium text-slate-300">
                                    Preferred Contact Method
                                </label>

                                <div className="grid grid-cols-3 gap-4">

                                    {["Email", "Phone", "WhatsApp"].map((item) => (
                                        <label
                                            key={item}
                                            className="cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="contact_method"
                                                value={item}
                                                checked={form.contact_method === item}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        contact_method: e.target.value,
                                                    })
                                                }
                                                className="hidden peer"
                                            />

                                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-slate-300 transition-all duration-300 peer-checked:border-emerald-500 peer-checked:bg-emerald-500/10 peer-checked:text-white hover:border-emerald-400">
                                                {item}
                                            </div>

                                        </label>
                                    ))}

                                </div>
                            </div>

                            {/* Terms */}

                            <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">

                                <input
                                    type="checkbox"
                                    required
                                    className="mt-1 h-5 w-5 accent-emerald-500"
                                />

                                <span className="text-sm leading-7 text-slate-300">
                                    I agree to the Privacy Policy and Terms & Conditions.
                                </span>

                            </label>

                            {/* Submit */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(16,185,129,.45)] disabled:opacity-70"
                            >

                                {loading ? (
                                    <>
                                        <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Submit Project
                                        <ArrowRight
                                            size={20}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </>
                                )}

                            </button>

                            <p className="text-center text-sm text-slate-400">
                                Our team usually responds within 24 hours.
                            </p>

                        </form>

                    </div>

                </div>

            </div>

        </section>

    );
};