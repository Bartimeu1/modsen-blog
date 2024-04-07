import React from 'react';
import { Button } from '@components/Button';

import styles from './styles.module.scss';

const NotFoundPage = () => {
  return (
    <main className={styles.notFound}>
      <h2>This page does not exist</h2>
      <Button href="/" text="Home" />
    </main>
  );
};

export default NotFoundPage;
