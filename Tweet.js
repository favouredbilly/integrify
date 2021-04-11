import React from "react";
import './App.css'



function Tweet({name,username, website}) {
    return(
        <div className= "tweet">
            <h3>{name}</h3>
            <p>{username}</p>
            <h3>{website}</h3>
            <button style={{ background: 'lightblue' }}>more details</button>
            
        </div>
    );
}

export default Tweet;

