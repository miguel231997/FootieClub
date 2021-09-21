import './Photos.css';
import logo from './logo.png';

function Photos(props){
    return (
        <div>
        {props.photos.map((photo) => {
          return (
            <section className="main">
    <div className="wrapper">
        <div className="left-col">

            <div className="post">
                <div className="info">
                    <div className="user">
                        <div className="profile-pic"><img src={photo.fields.photoprofilepic} alt=""/></div>
                        <p className="username">{photo.fields.name}</p>
                    </div>
                    <img src={logo} className="options" alt=""/>
                </div>
                <img src={photo.fields.photo} className="post-image" alt=""/>
                <div className="post-content">
                    
                    
                    <p className="description"><span>{photo.fields.name} </span> {photo.fields.caption}</p>
                    <p className="post-time">{photo.createdTime}</p>
                </div>
                
            </div>
        </div>
    </div>
</section>
              
            );
        })}
      </div>
    )
}

export default Photos;

{/* <div>
        {props.photos.map((photo) => {
          return (
            <div className="post-container pa2">
              
                <div className="information">
                  <img className ="avatar" src={photo.fields.photoprofilepic} alt="profile pic"></img>
                    <div className="timestamp">
                      <h4>{photo.fields.name}</h4>
                    </div>
                  </div>
                </div>
              
            );
        })}
      </div>
    ) */}