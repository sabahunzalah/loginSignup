import React from 'react'
import styles from './Button.module.css'

const Button = ({name}) => {
  return (
    <button className={styles.btn}>{name}</button>
  )
}

export default Button
