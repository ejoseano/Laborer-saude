import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/Components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completedCHallengesContainer}>
        <span>Desafios completos</span>
        <span>{challengesCompleted}</span>
        </div>
    );
}