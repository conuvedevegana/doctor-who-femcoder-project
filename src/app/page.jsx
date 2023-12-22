import MyButton from './components/button'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>DOCTOR WHO</h1>
      <MyButton/>
    </main>
  )
}
