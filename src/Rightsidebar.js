// import { useState } from "react";
// import "./Rightsidebar.css";
// function Rightsidebar(props){
//     const[score,setScore]=  useState([
//         {
//             name: "QUAID-E-AZAM-TROPHY", 
            
//             text: "not cover live"  ,
//             team1: "Sindh",
//             team2: "Balouchistan",
//             over: "(75 ov)",
//             tscore: "349/1"
            

//         },
//         {
//             name: "",
//             team1: "Central Punjab*",
//             team2: "Southern Punjab",
//             tscore: "270/3",
//             over: "(74.3 ov)"

//         },
        
//         {
//             name: "",
//             team1: "North (Pakistan)*",
//             team2: "Kyber Pakhtoonkhawa",
//             tscore: "223",
//             over: "(2 ov 6/1)"


//         }
//     ]);    
//     return(
//         <div>
//         {score.map((totalscore) => (
//     <div>
//       <div class="wrapper">
//         <div class="grid grid--7">
//           <div class="grid__item">
//             <article>
              
//                 <h4>{totalscore.name}</h4> <br></br>
//               <h6>{totalscore.team2}</h6>
              
//             </article>
            
//             <article>
//               <h6>{totalscore.team1} &nbsp;  &nbsp; &nbsp; &nbsp;
//               <span>{totalscore.tscore}</span> <span>{totalscore.over}</span>
//               </h6> 
//             </article>
//             <br></br>
//             <br></br>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   ))}

//     </div>       

//     );
//     }
//     export default Rightsidebar;