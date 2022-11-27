import { useState } from "react";
function Leftsidebar(){
    const [links, setLinks]=useState(
        [
            {id:1, title:<b>Quick Links</b>,l1: "> T20 TimeOut",l2:"> T20 Time Out",l3:"> fantasy Pick", l4:"> ICC Rankings"},
            
            {id:1, title:<b>ESPNcricinfo Apps</b>, l1:"> Android app",l2:"> IOS App",l3:null, l4: null},
            {id:1, title:<b>Follow ESPNcricinfo</b> , l1:"> Instagram",l2:"> Twitter",l3:"> Facebook", l4:"> Whatsapp"},
            {id:1, title:<b>ESPN sites</b>, l1:"> The Cricket Monthly",l2:"> ESPN",l3:null, l4: null},
        ]
    );
    return(
        <>
        <div>
            {links.map((itm,key)=> (<div key={itm.id} style={{borderRadius:"10px"}} className="shadow mt-3 mx-3">
                <p className='border-b font-bold py-3 pl-3'>{itm.title}</p>
               <div className='py-3 px-4'>
               <div className="flex items-center">
                <div>{itm.img}</div>
                <p>{itm.l1}</p>
                </div>
                <div className="flex items-center">
                <div>{itm.img}</div>
                <p>{itm.l2}</p>
                </div>
                <div className="flex items-center">
                {/* <FontAwesomeIcon style={{color:"black",marginRight:"23px"}} icon={solid('arrow-right')} /> */}
                <div>{itm.img2}</div>
                <p>{itm.l3}</p>
                </div>
                <div className="flex items-center">
                {/* <FontAwesomeIcon style={{color:"black",marginRight:"23px"}} icon={solid('arrow-right')} /> */}
                <div>{itm.img2}</div>
                <p>{itm.l4}</p>
                </div>
               </div>
            </div>))}
        </div>
        </>

    );
    }
    export default Leftsidebar;