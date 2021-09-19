import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Feed from './components/Feed';
import Post from './components/Post';
import PostDetails from './components/PostDetails'
import EditPost from './components/EditPost'
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
        <Route exact path = "/feeds/:id">
          <PostDetails/>
        </Route>
        <Route path = "/new">
          <Post/>
        </Route>
        <Route path = "/feeds/:id/edit">
          <EditPost/>
          
        </Route>
      
        
    </div>
  );
}

export default App;
