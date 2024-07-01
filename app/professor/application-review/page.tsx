'use client'
import React from "react";
import { useState } from 'react';

const Application = () => {
  // Initialization with Dummy Data
  const [applicant,setApplicant]= useState("Ballu");
  const [accepted,setAccepted]= useState(false);
  const [rejected,setRejected]= useState(false);
  const [onhold,setHold]= useState(true);
  const [proj,setProj] = useState("IMP Project")
  const [sop,setSop]= useState("Man kiya");


  function accept() {
    setAccepted(true);
    setRejected(false);
    setHold(false)
  }
  function reject() {
    setRejected(true);
    setHold(false)
    setAccepted(false);
  }
  function hold(){
    setHold(true)
    setRejected(true);
    setAccepted(false);
  }


  return <li className="flex justify-between gap-x-6 py-5 bg-gray-100 shadow-md rounded  px-4">
    <div className="flex min-w-0 gap-x-4">
    <p className="text-sm font-semibold leading-6 text-gray-900">Applicant's Name: {applicant}</p>
    <p className="text-sm leading-6 text-gray-900">{proj}</p>
    <p className="mt-1 truncate text-xs leading-5 text-gray-500">SOP: {sop}</p>
    </div>
    <div className="space-x-2">
    <button onClick={accept}  className="text-right flex-shrink-0 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded mt-10 sm:mt-0" >{accepted? "Accepted":"Accept"}</button>
    <button onClick={reject}  className="flex-shrink-0 text-white bg-orange-400 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded mt-10 sm:mt-0" >{rejected? "Rejected":"Reject"}</button>
    <button onClick={hold}  className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded mt-10 sm:mt-0" >{onhold? "On Hold":"hold"}</button>
    </div>
  </li>;
};

const ApplicationReview = () =>{
  return <>
    <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900 text-center">APPLICATION REVIEW</h1>
    <ul role="list" className="divide-y divide-gray-100 border space-y-2 mx-2">
    <Application />
    <Application />
    <Application />
    <Application />
    <Application />
    </ul>
  </>;
}

export default ApplicationReview;
