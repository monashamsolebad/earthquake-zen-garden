import React from 'react'
import styles from './styles.module.css'

export const SortIndicator = ({ isUp = false }) => {
  return (
    <span className={isUp ? styles.upTriangle : styles.downTriangle}>▼</span>
  )
}
