import React, { useEffect, useState } from 'react'
import firebase from "firebase/compat/app";
import "./css/nav.css"

function Nav() {
  const [show, handleShow] = useState(false);
  

  const transitionNavbar=()=>{
    if(window.scrollY>100)
    {
      handleShow(true)
    }
    else
    {
      handleShow(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", transitionNavbar)

    return ()=>{
      window.removeEventListener("scroll",transitionNavbar)
    }
  },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img  alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        className="logo"/>
        <img  alt="icon" src="https://th.bing.com/th/id/OIP.4l745LKOzMIKiNgqGO6cLQHaHa?pid=ImgDet&w=800&h=800&rs=1"
        onClick={()=>firebase.auth().signOut()} className="nav_avatar"/>

      </div>
    </div>
  )
}

export default Nav