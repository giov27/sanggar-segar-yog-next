import Link from 'next/link';
import styles from '@/app/page.module.css';
import React from 'react';

interface INavItemProps {
  title: string;
  link: string;
}
const NavItem = (props: INavItemProps) => {
  const { title, link } = props;

  return (
    <>
      <Link href={link} className={styles.navFontCenter}>
        {title}
      </Link>
    </>
  );
};
export default NavItem;
