"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];


export default function Navbar() {

    const [open, setOpen] = useState(false);

    
    return (

        <motion.nav

            initial={{
                y: -40,
                opacity: 0
            }}

            animate={{
                y: 0,
                opacity: 1
            }}

            transition={{
                duration: 0.8,
                ease: "easeOut"
            }}

            className="sticky top-0 z-40 w-full"

        >


            <div className="mx-auto max-w-7xl px-6 pt-4">


                <div

                    className="rounded-2xl  border border-white/10  bg-gradient-to-r  from-[#081C15]  via-[#0B2B1F]  to-[#102E22]  backdrop-blur-xl  shadow-[0_10px_40px_rgba(0,0,0,0.35)]"

                >



                    <div className="flex  h-20  items-center  justify-between  px-6">



                        {/* Logo */}

                        <Link href="/">

                            <motion.div

                                whileHover={{
                                    scale: 1.05
                                }}

                                transition={{
                                    duration: 0.3
                                }}

                            >

                                <Image

                                    src="/logo.jpg"

                                    alt="Logo"

                                    width={170}

                                    height={55}

                                    priority

                                    className="object-contain"

                                />

                            </motion.div>


                        </Link>




                        {/* Desktop Links */}
                        <ul className="hidden  lg:flex  items-center  gap-3">

                            {navLinks.map((link, index) => (

                                <motion.li
                                    key={link.name}
                                    initial={{
                                        opacity: 0,
                                        y: -10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: index * 0.08,
                                        duration: 0.4
                                    }}

                                    whileHover={{
                                        y: -4,
                                    }}

                                    className="group relative"
                                >

                                    <Link
                                        href={link.href}

                                        className="relative flex  items-center  rounded-full  px-4  py-2  text-sm  font-medium  tracking-wide  text-gray-300  transition-all  duration-300  hover:bg-white/1  hover:text-whit  hover:backdrop-blur-m "
                                    >

                                        {link.name}


                                        {/* Glow Effect */}
                                        <span
                                            className="absolute  inset-0  -z-10  rounded-full  bg-[#74C69D]/20  opacity-0  blur-xl  transition  duration-500  group-hover:opacity-100" />

                                    </Link>


                                    {/* Animated Line */}
                                    <motion.span

                                        initial={{
                                            width: 0
                                        }}

                                        whileHover={{
                                            width: "100%"
                                        }}

                                        className="absolute  -bottom-1  left-1/2  h-[2px]  -translate-x-1/2  rounded-full  bg-gradient-to-r  from-[#74C69D]  to-[#078A7A]" />

                                </motion.li>

                            ))}

                        </ul>




                        {/* Mobile Menu Button */}

                        <button

                            onClick={() => setOpen(!open)}

                            className="lg:hidden  text-white">

                            {
                                open
                                    ?
                                    <X size={28} />
                                    :
                                    <Menu size={28} />
                            }


                        </button>



                    </div>





                    {/* Mobile Menu */}

                    <motion.div

                        initial={{
                            height: 0,
                            opacity: 0
                        }}

                        animate={{
                            height: "auto",
                            opacity: 1
                        }}

                        className={`${open ? "block" : "hidden"} lg:hidden border-t border-white/10 px-6 py-5`}

                    >

                        <div className="flex flex-col gap-5">


                            {
                                navLinks.map((link) => (

                                    <Link

                                        key={link.name}

                                        href={link.href}

                                        onClick={() => setOpen(false)}

                                        className="text-gray-300  hover:text-[#078A7A] transition"

                                    >

                                        {link.name}

                                    </Link>


                                ))
                            }


                        </div>


                    </motion.div>



                </div>


            </div>


        </motion.nav>


    )

}