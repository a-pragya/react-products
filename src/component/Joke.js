//import React from 'react'

function Joke(props){
    return(
        <div className="joke">
            <h1> Here's your joke</h1>
            <h2 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h2>
            <h2 style={{ color: !props.question && "#888888"}}>Punchline: {props.punchLine}</h2>
        </div>
    )
}

export default Joke