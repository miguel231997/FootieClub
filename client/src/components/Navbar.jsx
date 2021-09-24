import './Navbar.css';
import { Link } from "react-router-dom";
//import Search from './Search';
import SearchBar from './SearchBar';
// import { Link } from "react-router-dom";
import home from './home.png';
import feed from './feed.png';
import newpost from './newpost.png';

function Navbar(props){
return (
    <nav className="navbar w-100">
        <div>
            <h1 className="fw9 white">FootieClub</h1>
                <div className="form center">
                    <div className="search">
                        <SearchBar searchField={props.searchField} SetSearchField={props.SetSearchField} />
                    </div>  
                </div> 
            <div className="nav-icons">
                <Link to = "/" className="white link dim gray f6 f5-ns dib mr3" href="#" title="Home"><img alt="" id="header-home" src={home}></img></Link>
                <Link to ="/feeds" className="white link dim gray f6 f5-ns dib mr3" href="#" title="About"><img alt="" id="header-feed" src={feed}></img></Link>
                <Link to ="/new" className="white link dim gray f6 f5-ns dib mr3" href="#" title="Store"><img alt="" id="header-new" src={newpost}></img></Link>
            </div>
        </div>
    </nav>
)
}

export default Navbar;