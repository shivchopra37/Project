import React from 'react'
import './buy.css'
import './bookcard.css'
import { Link } from 'react-router-dom'

const BookCard=()=>{
    return(
        <>
        <div className="book-card">
            <div className="book-image">
            <img
                src="/Images/book1.png"
                alt=""
                useMap="#image_map"
                style={{
                    width: '200px',
                    height:'200px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    // height:"30px",
                }}
              />
            </div>
            <div className="book-details">
                <h1>Book Name</h1>
                <p>Author</p>
                <p>Price</p>
                {/* <p>Condition</p> */}
            </div>
            <Link to="">View</Link>
        </div>
        </>
    )
}

const BuyExchange=()=> {
  return (
    <>
        <div className="book-container">
           <div className="headingbook">
                <h1>Select your Book </h1>
           </div>
           <div className="bookcard-container">
                <BookCard />
           </div>
        </div>
    </>
  )
}

export default BuyExchange