"use client"

import Link from "next/link";

export const Header = () => {
    return (<div className="flex justify-between w-full py-8 px-72">
        <img src="logo.png"></img>
        <div className="flex gap-10">
            <Link href="/main">
                <p className="text-slate-600 font-sans text-sm">Home</p>
            </Link>
            <Link href="/ablog">
                <p className="text-slate-600 font-sans text-sm">Blog</p>
            </Link>
            <Link href="/contact">
                <p className="text-slate-600 font-sans text-sm">Contact</p>
            </Link>
        </div>
        <div className="flex">
            <input
                type="text"
                placeholder="    Search"
                className="flex bg-slate-100 rounded-lg relative"
            />
            <img src="search.png" className="absolute ml-36 mt-2 rounded"></img>
        </div>
    </div>
    )
};

