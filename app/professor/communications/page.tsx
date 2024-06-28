'use client'
import React from "react";
import { useState } from 'react';


const Project = () =>{
  const [title,setTitle]= useState("Very Important Project");
  const [desc,setDesc]= useState("A Very Important Project");
  return <li className="flex justify-between gap-x-6 py-5 bg-gray-100 shadow-md rounded px-9">
    <h3 className="text-sm font-semibold leading-6 text-gray-900">{title}</h3>
    <p>{desc}</p>
    <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded mt-10 sm:mt-0" >Chat now!</button>
  </li>
}

const Communications = () => {
  return <>
  <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900 text-center">PROJECT COMMUNICATIONS</h1>
  <ul role="list" className="divide-y divide-gray-100 border space-y-2">
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
  </ul>
  </>;
};

export default Communications;
