// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import React, { useState, useEffect } from 'react';


function PDF(task) {
    // data:[<mediatype>][;base64],<data>
    const [responce, gotResponce]   = useState("")
    const API_URL = `https://api.dev.classforma.com:5010/task/task_file/get_file?field_key=menu&task_uuid=${task.task_uuid}`

    
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                gotResponce(data.content);
                console.log(data);
            })
            .catch((err) => {
                console.log("error", err);
            })
        
    }, [responce]);

    const Doc = () => {

        return (
            <div>
                render PDF here!!
            </div>
        )
    }
    return <div>
        <Doc />
    </div>
}
export default PDF