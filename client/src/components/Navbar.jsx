import logo1 from './logo1.png';
import './Navbar.css';
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Navbar(){
return (
    <div className="navbar bg-lightest-blue w-100">
         <h1 className="fw9">FootieClub</h1>
                <div className="pa4 br3">
                    <input className="f4 pa2 w-70 center" type="text"/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">search</button>
                 </div>   
                    <Link to = "/" className="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</Link>
                        <Link to ="/feeds" className="link dim gray f6 f5-ns dib mr3" href="#" title="About">Feed</Link>
                        <Link to ="/new" className="link dim gray f6 f5-ns dib mr3" href="#" title="Store">Post</Link>

           
       
    </div>
)
}

export default Navbar;