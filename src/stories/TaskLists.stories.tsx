import React from 'react';
import TaskLists from "../components/TaskLists/TaskLists";

export default {
    component: TaskLists,
    title: 'TaskLists',
};

const tasks = [
    {title: "Write Code", pinned: false, archived: false},
    {title: "Deploy Code", pinned: false, archived: false},
    {title: "Set Actions", pinned: false, archived: false},
    {title: "Make DockerFile", pinned: false, archived: false},
    {title: "Install App", pinned: false, archived: false},
    {title: "Implement PWA", pinned: false, archived: false},
    {title: "Review Changes", pinned: false, archived: false},
]

export const TasksList = () => {
    return (
        <TaskLists tasks={tasks} loading={false}/>
    )
}

export const TasksListLoading = () => {
    return (
        <TaskLists tasks={[]} loading={true}/>
    )
}

export const TasksListEmpty = () => {
    return (
        <TaskLists tasks={[]} loading={false}/>
    )
}

export const TasksListPinned = () => {
    const new_tasks = [
        ...tasks,
        {title: "Install App", pinned: true, archived: false},
        {title: "Implement PWA", pinned: false, archived: false},
        {title: "Review Changes", pinned: true, archived: true},
    ]
    return (
        <TaskLists tasks={new_tasks} loading={false}/>
    )
}