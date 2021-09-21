import './Home.css';
import logo from './logo.png';
import 'react-slideshow-image/dist/styles.css';
//import Feed from './Feed';
import Search from './Search';
//import App from '../App';
import { Link } from "react-router-dom";
import Accounts from './Accounts';
import Photos from './Photos';

function Home(props) {
    return (
        <div className="parent">
            <div className="child" id="two">
                <img id="logo" src ={logo} />
                
                <div className="vertical-menu">
                    <Link to = "/" className="link" href="#" title="Home">Home</Link>
                    <Link to ="/feeds" href="#" title="About">Feed</Link>
                    <Link to ="/new"  href="#" title="Store">Post</Link>
                    <a href="#" class="active">EPL</a>
                    <a href="#">Serie A</a>
                    <a href="#">La Liga</a>
                    <a href="#">UCL</a>
                    <a href="#">Ligue 1</a>
                </div>
                
                </div>
            <div className="child" id="three">
                <div>
                {/* <Search users={props.users} searchField={props.searchField}/> */}
                <Photos users={props.users} />
                 </div>
            </div>
            <div className="child" id="four">
            <Accounts users={props.users} />
            </div>
        </div>

    )
}

export default Home