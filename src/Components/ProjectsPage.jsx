import React from 'react';
import styles from './ProjectsPage.module.css'; // Import the CSS for styling

const ProjectsPage = () => {
 
  return (
    <div id="projects" className={styles.projectsSection}>
      <h2 className={styles.projectsHeading}>My Featured Projects</h2>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>1. Enhancing Object Tracking Performance through Fusion of Lidar and Radar Data</h3>
            <p className={styles.projectDescription}>
              This project focused on enhancing object tracking by fusing Lidar and radar data using Kalman and Extended Kalman filters. A comparative analysis showed that the Extended Kalman Filter (EKF) consistently outperformed the Kalman Filter (KF), demonstrating lower Root Mean Square Error (RMSE) and better handling of nonlinearities and uncertainties. This makes the EKF a strong choice for applications like autonomous navigation and robotics.
              <br />
              <strong>Duration:</strong> 3 months
              <br />
              <strong>Technologies:</strong> Python, NumPy, SciPy, Matplotlib 
            </p>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>2. ToDo-Manager</h3>
            <p className={styles.projectDescription}>
              Developed a web app for managing personal projects and todos, where users can securely log in and manage their own projects. The app features secure user authentication to ensure that each user accesses only their own data. It supports project creation, allowing users to organize their work effectively. Additionally, the app includes comprehensive todo management within each project, with functionalities to add, edit, delete, and mark todos as complete or pending. It also displays created and updated dates.
              <br />
              <strong>Duration:</strong> 5 Days
              <br />
              <strong>Technologies:</strong> React.js, Node.js, Express.js, MySQL 
            </p>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>3. Heart Disease Prediction using Machine Learning </h3>
            <p className={styles.projectDescription}>
              Developed a Heart Disease Predictor utilizing Machine Learning to assess whether an individual may be suffering from cardiovascular disease based on specific symptoms. The system analyzes various input parameters related to heart health and uses trained algorithms to provide a prediction, aiding in early detection and intervention.
              <br />
              <strong>Duration:</strong> 1 Week
              <br />
              <strong>Technologies:</strong> Python, Pandas, Numpy, Google Colab 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
