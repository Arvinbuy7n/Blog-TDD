"use client"

export const Second = () => {
    return <div className="flex flex-col justify-center items-center mt-8 ml-16">
        <div className="flex">
            <div className="flex relative rounded-xl">
                <img src="lap.jpeg" className="px-10 pt-10 h-[600px] w-[1170px]"></img>
            </div>
            <div className="flex flex-col w-[480px] h-fit bg-white p-8 gap-3 absolute mt-[355px] ml-14 rounded-2xl">
                <button className="bg-blue-500 rounded-lg py-1 px-3 text-white w-fit">Technology</button>
                <p className="text-3xl font-bold">Grid system for better <br></br>Design User Interface</p>
                <p className="text-slate-400 text-sm">August 20, 2022</p>
            </div>
        </div>
        <div className="flex gap-2 mt-3">
            <button className="border-2 px-3 py-1 rounded-xl text-xl">{"<"}</button>
            <button className="border-2 px-3 py-1 rounded-xl text-xl">{">"}</button>
        </div>
    </div>
}