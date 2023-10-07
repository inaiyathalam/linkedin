import React from 'react'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import Header from './Header';
import postImg from '../images/abc.png'
import logo from '../images/logo.png'
import Post from '../components/Post'
const Home = () => {
  return (
    <div >

        <div className="container">
            <Header/>
            <div className="body-container">
                    <div className="body-left">

                    </div>
                    <div className="body-middle">
                        <div className="createpost">
                            <div className="createpost-top">
                                <img src={logo} alt='Logo'/>
                                <input type="text" placeholder="Start a post"/>
                            </div>
                            <div className="createpost-bottom">
                                <div className="media">
                                <MaterialIcon icon="image" />
                                    <p>Media</p>
                                </div>
                                <div className="event">
                                <MaterialIcon icon="event" />
                                    <p>Event</p>
                                </div>
                                <div className="article">
                                <MaterialIcon icon="article" />
                                    <p>Article</p>
                                </div>
                            </div>
                        </div>

                        <div className="horizontalrule">
                            <hr/>
                            <div>
                                <p>Sort by: Top</p>
                                <MaterialIcon icon="arrow_drop_down" />
                            </div>
                        </div>

                        <div className="posts">

                            <Post img={postImg}/>
                            <Post img={postImg}/>

                        </div>
                    
                    </div>
                    <div className="body-right">

                    </div>
            </div>
        </div>

    </div>
  )
}

export default Home
