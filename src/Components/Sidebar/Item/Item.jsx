import React from 'react'
import styles from "./ItemStyles.module.css"

export default function Item({category}) {
  return (
    <div className={styles.item}>
      {category}
    </div>
  )
}
