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


export default function SettingsPage() {

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
                        placeholder="Admin Name"
                    />


                    <Input
                        label="Email"
                        placeholder="admin@gmail.com"
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

                        placeholder="********"

                        type="password"

                    />


                    <Input

                        label="New Password"

                        placeholder="********"

                        type="password"

                    />


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


            <button

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




function Input({ label, placeholder, type = "text" }) {


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

                placeholder={placeholder}

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