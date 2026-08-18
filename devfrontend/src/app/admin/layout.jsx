import AuthGuard from "@/components/auth/AuthGuard";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";

export default function AdminLayout({ children }) {
    return (
        <AuthGuard>
            <div className="flex min-h-[100dvh] bg-[#061A16]">
                <Sidebar />

                <div className="flex flex-1 flex-col overflow-hidden">
                    <Navbar />

                    <main className="flex-1 min-h-0 p-8">
                        {children}
                    </main>
                </div>
            </div>
        </AuthGuard>
    );
}