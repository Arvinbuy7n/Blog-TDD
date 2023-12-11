"use client"

import Link from "next/link";
import { useState } from "react";
import { Addition } from "./Addition";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openPage = () => {
        setIsOpen((p) => !p);
    }

    return (<div className="flex justify-between w-full md:py-16 md:px-64 px-5 py-5">
        <div className="flex gap-2">
            <img src="bb.webp" className="w-8"></img>
            <div className="flex mt-1">
                <p className="text-xl">Meta</p>
                <p className="text-xl font-bold">Blog</p>
            </div>
        </div>
        <div className="md:flex hidden gap-3">
            <Link href="/main">
                <p className="text-slate-600 font-sans text-lg hover:bg-blue-700 rounded-lg hover:text-white px-4">Home</p>
            </Link>
            <Link href="/ablog">
                <p className="text-slate-600 font-sans text-lg hover:bg-purple-700 rounded-lg hover:text-white px-4">Blog</p>
            </Link>
            <Link href="/contact">
                <p className="text-slate-600 font-sans text-lg hover:bg-cyan-400 rounded-lg hover:text-black px-4">Contact</p>
            </Link>
            <Link href="/error"></Link>
        </div>
        <div className="md:hidden flex">
            <img src={"layer.png"} className="w-8 h-8" onClick={openPage}></img>
        </div >
        <div className="hidden md:flex">
            <input
                type="text"
                placeholder="    Search"
                className="flex bg-slate-100 rounded-lg relative w-48"
            />
            <img src="search.png" className="absolute ml-40 mt-2 rounded"></img>
        </div>
        {
            isOpen ? (<Addition
                openPage={openPage}
            />) : null
        }
    </div >
    )
};

