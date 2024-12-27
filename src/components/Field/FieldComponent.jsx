import React from 'react'
import styles from './Field.module.css'

const FieldComponent = ({ labelName,type,name,placeholder}) => {
  return (
    <div className={styles.inputDiv}>
        <label htmlFor={name}>{ labelName}</label>
      <input type={type}
      name={name}
      id={name}
      placeholder={placeholder} />
    </div>
  )
}

export default FieldComponent
