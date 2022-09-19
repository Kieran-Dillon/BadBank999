import React from 'react';
import Card from "./card.js";

const Home = () => {
    return (
        
   <Card 
   className="home-page"
   hdrcolor="#D6CFD1"
   hdrtext="#516971"
   bodycolor="#F1E8E9"
   bodytext="#FFFFF"
   header="We are your local Bad Bank"
   title="YOUR MONEY IS NOT SAFE WITH US"
   text="Bank with problems and receive late fees!* "
   body={(<img src="./BadBank.png" alt="Bad Bank" ></img>)}
   />
    
);}
export default Home;