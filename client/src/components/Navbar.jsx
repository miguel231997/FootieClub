import './Navbar.css';
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Navbar(){
return (
    <nav className="navbar bg-blue w-100">
    <div>
         <h1 className="fw9 white">FootieClub</h1>
         <div className="form center">
                <div className="search">
                    <input className="f4 pa2 w-70 center" type="text"/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-blue ">search</button>
                 </div>  
        </div> 
                    <Link to = "/" className="white link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</Link>
                        <Link to ="/feeds" className="white link dim gray f6 f5-ns dib mr3" href="#" title="About">Feed</Link>
                        <Link to ="/new" className="white link dim gray f6 f5-ns dib mr3" href="#" title="Store">Post</Link>
    </div>
    </nav>
)
}

export default Navbar;