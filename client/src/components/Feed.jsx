import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import thumbsup from './thumbsup.png'
import './Feed.css';
import edit from './edit.png';
import Search from "./Search";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Users`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Feed(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(URL, config);
      setUsers(res.data.records);
      console.log(res.data)
    };

    fetchUsers();
}, []);

return (
    <div>
      <Search users={props.users} searchField={props.searchField}/>

      <div>
        {users.map((user) => {
          return (
            <div className="post-container">
              <div className="posts">
                <div className="information">
                  <img className ="avatar" src={user.fields.profilepic} alt="profile pic"></img>
                    <div className="timestamp">
                      <h4>{user.fields.firstname} {user.fields.lastname}</h4>
                        <p className="time"><small>{user.createdTime}</small></p>
                          </div>
                            </div>
                              <div className = "post-text">
                                <p>{user.fields.post}</p>
                                  <hr/>
                                    <div className ="reaction-bar">
                                    <img className="thumbsup" src={thumbsup}></img>
                                  </div>
                                <div className="edit">
                              <Link to ={`/feeds/${user.id}`} key={user.id}><img className="edit-pic" src={edit}></img>
                            </Link>
                          </div>
                        <div className="favoriteteam">
                      <h6>{user.fields.favoriteteam}</h6>
                    </div>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
}