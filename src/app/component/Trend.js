"use client"

import { Tree } from "./Tree";

export const Trend = (props) => {
    return (
        <div className="flex flex-col w-full py-8 px-64 gap-7 mt-10 ml-9">
            <p className="text-xl font-bold">Trending</p>
            <div className="flex gap-10">
                <Tree image="mount.jpg" brief="Technology" text="The Impact of Technology on the Workplace: How Technology is Changing" />
                <Tree image="comp.jpg" brief="Technology" text="The Impact of Technology on the Workplace: How Technology is Changing" />
                <Tree image="tie.jpg" brief="Technology" text="The Impact of Technology on the Workplace: How Technology is Changing" />
                <Tree image="chess.jpg" brief="Technology" text="The Impact of Technology on the Workplace: How Technology is Changing" />
            </div>
        </div>
    )
};