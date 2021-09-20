import './Home.css';
import logo from './logo.png';
import 'react-slideshow-image/dist/styles.css';
//import Feed from './Feed';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="parent">
            <div className="child" id="two">
                <img id="logo" src ={logo} />
                
                <div class="vertical-menu">
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
                    {/* <Feed /> */}
                 </div>
            </div>
            <div className="child" id="four">
            4
            </div>
        </div>

    )
}

export default Home