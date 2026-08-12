'use client'
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function TopBar() {
  return (
    <header className=" bg-gradient-to-r from-[#1F3B2D] via-[#2D6A4F] to-[#355E4B]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 ">

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md mt-3"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
            <Mail size={15} />
          </div>

          <span className="font-medium tracking-wide">
            contact@devonsite.com
          </span>
        </motion.div>

        <Link href="/contact">
          {/* Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#1F3B2D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-[#E8F5EC]"
          >
            Start Your Project

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>
        </Link>
      </div>
    </header >
  );
}