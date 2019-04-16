import React from 'react';
import './Person.css'



const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm a {props.age} years old!</p>
            <p>{props.children}</p>
            <input onChange={props.changed} type="text" value={props.name}></input>
        </div>
        
    )
}

export default person;