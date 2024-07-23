import React from 'react';
import "./Card.css"

const Card=()=>{
    return(
        <div className='card'>
            <div className="picture">
                <img src={props.image}alt={props.title}/>
                </div>
            <div className="card__details">
                <div className="card__details__top">
                    <h2 className="title">{props.title}</h2>
                </div>
                <div className="card__details__middle"> 
                    <p className='description'>

                    </p>
                    </div>  
                    <div className="class__details__bottom"></div>  
            </div>
        </div>
    )
}
export default Card