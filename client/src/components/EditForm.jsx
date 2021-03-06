export default function Form(props) {
  return (
    <form className=" center pa5 br2-ns b--black-10" onSubmit={props.handleSubmit}>
      <label className="white db fw6 lh-copy f6"></label>
      <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
        disabled={true}
        type="text"
        value={props.firstname}
        onChange={(e) => props.setFirstName(e.target.value)}
      />
      <br />
      <br />
      <label className="white db fw6 lh-copy f6"></label>
      <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
        disabled={true}
        type="text"
        value={props.lastname}
        onChange={(e) => props.setLastName(e.target.value)}
      />
      <br />
      <br />
      <label className="white db fw6 lh-copy f6"></label>
      <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
        disabled={true}
        type="text"
        value={props.favoriteteam}
        onChange={(e) => props.setFavoriteTeam(e.target.value)}
      />
      <br />
      <br />
      <label className="db fw6 lh-copy f6">Profile Pic</label>
      <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
        type="url"
        value={props.profilepic}
        onChange={(e) => props.setProfilePic(e.target.value)}
      />
      <br />
      <label className="f6 b db mb2">What's on your mind?</label>
      <input className="center db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
        type="text"
        value={props.post}
        onChange={(e) => props.setPost(e.target.value)}
      />
      <br />
      <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-blue">{props.type} Post</button>
    </form>
  );
}