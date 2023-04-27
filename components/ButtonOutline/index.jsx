import React from 'react'
import styles from './ButtonOutline.module.css'

const ButtonOutline = (props) => {
  return (
    <button className={`${props.className} ${styles.button} rounded`}>{props.text}</button>
  )
}

export default ButtonOutline