import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <button className={`${props.class} ${styles.button} rounded`}>{props.text}</button>
  )
}

export default Button