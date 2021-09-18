import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Feed from './components/Feed';
import Post from './components/Post';
import { Route } from'react-router-dom';

console.log(process.env.REACT_APP_AIRTABLE_KEY)
console.log(process.env.REACT_APP_AIRTABLE_BASE)
function App() {
  return (

    
    <div className="App">
      <Navbar/>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/feeds">
          <Feed/>
        </Route>
        <Route path = "/new">
          <Post/>
        </Route>
      
        
    </div>
  );
}

export default App;
