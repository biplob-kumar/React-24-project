import React, { useState } from 'react'
import bg from "../image/bg2.png";
import {  } from "../Style/style.css";
import Card from './Card';
import axios from "axios";


const Main = () => {
    const [search,setSearch]=useState("")
    const [bookData,setData]=useState([]);

    const searchBook=(evt)=>{
     if(evt.key="Enter"){
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBmXB-4SmgmTVEtamLKQLCEIYuXDRnH7AY')
     .then(res=>setData(res.data.items))
     .catch(err=>console.log(err))
     }
    }
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}
                        />
                        
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src= {bg} alt="" />
                </div>
            </div>

            <div className="container">
            <Card book={bookData}/>
     
            </div>
        </>
    )
}

export default Main