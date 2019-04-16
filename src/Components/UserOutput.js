import React from 'react'
import './components.css'

const userOutput = (props) => {

    const userStyle = {
        float: 'left'
    }

    return (

            
        <div style={userStyle} className="UserOutput">
            <p>{props.name}</p>
            <p>Paragraph 2</p>
        </div>
        )
}

export default userOutput