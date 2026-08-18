"use client";

import { useEffect, useState } from "react";
import { getProjectRequests } from "@/lib/api/projectRequest";
import {
    Search,
    Eye,
    Trash2,
} from "lucide-react";

import {
    deleteProjectRequest,
} from "@/lib/api/projectRequest";
export default function ProjectRequestsPage() {

    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchRequests = async () => {

        try {

            const data = await getProjectRequests();

            setRequests(data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchRequests();

    }, []);


    const filteredRequests = requests.filter((item) => {
        const matchesSearch =
            item.full_name.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase()) ||
            item.service.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "all" || item.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const handleDelete = async (id) => {

        if (!confirm("Delete this request?")) return;

        try {

            await deleteProjectRequest(id);

            fetchRequests();

        } catch (error) {

            console.log(error);

        }

    };

    function Info({ title, value }) {

        return (

            <div className="rounded-2xl bg-white/5 p-5">

                <p className="text-sm text-slate-400">
                    {title}
                </p>

                <h4 className="mt-2 text-white font-semibold break-words">
                    {value || "-"}
                </h4>

            </div>

        );

    }



    return (

        <div className="space-y-6">

            <div>

                <h1 className="text-3xl font-bold text-white">
                    Project Requests
                </h1>

                <p className="text-gray-400 mt-2">
                    Manage all project inquiries
                </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-3xl border border-white/10 bg-[#0B241E] p-6">
                    <p className="text-sm text-slate-400">Total Requests</p>
                    <h2 className="mt-2 text-4xl font-bold text-white">
                        {requests.length}
                    </h2>
                </div>

                <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">
                    <p className="text-sm text-yellow-300">Pending</p>
                    <h2 className="mt-2 text-4xl font-bold text-white">
                        {requests.filter(r => r.status === "pending").length}
                    </h2>
                </div>

                <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">
                    <p className="text-sm text-blue-300">In Progress</p>
                    <h2 className="mt-2 text-4xl font-bold text-white">
                        {requests.filter(r => r.status === "in_progress").length}
                    </h2>
                </div>

                <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6">
                    <p className="text-sm text-green-300">Completed</p>
                    <h2 className="mt-2 text-4xl font-bold text-white">
                        {requests.filter(r => r.status === "completed").length}
                    </h2>
                </div>

            </div>

            <div className="flex flex-col gap-4 lg:flex-row">

                <div className="relative flex-1">

                    <Search
                        size={18}
                        className="absolute left-4 top-4 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search by name, email or service..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="h-12 w-full rounded-2xl border border-white/10 bg-black/20 pl-12 pr-4 text-white outline-none"
                    />

                </div>

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="h-12 rounded-2xl border border-white/10 bg-black/20 px-5 text-white"
                >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="contacted">Contacted</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                </select>


            </div>

            {loading ? (

                <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
                    <p className="text-white text-lg">
                        Loading Project Requests...
                    </p>
                </div>

            ) : (

                <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-[#0B241E] border-b border-white/10">

                            <tr className="text-left text-slate-300">

                                <th className="px-6 py-4">Client</th>
                                <th className="px-6 py-4">Service</th>
                                <th className="px-6 py-4">Budget</th>
                                <th className="px-6 py-4">Timeline</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-center"> Action </th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredRequests.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan={6}
                                        className="py-10 text-center text-slate-400"
                                    >
                                        No Project Requests Found
                                    </td>

                                </tr>

                            ) : (

                                filteredRequests.map((item) => (

                                    <tr
                                        key={item.id}
                                        className="border-b border-white/5 hover:bg-white/5"
                                    >

                                        <td className="px-6 py-5">

                                            <h3 className="font-semibold text-white">
                                                {item.full_name}
                                            </h3>

                                            <p className="text-sm text-slate-400">
                                                {item.email}
                                            </p>

                                        </td>

                                        <td className="px-6 py-5 text-white">
                                            {item.service}
                                        </td>

                                        <td className="px-6 py-5 text-white">
                                            {item.budget}
                                        </td>

                                        <td className="px-6 py-5 text-white">
                                            {item.timeline}
                                        </td>

                                        <td className="px-6 py-5">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold

                                                            ${item.status === "pending"
                                                        ? "bg-yellow-500/20 text-yellow-300"

                                                        : item.status === "contacted"
                                                            ? "bg-blue-500/20 text-blue-300"

                                                            : item.status === "in_progress"
                                                                ? "bg-purple-500/20 text-purple-300"

                                                                : item.status === "completed"
                                                                    ? "bg-emerald-500/20 text-emerald-300"

                                                                    : "bg-red-500/20 text-red-300"
                                                    }`}
                                            >

                                                {item.status.replace("_", " ")}

                                            </span>
                                        </td>

                                        <td className="px-6 py-5">

                                            <div className="flex justify-center gap-3">

                                                <button
                                                    onClick={() => {
                                                        setSelectedRequest(item);
                                                        setShowModal(true);
                                                    }}
                                                    className="rounded-xl bg-cyan-500/20 p-2 text-cyan-300 hover:bg-cyan-500/30"
                                                >
                                                    <Eye size={18} />
                                                </button>

                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="rounded-xl bg-red-500/20 p-2 text-red-300 hover:bg-red-500/30"
                                                >
                                                    <Trash2 size={18} />
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            )}

            {showModal && selectedRequest && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">

                    <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-[#081C15] p-8">

                        <div className="mb-8 flex items-center justify-between">

                            <h2 className="text-3xl font-bold text-white">
                                Project Request
                            </h2>

                            <button
                                onClick={() => setShowModal(false)}
                                className="rounded-xl bg-red-500 px-4 py-2 text-white"
                            >
                                Close
                            </button>

                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            <Info title="Full Name" value={selectedRequest.full_name} />
                            <Info title="Email" value={selectedRequest.email} />
                            <Info title="Phone" value={selectedRequest.phone} />
                            <Info title="Company" value={selectedRequest.company} />
                            <Info title="Service" value={selectedRequest.service} />
                            <Info title="Project Title" value={selectedRequest.project_title} />
                            <Info title="Budget" value={selectedRequest.budget} />
                            <Info title="Timeline" value={selectedRequest.timeline} />
                            <Info title="Contact Method" value={selectedRequest.contact_method} />
                            <Info title="Status" value={selectedRequest.status} />

                        </div>

                        <div className="mt-8">

                            <h3 className="mb-3 text-lg font-semibold text-white">
                                Description
                            </h3>

                            <div className="rounded-2xl bg-white/5 p-5 text-slate-300">

                                {selectedRequest.description}

                            </div>

                        </div>

                        {selectedRequest.requirement_file && (

                            <div className="mt-8">

                                <a
                                    href={`http://127.0.0.1:8000/storage/${selectedRequest.requirement_file}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl bg-emerald-500 px-5 py-3 text-white"
                                >
                                    View Requirement File
                                </a>

                            </div>

                        )}

                    </div>

                </div>

            )}


        </div>
    );

}