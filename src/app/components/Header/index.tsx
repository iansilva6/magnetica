import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link';

export default function Header() {
    return (
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
        </header>
      );
}
