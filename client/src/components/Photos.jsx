import './Photos.css';
import trash from './trash.png';
import heart from './heart.png';



function Photos(props){
  

    return (
        <div className="photo-div">
        {props.photos.map((photo) => {
          return (
            <section key={photo.id} className="main">
    <div className="wrapper">
        <div className="left-col">

            <div className="center post">
                <div className="info">
                    <div className="user">
                        <div className="profile-pic"><img src={photo.fields.photoprofilepic} alt=""/></div>
                        <p className="username">{photo.fields.name}</p>
                    </div>
                    <img src={trash} className="options" alt=""/>
                </div>
                <img src={photo.fields.photo} className="post-image" alt=""/>
                <div className="post-content">
                <div className="reaction-wrapper">
                        <img src={heart} className="save icon" alt=""/>
                    </div>

                    
                    <p className="white description"><span>{photo.fields.name} </span> {photo.fields.caption}</p>
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