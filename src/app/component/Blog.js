export const Blog = (props) => {
    return <div className="flex flex-col gap-4 border-2 rounded-xl p-3 w-[400px]">
        <img src={`${props.zurag}`} className="w-full h-64 rounded-lg"></img>
        <button className="bg-slate-100 rounded-lg py-1 px-3 text-blue-500 w-fit font-sans">{props.tovch}</button>
        <h2 className="text-xl font-bold">{props.font}</h2>
        <p className="text-slate-400 text-sm">{props.day}</p>
    </div>
}