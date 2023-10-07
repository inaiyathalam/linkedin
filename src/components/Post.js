import React from 'react'
import logo from '../images/logo.png'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import postImg from '../images/abc.png'
const Post = (props) => {
  return (
    <div>
                            <div className="post1">
                                <div className="post-profile">
                                    <div className="post-author">
                                        <img src={logo} alt='Logo' className="author-img"/>
                                        <div className="author-details">
                                            <h3>Praveen N</h3>
                                            <p>Python 🌟| Aspiring Web-Developer</p>
                                            <p>21hrs</p>
                                        </div>
                                        
                                    </div>
                                    <MaterialIcon icon="more_horiz" />
                                    <MaterialIcon icon="close" />
                                </div>

                                <div className="post-description">
                                    The perfect safe space for iOS and Android designs 📐

    Hope it helps!
        
                                </div>
                                <div className="post-img">
                                    <img src={props.img} alt='Logo'/>
        
                                </div>
                                <div className="post-reactions">
                                    <div className="reaction-count">
                                    <MaterialIcon icon="thumb_up" />
                                        <p>21</p>
                                    </div>
                                    <p>84 comment</p>
                                    <p>40 shares</p>
                                </div>
                                <hr id="react-comment-hr"/>
                                <div className="post-react">
                                    <div className="post-like">
                                    <MaterialIcon icon="thumb_up" />
                                        <p>Like</p>
                                    </div>
                                    <div className="post-comment">
                                    <MaterialIcon icon="comment" />
                                        <p>Comment</p>
                                    </div>
                                    <div className="post-repost">   
                                    <MaterialIcon icon="share" />
                                        <p>Repost</p>

                                    </div>
                                    <div className="post-share">
                                    <MaterialIcon icon="send" />
                                        <p>Send</p>

                                    </div>


                                </div>
                             
                                <div className="post-leave-comment">
                                    <img src={logo} alt='Logo'/>
                                    <div className="post-comment-input">
                                        <input type="text" placeholder="Add a comment"/>
                                        <MaterialIcon icon="sentiment_satisfied" />
                                        <MaterialIcon icon="image" />

                                    </div>

                                </div>
                            </div>


   
    </div>
  )
}

export default Post
