export default function Form(props) {
    return (
      <form className=" center pa5 br2-ns ba b--black-10" onSubmit={props.handleSubmit}>
        <label className="white db fw6 lh-copy f6">First Name</label>
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type="text"
          value={props.firstname}
          onChange={(e) => props.setFirstName(e.target.value)}
        />
        <br />
        <label className="white db fw6 lh-copy f6">Last Name</label>
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type="text"
          value={props.lastname}
          onChange={(e) => props.setLastName(e.target.value)}
        />
        <br />
        <label className="white db fw6 lh-copy f6">Favorite Team</label>
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type="text"
          value={props.favoriteteam}
          onChange={(e) => props.setFavoriteTeam(e.target.value)}
        />
        <br />
        <label className="white db fw6 lh-copy f6">Profile Pic</label>
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type="url"
          value={props.profilepic}
          onChange={(e) => props.setProfilePic(e.target.value)}
        />
        <br />
        <label className="f6 b db mb2"></label>
        <input placeholder="What's on your mind?" className="center db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
          type="text"
          value={props.post}
          onChange={(e) => props.setPost(e.target.value)}
        />
        <br />
        <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-blue">{props.type} Post</button>
      </form>
    );
  }