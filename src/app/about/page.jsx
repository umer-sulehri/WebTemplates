"use client";
import Navbar from "@/Components/Navbar"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Target,
  Rocket,
  Users,
  Globe2,
  Award,
  CheckCircle2,
} from "lucide-react";
const highlights = [

  "Custom Web Development",

  "Mobile App Development",

  "UI / UX Design",

  "Cloud & API Integration",

];



export default function AboutPage() {

  return (
    < >
      <main
        className="min-h-screenoverflow-hidden
            bg-gradient-to-b
            from-[#0B1F16]
            via-[#163D2B]
            to-[#0B1F16] "
      >
        <Navbar />



        {/* Hero Section */}


        <section
          className="
                         relative
                         flex
                         min-h-screen
                         items-center
                         justify-center
                         overflow-hidden
                         px-6
                         pt-24
                         pb-20
                         "
        >



          {/* Grid Background */}



          <div
            className="
                             absolute
                             inset-0
                             opacity-[0.05]
                             [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
                             [background-size:60px_60px]
                             "
          />



          {/* Left Glow */}



          <motion.div

            animate={{
              x: [0, 120, 0],
              y: [0, 60, 0],
            }}

            transition={{
              duration: 10,
              repeat: Infinity,
            }}

            className="
                             absolute
                             -left-24
                             top-20
                             h-[420px]
                             w-[420px]
                             rounded-full
                             bg-[#52D681]/20
                             blur-[150px]
                             "
          />



          {/* Right Glow */}



          <motion.div

            animate={{
              x: [0, -120, 0],
              y: [0, -50, 0],
            }}

            transition={{
              duration: 12,
              repeat: Infinity,
            }}

            className="
                             absolute
                             -right-24
                             bottom-10
                             h-[420px]
                             w-[420px]
                             rounded-full
                             bg-[#2D6A4F]/20
                             blur-[160px]
                             "
          />



          <div
            className="
                             relative
                             mx-auto
                             max-w-5xl
                             text-center
                             "
          >



            {/* Badge */}



            <motion.div

              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: .6,
              }}

              className="
                                 inline-flex
                                 items-center
                                 gap-2
                                 rounded-full
                                 border
                                 border-[#52D681]/30
                                 bg-[#52D681]/10
                                 px-5
                                 py-2
                                 text-sm
                                 font-medium
                                 text-[#7AE582]
                                 "
            >

              <Sparkles size={16} />

              Digital Services

            </motion.div>



            {/* Heading */}



            <motion.h1

              initial={{
                opacity: 0,
                y: 40,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: .2,
                duration: .8,
              }}

              className="
                                 mt-8
                                 text-5xl
                                 font-black
                                 leading-tight
                                 text-white
                                 md:text-6xl
                                 lg:text-7xl
                                 "
            >

              Building

              <span
                className="
                                     block
                                     bg-gradient-to-r
                                     from-[#7AE582]
                                     via-[#52D681]
                                     to-[#2D6A4F]
                                     bg-clip-text
                                     text-transparent
                                     "
              >

                Digital Solutions

              </span>

              That Drive Business Growth

            </motion.h1>



            {/* Description */}



            <motion.p

              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: .4,
                duration: .8,
              }}

              className="
                                 mx-auto
                                 mt-8
                                 max-w-3xl
                                 text-lg
                                 leading-8
                                 text-gray-300
                                 "
            >

              We create modern websites,
              mobile applications,
              enterprise software and cloud solutions
              using the latest technologies to help
              businesses innovate, scale and succeed
              in today's digital world.

            </motion.p>





            {/* Buttons */}



            <motion.div

              initial={{
                opacity: 0,
                y: 40,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: .8,
                duration: .8,
              }}

              className="
                                 mt-14
                                 flex
                                 flex-wrap
                                 items-center
                                 justify-center
                                 gap-5
                                 "
            >

              <Link

                href="/services"

                className="
                                     rounded-xl
                                     bg-[#52D681]
                                     px-8
                                     py-4
                                     font-semibold
                                     text-[#081C15]
                                     transition-all
                                     duration-300
                                     hover:scale-105
                                     hover:shadow-[0_0_35px_rgba(82,214,129,.35)]
                                     "
              >

                Explore Services

              </Link>



              <Link

                href="/contact"

                className="
                                     flex
                                     items-center
                                     gap-2
                                     rounded-xl
                                     border
                                     border-[#52D681]/30
                                     bg-white/5
                                     px-8
                                     py-4
                                     font-medium
                                     text-white
                                     backdrop-blur-xl
                                     transition-all
                                     duration-300
                                     hover:border-[#52D681]
                                     hover:bg-white/10
                                     "
              >

                Get Free Consultation

                <ArrowRight size={18} />

              </Link>

            </motion.div>

          </div>

        </section>
        {/* Stats Section */}


        <section
          className="
                relative
                mx-auto
                max-w-7xl
                px-6
                pb-24
                "
        >


          <div
            className="
                    grid
                    gap-6
                    sm:grid-cols-2
                    lg:grid-cols-4
                    "
          >


            {
              [
                {
                  number: "10+",
                  title: "Years Experience"
                },
                {
                  number: "250+",
                  title: "Projects Completed"
                },
                {
                  number: "150+",
                  title: "Happy Clients"
                },
                {
                  number: "25+",
                  title: "Team Members"
                },
              ].map((item, index) => (


                <motion.div

                  key={index}

                  initial={{
                    opacity: 0,
                    y: 40
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}

                  viewport={{
                    once: true
                  }}

                  transition={{
                    delay: index * .15
                  }}

                  whileHover={{
                    y: -8
                  }}

                  className="
                                rounded-2xl
                                border
                                border-white/20
                                bg-white/10
                                p-8
                                text-center
                                backdrop-blur-xl
                                "
                >


                  <h3
                    className="
                                    text-4xl
                                    font-bold
                                    text-[#7AE582]
                                    "
                  >

                    {item.number}

                  </h3>


                  <p
                    className="
                                    mt-3
                                    text-gray-300
                                    "
                  >

                    {item.title}

                  </p>


                </motion.div>


              ))
            }


          </div>


        </section>





        {/* Our Story Section */}


        <section
          className="
                relative
                mx-auto
                max-w-7xl
                px-6
                pb-28
                "
        >


          <div
            className="
                    grid
                    items-center
                    gap-14
                    lg:grid-cols-2
                    "
          >



            {/* Image */}


            <motion.div

              initial={{
                opacity: 0,
                x: -50
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              viewport={{
                once: true
              }}

              className="
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/10
                        "
            >

              <Image

                src="/about-2.jpg"

                alt="Our Story"

                width={700}

                height={500}

                className="
                            h-[420px]
                            w-full
                            object-cover
                            transition
                            duration-500
                            hover:scale-110
                            "
              />


            </motion.div>





            {/* Content */}


            <motion.div

              initial={{
                opacity: 0,
                x: 50
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: .8
              }}

            >


              <span
                className="
                            text-[#7AE582]
                            font-semibold
                            "
              >

                Our Story

              </span>



              <h2
                className="
                            mt-4
                            text-4xl
                            font-bold
                            text-white
                            md:text-5xl
                            "
              >

                Creating Solutions
                That Make An Impact

              </h2>



              <p
                className="
                            mt-6
                            leading-8
                            text-gray-300
                            "
              >

                We started with a simple vision:
                helping businesses use technology
                to achieve more. Today, we create
                digital experiences that are fast,
                beautiful and reliable.

              </p>



              <p
                className="
                            mt-4
                            leading-8
                            text-gray-400
                            "
              >

                Our team combines creativity,
                strategy and innovation to deliver
                solutions that create real value.

              </p>



            </motion.div>


          </div>


        </section>
        {/* Mission Vision Section */}


        <section
          className="
                mx-auto
                max-w-7xl
                px-6
                pb-28
                "
        >


          <div
            className="
                    grid
                    gap-8
                    md:grid-cols-2
                    "
          >



            {/* Mission */}


            <motion.div

              initial={{
                opacity: 0,
                y: 50
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              whileHover={{
                y: -10
              }}

              className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-10
                        backdrop-blur-xl
                        "
            >


              <div
                className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#52D681]/20
                            text-[#7AE582]
                            "
              >

                <Target size={28} />

              </div>



              <h3
                className="
                            mt-6
                            text-3xl
                            font-bold
                            text-white
                            "
              >

                Our Mission

              </h3>



              <p
                className="
                            mt-4
                            leading-8
                            text-gray-300
                            "
              >

                Our mission is to create innovative
                digital solutions that help businesses
                grow, connect and succeed in the
                modern world.

              </p>


            </motion.div>





            {/* Vision */}


            <motion.div

              initial={{
                opacity: 0,
                y: 50
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                delay: .2
              }}

              whileHover={{
                y: -10
              }}

              className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-10
                        backdrop-blur-xl
                        "
            >


              <div
                className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#52D681]/20
                            text-[#7AE582]
                            "
              >

                <Rocket size={28} />

              </div>



              <h3
                className="
                            mt-6
                            text-3xl
                            font-bold
                            text-white
                            "
              >

                Our Vision

              </h3>



              <p
                className="
                            mt-4
                            leading-8
                            text-gray-300
                            "
              >

                Our vision is to become a trusted
                technology partner by delivering
                creative, scalable and future-ready
                solutions.

              </p>


            </motion.div>


          </div>


        </section>







        {/* Why Choose Us */}


        <section
          className="
                mx-auto
                max-w-7xl
                px-6
                pb-28
                "
        >


          <motion.div

            initial={{
              opacity: 0,
              y: 40
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            viewport={{
              once: true
            }}

            className="
                    mx-auto
                    max-w-3xl
                    text-center
                    "
          >


            <span
              className="
                        text-[#7AE582]
                        font-semibold
                        "
            >

              Why Choose Us

            </span>



            <h2
              className="
                        mt-4
                        text-4xl
                        font-bold
                        text-white
                        md:text-5xl
                        "
            >

              We Deliver More Than
              Just Technology

            </h2>



            <p
              className="
                        mt-5
                        text-gray-300
                        "
            >

              We combine creativity, experience and
              modern technology to build solutions
              that create long-term success.

            </p>


          </motion.div>





          <div
            className="
                    mt-14
                    grid
                    gap-6
                    md:grid-cols-3
                    "
          >


            {
              [
                {
                  icon: Users,
                  title: "Expert Team",
                  text: "Skilled professionals creating quality digital products."
                },
                {
                  icon: Globe2,
                  title: "Modern Technology",
                  text: "Using latest tools and technologies for better results."
                },
                {
                  icon: Award,
                  title: "Quality Service",
                  text: "Focused on performance, trust and customer satisfaction."
                }
              ].map((item, index) => {


                const Icon = item.icon;


                return (

                  <motion.div

                    key={index}

                    initial={{
                      opacity: 0,
                      y: 40
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}

                    viewport={{
                      once: true
                    }}

                    transition={{
                      delay: index * .2
                    }}

                    whileHover={{
                      scale: 1.03
                    }}

                    className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-8
                                    backdrop-blur-xl
                                    "
                  >


                    <Icon
                      className="
                                        text-[#7AE582]
                                        "
                      size={38}
                    />



                    <h4
                      className="
                                        mt-6
                                        text-xl
                                        font-semibold
                                        text-white
                                        "
                    >

                      {item.title}

                    </h4>



                    <p
                      className="
                                        mt-3
                                        text-gray-400
                                        "
                    >

                      {item.text}

                    </p>


                  </motion.div>

                )


              })
            }


          </div>


        </section>
        {/* CTA SECTION */}


        <section
          className="
                mx-auto
                max-w-7xl
                px-6
                pb-28
                "
        >


          <motion.div

            initial={{
              opacity: 0,
              scale: .9
            }}

            whileInView={{
              opacity: 1,
              scale: 1
            }}

            viewport={{
              once: true
            }}

            transition={{
              duration: .8
            }}

            className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#52D681]/20
                    bg-gradient-to-r
                    from-[#1F3B2D]
                    via-[#2D6A4F]
                    to-[#355E4B]
                    px-8
                    py-16
                    text-center
                    "
          >



            {/* Glow */}

            <motion.div

              animate={{
                scale: [1, 1.3, 1]
              }}

              transition={{
                duration: 5,
                repeat: Infinity
              }}

              className="
                        absolute
                        right-0
                        top-0
                        h-60
                        w-60
                        rounded-full
                        bg-[#7AE582]/20
                        blur-[100px]
                        "
            />





            <div
              className="
                        relative
                        "
            >


              <h2
                className="
                            text-4xl
                            font-bold
                            text-white
                            md:text-5xl
                            "
              >

                Ready To Build Something
                Amazing?

              </h2>



              <p
                className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-gray-200
                            "
              >

                Let's work together and create
                powerful digital experiences that
                help your business grow.

              </p>


              <Link href="/contact">
                <motion.button

                  whileHover={{
                    scale: 1.05
                  }}

                  whileTap={{
                    scale: .95
                  }}

                  className="
                            mt-8
                            rounded-xl
                            bg-white
                            px-8
                            py-4
                            font-semibold
                            text-[#1F3B2D]
                            "
                >

                  Start Your Project

                </motion.button>
              </Link>

            </div>


          </motion.div>


        </section>



      </main>
    </>

  );

}