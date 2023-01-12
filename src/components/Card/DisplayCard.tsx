import React from 'react';

import styles from './DisplayCard.module.css'

export interface IDisplayCardProps {
}

export default function DisplayCard (props: IDisplayCardProps) {
  return (
    <div className={styles.flexCard}>
      <div className={styles.Card}>
        <div>
          <form>
              <input className={styles.searchInput} type={'text'}
              placeholder={'Search for a city...'}
              ></input><i className={"bi bi-search " + styles.searchButton}/>
          </form>
        </div>
        <h1 className={styles.textLeft + ' ' + styles.title}>Weather In Bostil</h1>
        <h2 className={styles.centralize + ' ' + styles.weather}>9 °C</h2>
      </div>
    </div>
  );
}
