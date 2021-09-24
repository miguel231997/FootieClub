import { useState } from "react";
import axios from "axios";
import Form from "./Form";
import Search from "./Search";
import './Post.css';
import { useHistory } from "react-router";

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
  const[likes, setLikes] = useState(0)
  
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      firstname,
      lastname,
      favoriteteam,
      profilepic,
      post,
      likes,
    };

    const res = await axios.post(URL, { fields }, config);
    //toast("Created Team");
    // eslint-disable-next-line
    history.push('/feeds');
    console.log(res.data);
  };

  return (
    
    <div className="container">
      <Search users={props.users} searchField={props.searchField}/>
      <h3 className="white fw9">Create a new post</h3>
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