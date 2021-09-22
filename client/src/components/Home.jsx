import './Home.css';
import logo from './logo.png';
import 'react-slideshow-image/dist/styles.css';
import { Link } from "react-router-dom";
import Accounts from './Accounts';
import Photos from './Photos';
import add from './add.png'



function Home(props) {
    return (
        <div>
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
                <Link to ="/photos"><img id="add" src ={add} /></Link>
                <Photos photos={props.photos} />
                 </div>
            </div>
            <div className="child" id="four">
            <Accounts users={props.users} />
            </div>
        </div>
        </div>
        

    )
}

export default Home