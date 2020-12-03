// import React, { Component } from "react";
import EditForm from "./EditForm";
import firebase from 'firebase/app';
import React, { useState, useEffect } from "react"
import MainContainer from "./MainContainer";



const Jewelry = (props) => {

    return (
        <div>
            <img src={props.jewelry.image} />
            <h2>{props.jewelry.name}</h2>
            <h3>{props.jewelry.price}</h3>
            <p>{props.jewelry.description}</p>
            { <button onClick={(e) => props.addToCart(props.jewelry)}>Add-To-Cart</button>  }
            
        </div>
    )
}

export default Jewelry