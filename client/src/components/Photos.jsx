function Photos(props){
    return (
        <div>
        {props.users.map((user) => {
          return (
            <div className="post-container pa2">
              
                <div className="information">
                  <img className ="avatar" src={user.fields.profilepic} alt="profile pic"></img>
                    <div className="timestamp">
                      <h4>{user.fields.firstname} {user.fields.lastname}</h4>
                    </div>
                  </div>
                </div>
              
            );
        })}
      </div>
    )
}

export default Photos;