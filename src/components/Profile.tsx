import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/Components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)
    return(
      <div className={styles.profileContainer}>
      <img src="profile.jpg" alt="Randon user"/>
      <div>
      <strong>Randon user</strong> 
      <p>
        <img src="icons/level.svg" alt="Level"/>
        Level {level}</p>
      </div>
      </div>
    );
}