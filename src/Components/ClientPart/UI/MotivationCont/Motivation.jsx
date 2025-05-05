import React from 'react';
import {Container} from "react-bootstrap";
import './Motivation.css'
import RandomQuote from "./RandomQuote/RandomQuote";

const Motivation = () => {
    return (
        <Container>
            <div className='motivation'>
                <h2 className='motivationTitle'>Вдохновение и мотивация</h2>
                <div className='motivCont'>
                    <RandomQuote />
                </div>
            </div>
        </Container>
    );
};

export default Motivation;