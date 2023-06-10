import home from "../Images/home.png";

import {RiMessage3Fill} from "react-icons/ri"
//this is navigation bar function
export const NavigationTab=(()=>{
    return(
        <div className="NavigationTab">
            <h1 className="header"><a href="/">Home</a></h1>
            <h1 className="about"><a href="/about">About</a></h1>
            <h1 className="contact"><a href="/contact">contact</a></h1>
            <h1 className="login"><a href="/sign/login">Login</a></h1>
            <RiMessage3Fill className="RiMessage3Fill"/>
            <h1 className="logo">ENPEACE</h1>
        </div>
    )
})
//thd function to display the dives
const Content=(()=>{
  return(
    <div className="contentHome">
<div className="videohome">Videos</div>
<div className="messageHome">messages</div>
<div className="stickers">stickers</div>
<div className="gifs">Gifs</div>
<div className="imageHome">images</div>
<div className="homeFig"></div>
 </div>
  )
})
//function to render home page image
export function Images() {
    
    return (
      <div>
        <img src={home} alt='This is the flower' className='image' />
      </div>
    );
  }

export const Home = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        window.location.href = '/sign/login';
      };
    return (
        <div>
            <NavigationTab/>
            <div className="HomeCont">
        <h1 className='enjoy'>ENJOY WITH </h1>
        <h1 className="enjoy1">FRIENDS</h1>
        <div className="words">
           <h5> Share splendid moments</h5>
           <h5> with Your loved ones</h5>
           <h5> With images and videos</h5>
           </div>
        </div>
        <Images/>

        <button className='button1' onClick={handleLogin}>
          WELCOME
        </button>
        <Content />
        </div>
    )
}