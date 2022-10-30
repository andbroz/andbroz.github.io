import styles from './layout.module.css';

import Header from '../header/header';
import Footer from '../footer/footer';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={styles.container}>
        <header className={`${styles.header} shadow-sm`}>
          <Header />
        </header>
        <main className={styles.content}>{children}</main>
        <footer className={`${styles.footer} border-t-[1px]`}>
          <Footer />
        </footer>
      </div>
    </>
  );
}
