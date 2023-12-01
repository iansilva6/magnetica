import Layout from './layout'
import Header from '../src/app/components/Header'
import styles from './styles.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Layout>
        <main className="mx-auto">
        <section className={styles.banner}>
          <Header/>
          <div className={styles.bannerContent}>
            <Container>
              <Row>
                <Col md={6}>
                  <Image
                    src="/banner-icon.svg"
                    alt="Banner Icon"
                    width={380}
                    height={380}
                    priority
                  />
                  <p className='mb-5'>Somos uma marca de Design que coloca arte e estratégia no mesmo grau de importância.</p>
                </Col>
                <Col md={6}>
                  <div className={styles.bannerImg}>
                    <Image
                      src="/design.svg"
                      alt="DESIGN ALÉM DA CONTA"
                      width={380}
                      height={380}
                      priority
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section className={styles.video}>
          <div>
            <Image
              src="/video.svg"
              alt="video"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }} // optional
            />
          </div>
        </section>
        </main>
      </Layout>
    </div>
  )
}
