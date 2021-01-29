import React from 'react'

import '../../resources/css/card.css'

const Card = (props)=> {
    return (
        <>
        <div className="card-container">
            <div className="image-container">
                <img src={props.imageurl} alt="Blog_Image"/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="card-details">
                    <ul>
                        <li><i className="far fa-user"></i>{props.author}</li>
                        <li><i className="far fa-calendar"></i>{props.dateposted}</li>
                        <li><i className="far fa-folder"></i>{props.category}</li>
                    </ul>
                </div>
                <div className="card-body">
                    <p>{props.body}</p>
                </div>
            </div>
            <div className="btn">
                <button>
                    <a>View More</a>
                </button>
            </div>

        </div>
        </>
    )
}

export default Card