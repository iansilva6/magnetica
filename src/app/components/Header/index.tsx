import Image from 'next/image'

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 w-full">
          <div className="flex">
            <a href="#">
                <Image
                    src="/logo.svg"
                    alt="Magnetica Logo"
                    width={200}
                    height={40}
                    priority
                />
            </a>
            <h1 className="hidden">Seu Site</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/">
                    <Image
                        src="/folder.svg"
                        alt="Feed"
                        width={44}
                        height={28}
                        priority
                    />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      );
}
