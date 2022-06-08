import React from "react";
import dynamic from 'next/dynamic';
import Zivotopis from "./components/cv/pdfuploader.js";
export default function CV() {

    const Zivotopis = dynamic(() => import('./components/cv/pdfuploader.js'), {
        ssr: false
    });
return(
<>
<Zivotopis />



</>


)}