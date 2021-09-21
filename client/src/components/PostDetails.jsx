import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import Search from "./Search";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Users`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

function PostDetails(props){
    //const[loading,setLoading]=useState(true);
const[user,setUser] = useState({});
const { id } = useParams();
useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${URL}/${id}`,config);
      setUser(res.data);
      //setLoading(false);
    };

    fetchUser();
    // eslint-disable-next-line
  }, []);

//   if(loading){
//       return <div>Loading!!!!!</div>
//   }

    return (
        <div>
          <Search users={props.users} searchField={props.searchField}/>
            <div>
                <h1>{user.fields?.firstname}</h1>
                <h4>{user.fields?.lastname}</h4>
                <h1>{user.fields?.post}</h1>
                <h4>{user.fields?.favoriteteam}</h4>
                <img src={user.fields?.profilepic} alt="profile pic"></img>
                
                <Link to ={`/feeds/${user.id}/edit`}>edit Team</Link>
              
            </div>
        </div>
    )
}
export default PostDetails;
