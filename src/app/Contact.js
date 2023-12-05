export const Contact = () => {
    return <div className="flex flex-col w-full py-8 px-96 ml-10">
       <div className="flex flex-col gap-8 px-16">
       <div className="flex flex-col gap-5">
            <p className="text-2xl font-bold">Contact Us</p>
            <p className="text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br>
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum <br></br>
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br></br>
                labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
        </div>
        <div className="flex gap-12">
            <div className="flex flex-col gap-3 p-5 border-2 h-fit w-full rounded-xl">
                <p className="text-xl font-bold">Address</p>
                <p className="text-slate-500">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </div>
            <div className="flex flex-col gap-3 p-5 border-2 h-full w-full rounded-xl">
                <p className="text-xl font-bold">Contact</p>
                <p className="text-slate-500">313-332-8662 <br></br>info@email.com</p>
            </div>
        </div>
        <div className="border-2 bg-slate-100 rounded-xl mt-6">
            <div className="flex flex-col gap-5 py-10 pl-10 pr-40">
                <p className="text-xl font-bold">Leave a Message</p>
                <div className="flex justify-between">
                    <input
                    type="text"
                    placeholder="   Your Name"
                    className="border-2 rounded-lg px-3 py-2"
                    ></input>
                    <input
                    type="text"
                    placeholder="   Your Email"
                    className="border-2 rounded-lg px-3 py-2"
                    ></input>
                </div>
                <input
                type="text"
                placeholder="   Subject"
                className="border-2 rounded-lg px-3 py-2"
                ></input>
                <input
                type="text"
                placeholder="Write a message"
                className="border-2 rounded-lg px-3 py-2 h-40"
                ></input>
                <button className="bg-blue-500 text-white w-40 p-3 rounded-xl text-lg mt-4">Send Message</button>
            </div>
        </div>
       </div>
    </div>
} 