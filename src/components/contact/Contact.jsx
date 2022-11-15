import "./contact.scss";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import {  useRef, useState } from "react";

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gkk2e8q', 'template_g8fq5wq', form.current, '0ZUbmrjIYGt7R9MOj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  return (
    <div className="contact" id="contact">
      <div className="bg"></div>
      <div className="wrapper" >
        <div className="left">
          <h1 className="title">contact with me</h1>
          <div className="info">
            <div className="info-item">
              <img src={Phone} alt="" className="icon" />
              01093791858 
            </div>
            <div className="info-item">
              <img className="icon" src={Email} alt="" />
              emanashraf19951992@gmail.com
            </div>
            <div className="info-item">
              <img className="icon" src={Address} alt="" />
              New Damietta, Damietta
            </div>
          </div>
        </div>
        <div className="right">
          <form ref={form} onSubmit={sendEmail}>
         <input 
          type="text" placeholder="Name" name="name" required/>
         <input 
          type="text" placeholder="Email" name="email" required/>
          <textarea   
          placeholder="Message" name="message"  required></textarea>
          <button type="submit">Send</button>
          {done && "Thanks, I'll reply ASAP"}
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
