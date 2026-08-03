"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    PlayCircle,
    Sparkles,
    Code2,
    Rocket,
} from "lucide-react";


export default function Hero() {

    return (

        <section
            id="home"
            className="
            relative
            overflow-hidden
            min-h-screen
            flex
            items-center
            bg-gradient-to-b
            from-[#0B1F16]
            via-[#163D2B]
        to-[#0B1F16]
            pt-32
            pb-20
            
            "
        >


            {/* Background Glow */}

            <div className="
        absolute
        top-20
        left-20
        h-72
        w-72
        rounded-full
        bg-[#078A7A]/20
        blur-[120px]
        "
            />


            <div className="
        absolute
        right-20
        bottom-20
        h-80
        w-80
        rounded-full
        bg-[#3BAE6D]/20
        blur-[120px]
        "
            />



            <div className="
        relative
        mx-auto
        max-w-7xl
        px-6
        grid
        lg:grid-cols-2
        gap-14
        items-center
        ">



                {/* LEFT CONTENT */}


                <motion.div

                    initial={{
                        opacity: 0,
                        x: -60
                    }}

                    animate={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                >


                    <div className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-[#078A7A]/40
        bg-[#078A7A]/10
        px-4
        py-2
        text-sm
        text-[#74C69D]
        mb-6
        ">

                        <Sparkles size={16} />

                        Premium Digital Solutions

                    </div>




                    <h1 className="
        text-4xl
        md:text-6xl
        font-bold
        leading-tight
        text-white
        ">

                        Build Modern

                        <span className="
        block
        bg-gradient-to-r
        from-[#74C69D]
        to-[#078A7A]
        bg-clip-text
        text-transparent
        ">

                            Digital Experiences

                        </span>

                        That Grow Your Business


                    </h1>




                    <p className="
        mt-6
        max-w-xl
        text-lg
        leading-relaxed
        text-gray-400
        ">

                        We create fast, scalable and beautiful websites
                        using modern technologies with creative design
                        and powerful animations.

                    </p>




                    <div className="
        mt-8
        flex
        flex-wrap
        gap-5
        ">


                        <Link

                            href="/Form"

                            className="
        flex
        items-center
        gap-2
        rounded-full
        bg-[#078A7A]
        px-7
        py-3.5
        font-semibold
        text-white
        transition
        hover:bg-[#06695E]
        hover:scale-105
        "

                        >

                            Get Started

                            <ArrowRight size={18} />

                        </Link>



                        <Link

                            href="/services"

                            className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/20
        px-7
        py-3.5
        font-semibold
        text-white
        transition
        hover:bg-white/10
        "

                        >

                            <PlayCircle size={18} />

                            Explore Services

                        </Link>


                    </div>





                    {/* Stats */}

                    <div className="
        mt-10
        flex
        gap-10
        ">


                        <div>
                            <h3 className="text-3xl font-bold text-white">
                                150+
                            </h3>

                            <p className="text-gray-400 text-sm">
                                Projects
                            </p>
                        </div>



                        <div>
                            <h3 className="text-3xl font-bold text-white">
                                50+
                            </h3>

                            <p className="text-gray-400 text-sm">
                                Clients
                            </p>
                        </div>



                        <div>
                            <h3 className="text-3xl font-bold text-white">
                                5+
                            </h3>

                            <p className="text-gray-400 text-sm">
                                Years
                            </p>
                        </div>


                    </div>



                </motion.div>





                {/* RIGHT SIDE */}


                <motion.div

                    initial={{
                        opacity: 0,
                        scale: 0.8
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1
                    }}

                    transition={{
                        duration: 0.9
                    }}

                    className="
        relative
        "

                >



                    <motion.div

                        animate={{
                            y: [0, -15, 0]
                        }}

                        transition={{
                            duration: 4,
                            repeat: Infinity
                        }}

                        className="
        relative
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        shadow-2xl
        "

                    >


                        <Image

                            src="/hero.png"

                            alt="Hero Image"

                            width={600}

                            height={500}

                            className="
        rounded-2xl
        object-cover
        "

                        />


                    </motion.div>




                    {/* Floating Cards */}


                    <motion.div

                        animate={{
                            y: [0, 10, 0]
                        }}

                        transition={{
                            duration: 3,
                            repeat: Infinity
                        }}

                        className="
        absolute
        -left-6
        top-20
        rounded-2xl
        bg-[#102E22]
        border
        border-white/10
        p-4
        text-white
        "

                    >

                        <Code2 />

                        <p className="text-sm mt-2">
                            Clean Code
                        </p>

                    </motion.div>





                    <motion.div

                        animate={{
                            y: [0, -10, 0]
                        }}

                        transition={{
                            duration: 3,
                            repeat: Infinity
                        }}

                        className="
        absolute
        -right-5
        bottom-20
        rounded-2xl
        bg-[#102E22]
        border
        border-white/10
        p-4
        text-white
        "

                    >

                        <Rocket />

                        <p className="text-sm mt-2">
                            Fast Growth
                        </p>


                    </motion.div>




                </motion.div>



            </div>


        </section>

    )

}