"use client"

import Link from "next/link";

export const Header = () => {
    return (<div className="flex justify-between w-full md:py-16 px-5 py-5 md:px-60">
        <img src="logo.png"></img>
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
                <img src={"layer.png"} className="w-8 h-8"></img>
            </div>
        <div className="hidden md:flex">
            <input
                type="text"
                placeholder="    Search"
                className="flex bg-slate-100 rounded-lg relative"
            />
            <img src="search.png" className="absolute ml-40 mt-2 rounded"></img>
        </div>
    </div>
    )
};

