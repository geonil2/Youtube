import React, { useRef, memo } from 'react';
import styles from './SearchHeader.module.css'

const SearchHeader = memo(
    ({ onSearch }) => {
        const inputRef = useRef();

        const handleSearch = () => {
            const value = inputRef.current.value;
            onSearch(value);
        }

        const onClick = () => {
            handleSearch();
        };

        const onKeyPress = (event) => {
            if(event.key === 'Enter'){
                handleSearch();
            }
        };

        return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img className={styles.img} src="/images/logo.png" alt="logo" />
                    <h1 className={styles.title}>Youtube</h1>
                </div>
                <input className={styles.input} type="search" placeholder="Search..." ref={inputRef} onKeyPress={onKeyPress} />
                <button className={styles.button} type="submit" onClick={onClick}>
                    <img src="/images/search.png" alt="search" />
                </button>
            </header>
        )
    }
);
export default SearchHeader;