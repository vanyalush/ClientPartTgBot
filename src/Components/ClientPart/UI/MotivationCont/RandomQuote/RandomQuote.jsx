import React, {useEffect, useState} from 'react';
import './RandomQuote.css'
import quotes from './quotes'

const RandomQuote = () => {
    const [quote, setQuote] = useState({
        text: 'Загрузка...',
        author: ''
    });

    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)])
    }, [])

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    }

    return (
        <div className='motivCont'>
            <h2 className='quote'>{quote.text}</h2>
            <div className='motivRow'>
                <h4 className='author'>{quote.author}</h4>
                <button className='refreshBtn' href="#" onClick={random}>
                    <box-icon name='refresh' color='#ffffff' className='iconRefresh'></box-icon>
                </button>
            </div>
        </div>
    );
};

export default RandomQuote;