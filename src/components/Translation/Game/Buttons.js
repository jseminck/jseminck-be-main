import React from "React";
import styles from './Buttons.scss';

export default ({onShow, onNext}) => (
  <div className={styles.buttons}>
      <button
          className={styles.showButton}
          onClick={() => onShow()}
      >
          Show
      </button>
      <button
          className={styles.nextButton}
          onClick={() => onNext()}
      >
          Next
      </button>
  </div>
);