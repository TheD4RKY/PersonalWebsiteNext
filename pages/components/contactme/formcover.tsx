import React from "react";
import Grid from "/scss/flextopheader.module.css";
import { SiDiscord, SiGmail, SiGithub, SiLinkedin, SiFacebook } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

import ContactMeForm from "./form";
export default function Fromcover(
    
){

/*async function sendEmail(e:any) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            alert("Message sent!");
        } else {
            alert("Error sending email.");
        }
    };
    xhr.send(data);
    console.log(form.action);
}*/

   
    return(
    
        <div className=" grid grid-rows-2 xl:grid-rows-1 xl:grid-cols-2 w-full gap-2 mb-10">
            <div className="row-start-1 row-end-2 xl:row-start-1 xl:row-end-2 xl:col-start-1 xl:col-end-2">
              
                <div className="w-full md:max-w-full pt-4 xl:pl-20 flex justify-center">
                    <div className="grid grid-rows-2 grid-cols-3 gap-2 ">

                    <div className="
                    h-48
                    row-start-1 row-end-2 col-start-1 col-end-2
                    p-6 border border-gray-300 sm:rounded-md flex flex-col items-center
                    place-content-center
                    hover:scale-105
                    hover:bg-stone-900
                    hover:text-white
                    delay-200
                    transition ease-in-out">
                            <SiDiscord className="scale-350"/>
                            <br /><br />
                            <h1 className="xl:text-lg text-sm font-normal text-center">{"-TheRealDarky-#7232"}</h1>
                    </div>
                    
                    
                        <div className="
                        h-48
        row-start-1 row-end-2 col-start-2 col-end-3
        p-6 border border-gray-300 sm:rounded-md
        flex flex-col items-center place-content-center
        hover:scale-105
                    hover:bg-stone-900
                    hover:text-white
                    delay-200
                    transition ease-in-out">
                            <FiPhoneCall className="scale-350" />
                            <br /><br />
                            <h1 className="xl:text-lg text-sm font-normal text-center">{"(+420) 732859585"}</h1>

                        </div>
                    
                    
              
            <div className="
            h-48
            row-start-1 row-end-2 col-start-3 col-end-4
            p-6 border border-gray-300 sm:rounded-md
            flex flex-col items-center place-content-center
            hover:scale-105
                    hover:bg-stone-900
                    hover:text-white
                    delay-200
                    transition ease-in-out">
                            <SiGmail className="scale-350"/>
                            <br /><br />
                            <h1 className="xl:text-lg text-sm font-normal">growlbox123g</h1>
            </div>


 
                        <Link href={"https://www.linkedin.com/in/dennis-kalu%C5%BE%C3%ADk-385340217/"} passHref>
                            <a target="_blank" rel="noopener noreferrer">
                            <div className="
                            h-48
        row-start-2 row-end-3 col-start-1 col-end-2
        p-6 border border-gray-300 sm:rounded-md
        flex flex-col items-center place-content-center
        hover:scale-105
                    hover:bg-stone-900
                    hover:text-white
                    delay-200
                    transition ease-in-out">
                                    <SiLinkedin className="scale-350"/>
                                    <br /><br />
                                    <h1 className="xl:text-lg text-sm font-normal">Dennis Kalužík</h1>

                                </div></a>
                        </Link>
                        
                        
                        <Link href={"https://github.com/TheD4RKY"} passHref>
                            <a target="_blank" rel="noopener noreferrer">
                                <div className="
                    h-48
                    row-start-2 row-end-3 col-start-2 col-end-3
                    p-6 border border-gray-300 sm:rounded-md
                    flex flex-col items-center place-content-center
                    hover:scale-105
                    hover:bg-stone-900
                    hover:text-white
                    delay-200
                    transition ease-in-out">
                                    <SiGithub className="scale-350" />
                                    <br /><br />
                                    <h1 className="xl:text-lg text-sm font-normal">Dennis Kalužík</h1>
                                </div></a>
                        </Link>

                        <Link href={"https://www.facebook.com/dennis.kaluzik/"} passHref>
                            <a target="_blank" rel="noopener noreferrer">
                        <div className="
                        h-48
        row-start-2 row-end-3 col-start-3 col-end-4
        p-6 border border-gray-300 sm:rounded-md
        flex flex-col items-center place-content-center
        hover:scale-105
                    hover:bg-stone-900
                    hover:text-white
                    delay-200
                    transition ease-in-out">
                                    <SiFacebook className="scale-350"/>
                                    <br /><br />
                                    <h1 className="xl:text-lg text-sm font-normal">Dennis Kalužík</h1>

                                </div></a>
                        </Link>
                    
                    
                 
                    </div></div></div>

            <div className="row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 xl:col-start-2 xl:col-end-3 ">
                <ContactMeForm />
                 </div>
        </div>
   
    )




}