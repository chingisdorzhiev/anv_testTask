import React from 'react'
import styles from './SidebarStyles.module.css'
import Item from './Item/Item'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Item category={'Личный кабинет'}/>
      <Item category={'Клиенты'}/>
      <Item category={'Поставщики'}/>
      <Item category={'Настройки'}/>
      <Item category={'Аналитика'}/>
    </div>
  )
}
