import React from 'react'
import styles from './ButtonOutline.module.css'

const ButtonOutline = (props) => {
  return (
    <button className={`${props.class} ${styles.button} rounded`}>{props.text}</button>
  )
}

export default ButtonOutline