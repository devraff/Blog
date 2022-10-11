import styles from './Comment.module.css'

import { Trash } from 'phosphor-react'

import { ThumbsUp } from 'phosphor-react'

import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string;
  onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy29lY99qWPOrdTIX-SGjmpdvJrn1eehkMoYUzdjRyIIw-oFapTjaJ2M-B48zzoHUKvG4&usqp=CAU"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Figueiredo</strong>
              <time title="29 de setembro às 09:26h" dateTime="2022-05-11 08:13:38">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}