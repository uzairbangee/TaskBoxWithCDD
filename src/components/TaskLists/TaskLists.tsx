import React, { ReactElement } from 'react'
import TaskItem from '../TaskItem/TaskItem'
import {task} from "../../Types";
import Loading from '../Loading/Loading';
import "./TaskLists.css";

interface Props {
    tasks: task[];
    loading: boolean;
}

function TaskLists({tasks, loading}: Props): ReactElement {

    const sortPinnedTasks = [
        ...tasks.filter(task => task.pinned),
        ...tasks.filter(task => !task.pinned)
    ]

    if(loading){
        return (
            <div className="task_lists_box">
                <Loading/>
                <Loading/>
                <Loading/>
                <Loading/>
                <Loading/>
                <Loading/>
            </div>
        )
    }

    if(tasks.length === 0){
        return (
            <div className="task_lists_box">
                <div className="center_element">
                    <div className="wrapper_message">
                        <div className="title_message">You have no tasks</div>
                        <div className="subtitle_message">Sit back and relax</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="task_lists_box">
            {
                sortPinnedTasks.map(task => (
                    <TaskItem task={task?.title} pinned={task.pinned} archived={task.archived} />
                ))
            }
        </div>
    )
}

export default TaskLists
