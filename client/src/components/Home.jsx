import './Home.css';
import logo from './logo.png';
import 'react-slideshow-image/dist/styles.css';
import { Link } from "react-router-dom";
import Accounts from './Accounts';
import Photos from './Photos';
import add from './add.png'
import Search from './Search';



function Home(props) {
    return (
        <div>
        <div className="parent">
            <div className="child" id="two">
                <img alt="" id="logo" src ={logo} />
                
                <div className="vertical-menu">
                    <Link to = "/" className="link" href="#" title="Home">Home</Link>
                    <Link to ="/feeds" href="#" title="About">Feed</Link>
                    <Link to ="/new"  href="#" title="Store">Post</Link>
                    <a href="https://www.google.com/search?q=epl+standings&oq=epl+sta&aqs=chrome.2.69i57j35i39j0i131i433i512j0i433i512j0i512l5j46i512.3774j0j7&sourceid=chrome&ie=UTF-8#sie=lg;/g/11p44qhs93;2;/m/02_tc;st;fp;1;;" class="active">EPL</a>
                    <a href="https://www.google.com/search?q=serie+a+standings&oq=serie+a+&aqs=chrome.1.0i271j0i20i131i263i433i512j46i131i433i512j0i131i433i512l2j0i20i263i512j0i131i433i512l3j0i512.3428j1j9&sourceid=chrome&ie=UTF-8#cobssid=s&sie=lg;/g/11n0vx7n5d;2;/m/03zv9;st;fp;1;;">Serie A</a>
                    <a href="https://www.google.com/search?q=la+liga+standings&oq=la+&aqs=chrome.2.69i57j46i39j0i20i131i263i433i512j46i131i433i512j0i131i433j69i61j69i60l2.2810j0j9&sourceid=chrome&ie=UTF-8#sie=lg;/g/11mqlmppsd;2;/m/09gqx;st;fp;1;;">La Liga</a>
                    <a href="https://www.google.com/search?q=ucl+standings&oq=ucl+sta&aqs=chrome.1.69i57j0i20i131i263i433i512j0i20i263i512j0i512l7.3295j1j9&sourceid=chrome&ie=UTF-8#sie=lg;/g/11j8x175ph;2;/m/0c1q0;st;fp;1;;">UCL</a>
                    <a href="https://www.google.com/search?q=ligue+1+standings&oq=ligue+&aqs=chrome.2.69i57j35i39j0i20i131i263i433i512j0i433i512l2j46i131i433i512j0i20i263i512j46i131i433i512j0i512l2.2896j1j9&sourceid=chrome&ie=UTF-8#sie=lg;/g/11qq96slgb;2;/m/044hxl;st;fp;1;;">Ligue 1</a>
                </div>
                
                </div>
            <div className="child" id="three">
                <div className="photo-container">
                <Search users={props.users} searchField={props.searchField}/>
                <Link to ="/photos"><img alt="" id="add" src ={add} /></Link>
                <Photos photos={props.photos} />
                 </div>
            </div>
            <div className="child" id="four">
                <p>Online Users</p>
            <Accounts users={props.users} />
            </div>
        </div>
        </div>
        

    )
}

export default Home