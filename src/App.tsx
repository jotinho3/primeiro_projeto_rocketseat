import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";



const postsJson = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/jotinho3.png",
      name: "Jota Pedro Marques Chaves",
      role: "Desenvolvedor Front-end"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa."
      },
      {
        type: "paragraph",
        content: "É um projeto que fiz no NLW Return, evento da Rocketseat"
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare"
      },
      {
        type: "link",
        content: "#novoprojeto #nlw #rocketseat"
      }
    ]
  },
  {
    id: 2,
    author: {
      avatarURL: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Desenvolvedor Back-end"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala Amigos!! 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa."
      },
      {
        type: "paragraph",
        content: "É um projeto que fiz no NLW Return, evento da Rocketseat"
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare"
      },
      {
        type: "link",
        content: "#novoprojeto #nlw #rocketseat"
      }
    ]
  }
]





export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {postsJson.map(post => {
            console.log(post)
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
              />     
          )
          })}
        
        </main>
      </div>
    </div>
  );
}
