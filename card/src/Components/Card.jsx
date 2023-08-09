import React from 'react'
import thumb from "../image/book.jpg";
import { } from "../Style/style.css";

const Card = ({ book }) => {
  console.log(book);
  return (
    <>
      {
        book.map((item) => {
          let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;


          return(
            <div className="card" >
            <img src={thumb} alt="" />
            <div className="bottom">
              <h3 className="title"> React  js </h3>
              <p className="amount">&#36;</p>
            </div>
          </div>
          )
        })
      }

    </>
  )
}

export default Card