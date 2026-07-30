import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/Components/dashboard/Navbar";
export default function AdminLayout({ children }) {
    return (

        <div className="flex min-h-screen bg-[#061A16]">
            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Navbar />

                <main className="flex-1 p-8 overflow-y-auto">
                    {children}
                </main>

            </div>
        </div>
    );
};