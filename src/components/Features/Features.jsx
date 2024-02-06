import React from "react";
import './Features.css';

export default function Features(props) {

    return (
        <div className="features">
            <div className="feature-item">
                <img src={props.img} alt={props.imgAlt} className="feature-icon" />
                <h3 className="feature-item-title">{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}