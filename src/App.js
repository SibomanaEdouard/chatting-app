
import { useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import { Home } from './components/Home';
import LoginForm from './components/Login';
import UpdatePassword from './components/UpdatePassword';
import SignInForm from './components/Sign';
import Touch from './components/touch';
import About from './components/About';
import Profile from './pages/addprofile';
import { Account } from './pages/myAccount';
import { Messages } from './pages/messages';
import { Friends } from './pages/Friends';
import { Recommends } from './pages/Recommands';
import { Settings } from './pages/Settings';
import { Collapsed } from './pages/collapsedPost';
import {io} from 'socket.io-client';



// import Header from './pages/HeaderWork';
function App() {

  let socket = useRef(null)
  useEffect(()=>{
     socket.current=io('http://localhost:5500')
  },[])
  return (
  
    <div className="App">
    
      <Router>
   
<Routes>

        <Route path="/" element={<Home socket={socket}/>}/>
        <Route path="/sign" element={<SignInForm socket={socket}/>}/>
        <Route path="/sign/login" element={<LoginForm socket={socket}/>}/>
        <Route path="/updatepassword" element={<UpdatePassword socket={socket}/>}/>
        <Route path="/contact" element={<Touch socket={socket}/>}/>
        <Route path="/about" element={<About socket={socket}/>}/>
        <Route path="/profile" element={<Profile socket={socket}/>}/>
        <Route path="/account" element={<Account socket={socket}/>}/>
        <Route path="/messages" element={<Messages socket={socket}/>}/>
        <Route path="/friends" element={<Friends socket={socket}/>}/>
        <Route path="/recommends" element={<Recommends socket={socket}/>}/>
        <Route path="/settings" element={<Settings socket={socket}/>}/>

        <Route path="/posts" element={<Collapsed socket={socket}/>}/>    
        </Routes>
      </Router>      
    </div>
   
   
  );
}

export default App;



