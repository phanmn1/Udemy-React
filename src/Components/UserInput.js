import React from 'react'

const userInput = (props) => {
   return (<input onChange={props.input} type="text" value={props.name}></input>)
}

export default userInput