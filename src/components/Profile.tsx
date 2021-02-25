import styles from "../styles/components/profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/27507717?v=4"
        alt="Dario Souza"
      />
      <div>
        <strong>Dario de Souza</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
