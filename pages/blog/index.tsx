import Head from 'next/head';
import Link from 'next/link';

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <h3 className='mb-10 font-sriracha text-4xl font-bold text-orange-700'>
        Blog pages
      </h3>
      <ul>
        <li>
          <Link href='/blog/masking-in-css'>Masking in css</Link>
        </li>
        <li>
          <Link href='/blog/creative-section-shapes'>
            Creative section shapes
          </Link>
        </li>
      </ul>
    </>
  );
}
