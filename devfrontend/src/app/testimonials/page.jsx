"use client";
import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { getTestimonials } from "@/lib/api/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialsPage() {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const data = await getTestimonials();

            // Sirf active testimonials
            const activeTestimonials = data.filter(
                (item) => item.status == 1
            );
            console.log(data);
            setTestimonials(activeTestimonials);
        } catch (error) {
            console.log(error);
        }
    };

    const prevRef = useRef(null);
    const nextRef = useRef(null);


    return (

        <main
            className="
            min-h-screen
            overflow-hidden
            bg-gradient-to-b
            from-[#081C15]
            via-[#123524]
            to-[#081C15]
            "
        >
            <Navbar />

            <section className="relative py-28">


                <div
                    className="
                    absolute
                    left-1/2
                    top-20
                    h-80
                    w-80
                    -translate-x-1/2
                    rounded-full
                    bg-[#52B788]/20
                    blur-3xl
                    "
                />



                <div className="relative mx-auto max-w-7xl px-6">


                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.7
                        }}
                        className="text-center"
                    >

                        <p className="
                        mb-4
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.3em]
                        text-[#52B788]
                        ">
                            Testimonials
                        </p>


                        <h1 className="
                        text-4xl
                        font-bold
                        text-white
                        md:text-6xl
                        ">

                            What Our Users{" "}

                            <span className="text-[#52B788]">
                                Say
                            </span>

                        </h1>


                        <p className="
                        mt-6
                        text-slate-300
                        ">
                            Thousands of readers trust our platform for a better
                            digital reading experience.
                        </p>


                    </motion.div>




                    <div className="relative mt-16">


                        {/* Arrows */}

                        <button
                            ref={prevRef}
                            className="
                            absolute
                            -left-5
                            top-1/2
                            z-10
                            hidden
                            h-12
                            w-12
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#52B788]/30
                            bg-white/10
                            text-white
                            backdrop-blur-lg
                            md:flex
                            "
                        >
                            <ChevronLeft />
                        </button>


                        <button
                            ref={nextRef}
                            className="
                            absolute
                            -right-5
                            top-1/2
                            z-10
                            hidden
                            h-12
                            w-12
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#52B788]/30
                            bg-white/10
                            text-white
                            backdrop-blur-lg
                            md:flex
                            "
                        >
                            <ChevronRight />
                        </button>



                        <Swiper

                            modules={[
                                Autoplay,
                                Pagination,
                                Navigation
                            ]}

                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}

                            onBeforeInit={(swiper) => {

                                swiper.params.navigation.prevEl =
                                    prevRef.current;

                                swiper.params.navigation.nextEl =
                                    nextRef.current;

                            }}

                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}

                            pagination={{
                                clickable: true
                            }}

                            spaceBetween={30}

                            slidesPerView={1}

                            breakpoints={{

                                768: {
                                    slidesPerView: 2
                                },

                                1024: {
                                    slidesPerView: 3
                                }

                            }}

                            loop={true}

                            speed={800}

                        >


                            {
                                testimonials.map((item, index) => (


                                    <SwiperSlide key={index}>


                                        <motion.div

                                            whileHover={{
                                                y: -10
                                            }}

                                            className="
                                            rounded-3xl
                                            border
                                            border-[#52B788]/20
                                            bg-white/5
                                            p-8
                                            backdrop-blur-xl
                                            "

                                        >


                                            <div className="
                                            flex
                                            justify-between
                                            ">


                                                <div className="flex gap-1">


                                                    {
                                                        Array.from({ length: item.rating }).map((_, index) => (

                                                            <Star
                                                                key={index}
                                                                size={18}
                                                                className={
                                                                    index < item.rating
                                                                        ?
                                                                        "fill-[#52B788] text-[#52B788]"
                                                                        :
                                                                        "text-slate-600"
                                                                }
                                                            />

                                                        ))
                                                    }


                                                </div>


                                                <Quote
                                                    size={28}
                                                    className="text-[#52B788]"
                                                />


                                            </div>



                                            <p className="
                                            mt-6
                                            leading-relaxed
                                            text-slate-200
                                            ">
                                                "{item.message}"
                                            </p>



                                            <div className="
                                            mt-8
                                            flex
                                            items-center
                                            gap-4
                                            ">


                                                <img
                                                    src={item.image || "/default-user.png"}

                                                    alt={item.name}
                                                    className="
                                                    h-14
                                                    w-14
                                                    rounded-full
                                                    border
                                                    border-[#52B788]/40
                                                    object-cover
                                                    "
                                                />


                                                <div>

                                                    <h3 className="
                                                    font-semibold
                                                    text-white
                                                    ">
                                                        {item.name}
                                                    </h3>


                                                    <p className="
                                                    text-sm
                                                    text-slate-400
                                                    ">
                                                        {item.role}
                                                    </p>

                                                </div>


                                            </div>


                                        </motion.div>


                                    </SwiperSlide>


                                ))
                            }


                        </Swiper>


                    </div>


                </div>

            </section>


        </main>

    );
};