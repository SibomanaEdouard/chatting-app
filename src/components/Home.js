import home from "../Images/home.png";

import {RiMessage3Fill} from "react-icons/ri"
//this is navigation bar function
export const NavigationTab=(()=>{
    return(
      <div className="fixed row fw-bold" style={{fontFamily:"inter"}}>
        <div className="NavigationTab p-4 row d-flex">
          <span className="col-md-8 text-start">
        <RiMessage3Fill className="fs-2"/>
            <span className="">TALKNET</span>
            </span>
            <span className="col-md-1"><a href="/">Home</a></span>
            <span className="col-md-1"><a href="/about">About</a></span>
            <span className="col-md-1"><a href="/contact">contact</a></span>
            <span className="col-md-1"><a href="/sign/login">Login</a></span>
            
        </div>
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
        <h1 className='enjoy fw-bold'>ENJOY WITH </h1>
        <h1 className="enjoy1 fw-bold">FRIENDS</h1>
        <div className="words fw-light">
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