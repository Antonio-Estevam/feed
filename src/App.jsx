import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from'./App.module.css';

import './global.css';

export function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          <Post
            author = "Antonio Filho"
            content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, maiores et? Totam soluta molestiae itaque repudiandae non? Quisquam quas possimus voluptatum maiores tempora minima corporis, consectetur, eaque, recusandae in quasi?"
          />

          <Post
            author = "Lucas Silva"
            content = "Maiores et? Totam soluta molestiae itaque repudiandae non? Quisquam quas possimus voluptatum maiores tempora minima corporis, consectetur, eaque, recusandae in quasi?"
          />
        </main>
      </div>
    </>
  )
}