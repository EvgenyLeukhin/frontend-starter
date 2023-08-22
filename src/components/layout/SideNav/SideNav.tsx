import Link from 'next/link';
import navLinks from '@/conts/navLinks';
import { useRouter } from 'next/router';
import { TNavLink } from '@/types/common';
import cn from 'classnames';
import styles from './SideNav.module.scss';

const SideNav = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <aside className={styles.SideNav}>
      {navLinks.map((link: TNavLink, index) => {
        const { title, href } = link;
        const isCurrentPath = pathname === href;

        return (
          <Link
            // onClick={onLinkClick}
            href={href}
            key={href + index}
            className={cn(styles.Link, {
              [styles.Link__isActive]: isCurrentPath,
            })}
          >
            {title}
          </Link>
        );
      })}
    </aside>
  );
};

export default SideNav;
