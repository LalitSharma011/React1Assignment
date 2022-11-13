import React from 'react'

export default function Card(props) {
    const saveNews = () => {
        const newCard = {
            description: props.description,
            url: props.url
        }
        props.readLater(newCard);
    };

    return (
        <div className="container py-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.author}</p>
                    <a href={props.url} target="_blank" className="btn btn-primary mx-2">Read Now</a>
                    <button type="submit" className="btn btn-primary" onClick={() => {
                        saveNews();
                    }}>Read Later</button>
                </div>
            </div>
        </div>
    )
}