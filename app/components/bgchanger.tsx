"use client";

import { useState, useRef } from "react";

export default function BgChanger() {
  const refer = useRef<HTMLInputElement>(null);
  const [bgcolor, setbg] = useState("black");
  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className={`App w-screen h-screen flex  justify-center`}
    >
      <div
        style={{ backgroundColor: "rgba(155,155,155,0.6)" }}
        className="buttons absolute bottom-10 p-3  text-center rounded-full  m-auto"
      >
        <button
          onClick={(e: any) => setbg(e.target.textContent)}
          className="bg-red-700 px-7 rounded-full py-2 text-white mx-[10px]"
        >
          Red
        </button>
        <button
          onClick={(e: any) => setbg(e.target.textContent)}
          className="bg-white px-7 rounded-full py-2 text-black mx-[10px]"
        >
          White
        </button>
        <button
          onClick={(e: any) => setbg(e.target.textContent)}
          className="bg-green-800 px-7 rounded-full py-2 text-white mx-[10px]"
        >
          Green
        </button>
        <button
          onClick={(e: any) => setbg(e.target.textContent)}
          className="bg-blue-800 px-7 rounded-full py-2 text-white mx-[10px]"
        >
          Blue
        </button>
        <input
          className="hidden"
          onChange={(e: any) => setbg(e.target.value)}
          type="color"
          id="hello"
          ref={refer}
          onClick={(e: any) => setbg(e.target.value)}
        />
        <label
          className="text-white px-7 rounded-full cursor-pointer py-2 mx-[10px] bg-slate-400"
          htmlFor="hello"
          style={{ background: refer.current?.value }}
        >
          Custom
        </label>
        <button
          onClick={(e: any) => setbg(e.target.textContent)}
          className="bg-black px-7 rounded-full py-2 text-white mx-[10px]"
        >
          Black
        </button>
        <button
          onClick={(e: any) => setbg(e.target.textContent)}
          className="bg-orange-600 px-7 rounded-full py-2 text-white mx-[10px]"
        >
          orange
        </button>
        <button
          onClick={(e: any) => setbg(e.target.textContent)}
          className="bg-gray-600 px-7 rounded-full py-2 text-white mx-[10px]"
        >
          gray
        </button>
        <button
          onClick={(e: any) => setbg(e.target.textContent)}
          className="bg-yellow-400 px-7 rounded-full py-2 text-white mx-[10px]"
        >
          Yellow
        </button>
      </div>
    </div>
  );
}
