import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import './TaskCont.css'
import normalTasks from "./normalTasks";

const TaskCont = () => {
    const [normalTask, setNormalTask] = React.useState({
        text: 'Загрузка...',
        category: ''
    });

    useEffect(() => {
        setNormalTask(normalTasks[Math.floor(Math.random() * normalTasks.length)]);
    })
    return (
        <Container className="taskCont">
            <div className="rowTask">
                <h3>Тема:</h3>
                <div className="taskTitle">{normalTask.category}</div>
            </div>
            <div className="textTask">{normalTask.text}</div>
        </Container>
    );
};

export default TaskCont;