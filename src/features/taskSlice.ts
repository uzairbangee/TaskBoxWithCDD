import {createSlice} from "@reduxjs/toolkit";
import {task} from "../Types"

const taskSlice = createSlice({
    name: "Task",
    initialState: [
        {title: "Write Code", pinned: false, archived: false},
        {title: "Deploy Code", pinned: false, archived: false},
        {title: "Set Actions", pinned: false, archived: false},
        {title: "Make DockerFile", pinned: false, archived: false},
        {title: "Install App", pinned: false, archived: false},
        {title: "Implement PWA", pinned: false, archived: false},
        {title: "Review Changes", pinned: false, archived: false},
    ] as task[],
    reducers: {

    }
})

export default taskSlice.reducer;

