import React, {useState} from 'react';
import './Chars.css'
import {Container,} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const Chars = () => {
    const options = {
        type: ['человек', 'животное'],
        gender: ['мужской', 'женский'],
        nature: ['добрый', 'злой'],
        age: ['ребенок', 'подросток', 'взрослый', 'пожилой'],
        mood: ['радостный', 'злой', 'печальный', 'обиженный', 'раздраженный'],
        profession: ['врач', 'художник', 'инженер', 'продавец', 'автослесарь', 'экономист', 'музыкант', 'флорист', 'учитель', 'зоолог', 'палеонтолог', 'повар', 'кондитер', 'фермер'],
        accessory: ['очки', 'рюкзак', 'сумка', 'шляпа', 'бейсболка', 'перчатки', 'кольца', 'диадема', 'цепочка', 'волшебная палочка'],
        pose: ['стоит', 'бежит', 'лежит', 'плавает в озере', 'загорает на пляже', 'едет на машине', 'едет на велосипеде'],
        location: ['дом', 'улица', 'дворец', 'зоопарк', 'поле', 'лес', 'школа', 'театр', 'магазин', 'кафе', 'пещера', 'космос', 'луна', 'самолет', 'на дереве', 'во дворе']
    };
    const [characterData, setCharacterData] = useState({
        type: null,
        gender: null,
        nature: null,
        age: null,
        mood: null,
        profession: null,
        accessory: null,
        pose: null,
        location: null,
    });
    const[activeButtons, setActiveButtons] = useState({
        type: null,
        gender: null,
        nature: null,
        age: null,
        mood: null,
    });
    const handleButtonClick = (group, value) => {
        setActiveButtons({...activeButtons, [group]: value});
        setCharacterData({...characterData, [group]: value});
    }
    const handleSelectChange = (field, value) => {
        setCharacterData({...characterData, [field]: value});
    };

    const saveJSON = () => {
        const jsonData = JSON.stringify(characterData, null, 2);
        console.log(jsonData);
    };
    const getRandomOption = (key) => {
        const randomIndex = Math.floor(Math.random() * options[key].length);
        return options[key][randomIndex];
    }
    const handleRandom =() =>{
        const newData = {};
        const newActiveButtons = {};

        ['type', 'gender', 'nature', 'age', 'mood'].forEach(key => {
            newData[key] = getRandomOption(key);
            newActiveButtons[key] = newData[key];
        });
        ['profession', 'accessory', 'pose', 'location'].forEach(key => {
            newData[key] = getRandomOption(key);
        });
        setActiveButtons(newActiveButtons);
        setCharacterData(newData);
    }
    return (
        <div>
            <Container className="charsCont">
                <div className="random">
                    <h4>Случайный выбор</h4>
                    <button className='randomBtn' onClick={handleRandom}>
                        <box-icon className='randomIcon' name='dice-6' color='#ffffff'></box-icon>
                    </button>
                </div>
                <div className="firstQuestion">
                    <h4>кто это будет?</h4>
                    <button className={`human ${activeButtons.type === 'человек' ? 'active' : ''}`}
                            onClick={() => handleButtonClick("type", "человек")}
                    >
                        человек
                    </button>
                    <button className={`human ${activeButtons.type === 'животное' ? 'active' : ''}`}
                            onClick={() => handleButtonClick("type", "животное")}
                    >
                        животное
                    </button>
                </div>
                <div className="firstQuestion">
                    <h4>какого пола?</h4>
                    <button className={`genderM ${activeButtons.gender === 'мужской' ? 'active' : ''}`}
                            onClick={() => handleButtonClick("gender", "мужской")}
                    >
                        мужской
                    </button>
                    <button className={`genderW ${activeButtons.gender === 'женский' ? 'active' : ''}`}
                            onClick={() => handleButtonClick("gender", "женский")}
                    >
                        женский
                    </button>
                </div>
                <div className="secondQuestion">
                    <h4>натура персонажа?</h4>
                    <button className={`kind ${activeButtons.nature === 'добрый' ? 'active' : ''}`}
                            onClick={() => handleButtonClick("nature", "добрый")}
                    >
                        добрый
                    </button>
                    <button className={`angry ${activeButtons.nature === 'злой' ? 'active' : ''}`}
                            onClick={() => handleButtonClick("nature", "злой")}
                    >
                        злой
                    </button>
                </div>
                <div className="thirdQuestion">
                    <h4>выберите возраст</h4>
                    <div className='agesCont'>
                        <button className={`age ${activeButtons.age === 'ребенок' ? 'active' : ''}`}
                                onClick={() => handleButtonClick("age", "ребенок")}
                        >
                            ребенок
                        </button>
                        <button className={`age ${activeButtons.age === 'подросток' ? 'active' : ''}`}
                                onClick={() => handleButtonClick("age", "подросток")}
                        >
                            подросток
                        </button>
                        <button className={`age ${activeButtons.age === 'взрослый' ? 'active' : ''}`}
                                onClick={() => handleButtonClick("age", "взрослый")}
                        >
                            взрослый
                        </button>
                        <button className={`age ${activeButtons.age === 'пожилой' ? 'active' : ''}`}
                                onClick={() => handleButtonClick("age", "пожилой")}
                        >
                            пожилой
                        </button>
                    </div>
                </div>
                <div className="fifthQuestion">
                    <h4>настроение</h4>
                    <div className='moodContMain'>
                        <div className='moodContHigh'>
                            <button className={`mood ${activeButtons.mood === 'радостный' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick("mood", "радостный")}
                            >
                                радостный
                            </button>
                            <button className={`mood ${activeButtons.mood === 'злой' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick("mood", "злой")}
                            >
                                злой
                            </button>
                            <button className={`mood ${activeButtons.mood === 'печальный' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick("mood", "печальный")}
                            >
                                печальный
                            </button>
                        </div>
                        <div className='moodContLow'>
                            <button className={`mood ${activeButtons.mood === 'обиженный' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick("mood", "обиженный")}
                            >
                                обиженный
                            </button>
                            <button className={`mood2 ${activeButtons.mood === 'раздраженный' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick("mood", "раздраженный")}>
                                раздраженный
                            </button>
                        </div>
                    </div>
                </div>
                <div className="fourthQuestion">
                    <h3>будет ли профессия?</h3>
                    <Form.Select className='selectPanel'
                                 value={characterData.profession || ''}
                                 onChange={(e) => handleSelectChange('profession', e.target.value)}>
                        <option value="">Выбор</option>
                        <option>врач</option>
                        <option>художник</option>
                        <option>инженер</option>
                        <option>продавец</option>
                        <option>автослесарь</option>
                        <option>экономист</option>
                        <option>музыкант</option>
                        <option>флорист</option>
                        <option>учитель</option>
                        <option>зоолог</option>
                        <option>палеонтолог</option>
                        <option>повар</option>
                        <option>кондитер</option>
                        <option>фермер</option>
                    </Form.Select>
                </div>
                <div className="fourthQuestion">
                    <h4>аксессуар</h4>
                    <Form.Select className='selectPanel'
                                 value={characterData.accessory || ''}
                                 onChange={(e) => handleSelectChange('accessory', e.target.value)}>
                        <option value="">Выбор</option>
                        <option>очки</option>
                        <option>рюкзак</option>
                        <option>сумка</option>
                        <option>шляпа</option>
                        <option>бейсболка</option>
                        <option>перчатки</option>
                        <option>кольца</option>
                        <option>диадема</option>
                        <option>цепочка</option>
                        <option>волшебная палочка</option>
                    </Form.Select>
                </div>
                <div className="fourthQuestion">
                    <h4>поза</h4>
                    <Form.Select className='selectPanel'
                                 value={characterData.pose || ''}
                                 onChange={(e) => handleSelectChange('pose', e.target.value)}>
                        <option value="">Выбор</option>
                        <option>стоит</option>
                        <option>бежит</option>
                        <option>лежит</option>
                        <option>плавает в озере</option>
                        <option>загорает на пляже</option>
                        <option>едет на машине</option>
                        <option>едет на велосипеде</option>
                    </Form.Select>
                </div>
                <div className="fourthQuestion">
                    <h4>локация</h4>
                    <Form.Select className='selectPanel'
                                 value={characterData.location || ''}
                                 onChange={(e) => handleSelectChange('location', e.target.value)}>
                        <option value="">Выбор</option>
                        <option>дом</option>
                        <option>улица</option>
                        <option>дворец</option>
                        <option>зоопарк</option>
                        <option>поле</option>
                        <option>лес</option>
                        <option>школа</option>
                        <option>театр</option>
                        <option>магазин</option>
                        <option>кафе</option>
                        <option>пещера</option>
                        <option>космос</option>
                        <option>луна</option>
                        <option>самолет</option>
                        <option>на дереве</option>
                        <option>во дворе</option>
                    </Form.Select>
                </div>
                <button className='saveBtn' onClick={saveJSON}>Сохранить</button>
            </Container>
        </div>
    );
};

export default Chars;