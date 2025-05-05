import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import './TaskCont.css'
import hardTasks from "./hardTasks";

const TaskCont = () => {
    const [hardTask, setHardTask] = React.useState({
        text: 'Загрузка...',
        category: ''
    });

    useEffect(() => {
        setHardTask(hardTasks[Math.floor(Math.random() * hardTasks.length)]);
    })
    return (
        <Container className="taskCont">
            <div className="rowTask">
                <h3>Тема:</h3>
                <div className="taskTitle">{hardTask.category}</div>
            </div>
            <div className="textTask">{hardTask.text}</div>
        </Container>
    );
};

export default TaskCont;