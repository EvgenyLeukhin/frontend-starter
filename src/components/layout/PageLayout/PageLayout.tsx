import { Header, Footer, SideNav } from '..';
import styles from './PageLayout.module.scss';

type TProps = {
  pageName: string;
  children: React.ReactNode;
};

const PageLayout = ({ pageName, children }: TProps) => {
  return (
    <>
      <Header />
      <SideNav />
      <main className={pageName}>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
