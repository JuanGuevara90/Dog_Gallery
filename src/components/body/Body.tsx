import React from 'react'
import styles from './styles.module.css'
import Input from './input'
import Gallery from './gallery'

const Body = () => {
  return (
    <section className={styles.body}>
        <Input />
        <Gallery />
    </section>
  )
}

export default Body