import Navbar from "./Navbar";
import Leftsidebar from "./Leftsidebar";
import Middlesection from "./Middlesection";
// import Rightsidebar from "./Rightsidebar";
import Footer from "./Footer";
function Main(){
return(
    <div>
    <div className="row">

    <div className="col-md-12 col-12" style={{height:"auto"}}><Navbar/></div>     
    <div className="col-md-3 col-12" style={{ border: "0px solid black", height:"auto" }}><Leftsidebar/></div>
    <div className="col-md-6 col-12" style={{ border: "0px solid black", height:"950px" }}><Middlesection/></div>  
    {/* <div className="col-md-3 col-12" style={{ border: "0px solid black", height:"auto" }}><Rightsidebar/></div>      */}
    
    </div>

    <div className="row">

     <div className="col-md-12 col-12" style={{ border: "0px solid black", height:"auto" }}><Footer/></div>     
    
    </div>
</div>
);
}
export default Main;