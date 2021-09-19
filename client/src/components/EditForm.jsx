export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>First Name</label>
      <input
        disabled={true}
        type="text"
        value={props.firstname}
        onChange={(e) => props.setFirstName(e.target.value)}
      />
      <br />
      <label>Last Name</label>
      <input
        disabled={true}
        type="text"
        value={props.lastname}
        onChange={(e) => props.setLastName(e.target.value)}
      />
      <br />
      <label>Favorite Team</label>
      <input
        disabled={true}
        type="text"
        value={props.favoriteteam}
        onChange={(e) => props.setFavoriteTeam(e.target.value)}
      />
      <br />
      <label>Profile Pic</label>
      <input
        type="url"
        value={props.profilepic}
        onChange={(e) => props.setProfilePic(e.target.value)}
      />
      <br />
      <label>What's on your mind?</label>
      <input
        type="text"
        value={props.post}
        onChange={(e) => props.setPost(e.target.value)}
      />
      <br />
      <button>{props.type} Post</button>
    </form>
  );
}