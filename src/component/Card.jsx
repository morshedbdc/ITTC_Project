/* eslint-disable no-unused-vars */
import { useState } from "react";
import Details from "./Details";


function Card({ id, url, title, onClick }) {

    return (
        <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-64 mt-10 mb-5 rounded-2xl hover:duration-700 "
        onClick={onClick} 
        >
        <div>
            <img src={url} alt={title} className="h-72 object-cover" />
        </div>
        <div className="absolute bg-gray-50 -bottom-24 w-64 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span className="text-gray-800 font-bold text-base">{title}</span>
        </div>
        </div>
    );
}

export default Card;
