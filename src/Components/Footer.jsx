"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
} from "lucide-react";
import {
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-r from-[#1F3B2D] via-[#2D6A4F] to-[#355E4B] text-white">

            {/* Glow Effects */}
            <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />


            <div className="relative mx-auto max-w-7xl px-6 py-16">

                <div className="grid gap-10 md:grid-cols-4">


                    {/* Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold">
                            Devon<span className="text-green-200">Site</span>
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-white/80">
                            We create modern websites, applications and
                            digital solutions that help businesses grow.
                        </p>


                        <div className="mt-6 flex gap-3">

                            {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
                                (Icon, index) => (
                                    <motion.a
                                        key={index}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-white hover:text-[#1F3B2D]"
                                        href="#"
                                    >
                                        <Icon size={16} />
                                    </motion.a>
                                )
                            )}

                        </div>

                    </motion.div>



                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >

                        <h3 className="mb-5 text-lg font-semibold">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="hover:text-white transition">
                                Home
                            </li>
                            <li className="hover:text-white transition">
                                About
                            </li>
                            <li className="hover:text-white transition">
                                Services
                            </li>
                            <li className="hover:text-white transition">
                                Contact
                            </li>
                        </ul>

                    </motion.div>



                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >

                        <h3 className="mb-5 text-lg font-semibold">
                            Services
                        </h3>

                        <ul className="space-y-3 text-sm text-white/80">
                            <li>Web Development</li>
                            <li>App Development</li>
                            <li>UI/UX Design</li>
                            <li>Digital Solutions</li>
                        </ul>

                    </motion.div>




                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >

                        <h3 className="mb-5 text-lg font-semibold">
                            Contact
                        </h3>


                        <div className="space-y-4 text-sm text-white/80">

                            <p className="flex items-center gap-3">
                                <Mail size={18} />
                                contact@devonsite.com
                            </p>


                            <p className="flex items-center gap-3">
                                <Phone size={18} />
                                +92 300 0000000
                            </p>


                            <p className="flex items-center gap-3">
                                <MapPin size={18} />
                                Pakistan
                            </p>


                        </div>

                    </motion.div>


                </div>



                {/* Bottom */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-sm text-white/70 md:flex-row">

                    <p>
                        © 2026 DevonSite. All rights reserved.
                    </p>


                    <button className="group flex items-center gap-2 hover:text-white transition">
                        Back To Top
                        <ArrowUpRight
                            size={16}
                            className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </button>

                </div>


            </div>

        </footer>
    );
}