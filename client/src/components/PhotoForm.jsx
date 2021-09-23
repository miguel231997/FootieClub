function PhotoForm(props){
    return (
        <form className=" center pa5 br2-ns b--black-10" onSubmit={props.handleSubmit}>
          <label className="white db fw6 lh-copy f6">Name</label>
          <input placeholder="full name" className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
            type="text"
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
          />
          <br />
          <label className="white db fw6 lh-copy f6">Profile Picture</label>
          <input placeholder="link only" className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
            type="url"
            value={props.photoprofilepic}
            onChange={(e) => props.setPhotoProfilePic(e.target.value)}
          />
          <br />
          <label className="white db fw6 lh-copy f6">Submit an Image</label>
          <input placeholder="link only" className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
            type="url"
            value={props.photo}
            onChange={(e) => props.setPhoto(e.target.value)}
          />
          <br />
          <label className="f6 b db mb2">Caption</label>
          <input placeholder="Write a caption" className="center db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
            type="text"
            value={props.caption}
            onChange={(e) => props.setCaption(e.target.value)}
          />
          <br />
          
          <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-blue">{props.type} Image</button>
        </form>
      );
}

export default PhotoForm;