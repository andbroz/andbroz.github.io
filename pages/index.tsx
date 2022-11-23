import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div transition-style='in:wipe:right'>
        <h1>My name is Andrzej</h1>
        <h2>I am Front End Web Developer.</h2>
      </div>
    </>
  );
}
