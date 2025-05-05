import React from 'react';
import NavBar from "../NavBar/NavBar";
import {Container} from "react-bootstrap";
import './styles/ClientPart.css'
import Difficulties from "./UI/Difficulties/Difficulties";
import Motivation from "./UI/MotivationCont/Motivation";
import EveryDayQues from "./UI/EveryDayQues/EveryDayQues";
import {Link} from "react-router-dom";
import {CHARACTER_ROUTE} from "../../utils/consts";

const ClientPart = () => {
    return (
        <div>
            <NavBar/>
            <Container className='ClientCont'>
                <EveryDayQues/>
                <Motivation/>
                <Link className='createCharacter' to={CHARACTER_ROUTE}>Создать персонажа</Link>
                <div className='defaultQues'>
                    <div className='textDefQues'>
                        <box-icon name='objects-vertical-bottom' className='iconDiff'></box-icon>
                        <h3>уровень сложности задания</h3>
                    </div>
                    <Difficulties/>
                </div>
            </Container>
        </div>
    );
};

export default ClientPart;