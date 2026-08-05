"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { getProjectRequests } from "@/lib/api/projectRequest";

export default function ProjectRequestsPage() {

    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

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

    const filteredRequests = requests.filter((item) =>
        item.full_name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.service.toLowerCase().includes(search.toLowerCase())
    );

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

            <div className="relative">

                <Search
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/20 pl-12 p-3 text-white"
                />

            </div>

            {loading ? (

                <p className="text-white">
                    Loading...
                </p>

            ) : (

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                    <p className="text-white">
                        Total Requests : {filteredRequests.length}
                    </p>

                </div>

            )}

        </div>

    );

}