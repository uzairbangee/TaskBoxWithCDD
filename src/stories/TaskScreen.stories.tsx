import React from 'react';
import TaskScreen from "../components/TaskScreen/TaskScreen";
import { Provider } from 'react-redux';
import {store} from "../store";

export default {
    component: TaskScreen,
    title: 'TaskScreen',
    decorators: [(story : any) => <Provider store={store}>{story()}</Provider>],
};

export const TaskScreenDefault = () => {
    return (
        <TaskScreen/>
    )
}
