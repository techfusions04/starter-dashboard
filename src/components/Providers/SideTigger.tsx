"use client"

import { HardDriveUpload } from "lucide-react";
import { useSidebar } from "../shadcnui/sidebar";

const SideTigger = () => {
    const { toggleSidebar, open } = useSidebar();
    return (

        <>
            {/* static button */}
            {/* <button
                type="button"
                onClick={toggleSidebar}
                className="p-2 rounded-md hover:bg-white/10 transition text-red-500"
            >
                <HardDriveUpload size={28} className="rotate-270  " />
            </button> */}


            <button
                type="button"
                onClick={toggleSidebar}
                className="p-2 rounded-md hover:bg-white/10 transition text-red-500"
            >
                <HardDriveUpload
                    size={28}
                    className={`
          transition-transform duration-600 ease-in
          ${open ? "rotate-270" : "rotate-90"}
        `}
                />
            </button>

        </>


    );
}

export default SideTigger;