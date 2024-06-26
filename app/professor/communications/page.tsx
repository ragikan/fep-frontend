'use client'
import React from "react";
import { useState } from 'react';


const Project = () =>{
  const [title,setTitle]= useState("Very Important Project");
  const [desc,setDesc]= useState("A Very Important Project");
  return <li>
    <h3>{title}</h3>
    <p>{desc}</p>
    <button>Chat now!</button>
  </li>
}

const Communications = () => {
  return <>Project Communications
  <ul>
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
  </ul>
  </>;
};

export default Communications;
