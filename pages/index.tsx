import Layout from './layout'
import Header from '../src/app/components/Header'
import styles from './styles.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import { Zen_Dots } from 'next/font/google'
import { RevealWrapper } from  'next-reveal'

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
                <Col xs={0} sm={0} md={6} className='d-none d-lg-block'>
                  <Image
                    src="/banner-icon.svg"
                    alt="Banner Icon"
                    width={380}
                    height={380}
                    priority
                  />
                  <p className='mb-5'>Somos uma marca de Design que coloca arte e estratégia no mesmo grau de importância.</p>
                </Col>
                <Col md={6} className='d-none d-lg-block'>
                  <div className={styles.bannerText}>
                    <p className={zenDots.className}>
                      DESIGN <br></br>
                      ALÉM DA <br></br>
                      CONTA
                    </p>
                  </div>
                </Col>
                <Col xs={12} className='d-lg-none'>
                  <div className='d-flex justify-content-center'>
                    <Image
                      src="/banner-icon.svg"
                      alt="Banner Icon"
                      width={280}
                      height={280}
                      priority
                    />
                  </div>
                  <h2 className={zenDots.className}>DESIGN <br></br>
                      ALÉM DA <br></br>
                      CONTA
                  </h2>
                  <p className='mb-5 text-center'>Somos uma marca de Design que coloca arte e estratégia no mesmo grau de importância.</p>
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
                <RevealWrapper origin='top' delay={200}>
                  <p className={`${zenDots.className} ${styles.title}`}>
                  T ransformar boas ideias<br></br>
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
                </RevealWrapper>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>
              <Col xs={12} className='mt-5'>
              <div className={styles.gridPorfolio}>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/projects/1.png'} alt="1" className={styles.image} style={{height: 600}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/projects/2.png'} alt="2" className={styles.image} style={{height: 600}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/projects/3.png'} alt="3" className={styles.image} style={{height: 600}} />
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
              <Col xs={12} md={6}>
                <RevealWrapper origin='left' delay={200}>
                  <Image
                    src="/arrow-right.svg"
                    alt="Arrow Right"
                    width={395}
                    height={15}
                    priority
                  />
                </RevealWrapper>
              </Col>
              <Col xs={12} md={6} className='mb-5'>
                <RevealWrapper origin='right' delay={200}>
                  <h2 className={`${zenDots.className} ${styles.title}`}>
                    Sinta o poder de atração que o design tem
                  </h2>
                  <p className={styles.subtitle}>
                    As a versatile and skilled graphic designer, I have honed my 
                    expertise in collaborating effectively within teams while also 
                    showcasing my proficiency in delivering outstanding results on 
                    original projects.
                  </p>
                </RevealWrapper>
              </Col>
            </Row>
            <Row className="my-5">
              <Col xs={4}>
                <div className={styles.categorie}>
                  Capas
                </div>
              </Col>
              <Col xs={4}>
                <div className={styles.categorie}>
                  Posters
                </div>
              </Col>
              <Col xs={4}>
                <div className={styles.categorie}>
                  Stickers
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <div className={styles.gridPorfolio}>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/1.png'} alt="1" className={styles.image} style={{height: 450}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/2.png'} alt="2" className={styles.image} style={{height: 650}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/3.png'} alt="3" className={styles.image} style={{height: 350}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/4.png'} alt="4" className={styles.image} style={{height: 350}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/5.png'} alt="5" className={styles.image} style={{height: 300}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/6.png'} alt="6" className={styles.image} style={{height: 800}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/7.png'} alt="7" className={styles.image} style={{height: 500}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/8.png'} alt="8" className={styles.image} style={{height: 600}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/9.png'} alt="9" className={styles.image} style={{height: 450}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/10.png'} alt="10" className={styles.image} style={{height: 450}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/11.png'} alt="11" className={styles.image} style={{height: 450}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/12.png'} alt="12" className={styles.image} style={{height: 450}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/13.png'} alt="13" className={styles.image} style={{height: 450}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/14.png'} alt="14" className={styles.image} style={{height: 450}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/15.png'} alt="15" className={styles.image} style={{height: 450}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/6.png'} alt="16" className={styles.image} style={{height: 450}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/17.png'} alt="17" className={styles.image} style={{height: 450}} />
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageZoomContainer}>
                      <img src={'/portfolio/18.png'} alt="18" className={styles.image} style={{height: 650}} />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="my-5">
              <Col xs={12} md={4} className='mt-5'>
                <Image
                  src="/arrow-right.svg"
                  alt="Arrow Right"
                  width={395}
                  height={15}
                  priority
                />
              </Col>
              <Col xs={12} md={8} className='my-5'>
                <h2 className={`${zenDots.className} ${styles.title}`}>
                  DEU LIGA? <strong>É MAGNÉTICA.</strong>
                </h2>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.footer}>
          <RevealWrapper className={styles.footerUm} origin='top' delay={300}>
            <Image
              
              src="/footer-1.svg"
              alt="Arrow Right"
              width={300}
              height={300}
            />
          </RevealWrapper>
          <RevealWrapper className={styles.footerDois} origin='bottom' delay={300}>
            <Image
              src="/footer-2.svg"
              alt="Arrow Right"
              width={100}
              height={100}
            />
          </RevealWrapper>
          <Container>
            <Row className='mt-5'>
              <Col xs={12}>
                <h2 className={`${zenDots.className} ${styles.footerTitle}`}>E AÍ ? VAMOS TRABALHAR JUNTOS NO SEU PROJETO ?</h2>
              </Col>
              <Col xs={12}>
                <div className='d-flex justify-content-center mt-4'>
                  <div className={`${zenDots.className} ${styles.ctaFooter}`}>Vamos</div>
                </div>
              </Col>
            </Row>
            <RevealWrapper origin='bottom' delay={500}>
              <Row className='mt-5'>
                <Col xs={4} className='mt-5'>
                  <Image
                    src="/icon-footer-1.svg"
                    alt="Icon Footer 1"
                    width={54}
                    height={51}
                    priority
                  />
                  <p className='mt-1'>Creative + Studio</p>
                </Col>
                <Col xs={4} className='mt-5'>
                  <div className=''>
                    <div className='w-100 d-flex justify-content-center'>
                      <Image
                        src="/icon-footer-2.svg"
                        alt="Icon Footer 2"
                        width={57}
                        height={51}
                        priority
                      />
                    </div>
                    <p className='text-center mt-3'>Beyond Design</p>
                  </div>
                </Col>
                <Col xs={4} className='mt-5'>
                  <div className='w-100 d-flex justify-content-end'>
                    <Image
                    src="/icon-footer-3.svg"
                    alt="Icon Footer 3"
                    width={50}
                    height={41}
                    priority
                    />
                  </div>
                  <p className='text-end mt-2'>© Magnética 2023</p>
                </Col>
              </Row>
            </RevealWrapper>
          </Container>
        </section>
        </main>
      </Layout>
    </div>
  )
}
