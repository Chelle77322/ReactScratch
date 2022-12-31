import React from 'react';
import samplesData from"../data/mockData.js"
import Main from "./Carousel/Main.jsx";
import "../styles/style.scss";
//import "../styles/_carousel.scss";

export default function MySamples (props){
   
    const myConfig = props.config || {
        "data": samplesData,
        "infinite": true, 
        "tofro" : false, 
        "autoplay": false, 
        "idleTime" : 2000,
        "showCaption": true,
        "showSlideNum" : true,
        "showDots": true,
        "showArrows": 'both'
    };
   
    return <Main config={myConfig}/>
    
};
