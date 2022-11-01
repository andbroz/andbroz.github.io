import Link from 'next/link';

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
];

export default function Navbar() {
  return (
    <nav>
      <ul className='flex flex-row list-none gap-5 text-lg font-sans font-semibold'>
        {navLinks.map((navLink) => {
          return (
            <li key={navLink.title} className='hover:underline'>
              <Link href={navLink.href}>{navLink.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
