import React from 'react';
import TaskItem from "../components/TaskItem/TaskItem";

export default {
    component: TaskItem,
    title: 'TaskItem',
};

export const Default: () => any = () => {
    return <TaskItem task={'Complete the deployment'} pinned={false} archived={false} />;
}

export const Pinned: () => any = () => {
    return <TaskItem task={'Complete the deployment'} pinned={true} archived={false} />;
}

export const Archived: () => any = () => {
    return <TaskItem task={'Complete the deployment'} pinned={false} archived={true} />;
}