import React from 'react';
import './App.css';
import TaskItem from "./components/TaskItem/TaskItem";
import StarRoundedIcon from '@material-ui/icons/StarRounded';

function App() {
  return (
    <div className="App">
      <TaskItem task={'Game'} pinned={false} archived={false} />
    </div>
  );
}

export default App;
