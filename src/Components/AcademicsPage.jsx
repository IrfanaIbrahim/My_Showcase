import React from 'react';
import styles from './AcademicsPage.module.css';

const AcademicsPage = () => {
  return (
    <div className={styles.academicsSection}>
      <h2 className={styles.academicsHeading}>My Academic Journey</h2>
      
      <div className={styles.academicCategory}>
        <div className={styles.categoryTitle}>Class 10th</div>
        <div className={styles.academicCard}>
          <div className={styles.academicContent}>
            <h3>Class 10th Overview</h3>
            <p className={styles.academicDetails}>
              I scored a full A+ in Class X at <strong>St. Joseph’s EMHS, Thrikkakara</strong> (2018). This perfect score was a proud moment for me and showed my dedication and hard work during those formative years. It set a strong foundation for my future academic adventures!
            </p>
          </div>
        </div>
        
        <div className={styles.categoryTitle}>Class 12th</div>
        <div className={styles.academicCard}>
          <div className={styles.academicContent}>
            <h3>Class 12th Overview</h3>
            <p className={styles.academicDetails}>
              Completed my higher secondary education at <strong>Cardinal HSS, Thrikkakara</strong> (2020), achieving an impressive 98%. This stage of my education was crucial in building a strong foundation in science and mathematics, and it fueled my passion for technology and engineering.
            </p>
          </div>
        </div>
        
        <div className={styles.categoryTitle}>BTech</div>
        <div className={styles.academicCard}>
          <div className={styles.academicContent}>
            <h3>BTech Overview</h3>
            <p className={styles.academicDetails}>
              I’ve just wrapped up my B.Tech in Electronics and Communication Engineering from <strong>Govt. Model Engineering College, Kochi</strong> (2024), with a solid aggregate of 9.83. It’s been an amazing journey, filled with challenges and learning, and I’m excited to take the next steps in my career with all the knowledge and experiences I’ve gained!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;
