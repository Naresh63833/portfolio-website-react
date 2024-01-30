import React,{useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context'
import { useContext } from 'react'


const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  const form = useRef();
  const [done,setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_65pyn8f', 'template_9khat2g', form.current, 'xuZw8sbv6YKbP3Xdf')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id='contact'>
        <div className="w-left">
            <div className="span">
                <span style={{color: darkMode? 'white' : ''}}>Get in touch</span><br/>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background:"ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" id="" className='user' placeholder='Name'/>
                <input type="email" name="user_email" id="" className='user' placeholder='Email'/>
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value="Send" className='button'/>
                <span className='thanks'>{done && "Thanks for contacting me"}</span>
                <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact