import { BsFillBellFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import'./Team';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
    <div>
        <div >
            <nav class="navbar navbar-expand-lg bg-primary" >
  <div class="container-fluid">
    <b class="navbar-brand" href="#" style={{color:"white" ,fontSize:"20px",}}>ESPN Cricinfo</b>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            Live Score
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Live Score Home</a></li>
            <li><a class="dropdown-item" href="#">Reults</a></li>
            
            <li><a class="dropdown-item" href="#">Season view</a></li>
            <li><a class="dropdown-item" href="#">Desktop Scoreboard</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Schedule</a></li>
            <li><a class="dropdown-item" href="#">Month View</a></li>
            <li><a class="dropdown-item" href="#">rafi</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Series</a>
        </li>
        

        <Link to ="/Team">
        <button class="nav-link" href="#" style={{color:"white"}} class="btn btn-outline-success" type="submit">Teams</button>
</Link>




        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:"white"}}>Feauture</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:"white"}}>Videos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:"white"}}>Stats</a>
        </li>
      </ul>
      <div className="icons">

      <BsFillMoonFill style={{color:"white"}}/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <BsFillBellFill style={{color:"white"}}/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <BsGrid3X3GapFill style={{color:"white"}}/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <BsSearch style={{color:"white"}}/>
      </div>
    </div>
  </div>
</nav>
        </div>
    </div>
    );
    }
    export default Navbar;