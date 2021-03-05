import React from 'react'
import {Link} from 'react-router-dom'
import parse from 'html-react-parser'

import '../../resources/css/card.css'
export function dateCreated (dp) {
    const months = [ 
        "January", "February",  
        "March", "April", "May",  
        "June", "July", "August", 
        "September", "October",  
        "November", "December" 
    ];
    const date = new Date(dp*1000)

    return months[date.getMonth()]+ ' ' + date.getDate() + ', ' + date.getFullYear()
}
const Card = (props)=> {
    return (
        <>
            <div className="card-container">
                    <div className="image-container">
                        <img src={props.data.image} alt="Blog_Image"/>
                    </div>
                <div className="card-content">
                    <div className="card-details">
                        <ul>
                            <li><i className="far fa-user"></i>{props.data.author}</li>
                            <li><i className="far fa-calendar"></i>{dateCreated(props.data.datePosted.seconds)}</li>
                            <li><i className="far fa-folder"></i>{props.data.category}</li>
                        </ul>
                    </div>
                        <div className="card-title">
                            <h3>{props.data.title}</h3>
                        </div>
                        <div className="card-body">
                            {parse(props.data.content)}
                        </div>
                </div>
                <div className="displayFlex">
                    <Link to={{
                        pathname: 'article/'+ props.data.id,
                        state: {article:props.data}
                    }}> 
                        <button>
                            <a>View More</a>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card