import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <ul className='flex list-none flex-row gap-5 font-sans text-lg font-semibold'>
        {navLinks.map((navLink) => {
          return (
            <li
              key={navLink.title}
              className={`${
                isActive(router, navLink.href)
                  ? 'text-shockingYellow'
                  : undefined
              } hover:text-hotPink hover:underline`}
            >
              <Link href={navLink.href}>{navLink.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function isActive(router: NextRouter, href: string): boolean {
  return router.pathname === href;
}
