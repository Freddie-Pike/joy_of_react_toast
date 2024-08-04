import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { useEscapeKey } from '../../hooks';
import { ToastContext } from '../ToastProvider';

function ToastShelf({ toasts }) {
  const { toastList, handleDismiss, removeAllToasts } = React.useContext(ToastContext);

  useEscapeKey(removeAllToasts);

  return (
    <ol className={styles.wrapper} role='region' aria-live='polite' aria-label='Notification'>
      {toastList.map((toast) => {
        return <li key={toast.id} className={styles.toastWrapper}>
          <Toast id={toast.id} variant={toast.variant} handleDismiss={handleDismiss}>{toast.message}</Toast>
        </li>
      })}
    </ol>
  );
}

export default ToastShelf;
