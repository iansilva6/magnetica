import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <div>
          <header className='flex items-center justify-between p-4 w-full'>
            <div className="flex">
              <a href="#">
                  <Image
                      src="/logo.svg"
                      alt="Magnetica Logo"
                      className={styles.logo}
                      width={200}
                      height={40}
                      priority
                  />
              </a>
              <h1 className="hidden">Magnetica</h1>
            </div>
            <nav className='d-none d-md-block'>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className={styles.navLink}>Work</Link>
                </li>
                <li>
                  <Link href="/" className={styles.navLink}>About</Link>
                </li>
                <li>
                  <Link href="/" className={styles.navLink}>Contact</Link>
                </li>
              </ul>
            </nav>
            <div className='d-none d-md-block'>
              <div className={styles.language}>
                <Image
                  src="/word.svg"
                  alt="Translate"
                  width={25}
                  height={25}
                  priority
                />
                English
              </div>
            </div>
            <div className='d-md-none'>
              <div className={styles.menuBurguer} onClick={() => setShowMenu(true)}>
                <div className={styles.menuLine}></div>
                <div className={styles.menuLine}></div>
                <div className={styles.menuLine}></div>
              </div>
            </div> 
          </header>
          {
            showMenu && (
              <div className={styles.menu}>
                <Container>
                  <Row>
                    <Col xs={12}>
                      <div className={styles.close} onClick={() => setShowMenu(false)}>
                        X
                      </div>
                    </Col>
                    <Col xs={12} className='mt-5'>
                      <nav>
                        <ul className='p-0'>
                          <li>
                            <Link href="/" className={styles.navLink}>Work</Link>
                          </li>
                          <li>
                            <Link href="/" className={styles.navLink}>About</Link>
                          </li>
                          <li>
                            <Link href="/" className={styles.navLink}>Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </Col>
                    <Col xs={12} className='mb-5'>
                      <div className={styles.language}>
                        <Image
                          src="/word.svg"
                          alt="Translate"
                          width={25}
                          height={25}
                          priority
                        />
                        English
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className='d-flex justify-content-center'>
                        <Image
                          src="/logo.svg"
                          alt="Magnetica Logo"
                          className={styles.logo}
                          width={200}
                          height={40}
                          priority
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            )
          }
        </div>
      );
}
