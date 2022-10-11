import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="" />

      <div className={styles.profile}>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy29lY99qWPOrdTIX-SGjmpdvJrn1eehkMoYUzdjRyIIw-oFapTjaJ2M-B48zzoHUKvG4&usqp=CAU" />

        <strong>Rafael Figueiredo</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}