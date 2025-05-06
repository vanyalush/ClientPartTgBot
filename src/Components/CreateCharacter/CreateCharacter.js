import React from 'react';
import NavBar from "../NavBar/NavBar";
import {Container} from "react-bootstrap";
import './styles/MainCreateChar.css'
import Chars from "./UI/Characteristics/Chars";

const CreateCharacter = () => {
    return (
        <div>
            <NavBar/>
            <Container className="createCharacterCont">
                <h3>Выбери характеристики персонажа</h3>
                <Chars/>
            </Container>
        </div>
    );
};

export default CreateCharacter;