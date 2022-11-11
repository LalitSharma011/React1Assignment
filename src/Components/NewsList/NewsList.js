import React,{useEffect, useState} from 'react'
import { NavItem } from 'react-bootstrap'

export default function NewsList() {
  const [news, setNews] = useState([])

  useEffect(() => {    

    fetch("https://newsapi.org/v2/top-headlines?country=in&apikey=11d57fbab7c340559e6fb12a9b6e9e94")
    .then(res=>res.json())
    .then(data=>{
      console.log(data.atticles)
      setNews(data.articles);
    })
    
  }, [])
  

  return (
    <div className="container">
    <div className="row">
        {
            news.map(item=><div className="card" style={{width: "18rem"}}>
            <img src={item.urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.title} {item.author} {item.description}</h5>
              <a href={item.url} className="btn btn-primary">Go somewhere</a>
            </div>
          </div>)
        }
    </div>
   </div>
  )
}
