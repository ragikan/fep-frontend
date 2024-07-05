"use client";
import React from "react";
import { useState } from "react";
import Navbarprof from "@/components/navbarprof";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
const Project = () => {
  const [checkmodalstatus, setModal] = useState(false);
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg">
        <a href="#"></a>
        <div className="relative">
          <a href="#">
            <img
              className="w-full"
              src="../../images/projimg.webp"
              alt="Sunset in the mountains"
            ></img>
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Manage
            </div>
          </a>

          <a href="!#">
            <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <span className="font-bold">27</span>
              <small>March</small>
            </div>
          </a>
        </div>
        <div className="px-6 py-4">
          <a
            href="#"
            className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            IOT in Electronics
          </a>
          <p className="text-gray-500 text-sm">
            This project involves designing a smart home automation system using
            IoT technology. It integrates various home devices for centralized
            control via a mobile app. The system aims to enhance convenience,
            security, and energy efficiency. Key components include
            microcontrollers, sensors, and communication modules.
          </p>
        </div>
        <div className="px-6 py-4 flex flex-row items-center">
          <button
            onClick={() => {
              setModal(true);
            }}
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Chat
          </button>
        </div>
      </div>
      {checkmodalstatus ? (
        <>
          <Dialog
            className="relative z-10"
            open={checkmodalstatus}
            onClose={() => {
              setModal(false);
            }}
          >
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                  transition
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <DialogTitle
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Chat
                        </DialogTitle>
                        <div className="mt-2">
                          {/* <p className="text-sm text-gray-500">
                      Send Announcements For Your Project
                    </p> */}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-5">
                      <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
                        <div>
                          <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                            <h2 className="font-medium text-gray-800 dark:text-white">
                              How can we help?
                            </h2>
                            <div className="space-y-1.5">
                              <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                                You can ask questions like:
                              </p>
                              <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                                <li className="text-sm text-gray-800 dark:text-white">
                                  What&apos;s Preline UI?
                                </li>

                                <li className="text-sm text-gray-800 dark:text-white">
                                  How many Starter Pages & Examples are there?
                                </li>

                                <li className="text-sm text-gray-800 dark:text-white">
                                  Is there a PRO version?
                                </li>
                              </ul>
                            </div>
                          </div>
                          <span className="mt-1.5 flex items-center gap-x-1 text-xs text-gray-500 dark:text-neutral-500">
                            <svg
                              className="flex-shrink-0 size-3"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M18 6 7 17l-5-5"></path>
                              <path d="m22 10-7.5 7.5L13 16"></path>
                            </svg>
                            Sent
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="max-w-2xl mx-auto">
                      <form>
                        <label className="sr-only">Your message</label>
                        <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                          <button
                            type="button"
                            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                          <textarea
                            id="chat"
                            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your message..."
                          ></textarea>
                          <button
                            type="submit"
                            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                          >
                            <svg
                              className="w-6 h-6 rotate-90"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </>
      ) : null}
    </>
  );
};

const Communications = () => {
  return (
    <>
      <Navbarprof />
      <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900 text-center">
        PROJECT COMMUNICATIONS
      </h1>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </>
  );
};

export default Communications;
