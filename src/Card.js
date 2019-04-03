import React from "react";

const Card = (props)=> {
    const {id, name, email} = props; /*ES6 syntax =>const id= props.id, const name = props.name, const id= props.id */
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robotphoto" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

