import React, { ReactElement } from 'react'
import "./TaskScreen.css";
import TaskLists from '../TaskLists/TaskLists';
import {useSelector} from "react-redux";
import {RootState} from "../../store";

interface Props {
    
}

function TaskScreen({}: Props): ReactElement {
    const tasks = useSelector((state: RootState) => state.tasks);
    return (
        <div className="page lists_show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">Taskbox</span>
                </h1>
            </nav>
            <TaskLists tasks={tasks} loading={false} />
        </div>
    )
}

export default TaskScreen;
