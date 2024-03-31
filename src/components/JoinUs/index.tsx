import { Button } from '@components/Button';
import { routes } from '@root/constants';

import styles from './styles.module.scss';

export const JoinUs = () => {
  return (
    <section className={styles.joinUs}>
      <h2 className="title">Join our team to be a part of our story</h2>
      <p className="infoText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Button text="Join Now" href={routes.contact} />
    </section>
  );
};
