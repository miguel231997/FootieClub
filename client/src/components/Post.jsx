import { useState } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
//import thumbsup from './thumbsup.png'
import Form from "./Form";
import Search from "./Search";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Users`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

function Post(props){
    const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [favoriteteam, setFavoriteTeam] = useState("");
  const [profilepic, setProfilePic] = useState("");
  const [post, setPost] = useState("");
  
  //const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      firstname,
      lastname,
      favoriteteam,
      profilepic,
      post,
    };

    const res = await axios.post(URL, { fields }, config);
    //toast("Created Team");
    //history.push('/teams');
    console.log(res.data);
  };

  return (
    <div>
      <Search users={props.users} searchField={props.searchField}/>
      <h3>Create a new post</h3>
      <Form
        firstname={firstname}
        setFirstName={setFirstName}
        lastname={lastname}
        setLastName={setLastName}
        favoriteteam={favoriteteam}
        setFavoriteTeam={setFavoriteTeam}
        profilepic={profilepic}
        setProfilePic={setProfilePic}
        post={post}
        setPost={setPost}
        handleSubmit={handleSubmit}
        type={"Create"}
      />
    </div>
  );
          };


export default Post;