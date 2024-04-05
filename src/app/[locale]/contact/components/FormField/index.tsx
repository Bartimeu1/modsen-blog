import styles from './styles.module.scss';
import { IFormFieldProps } from './types';

export const FormField = (props: IFormFieldProps) => {
  const { errorText, children } = props;
  return (
    <div className={styles.formField}>
      {children}
      {errorText && <p className={styles.errorText}>{errorText}</p>}
    </div>
  );
};
