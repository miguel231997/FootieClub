import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import thumbsup from './thumbsup.png'
import './Feed.css';
import edit from './edit.png';
import Search from "./Search";
import { useHistory } from "react-router";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Users`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Feed(props) {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(URL, config);
      setUsers(res.data.records);
      console.log(res.data)
    };

    fetchUsers();
    // eslint-disable-next-line
}, [toggle]);


const handleClick = async (event) => {
  const userId = event.target.dataset.userid;
  const likes = Number(event.target.dataset.likes);
  console.log(userId);
  const fields = {
      likes: likes + 1
    };
  const res = await axios.patch(`${URL}/${userId}`, { fields }, config);
  setToggle(prevToggle =>!prevToggle);
//toast("Updated Status");
history.push(`/feeds/${res.data.id}`);
}

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
                                    <img alt="" data-likes={user.fields.likes} data-userid={user.id} className="thumbsup" src={thumbsup} onClick={event => handleClick(event)}></img>
                                   {user.fields.likes === 0 ? (<span className="pl1 gray b"></span>) : (<span className="pl1 gray b">{user.fields.likes}</span>)}
                                  </div>
                                <div className="edit">
                              <Link to ={`/feeds/${user.id}`} key={user.id}><img alt="" className="edit-pic" src={edit}></img>
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