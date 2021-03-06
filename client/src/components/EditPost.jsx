import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import Search from "./Search";
import EditForm from "./EditForm";
import { useHistory } from "react-router";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Users`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

function EditPost(props){
    const { id } = useParams();
    const history = useHistory();
    const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [favoriteteam, setFavoriteTeam] = useState("");
  const [profilepic, setProfilePic] = useState("");
  const [post, setPost] = useState("");
  const [likes,setLikes] = useState(0)

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`${URL}/${id}`,config);
          const{ fields } = res.data
          //setLoading(false);
          setProfilePic(fields.profilepic);
          setPost(fields.post)
          setFirstName(fields.firstname)
          setLastName(fields.lastname)
          setFavoriteTeam(fields.favoriteteam)
          setLikes(fields.likes)
        };
    
        fetchUser();
        // eslint-disable-next-line
      }, []);

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
        const res = await axios.put(`${URL}/${id}`, { fields }, config);
    //toast("Updated Team");
    history.push(`/feeds/${res.data.id}`);
    }

    return(
        <div className="vh-100">
          <Search users={props.users} searchField={props.searchField}/>
            <h3 className="black">Edit Post</h3>
            <EditForm
              likes={likes}
              setLikes={setLikes}
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
                type={"Edit"}
            />
        </div>
    )
    
}

export default EditPost;