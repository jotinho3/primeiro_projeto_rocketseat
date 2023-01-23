import styles from "./Comment.module.css";
import { ThumbsUp, TrashSimple } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import Swal from "sweetalert2";



interface CommentsProps {
  content: string;
  name: string;
  date: string;
  avatarURL: string;
  id: string;
  onDeleteComment: (commentToDelete: string) => void;
}


export function Comment({name, content, date, avatarURL, onDeleteComment, id}:CommentsProps) {


  const [likeCount, setLikeCount] = useState(0);


  //Esta função popara um alerta perguntando se quer deletar, if para ir para a função de deletar ou cancelar a ação.

  function handleDeleteCommentPopUpBlock() {


    Swal.fire({
      title: 'Você tem certeza que quer excluir este comentário?',
      text: "Você não poderá reverter essa ação!",
      icon: 'warning',
      background: '#323238',
      width: 400,
      color: '#ffffff',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, eu quero excluir'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          background: '#323238',
          width: 400,
          color: '#ffffff',
          title: 'Deletado!!!',
          titleText: 'Seu comentário foi deletado com sucesso!',
          icon: 'success',
        }
        )

        handleDeleteComment()
      }
    })


  }



  function handleDeleteComment() {
    console.log(typeof(id))
    
    onDeleteComment(id)  
    
  }


  // função de like sem levar em consideração o state mais atual do likeCount

  // function handleLikeComment() {
  //   setLikeCount(likeCount + 1)
     
  // }

  
  //função de like levando em consideração o state mais atual do likeCount (Closures no React)
  
  function handleLikeComment() {
    setLikeCount((state) => {
      return (state + 1)

    })


     
  }

  return (
    <div className={styles.Comment}>
            <Avatar
            src={avatarURL}
            hasBorder={false}
          />

      <div className={styles.CommentBox}>
        <div className={styles.CommentContent}>
          <header>
            <div className={styles.CommentAuthorAndTime}>
                <strong>{name}</strong>
              <time>{date}</time>
            </div>

            <button title="Deletar o comentário" onClick={handleDeleteCommentPopUpBlock}>
              <TrashSimple size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
