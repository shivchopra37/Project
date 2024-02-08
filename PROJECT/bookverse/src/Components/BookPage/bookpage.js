import './bookpage.css'
import React, { useState, useEffect } from 'react';
const BookPage=(props)=>{
    const [inputValue, setInputValue] = useState('');
    const [array, setArray] = useState(["Nice Book"]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleAddToArray = () => {

        fetch('https://community-purgomalum.p.rapidapi.com/json', {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'community-purgomalum.p.rapidapi.com',
            'x-rapidapi-key': '91ed35f487mshb3b16b3df9c6255p1a9a88jsn5bae293bbf7b', // replace your RapidAPI key
        },
    })
    .then(response => response.json())
    .then(data => setArray(prevArray => [...prevArray,JSON.stringify(data) ]) // assuming data is the value you want to add to the array
    )
    .catch(err => console.error(err));
    };
    return(
        <>
        <div className="desc-container">
        <div className="book-image">
                    <img
                        src={props.image}
                        alt=""
                        useMap="#image_map"
                        style={{
                            width: '400px',
                            height: '500px',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            // height:"30px",
                        }}
                    />
                </div>
                <div className="book-details">
                    <h1>{props.name}</h1>
                    <p>Author : {props.author}</p>
                    <p className='description'>Description : {props.description}</p>
                    <p>Price : {props.price}</p>
                    {/* <p>Condition</p> */}
                </div>
        </div>
        <div className='reviews'>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleAddToArray}>Submit</button>
            <p>The current input value is: {inputValue}</p>
        </div>
        <div className="reviews2">
            {array.map((item, index) => (
                <div key={index}>
                    Review  #{index + 1}: {item}
                    </div>
            ))}
        </div>
        

        </>

    )
}
export  default BookPage