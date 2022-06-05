import React from "react";
import Grid from "/scss/flextopheader.module.css";

export default function Fromcover(){

    return(
    
        <div className="grid grid-rows-2 xl:grid-rows-1 xl:grid-cols-2 w-full h-auto gap-2">
            <div className="row-start-1 row-end-2 xl:row-start-1 xl:row-end-2 xl:col-start-1 xl:col-end-2"> </div>
            <div className="row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 xl:col-start-2 xl:col-end-3">
                <div className="w-full md:max-w-full pt-4 pr-20">
                    <div className="p-6 border border-gray-300 sm:rounded-md">
                        <form method="POST" action="https://herotofu.com/start">
                            <label className="block mb-6">
                                <span className="text-gray-700">Your name</span>
                                <input
                                    type="text"
                                    name="name"
                                    className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                    placeholder="Joe Bloggs"
                                />
                            </label>
                            <label className="block mb-6">
                                <span className="text-gray-700">Email address</span>
                                <input
                                    name="email"
                                    type="email"
                                    className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                    placeholder="joe.bloggs@example.com"
                                    required
                                />
                            </label>
                            <label className="block mb-6">
                                <span className="text-gray-700">Message</span>
                                <textarea
                                    name="message"
                                    className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                    rows={3}
                                    placeholder="Tell us what you're thinking about..."
                                ></textarea>
                            </label>
                            <div className="mb-6">
                                <button
                                    type="submit"
                                    className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                                >
                                    Contact me
                                </button>
                            </div>
                            
                        </form>
                    </div>
                </div>
                 </div>
        </div>
   
    )




}