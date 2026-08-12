"use client";
import apiClient from "@/lib/api/apiClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn } from "lucide-react";
import Link from "next/link";
export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const handleLogin = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        alert("handleLogin called");

        try {

            const response = await apiClient.post("/login", {
                email,
                password,
            });

            console.log("FULL:", response.data);
            console.log("TOKEN:", response.data.token);

            localStorage.setItem("token", response.data.token);

            console.log("AFTER SAVE:", localStorage.getItem("token"));

            router.push("/admin/dashboard");

        } catch (error) {
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
        }
    };
    return (

        <div className="min-h-screen flex items-center justify-center bg-[#061A16] px-6">

            <motion.div

                initial={{
                    opacity: 0,
                    y: 30
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

                className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-2xl"

            >

                <div className="text-center mb-8">

                    <h1 className="text-3xl font-bold text-white">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-gray-400">
                        Login to Admin Dashboard
                    </p>

                </div>


                {/* Email */}

                <div className="mb-5">

                    <label className="text-sm text-gray-400">
                        Email
                    </label>


                    <div className="relative mt-2">

                        <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input

                            type="email"

                            value={email}

                            onChange={(e) => setEmail(e.target.value)}

                            placeholder="admin@gmail.com"

                            className="w-full rounded-xl bg-black/20 border border-white/10 py-3 pl-12 pr-4 text-white outline-none focus:border-emerald-500"

                        />

                    </div>

                </div>


                {/* Password */}

                <div className="mb-6">

                    <label className="text-sm text-gray-400">
                        Password
                    </label>


                    <div className="relative mt-2">

                        <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />


                        <input

                        type="password"

                        value={password}

                        onChange={(e) => setPassword(e.target.value)}

                        placeholder="********"

                        className="w-full rounded-xl bg-black/20 border border-white/10 py-3 pl-12 pr-4 text-white outline-none focus:border-emerald-500"

                        />


                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-white font-semibold hover:scale-105 transition"

                >

                    <LogIn size={20} />

                    Login

                </button>

            </motion.div>


        </div>

    );
}