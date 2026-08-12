"use client";

import { motion } from "framer-motion";
import {
    User,
    Building2,
    Lock,
    Bell,
    Palette,
    Save
} from "lucide-react";
import { useEffect, useState } from "react";
import apiClient from "@/lib/api/apiClient";
import { getProfile, updateProfile, changePassword } from "@/lib/api/auth";

export default function SettingsPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
    });

    const handleSave = async () => {
        try {
            await updateProfile(form);
            alert("Profile Updated Successfully");
        } catch (err) {
            console.log(err);
        }
    };



    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const user = await getProfile();

            setForm({
                name: user.name,
                email: user.email,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const [passwordForm, setPasswordForm] = useState({
        current_password: "",
        new_password: "",
    });

    const handleChangePassword = async () => {
        try {
            const response = await changePassword(passwordForm);

            alert(response.message);

            setPasswordForm({
                current_password: "",
                new_password: "",
            });

        } catch (error) {
            console.log(error.response?.data);
            alert(error.response?.data?.message || "Password update failed");
        }
    };

    return (

        <div className="space-y-8">


            {/* Header */}

            <motion.div

                initial={{
                    opacity: 0,
                    y: 20
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

            >

                <h1 className="
                text-3xl
                font-bold
                text-white
                ">
                    Settings
                </h1>


                <p className="
                text-gray-400
                mt-2
                ">
                    Manage your admin preferences and system settings
                </p>


            </motion.div>




            {/* Settings Grid */}


            <div className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-6
            ">




                {/* Profile Settings */}


                <SettingCard
                    icon={<User />}
                    title="Profile Settings"
                >

                    <Input
                        label="Full Name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                name: e.target.value
                            })
                        }
                    />


                    <Input
                        label="Email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                email: e.target.value
                            })
                        }
                    />


                </SettingCard>





                {/* Company Settings */}


                <SettingCard

                    icon={<Building2 />}

                    title="Company Information"

                >


                    <Input
                        label="Company Name"
                        placeholder="Dev Company"
                    />


                    <Input
                        label="Website"
                        placeholder="https://example.com"
                    />


                </SettingCard>





                {/* Password */}


                <SettingCard

                    icon={<Lock />}

                    title="Change Password"

                >


                    <Input
                        label="Current Password"
                        type="password"
                        value={passwordForm.current_password}
                        onChange={(e) =>
                            setPasswordForm({
                                ...passwordForm,
                                current_password: e.target.value,
                            })
                        }
                    />


                    <Input
                        label="New Password"
                        type="password"
                        value={passwordForm.new_password}
                        onChange={(e) =>
                            setPasswordForm({
                                ...passwordForm,
                                new_password: e.target.value,
                            })
                        }
                    />

                    <button
                        onClick={handleChangePassword}
                        className="mt-4 w-full rounded-xl bg-emerald-500 py-3 text-white font-semibold hover:bg-blue-700 transition"
                    >
                        Update Password
                    </button>

                </SettingCard>





                {/* Notification */}


                <SettingCard

                    icon={<Bell />}

                    title="Notifications"

                >


                    <div className="
                    flex
                    justify-between
                    items-center
                    text-white
                    ">

                        Email Notifications


                        <input

                            type="checkbox"

                            className="
                        w-5
                        h-5
                        accent-emerald-500
                        "

                        />


                    </div>


                    <div className="
                    flex
                    justify-between
                    items-center
                    text-white
                    mt-5
                    ">

                        New Messages Alert


                        <input

                            type="checkbox"

                            defaultChecked

                            className="
                        w-5
                        h-5
                        accent-emerald-500
                        "

                        />


                    </div>



                </SettingCard>




                {/* Theme */}


                <SettingCard

                    icon={<Palette />}

                    title="Appearance"

                >


                    <select

                        className="
                    w-full
                    rounded-xl
                    bg-black/20
                    border
                    border-white/10
                    p-3
                    text-white
                    "

                    >

                        <option className="bg-slate-900">
                            Dark Mode
                        </option>

                        <option className="bg-slate-900">
                            Light Mode
                        </option>


                    </select>


                </SettingCard>



            </div>





            {/* Save Button */}


            <button onClick={handleSave}

                className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-emerald-500
                text-white
                font-semibold
                hover:scale-105
                transition
                "

            >

                <Save size={20} />

                Save Changes

            </button>



        </div>

    );

}




function SettingCard({ icon, title, children }) {


    return (

        <motion.div

            whileHover={{
                y: -5
            }}

            className="
        rounded-3xl
        border
        border-white/10
        bg-white/10
        backdrop-blur-xl
        p-6
        space-y-5
        "

        >


            <div className="
            flex
            items-center
            gap-3
            text-white
            ">

                <div className="
                p-3
                rounded-xl
                bg-emerald-500/20
                text-emerald-400
                ">

                    {icon}

                </div>


                <h2 className="
                text-xl
                font-semibold
                ">
                    {title}
                </h2>


            </div>


            {children}


        </motion.div>

    )

}




function Input({ label, value, onChange, type = "text" }) {


    return (

        <div>

            <label className="
            text-sm
            text-gray-400
            ">
                {label}
            </label>


            <input

                type={type}
                value={value}
                onChange={onChange}

                className="
            mt-2
            w-full
            rounded-xl
            bg-black/20
            border
            border-white/10
            p-3
            text-white
            outline-none
            focus:border-emerald-500
            "

            />


        </div>

    )

};