import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../../../pdf-worker";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';


export default function Zivotopis() {
    const [file, setFile] = useState('./zivotopiseng.png');
  
    const [numPages, setNumPages] = useState(null);

    function onFileChange(event) {
        setFile(event.target.files[0]);
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <>
        <div >
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}
                renderMode="canvas"
            >
                <Page
                    
                    pageNumber={1}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    width={550}
                />
            </Document>
        </div>
        <div >
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}
                renderMode="canvas"
            >
                <Page
                   
                    pageNumber={2}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    width={550}
                />
            </Document>
        </div>
        </>
    );
}