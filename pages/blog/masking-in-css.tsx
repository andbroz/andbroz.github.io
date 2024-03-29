import Head from 'next/head';

import style from './masking-in-css.module.css';

export default function MaskingInCss() {
  return (
    <>
      <Head>
        <title>Masking in CSS</title>
      </Head>
        <div className={style.maskContainer}></div>
    </>
  );
}
