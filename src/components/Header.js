"use client"

import Link from "next/link";

export const Header = () => {
    return (<div className="flex justify-between w-full py-8 px-72">
        <img src="logo.png"></img>
        <div className="flex gap-3">
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
        <div className="flex">
            <input
                type="text"
                placeholder="    Search"
                className="flex bg-slate-100 rounded-lg relative"
            />
            <img src="search.png" className="absolute ml-44 mt-2 rounded"></img>
        </div>
    </div>
    )
};

