import React, { useEffect, useState } from 'react';

import PDF from "./PDF";

function DocPage({ task }) {
    const [mode, setMode] = useState("idle")
    const [responce, gotResponce]   = useState("")
    const API_URL = `https://api.dev.classforma.com:5010/task/task_file/get_file?field_key=menu&task_uuid=${task.task_uuid}`

    const base64toBlob = (base64WithoutPrefix) => {
        // Cut the prefix `data:application/pdf;base64` from the raw base 64
        // const base64WithoutPrefix = data.substr('data:application/pdf;base64,'.length);
    
        const bytes = atob(base64WithoutPrefix);
        let length = bytes.length;
        let out = new Uint8Array(length);
    
        while (length--) {
            out[length] = bytes.charCodeAt(length);
        }
    
        return new Blob([out], { type: 'application/pdf' });
    };
    
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                const blob = base64toBlob(data.content);
                const file = URL.createObjectURL(blob);
                gotResponce(file)
            })
            .catch((err) => {
                console.log("error", err);
            })
    }, [responce]);


    const Lables = () => {
        return <div>
            <div>
                <h3>Lables</h3>
                <button value={"name"}
                    onClick={(e) => setMode(e.target.value)}>
                    Name
                </button>
                <button value={"Telephone"}
                    onClick={(e) => setMode(e.target.value)}>
                    Telephone
                </button>
            </div>
            <div>
                <h3>Boxes</h3>
                <div>cordinates</div>
            </div>

        </div>

    }

    return (
        <div>
            <h1>{task.task_name} </h1>
            <div>
                <Lables />
                { 
                // console.log(responce)
                }
                <PDF src = {responce}/>
            </div>
        </div>
    );
}
export default DocPage;