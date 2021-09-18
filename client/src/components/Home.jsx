import './Home.css';
import 'react-slideshow-image/dist/styles.css';

function Home() {
    return (
        <div className="parent">
                <div className="child" id="two">
                <h3>Footie Around The World</h3>
                <div><a href="#" class="link underline blue hover-orange">English Premier League</a></div>
                <div><a href="#" class="link underline blue hover-orange">La Liga</a></div>
                <div><a href="#" class="link underline blue hover-orange">Champions League</a></div>
                </div>
            <div className="child" id="three">
                <div>
                    3
                 </div>
            </div>
            <div className="child" id="four">
            4
            </div>
        </div>

    )
}

export default Home