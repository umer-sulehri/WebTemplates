"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";


const faqs = [
    {
        question: "What technologies do you use for websites?",
        answer:
            "We use modern technologies like Next.js, React, Tailwind CSS, Laravel, and MySQL to build fast and scalable applications.",
    },
    {
        question: "Can you build custom websites for businesses?",
        answer:
            "Yes, we create fully customized websites according to your business requirements with modern UI and smooth animations.",
    },
    {
        question: "Do you provide responsive designs?",
        answer:
            "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop devices.",
    },
    {
        question: "Do you provide website maintenance?",
        answer:
            "Yes, we provide support and maintenance services to keep your website updated and running smoothly.",
    },
    {
        question: "How long does a website project take?",
        answer:
            "Project duration depends on the requirements and complexity. Simple websites usually take less time, while larger applications require more development.",
    },
];


export default function FAQ() {

    const [open, setOpen] = useState(null);


    return (

        <section
            className="
            relative
            overflow-hidden
            bg-gradient-to-b
            from-[#123524]
            to-[#081C15]
            py-24
            "
        >


            {/* Glow */}

            <div
                className="
                absolute
                left-1/2
                top-20
                h-72
                w-72
                -translate-x-1/2
                rounded-full
                bg-[#52B788]/20
                blur-3xl
                "
            />



            <div className="relative mx-auto max-w-5xl px-6">


                {/* Heading */}

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.7
                    }}

                    viewport={{
                        once: true
                    }}

                    className="text-center"

                >

                    <p
                        className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.3em]
                        text-[#52B788]
                        "
                    >
                        FAQ
                    </p>


                    <h2
                        className="
                        mt-4
                        text-4xl
                        font-bold
                        text-white
                        md:text-5xl
                        "
                    >

                        Frequently Asked{" "}

                        <span className="text-[#52B788]">
                            Questions
                        </span>

                    </h2>


                </motion.div>




                {/* FAQ Items */}

                <div className="mt-12 space-y-5">


                    {
                        faqs.map((item, index) => (


                            <motion.div

                                key={index}

                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    delay: index * 0.1
                                }}

                                viewport={{
                                    once: true
                                }}

                                className="
                                rounded-2xl
                                border
                                border-[#52B788]/20
                                bg-white/5
                                backdrop-blur-xl
                                "

                            >


                                <button

                                    onClick={() =>
                                        setOpen(
                                            open === index
                                                ? null
                                                : index
                                        )
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

                                    <span
                                        className="
                                        font-semibold
                                        text-white
                                        "
                                    >
                                        {item.question}
                                    </span>


                                    <motion.div

                                        animate={{
                                            rotate:
                                                open === index
                                                    ? 45
                                                    : 0
                                        }}

                                    >

                                        <Plus
                                            className="text-[#52B788]"
                                        />

                                    </motion.div>


                                </button>



                                <AnimatePresence>


                                    {
                                        open === index && (

                                            <motion.div

                                                initial={{
                                                    height: 0,
                                                    opacity: 0
                                                }}

                                                animate={{
                                                    height: "auto",
                                                    opacity: 1
                                                }}

                                                exit={{
                                                    height: 0,
                                                    opacity: 0
                                                }}

                                                transition={{
                                                    duration: 0.3
                                                }}

                                                className="
                                                overflow-hidden
                                                "

                                            >

                                                <p
                                                    className="
                                                    px-6
                                                    pb-6
                                                    text-slate-300
                                                    "
                                                >

                                                    {item.answer}

                                                </p>


                                            </motion.div>

                                        )
                                    }


                                </AnimatePresence>



                            </motion.div>


                        ))
                    }


                </div>


            </div>


        </section>

    );
};