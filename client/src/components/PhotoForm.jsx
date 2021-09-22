function PhotoForm(props){
    return (
        <form onSubmit={props.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
          />
          <br />
          <label>Profile Picture</label>
          <input
            type="url"
            value={props.photoprofilepic}
            onChange={(e) => props.setPhotoProfilePic(e.target.value)}
          />
          <br />
          <label>Submit an Image</label>
          <input
            type="url"
            value={props.photo}
            onChange={(e) => props.setPhoto(e.target.value)}
          />
          <br />
          <label>Caption</label>
          <input
            type="text"
            value={props.caption}
            onChange={(e) => props.setCaption(e.target.value)}
          />
          <br />
          
          <button>{props.type} Image</button>
        </form>
      );
}

export default PhotoForm;