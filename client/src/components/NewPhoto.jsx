import { useState } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
//import thumbsup from './thumbsup.png'
import Form from "./Form";
// import Search from "./Search";
import PhotoForm from  "./PhotoForm";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const photoURL = `https://api.airtable.com/v0/${airtableBase}/Photos`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

function Post(){
    const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [caption, setCaption] = useState("");
  const [photoprofilepic, setPhotoProfilePic] = useState("");
  
  //const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      photo,
      caption,
      photoprofilepic,
    };

    const res = await axios.post(photoURL, { fields }, config);
    //toast("Created Team");
    //history.push('/teams');
    console.log(res.data);
  };

  return (
    <div>
      {/* <Search users={props.users} searchField={props.searchField}/> */}
      <h3>Add a new photo</h3>
      <PhotoForm
        name={name}
        setName={setName}
        photo={photo}
        setPhoto={setPhoto}
        caption={caption}
        setCaption={setCaption}
        photoprofilepic={photoprofilepic}
        setPhotoProfilePic={setPhotoProfilePic}
        handleSubmit={handleSubmit}
        type={"Add"}
      />
    </div>
  );
          };


export default Post;