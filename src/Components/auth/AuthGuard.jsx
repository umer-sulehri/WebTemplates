"use client";
console.log("AUTH GUARD LOADED");
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }) {
    const router = useRouter();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        console.log("AuthGuard Loaded");
        const token = localStorage.getItem("token");

        if (!token) {
            router.replace("/login");
            return;
        }

        setChecking(false);
    }, [router]);

    if (checking) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#061A16]">
                <div className="text-center">
                    <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>

                    <p className="mt-5 text-white">
                        Checking Authentication...
                    </p>
                </div>
            </div>
        );
    }

    return children;
};