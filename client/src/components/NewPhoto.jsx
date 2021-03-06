import { useState } from "react";
import axios from "axios";
import Search from "./Search";
import PhotoForm from  "./PhotoForm";
import './NewPhoto.css';
import { useHistory } from "react-router";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const photoURL = `https://api.airtable.com/v0/${airtableBase}/Photos`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

function Post(props){
    const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [caption, setCaption] = useState("");
  const [photoprofilepic, setPhotoProfilePic] = useState("");
  
  const history = useHistory();
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
    history.push('/');
    console.log(res.data);
  };

  return (
    <div className="box">
      <Search users={props.users} searchField={props.searchField}/>
      <h3 className="white fw9">Add a new photo</h3>
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