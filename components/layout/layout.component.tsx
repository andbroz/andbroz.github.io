import styles from './layout.module.css';

import Header from '../header/header';
import Footer from '../footer/footer';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={`${styles.container}  container mx-auto`}>
        <header className={`${styles.header} shadow-md shadow-slate-500 rounded-b-xl mb-10`}>
          <Header />
        </header>
        <main className={styles.content}>{children}</main>
        <footer className={`${styles.footer}`}>
          <Footer />
        </footer>
      </div>
    </>
  );
}
