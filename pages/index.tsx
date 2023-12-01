import Layout from './layout'
import Header from '../src/app/components/Header'
import styles from './styles.module.css'

export default function Home() {
  return (
    <html>
      <Layout>
        <main className="container mx-auto">
        <section className={styles.banner}>
          <Header/>
        </section>
        </main>
      </Layout>
    </html>
  )
}
