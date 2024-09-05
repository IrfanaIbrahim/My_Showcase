// src/Components/AboutSection.jsx
import React from 'react';
import styles from './AboutSection.module.css';
import profilePhoto from '../Images/About.png'; 

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.photoContainer}>
        <img src={profilePhoto} alt="Irfana Ibrahim" className={styles.photo} />
      </div>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.basicInfo}>
        <p><strong>Name:</strong> Irfana Ibrahim</p>
        <p><strong>Date of Birth:</strong> 24th August 2002</p>
        <p><strong>Location:</strong> Kochi, India</p>
        <p><strong>Email:</strong> irfanaibrahim3phi@gmail.com</p>
      </div>
      <p className={styles.description}>
      Hi there! I'm Irfana Ibrahim 👋, a recent graduate in Electronics and Communication Engineering. I'm passionate about technology and problem-solving, with hands-on experience in a variety of tech projects.
      </p>
      <p className={styles.description}>
      I thrive on tackling projects that challenge me and allow me to dive into new technologies. I’m an enthusiastic and quick learner, always eager to embrace new challenges and broaden my skills. When I’m not coding, you’ll find me enjoying geometric drawing and participating in various activities.
      </p>
      <p className={styles.description}>
      Currently, I’m working on some exciting projects and am looking forward to exploring even more challenges. Feel free to reach out if you’d like to chat about tech, projects, or just life in general. Catch you around! 😊
      </p>
      
    </section>
  );
};

export default AboutSection;
