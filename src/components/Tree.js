import { useEffect, useState } from "react";

export default function Trending(props) {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.text}>
                    <p className={styles.type}>{props.technology}</p>
                    <h1 className={styles.title}>{props.title}</h1>
                </div>
                <img className={styles.image} src={props.img}></img>
            </div>
        </div>
    );
}



// export const Tree = (props) => {
//     return <div className="flex relative">
//         <div className="">
//             <img src={`${props.image}`} className="w-64 h-64 rounded-xl"></img>
//         </div>
//         <div className="flex flex-col absolute bottom-0 left-0 mb-50 px-4 py-4 gap-3">
//             <button className="bg-blue-500 rounded-lg py-1 px-3 text-white w-fit">{props.brief}</button>
//             <p className="text-white">{props.text}</p>
//         </div>
//     </div>
// } 