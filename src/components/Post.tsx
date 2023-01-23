import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { ChangeEvent, FormEvent, useState } from "react";
import { useCallback } from "react";

const commentJson = [
    {
      id: "1",
      author: {
        name: "João Pedro Marques Chaves",
        avatarURL: "https://github.com/jotinho3.png"
      },
      content: "Muito bom Devon! Post excepcional!",
      date: "05-07-2023"
    },
    {
      id: "2",
      author: {
        name: "Mayk Brito",
        avatarURL: "https://github.com/maykbrito.png"
      },
      content: "Muito bom Devon! Post excepcional!",
      date: "05-07-2023"
    }
  ]



  interface Content {
    type: string;
    content: string;
  }


interface PostProps {
  author: {
    name: string;
    role: string;
    avatarURL: string;
  };
  content: Content[];
}



export function Post({author, content}: PostProps) {

  

  //Começo dos UseState
  const [comments, setNewComments] = useState(commentJson);


  const [newCommentText, setNewCommentText] = useState('');

  //Fim dos UseState
  


  const isNewCommentEmpty = newCommentText.length === 0


  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    

    setNewComments([...comments, {
      
      id: ((comments.length + 1).toString()),
      author: {
        name: "João Pedro Marques Chaves",
        avatarURL: "https://github.com/jotinho3.png"
      },
      content: (newCommentText),
      date: "05-07-2023"
    }]);

    // console.log(comments)

    setNewCommentText('');

  
  }




  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value)
    
  }



  // Essa função em específica está sendo enviada como parâmetro para o Comment na linha 134

  function deleteComment(commentToDelete: string) {
    
    console.log(typeof(commentToDelete)) 
  
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment.id !== (commentToDelete)
    })

    
    setNewComments(commentsWithoutDeletedOne)

  }
  



 
  return (

    <article className={styles.Post}>
      <header className={styles.Header}>
        <div className={styles.Avatar}>
          <Avatar
            src={author.avatarURL}
            hasBorder={true}
          />
          <div className={styles.AvatarInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time>Publicado há 2h</time>
      </header>

      <div className={styles.Content}>

        {content.map(line => {
          if (line.type === 'paragraph') {
            return (
               <p key={line.content}>{line.content}</p>
            )
          }

          else if (line.type === 'link') {
            return (
              <p key={line.content}><a>{line.content}</a></p>
            )
          }

        })}
        
      </div>


      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>


        <textarea 
        onChange={handleNewCommentChange} 
        placeholder="deixe seu comentário" 
        value={newCommentText} 
        required 
         ></textarea>

 
        <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
      </form>

      <div className={styles.CommentList}>
        
        {comments.map(comments => {
          return (
            <Comment
            key={comments.id}
            id={comments.id}
            name={comments.author.name}
            avatarURL={comments.author.avatarURL}
            content={comments.content}
            date={comments.date}
            onDeleteComment={deleteComment}
          
          
             />
          )
          
        })}

      </div>

    </article>


  );
}
