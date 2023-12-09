import Link from "next/link"

export const Footer = () => {
    return <div className="md:flex flex-col w-full md:py-20 md:px-52 gap-8 py-14 bg-slate-100">
        <div className="md:flex md:gap-10 md:ml-20 md:border-none border-t-2">
            <div className="hidden md:flex flex-col gap-5">
                <p className="font-bold">About</p>
                <p className="text-slate-400 font-sans text-sm">Lorem ipsum dolor sit amet, <br></br>
                    consectetur adipiscing elit, sed do <br></br>
                    eiusmod tempor incididunt ut <br></br>
                    labore et dolore magna aliqua. Ut <br></br>
                    enim ad minim veniam</p>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                    <p className="text-black font-bold">Email: </p>
                    <p className="text-slate-700 font-sans">Chekist.O@gmail.com</p>
                    </div>
                    <div className="flex gap-2">
                    <p className="text-black font-bold">Phone:</p>
                    <p className="text-slate-700 font-sans">9911388*</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 mr-5 px-44 md:mt-0 mt-12">
                <Link href="/main">
                    <p className="text-slate-500 text-sm hover:bg-blue-700 rounded-lg hover:text-white px-4">Home</p>
                </Link>
                <Link href="/ablog">
                    <p className="text-slate-500 text-sm hover:bg-purple-700 rounded-lg hover:text-white px-4">Blog</p>
                </Link>
                <Link href="/contact">
                    <p className="text-slate-500 text-sm hover:bg-cyan-400 rounded-lg hover:text-black px-4 text-center">Contact</p>
                </Link>
            </div>
            <div className="flex justify-center gap-6 md:mt-0 mt-8">
                <img src="fb.webp" className="w-4 h-4"></img>
                <img src="twi.webp" className="w-4 h-4"></img>
                <img src="ig.webp" className="w-4 h-4"></img>
                <img src="ina.webp" className="w-4 h-4"></img>
            </div>
        </div>
        <div className="flex justify-between md:ml-20 px-28 md:p-0 md:border-t-2 border-slate-300">
            <div className="flex gap-2 mt-10">
                <img src="bb.webp" className="w-12 h-12"></img>
                <div className="flex flex-col">
                    <div className="flex">
                        <p className="text-slate-800 font-sans">Meta</p>
                        <p className="font-bold">Blog</p>
                    </div>
                    <p className="text-slate-500">© All Rights Reserved.</p>
                </div>
            </div>
            <div className="hidden md:flex gap-5 mt-10">
                <p className="text-slate-600 font-sans">Terms of Use </p>
                <p className="text-slate-500">|</p>
                <p className="text-slate-600 font-sans">Privacy Policy</p>
                <p className="text-slate-500">|</p>
                <p className="text-slate-600 font-sans">Cookie Policy</p>
            </div>
        </div>
    </div>
}