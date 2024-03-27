import { Button } from '@components/Button';

import styles from './styles.module.scss';

export const Story = () => {
  return (
    <section className={styles.story}>
      <div className={styles.storyContent}>
        <h6 className="subtitle">Why we started </h6>
        <h2 className={styles.storyTitle}>
          It started out as a simple idea and evolved into our passion
        </h2>
        <p className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <Button text="Discover our story >" />
      </div>
    </section>
  );
};
