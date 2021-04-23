import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
        <div>
          <ul>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/clients">Clients</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default HomePage;