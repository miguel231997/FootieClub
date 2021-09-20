import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Feed from './components/Feed';
import Post from './components/Post';
import PostDetails from './components/PostDetails'
import EditPost from './components/EditPost'
import { Route } from'react-router-dom';
import Search from './components/Search';
import { useEffect, useState } from "react";
import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Users`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};
function App() {
  const [users, setUsers] = useState([]);
const [searchField,SetSearchField] = useState('');


useEffect(() => {
  const fetchUsers = async () => {
    const res = await axios.get(URL, config);
    setUsers(res.data.records);
    console.log(res.data)
  };

  fetchUsers();
}, []);
  return (

    
    <div className="App">
      <Navbar searchField={searchField} SetSearchField={SetSearchField} />
      <Search users={users} searchField={searchField}/>
      
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
