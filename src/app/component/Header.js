"use client"

export const Header = () => {
    return (<div className="flex justify-between w-full py-8 px-72">
        <img src="logo.png"></img>
        <div className="flex gap-10">
            <p className="text-slate-600 font-sans text-sm">Home</p>
            <p className="text-slate-600 font-sans text-sm">Blog</p>
            <p className="text-slate-600 font-sans text-sm">Contact</p>
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

