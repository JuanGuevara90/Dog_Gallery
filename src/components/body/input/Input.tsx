import React from 'react'
import styles from './styles.module.css'
const Input = () => {
  return (
    <div className={styles.input}>
      <input placeholder='Input text'/>
      <button> Search </button>
    </div>
  )
}

export default Input