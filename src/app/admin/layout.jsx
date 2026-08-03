import AuthGuard from "@/components/auth/AuthGuard";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/Components/dashboard/Navbar";

export default function AdminLayout({ children }) {
    return (
        <AuthGuard>
            <div className="flex min-h-screen bg-[#061A16]">

                <Sidebar />

                <div className="flex-1 flex flex-col">

                    <Navbar />

                    <main className="flex-1 overflow-y-auto p-8">
                        {children}
                    </main>

                </div>

            </div>
        </AuthGuard>
    );
}