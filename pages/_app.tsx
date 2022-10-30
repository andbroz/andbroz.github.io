import type { AppProps } from 'next/app';

import '../styles/globals.css';
import '@fontsource/roboto-flex';
import '@fontsource/roboto-mono';
import '@fontsource/roboto-serif';
import '@fontsource/sriracha';

import Layout from '../components/layout/layout.component';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
