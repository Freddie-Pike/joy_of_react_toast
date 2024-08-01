import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, variant = 'notice', handleDismiss = () => {} }) {
  const [isVisible, setIsVisible] = React.useState(true);
  if (!Object.keys(ICONS_BY_VARIANT).includes(variant)) {
    throw Error(`Invalid variant: ${variant}`);
  }

  const Icon = ICONS_BY_VARIANT[variant];

  return isVisible && (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton} onClick={() => {
        handleDismiss();
        setIsVisible(!isVisible)
      }}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
