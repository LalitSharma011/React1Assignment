import React from 'react'
import Card from '../card/Card'
import { useState, useEffect } from 'react'


export default function Dashboard() {
    const [news,setNews] = useState([])
    const[later,setLater] =useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=7173bb0ecf214c62a37cb63362f13c0e")
        .then((response)=>{
            return response.json() 
        })
        .then((data)=>{
            console.log(data.articles);
            setNews(data.articles)
           
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])
    
    const readLater = (newCard) => {

        fetch('http://localhost:3001/newsdata',{
            'method' : 'POST',
            'body' : JSON.stringify(newCard),
            'headers' : {'Content-Type' : 'application/json'}
        })
        .then((response)=> {
            return response.json()
        })
        .then((data)=>{
            setLater([...later, data])
        })
        .catch((error)=>{
            console.log(error);
        })
      };

  return (
    <div data-testid="dashboardId" id="dataStore" name="dataStoreName" className="container">
        <p style={{display:'none'}}>https://newsapi.org/v2/top-headlines?country=in&apiKey=7173bb0ecf214c62a37cb63362f13c0e</p>
        <p style={{display:'none'}}>7173bb0ecf214c62a37cb63362f13c0e</p>
        {
        news.map((item) => <Card urlToImage={item.urlToImage} title={item.title} author={item.author} readLater={readLater} description={item.description} url={item.url}/>)
        }
    </div>
    )
}