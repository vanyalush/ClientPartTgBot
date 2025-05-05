import React, {useRef, useState} from 'react';
import './styles/InterfaceDefTask.css'
import {Container} from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import TaskCont from "./UI/TaskCont/TaskCont";

const InterfaceNormalTask = () => {
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if(file){
            setFileName(file.name);
        } else{
            setFileName('');
        }
    }
    return (
        <div>
            <NavBar/>
            <Container className="mainContainer">
                <TaskCont/>
                <div className="uploadCont">
                    <div className="fileInput">
                        <h4>Прикрепи сюда</h4>
                        <button className='uploadBtn' onClick={handleUploadClick}>
                            <box-icon name='upload' className='uploadIcon'></box-icon>
                        </button>
                    </div>
                    <input
                        className='Input'
                        type='file'
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{display: 'none'}}
                    />
                    <div className='file'>
                        {fileName && <p className='fileName'>{fileName}</p>}
                    </div>
                </div>
                <button className='upload'>Отправить</button>
            </Container>
        </div>
    );
};

export default InterfaceNormalTask;