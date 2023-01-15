import React, { ChangeEvent } from 'react';

import styles from './searchInput.module.css'

export interface ISearchInputProps {
    cityInputValue : string,
    setCityInputValue : Function,
    fetchAPI : Function
}

export default function SearchInput ({cityInputValue, setCityInputValue, fetchAPI}: ISearchInputProps) {
    const handleChange = ((event : ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setCityInputValue(event.target.value)
    })

    const fetchAPIFunction = () => {
        fetchAPI()
    }

  return (
    <div>
            <input className={styles.searchInput} type={'text'}
            placeholder={'Search for a city...'}
            value={cityInputValue}
            onChange={handleChange}
            ></input><i className={"bi bi-search " + styles.searchButton}
              onClick={fetchAPIFunction}
            />
    </div>
  );
}
