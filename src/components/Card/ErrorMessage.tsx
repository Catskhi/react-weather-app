import React from 'react';

import styles from './ErrorMessage.module.css'

export interface IErrorMessageProps {
    errorMessage : string    
}

export default function ErrorMessage ({errorMessage}: IErrorMessageProps) {
  return (
    <div>
        <p className={styles.errorMessage}>{errorMessage}</p>
    </div>
  );
}
