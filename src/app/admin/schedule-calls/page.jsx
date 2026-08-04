"use client";
import { useState, useEffect } from "react";

import {
    getScheduleCalls,
    createScheduleCall,
    updateScheduleCall,
    deleteScheduleCall,
} from "@/lib/api/sheduleCalls";
import { motion } from "framer-motion";
import {
    PhoneCall,
    Search,
    Calendar,
    Clock,
    User,
    Mail,
    Trash2,
    CheckCircle,
    XCircle,
    Plus,
    X,
} from "lucide-react";


export default function ScheduleCalls() {
    const [showModal, setShowModal] = useState(false);


    const [newCall, setNewCall] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
    });

    const [calls, setCalls] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCalls();
    }, []);

    const fetchCalls = async () => {
        try {
            setLoading(true);
            const data = await getScheduleCalls();
            setCalls(data);
        } catch (error) {
            console.error("Failed to fetch schedule calls:", error);
        } finally {
            setLoading(false);
        }
    };

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] = useState("All");

    const filteredCalls = calls.filter((item) => {

        const matchSearch =
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase());

        const matchStatus =
            statusFilter === "All" ||
            item.status === statusFilter;

        return matchSearch && matchStatus;
    });

    const updateStatus = async (id, status) => {
        try {
            const call = calls.find((item) => item.id === id);

            if (!call) return;

            await updateScheduleCall(id, {
                ...call,
                status,
            });

            await fetchCalls();
        } catch (error) {
            console.error("Status update failed:", error);
        }
    };

    const deleteCall = async (id) => {
        try {
            await deleteScheduleCall(id);
            await fetchCalls();
        } catch (error) {
            console.error("Delete failed:", error);
        }
    };

    const addCall = async () => {
        console.log("SENDING DATA:", newCall);
        try {

            await createScheduleCall({
                ...newCall,
                status: "pending",
            });

            await fetchCalls();

            setNewCall({
                name: "",
                email: "",
                phone: "",
                service: "",
                date: "",
                time: "",
            });

            setShowModal(false);

        } catch (error) {
            console.log("STATUS:", error.response?.status);
            console.log("ERROR DATA:", error.response?.data);
        }
    };

    const totalCalls = calls.length;

    const pendingCalls =
        calls.filter((item) => item.status === "pending").length;

    const confirmedCalls =
        calls.filter((item) => item.status === "confirmed").length;

    const cancelledCalls =
        calls.filter((item) => item.status === "cancelled").length;


    if (loading) {
        return (
            <div className="flex items-center justify-center h-[70vh] text-white text-xl">
                Loading Schedule Calls...
            </div>
        );
    }

    return (

        <div className="space-y-8">
            // Search + Filters

            <div
                className="
        rounded-3xl
        border
        border-white/10
        bg-white/10
        backdrop-blur-xl
        p-6
    "
            >

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                    {/* Search */}

                    <div className="relative">

                        <Search
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search by Name or Email..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="
                    w-full
                    rounded-xl
                    bg-black/20
                    border
                    border-white/20
                    py-4
                    pl-12
                    pr-4
                    text-white
                    outline-none
                    focus:border-blue-500
                "
                        />

                    </div>

                    {/* Status Filter */}

                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="
                            rounded-xl
                            bg-black/20
                            border
                            border-white/20
                            px-5
                            py-4
                            text-white
                            outline-none
                        "
                    >

                        <option value="All" className="bg-slate-900">
                            All Status
                        </option>

                        <option value="pending" className="bg-slate-900">
                            Pending
                        </option>

                        <option value="confirmed" className="bg-slate-900">
                            Confirmed
                        </option>

                        <option value="cancelled" className="bg-slate-900">
                            Cancelled
                        </option>

                    </select>

                    {/* Today Counter */}

                    <div
                        className="
                rounded-xl
                bg-gradient-to-r
                from-blue-500
                to-purple-600
                flex
                items-center
                justify-center
                text-white
                font-semibold
            "
                    >
                        Today Calls: {totalCalls}
                    </div>

                </div>

            </div>

            {/* Stats Cards */}

            <div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-5
">


                {/* Total */}

                <div className="
rounded-3xl
border
border-white/10
bg-white/10
backdrop-blur-xl
p-6
">

                    <div className="flex items-center gap-4">

                        <div className="
p-3
rounded-xl
bg-blue-500/20
text-blue-400
">
                            <PhoneCall size={25} />
                        </div>


                        <div>

                            <p className="text-gray-400">
                                Total Calls
                            </p>

                            <h2 className="
text-3xl
font-bold
text-white
">
                                {totalCalls}
                            </h2>

                        </div>

                    </div>

                </div>



                {/* Pending */}

                <div className="
rounded-3xl
border
border-white/10
bg-white/10
backdrop-blur-xl
p-6
">

                    <div className="flex items-center gap-4">

                        <div className="
p-3
rounded-xl
bg-yellow-500/20
text-yellow-400
">
                            <Clock size={25} />
                        </div>


                        <div>

                            <p className="text-gray-400">
                                Pending
                            </p>

                            <h2 className="
text-3xl
font-bold
text-white
">
                                {pendingCalls}
                            </h2>

                        </div>

                    </div>

                </div>




                {/* Approved */}

                <div className="
rounded-3xl
border
border-white/10
bg-white/10
backdrop-blur-xl
p-6
">

                    <div className="flex items-center gap-4">

                        <div className="
p-3
rounded-xl
bg-green-500/20
text-green-400
">
                            <CheckCircle size={25} />
                        </div>


                        <div>

                            <p className="text-gray-400">
                                Confirmed
                            </p>

                            <h2 className="
text-3xl
font-bold
text-white
">
                                {confirmedCalls}
                            </h2>

                        </div>

                    </div>

                </div>




                {/* Rejected */}

                <div className="
rounded-3xl
border
border-white/10
bg-white/10
backdrop-blur-xl
p-6
">

                    <div className="flex items-center gap-4">

                        <div className="
p-3
rounded-xl
bg-red-500/20
text-red-400
">
                            <XCircle size={25} />
                        </div>


                        <div>

                            <p className="text-gray-400">
                                Cancelled
                            </p>

                            <h2 className="
text-3xl
font-bold
text-white
">
                                {cancelledCalls}
                            </h2>

                        </div>

                    </div>

                </div>


            </div>



            <button

                onClick={() => setShowModal(true)}

                className="
flex
items-center
gap-2
px-5
py-3
rounded-xl
bg-emerald-500
text-white
font-semibold
hover:scale-105
transition
"

            >

                <Plus size={20} />

                Add New Call

            </button>

            {/* Calls Table */}

            <motion.div

                initial={{
                    opacity: 0,
                    y: 20
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

                className="
rounded-3xl
border
border-white/10
bg-white/10
backdrop-blur-xl
overflow-hidden
"

            >


                <div className="
overflow-x-auto
">


                    <table className="w-full text-left">


                        <thead className="
bg-white/10
text-gray-300
">


                            <tr>

                                <th className="p-5">
                                    Client
                                </th>

                                <th className="p-5">
                                    Contact
                                </th>

                                <th className="p-5">
                                    Service
                                </th>

                                <th className="p-5">
                                    Schedule
                                </th>

                                <th className="p-5">
                                    Status
                                </th>

                                <th className="p-5">
                                    Action
                                </th>

                            </tr>


                        </thead>



                        <tbody>


                            {
                                filteredCalls.map((call) => (

                                    <tr
                                        key={call.id}
                                        className="
border-t
border-white/10
hover:bg-white/5
transition
"
                                    >


                                        <td className="p-5">

                                            <div className="flex items-center gap-3">

                                                <div className="
w-10
h-10
rounded-full
bg-emerald-500/20
flex
items-center
justify-center
text-emerald-400
">

                                                    <User size={20} />

                                                </div>


                                                <div>

                                                    <p className="text-white font-semibold">
                                                        {call.name}
                                                    </p>

                                                    <p className="text-gray-400 text-sm">
                                                        {call.email}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>



                                        <td className="p-5 text-gray-300">

                                            <div>
                                                {call.phone}
                                            </div>

                                        </td>



                                        <td className="p-5 text-gray-300">
                                            {call.service}
                                        </td>




                                        <td className="p-5 text-gray-300">

                                            <div>
                                                {call.date}
                                            </div>

                                            <div className="text-sm text-gray-400">
                                                {call.time}
                                            </div>

                                        </td>




                                        <td className="p-5">

                                            <span className={`
px-3
py-1
rounded-full
text-sm

                                                    ${call.status === "pending"
                                                    ? "bg-yellow-500/20 text-yellow-400"
                                                    : call.status === "confirmed"
                                                        ? "bg-blue-500/20 text-blue-400"
                                                        : call.status === "completed"
                                                            ? "bg-green-500/20 text-green-400"
                                                            : "bg-red-500/20 text-red-400"
                                                }
                                            `}>
                                                {call.status}

                                            </span>


                                        </td>





                                        <td className="p-5">

                                            <div className="flex gap-2">


                                                <button
                                                    onClick={() => updateStatus(call.id, "confirmed")}
                                                    className="
p-2
rounded-lg
bg-green-500/20
text-green-400
"
                                                >

                                                    <CheckCircle size={18} />

                                                </button>



                                                <button
                                                    onClick={() => updateStatus(call.id, "cancelled")}
                                                    className="
p-2
rounded-lg
bg-red-500/20
text-red-400
"
                                                >

                                                    <XCircle size={18} />

                                                </button>




                                                <button
                                                    onClick={() => deleteCall(call.id)}
                                                    className="
p-2
rounded-lg
bg-white/10
text-gray-300
"
                                                >

                                                    <Trash2 size={18} />

                                                </button>


                                            </div>


                                        </td>


                                    </tr>


                                ))

                            }



                        </tbody>


                    </table>


                </div>


            </motion.div>
            {
                showModal && (

                    <div className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/60
backdrop-blur-sm
">


                        <motion.div

                            initial={{
                                scale: 0.8,
                                opacity: 0
                            }}

                            animate={{
                                scale: 1,
                                opacity: 1
                            }}

                            className="
w-full
max-w-xl
rounded-3xl
bg-slate-900
border
border-white/10
p-8
"

                        >

                            <div className="
flex
justify-between
items-center
mb-6
">

                                <h2 className="
text-2xl
font-bold
text-white
">
                                    Add New Schedule Call
                                </h2>


                                <button
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <X />
                                </button>

                            </div>


                            <div className="
grid
grid-cols-1
md:grid-cols-2
gap-4
">

                                {
                                    [
                                        "name",
                                        "email",
                                        "phone",
                                        "service",
                                        "date",
                                        "time"

                                    ].map((field) => (

                                        <input
                                            key={field}
                                            type={
                                                field === "date"
                                                    ? "date"
                                                    : field === "time"
                                                        ? "time"
                                                        : field === "email"
                                                            ? "email"
                                                            : field === "phone"
                                                                ? "tel"
                                                                : "text"
                                            }
                                            placeholder={field.toUpperCase()}
                                            value={newCall[field]}
                                            onChange={(e) =>
                                                setNewCall({
                                                    ...newCall,
                                                    [field]: e.target.value
                                                })
                                            }
                                            className="
                                                        rounded-xl bg-black/20 border border-white/10 p-3 text-white outline-none focus:border-emerald-500 "
                                        />

                                    ))
                                }

                            </div>


                            <button
                                onClick={addCall}
                                className="
mt-6
w-full
py-3
rounded-xl
bg-emerald-500
text-white
font-semibold
hover:scale-105
transition
"
                            >
                                Save Call
                            </button>


                        </motion.div>


                    </div>

                )
            }

        </div >
    );
}