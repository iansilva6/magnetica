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
              <Col xs={12} className='mb-5'>
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
          <Container fluid>
            <Row>
              <Col xs={12} className='mt-5'>
                <div className={styles.gridProjects}>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'mockup.png'} alt="Imagem" className={styles.image} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'mockup.png'} alt="Imagem" className={styles.image} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'mockup.png'} alt="Imagem" className={styles.image} />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.portfolio}>
        <Container>
            <Row>
              <Col xs={6}>
                <Image
                  src="/arrow-right.svg"
                  alt="Arrow Right"
                  width={395}
                  height={15}
                  priority
                />
              </Col>
              <Col xs={6} className='mb-5'>
                <h2 className={`${zenDots.className} ${styles.title}`}>
                  Sinta o poder de atração que o design tem
                </h2>
                <p className={styles.subtitle}>
                  As a versatile and skilled graphic designer, I have honed my 
                  expertise in collaborating effectively within teams while also 
                  showcasing my proficiency in delivering outstanding results on 
                  original projects.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        </main>
      </Layout>
    </div>
  )
}
