export const Footer = () => {
    return <div className="flex flex-col w-full py-20 px-60 gap-8 bg-slate-50 ml-10">
        <div className="flex gap-6 gap-24 ml-16">
            <div className="flex flex-col gap-5">
                <p className="font-bold">About</p>
                <p className="text-slate-400 font-sans text-sm">Lorem ipsum dolor sit amet, <br></br>
                    consectetur adipiscing elit, sed do <br></br>
                    eiusmod tempor incididunt ut <br></br>
                    labore et dolore magna aliqua. Ut <br></br>
                    enim ad minim veniam</p>
                <div className="flex flex-col gap-2">
                    <p className="text-slate-700 font-sans">Email : info@jstemplate.net</p>
                    <p className="text-slate-700 font-sans">Phone : 880 123 456 789</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 mr-5 px-44">
                <p className="text-slate-500 text-sm">Home</p>
                <p className="text-slate-500 text-sm">Blog</p>
                <p className="text-slate-500 text-sm">Contact</p>
            </div>
            <div className="flex gap-6">
                <img src="fb.webp" className="w-4 h-4"></img>
                <img src="twi.webp" className="w-4 h-4"></img>
                <img src="ig.webp" className="w-4 h-4"></img>
                <img src="ina.webp" className="w-4 h-4"></img>
            </div>
        </div>
        <div className="flex justify-between ml-14 border-t-2 border-slate-300">
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
            <div className="flex gap-5 mt-10">
                <p className="text-slate-600 font-sans">Terms of Use </p>
                <p className="text-slate-500">|</p>
                <p className="text-slate-600 font-sans">Privacy Policy</p>
                <p className="text-slate-500">|</p>
                <p className="text-slate-600 font-sans">Cookie Policy</p>
            </div>
        </div>
    </div>
}