import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Meu nome é Emerson</h1>
        <h2>Sou desenvolvedor Javascript</h2>
      </div>
    </main>
  )
}
