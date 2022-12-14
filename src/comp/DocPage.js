import React, { useState } from 'react';

import PDF from "./PDF";

function DocPage({ task }) {
    const [mode, setMode] = useState("idle")
    
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
                <PDF task_uuid = {task.task_uuid} mode={mode}/>
            </div>
        </div>
    );
}
export default DocPage;