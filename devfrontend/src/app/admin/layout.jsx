import AuthGuard from "@/components/auth/AuthGuard";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";

export default function AdminLayout({ children }) {
    return (
        <AuthGuard>
            <div className="flex h-full bg-[#061A16]">
                <Sidebar />

                <div className="flex-1 flex flex-col overflow-hidden">
                    <Navbar />

                    <main className="flex-1  p-8">
                        {children}
                    </main>
                </div>
            </div>
        </AuthGuard>
    );
}