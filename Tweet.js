import React from "react";
import './App.css';
import ReactDOM from 'react-dom';



function Tweet({ name, username, website, email, phone, company, street, suite, city, zipcode }) {
  function shoot() {
    alert("-name:"+ name + 
          "\n" +"-username:" + username +
          "\n" +"-email:" + email +
          "\n" +"-phone:" + phone +
          "\n" +"-company:" + company +
          "\n" +"-website:" + website +
          "\n" +"-address:" + 
          "\n" +"     .street:" + street +
          "\n" +"     .suite:" + suite +
          "\n" +"     .city:" + city +
          "\n" +"     .zipcode:" + zipcode );
          
    
  }
  
  const myelement = (
    <button class="Button" onClick={shoot}>MORE DETAILS</button>
  );
  
    return (
      <div className="tweet">
        <h3>{name}</h3>
        <h5>
          <i>{"@" + username}</i>
        </h5>
        <h5>
          <a href="" target="_blank">
            {" "}
            {"http://" + website}
          </a>
          
        </h5>
              
         <div>{myelement}</div> 
            
            
      </div>
      
    );
    
  }
  export default Tweet;  



 
   