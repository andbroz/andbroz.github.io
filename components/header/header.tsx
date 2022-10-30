import Link from 'next/link';

export default function Header() {
  return (
    <>
      <h5>here goes header with nav</h5>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
