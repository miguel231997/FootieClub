import logo from './logo.png';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
return (
    <nav className="bg-lightest-blue w-100">
        <div className="flex pt2 pl2">
            <img className="logo" src={logo}></img>
                <form className="pa4 black-80 center ">
                        <div className="measure">
                            <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" placeholder="search" aria-describedby="name-desc"></input>
                        </div>
                    </form>
                <div>
                    <Link to = "/" className="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">Home</Link>
                    <Link to ="/feeds" className="link dim gray    f6 f5-ns dib mr3" href="#" title="About">Feed</Link>
                    <Link to ="/new" className="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">Post</Link>
                </div>
            </div>
    </nav>
)
}

export default Navbar;