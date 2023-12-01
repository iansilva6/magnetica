import Layout from './layout'
import Header from '../src/app/components/Header'
import styles from './styles.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import { Zen_Dots } from 'next/font/google'

const zenDots = Zen_Dots({ subsets: ['latin'], weight: "400" })

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
                  <div className={styles.bannerText}>
                    <p className={zenDots.className}>
                      DESIGN <br></br>
                      ALÉM DA <br></br>
                      CONTA
                    </p>
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
        <section className={styles.projects}>
          <Container>
            <Row>
              <Col xs={12}>
                <p className={`${zenDots.className} ${styles.title}`}>
                  Transformar boas ideias<br></br>
                  em bons negócios. Somos<br></br>
                  atraídos por isso.
                </p>
                <div className={styles.subtitle}>
                  <Image
                    src="/arrow-down.svg"
                    alt="Arrow Down"
                    width={28}
                    height={53}
                    priority
                  />
                  <p>Projetos de Identidade Visual</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        </main>
      </Layout>
    </div>
  )
}
