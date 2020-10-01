import React, { ReactElement } from 'react'
import "./Loading.css";

interface Props {
    
}

function Loading({}: Props): ReactElement {
    return (
        <div>
            <div className="task_outer">
                <div className="task_item_box">
                    <div className="checkbox_loading loading"></div>
                    <div className="task_title loading"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading
