import React, { useState, useEffect } from 'react';
import Card from './Card';

function DocList(props) {
    const documentList = props.documentList

    return (
        <ul>
            {
                (Object.keys(documentList).length !== 0)
                    ? documentList.tasks.map((item, index) => {
                        return <Card
                            key={item.task_uuid}
                            info={item}
                            index={index + 1}
                            PageHandler={props.PageHandler} />
                    })
                    : <div>no docs</div>
            }
        </ul>
    )
}

export default DocList;