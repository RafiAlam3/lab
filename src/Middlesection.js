import "./Middlesection.css"
import { useState } from "react";
import imran from "../src/imran.jpg"
import afridi from "../src/afridi.jpg"
function Middlesection(){
    const [card, setCard] = useState([
        {
          image: (
            <img style={{width:"300px",height:"200px"}} src={afridi} alt="..." />
            
            
          ),
          text: "Pakistan Win 1992 World Cup.Imran Khan was the Captain at that time."
        },
       
        

        {
            image: (
              <img style={{width:"300px",height:"300px"}} src={afridi} alt="..." />
            ),
            text: "Shahid Afridi is a Pakistani cricketer and captain of the Pakistan cricket team ."
            
            
          }])
    return(
        <div>
      {card.map((cdata) => 
      (
      <p class="card">
      
        <div class="card__thumb">{cdata.image}</div>
        <div class="card__content"></div>
        <div class="card__thumb">{cdata.image}</div>
        <div class="card__content"></div>
        
        
          <h3   class="card__title">{cdata.text}</h3>
      
             
    </p>
    
      ))}
      
    </div>
    );
    }
    export default Middlesection;