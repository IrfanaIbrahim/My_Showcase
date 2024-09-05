import React, { useRef } from 'react';
import styles from './Welcome.module.css';
import { Slide } from 'react-awesome-reveal';
import DateTime from './DateTime'; // Import the DateTime component
import Aboutme from '../Images/Aboutme.jpg';
import casual from '../Images/Casual.jpg';
import name from '../Images/name.png';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import emailjs from '@emailjs/browser';

function Welcome() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_detjf9w', 'template_bftz8xi', form.current, 'EPsaDuwO829_BshGK')

      .then((result)=> {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent Successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <>
      <div className={styles.backgroundContainer}>
        <div className={styles.navbar}>
          <ul>
            <li>
              <button
                className={styles.navButton}
                onClick={() => navigate('/academics')}
              >
                Academics
              </button>
            </li>
            <li>
              <button
                className={styles.navButton}
                onClick={() => navigate('/fauvorites')}
              >
                Favorites
              </button>
            </li>
            <li>
              <button
                className={styles.navButton}
                onClick={() => navigate('/projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={styles.navButton}
                onClick={() => navigate('/about')}
              >
                About
              </button>
            </li>
            <DateTime className={styles.date} />
          </ul>
        </div>
        
        <div className={styles.textContent}>
          <Slide direction="left" duration={1500} triggerOnce>
            <h1 className={styles.helloText}>Hello,</h1>
          </Slide>
          <Slide direction="right" duration={1500} triggerOnce>
            <h1 className={styles.nameText}>I am Irfana Ibrahim</h1>
          </Slide>
          <p className={styles.welcomeText}>Glad You’re Here in My Digital Space!</p>
        </div>
      </div>   

      <div className={styles.aboutMeSection}>
        <div className={styles.photoContainer}>
        <img src={Aboutme} alt="Portrait of Irfana Ibrahim" className={styles.profilePhoto} />

        </div>
        <div className={styles.aboutMeContent}>
          <h2>A Little About Me?</h2>
          <p>
            I’m a BTech grad in Electronics and Communication from Model Engineering College. While I’ve got a grounding in electronics, I love diving into new technologies and creating cool stuff on the web. I’m also really into geometric drawing and plan drawing—kind of like blending the precision of civil engineering with my passion for tech.
            I’m always excited about the next challenge and looking forward to making a splash in the tech world!
          </p>
        </div>
      </div>

      <div className={styles.aboutSiteSection}>
        <div className={styles.aboutSiteContent}>
          <h2>Step Into My World!</h2>
          <p>
            This isn’t your typical portfolio site. Here, I blend my passion for tech with my love for creativity and exploration. It’s a little more informal, a little more personal—giving you a real glimpse into what makes me tick, beyond the usual professional facade. Enjoy the journey through my interests and projects!
          </p>
        </div>
        <div className={styles.photoContainer1}>
        <img src={casual} alt="Casual portrait of Irfana Ibrahim" className={styles.profilePhotoRight} />

        </div>
      </div>

      <div className={styles.nameSection}>
        <div className={styles.photoContainer2}>
          <img src={name} alt="Irfana Ibrahim" className={styles.profilePhoto} />
        </div>
        <div className={styles.nameSectionContent}>
          <h2>My Name, My Identity</h2>
          <p>
            My name is <strong>Irfana Ibrahim</strong>, and it carries a special meaning for me. "Irfana" means "knowledge" or "wisdom" in Arabic, and it's a name that inspires me to constantly seek learning and understanding in all aspects of life. 
            I love writing or introducing myself with my full name—<strong>Irfana Ibrahim</strong>—as it reflects both my identity and my aspirations.
          </p>
        </div>
      </div>

      <div className={styles.quoteSection}>
        <div className={styles.quoteContent}>
          <h2>A Brighter Tomorrow Awaits</h2>
          <p>
            "Indeed what is to come will be better for you than what has gone by." ✨
            <br />
            [93:4]
          </p>
        </div>
      </div>

      <div className={styles.contactSection}>
        <h2>Get in Touch</h2>
        <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" placeholder='Your Name' name='your_name' required />
  
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" placeholder='Your Email' name="your_email" required />
  
  <label htmlFor="subject">Subject:</label>
  <input type="text" id="subject" name="subject" />
  
  <label htmlFor="message">Message:</label>
  <textarea id="message" name="message" rows="4" required></textarea>
  
  <button type="submit">Send Message</button>
</form>

        <div className={styles.socialMediaLinks}>
          <a href="http://linkedin.com/in/irfana-ibrahimphi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/irfana_ibrahim_____?igsh=Mzl4azNvcXIxZGRo" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://github.com/IrfanaIbrahim" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Welcome;
