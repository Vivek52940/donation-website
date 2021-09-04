import React from 'react'
import './contact.css';
import src from './profile.jpeg';
function Contact() {
    return (
        <div className="flex-container" id="contact">
        <header>
          <h1>Contact</h1>
         </header>
          <div class="content1">
          <div className="item11">
          <div><p><i class="fas fa-user-circle"></i>Name: Vivek Singh</p></div>
           <div><p><i class="fas fa-envelope"> </i> Email: imvsingh64@gmail.com</p></div>
           <div><p><i class="fas fa-phone-square-alt"></i>Phone: +91 9876543210</p></div>
           <div><p><i class="fas fa-map-marker"></i> Address: Asansol</p></div>
           <div><p><i class="fas fa-university"></i>College:Asansol Engineering College</p></div>
          </div>
          <div className="item">
             <img src={src}/>
           </div>
           </div>
   </div> 
    )
}

export default Contact
