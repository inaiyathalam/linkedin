import React from 'react'
import logo from '../images/logo.png'

import MaterialIcon from 'material-icons-react';
const Header = () => {
  return (
    <div>
            <header>
                <div className="nav-container">
                    <div className="left-nav">
                        <img src={logo} width="34px" height="34px" alt='Logo'/>
                            <div className="search-container">
                            <MaterialIcon icon="search" />
                                <input type="text" placeholder="Search" id="search-button"/>
                            </div>
        
                    </div>
                    <div class="middle-nav">
                        <div className="home"><MaterialIcon icon="home" id="nav-icons" /><p>Home</p></div>
                        <div className="network"><MaterialIcon icon="group" id="nav-icons" /><p>My Network</p></div>
                        <div className="jobs"><MaterialIcon icon="work" id="nav-icons" /><p>Jobs</p></div>
                        <div className="messaging"><MaterialIcon icon="chat" id="nav-icons" /><p>Messaging</p></div>
                        <div className="notifications"><MaterialIcon icon="notifications" id="nav-icons" /><p>Notifications</p></div>
                        <div className="profile">
                        <MaterialIcon icon="person" id="nav-icons" />
                            <p>Me <MaterialIcon icon="arrow_drop_down" /></p>
                            <div className="profile-dropdown">
                                <div className="profile-dropdown-content">
                                    <a href="#">Profile</a>
                                    <a href="#">Settings</a>
                                    <a href="#">Logout</a>
                                    <a href="#">Logout</a>
                                    <a href="#">Logout</a>
                                    <a href="#">Logout</a>
                                    <a href="#">Logout</a>
                                    <a href="#">Logout</a>
                                    <a href="#">Logout</a>

                                    <a href="#">Logout</a>
                                    <a href="#">Logout</a>
                                    <a href="#">Logout</a>

                                    <a href="#">Logout</a>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                    <div className="right-nav">
                        <div className="business"> <MaterialIcon icon="menu" /><p>Buisness</p></div>
                        <div className="learning"> <MaterialIcon icon="smart_display" /><p>Home</p></div>
                    </div>
                </div>
            </header>
    </div>
  )
}

export default Header


// import React from 'react'
// import logo from '../images/logo.png'
// import MaterialIcon, {colorPalette} from 'material-icons-react';
// const Header = () => {
//   return (
//     <div>
//         <header>
//             <div className="nav-container">
//                 <div className="left-nav">
//                         <img src={logo} width="34px" height="34px" alt='Logo'/>
//                         <div className="search-container">
//                         <MaterialIcon icon="search" color={'red'}  />
//                             <input type="text" placeholder="Search" id="search-button"//>
//                         </div>
    
//                 </div>
//                 <div class="middle-nav">
//                     <div className="home"><MaterialIcon icon="home" id="nav-icons" /><p>Home</p></div>
//                     <div className="network"><MaterialIcon icon="group" id="nav-icons" /><p>My Network</p></div>
//                     <div className="jobs"><MaterialIcon icon="work" id="nav-icons" /><p>Jobs</p></div>
//                     <div className="messaging"><MaterialIcon icon="chat" id="nav-icons" /><p>Messaging</p></div>
//                     <div className="notifications"><MaterialIcon icon="notifications" id="nav-icons" /><p>Notifications</p></div>
//                     <div className="profile"><MaterialIcon icon="person" id="nav-icons" /><p>Me<MaterialIcon icon="arrow_drop_down" /></p></div> 
//                 </div>
//                 <div className="right-nav">
//                     <div className="business"><MaterialIcon icon="menu" className="nav-icons" /><p>Buisness</p></div>
//                     <div className="learning"><MaterialIcon icon="smart_display" className="nav-icons" /><p>Learning</p></div>
//                 </div>
//             </div>
//         </header>
//     </div>
//   )
// }

// export default Header
