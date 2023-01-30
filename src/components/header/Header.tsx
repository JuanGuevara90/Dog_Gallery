import React from 'react'
import heartImg from '../../assets/heart-icon_34407.png'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <label>Dog Breeds</label>
        <img src={heartImg} style={{height:"25px" , width:"25px"}} alt='heart'/>
    </header>
  )
}

export default Header