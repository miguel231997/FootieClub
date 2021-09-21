import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import thumbsup from './thumbsup.png'
import './Feed.css';
import edit from './edit.png';

function Search(props){

    const [filterUsers, setFilterUsers] = useState([]);


  useEffect(() => {
    const filteredPost = props.users.filter((user) => user.fields?.firstname.toLowerCase().includes(props.searchField.toLowerCase()));
    if(props.searchField.length === 0){
        setFilterUsers([]);
    }else{
      setFilterUsers(filteredPost);
    }
  },[props.searchField])


    return(
        <div>
            {filterUsers.map((user)=>{
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
                )
            }) }
        </div>
    )
}

export default Search;