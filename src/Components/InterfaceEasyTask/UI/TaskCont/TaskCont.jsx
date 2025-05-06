import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import './TaskCont.css'
import easyTasks from './easyTasks'

const TaskCont = () => {
    const [easyTask, setEasyTask] = React.useState({
        text: 'Загрузка...',
        category: ''
    });

    useEffect(() => {
        setEasyTask(easyTasks[Math.floor(Math.random() * easyTasks.length)]);
    }, [])

    return (
        <Container className="taskCont">
            <div className="rowTask">
                <h3>Тема:</h3>
                <div className="taskTitle">{easyTask.category}</div>
            </div>
            <div className="textTask">{easyTask.text}</div>
        </Container>
    );
};

export default TaskCont;