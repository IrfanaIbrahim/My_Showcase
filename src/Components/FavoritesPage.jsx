import React from 'react';
import styles from './FavoritesPage.module.css'; // Import the CSS for styling
import biscuit1 from '../Images/biscuit1.jpg';
import biscuit2 from '../Images/biscuit2.jpg';
import biscuit3 from '../Images/biscuit3.jpg';
import biscuit4 from '../Images/biscuit4.jpg';
import biscuit5 from '../Images/biscuit5.jpg';
import biscuit6 from '../Images/biscuit6.jpg';
import biscuit7 from '../Images/biscuit7.jpg';
import pen from '../Images/pen.jpg';
import perfume from'../Images/perfume.jpg';
import geometry from '../Images/geometry.jpg';

const FavoritesPage = () => {
  return (
    <div className={styles.favoritesSection}>
      <h2 className={styles.favoritesHeading}>Personal Favorites</h2>
      <p className={styles.caption}>Here are some of the highlights that I hold dear and enjoy the most.</p>
      
      <div className={styles.favoriteCategory}>
        <div className={styles.photoContainer}>
          <img src={biscuit1} alt="Biscuit 1" className={styles.photo} />
          <img src={biscuit2} alt="Biscuit 2" className={styles.photo} />
          <img src={biscuit3} alt="Biscuit 3" className={styles.photo} />
          <img src={biscuit4} alt="Biscuit 4" className={styles.photo} />
          <img src={biscuit5} alt="Biscuit 5" className={styles.photo} />
          <img src={biscuit6} alt="Biscuit 6" className={styles.photo} />
          <img src={biscuit7} alt="Biscuit 7" className={styles.photo} />
          <div className={styles.overlayText}>
            "Biscuits are my top pick—my ultimate treat with no compromise on sharing!"
          </div>
        </div>
      </div>
      
      <div className={styles.penContainer}>
        <div className={styles.overlaypenText}>"I love saving my used pens—each one has its own story and brings a bit of nostalgia to my collection" </div>
        <img src={pen} alt='Pen' className={styles.penPhoto} />
      </div>
      <div className={styles.geometryContainer}>
        <div className={styles.overlaygeometryText}> "Using only black and white, I achieve immense perfection in my free time" </div>
        <img src={geometry} alt='Pen' className={styles.geometryPhoto} />
      </div>
      <div className={styles.perfumeContainer}>
        <div className={styles.overlayperfumeText}> "Me realising Perfumes plays a huge role in Memories" </div>
        <img src={perfume} alt='Pen' className={styles.perfumePhoto} />
      </div>
      
    </div>
  );
};

export default FavoritesPage;