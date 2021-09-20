import './Navbar.css';
import { Link } from "react-router-dom";
//import Search from './Search';
import SearchBar from './SearchBar';
// import { Link } from "react-router-dom";

function Navbar(props){
return (
    <nav className="navbar bg-blue w-100">
        <div>
            <h1 className="fw9 white">FootieClub</h1>
         <div className="form center">
            <div className="search">
            <SearchBar searchField={props.searchField} SetSearchField={props.SetSearchField} />
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