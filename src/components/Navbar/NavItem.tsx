import Link from 'next/link';
import styles from '@/app/page.module.css';
import React, { Dispatch, SetStateAction } from 'react';
import { usePathname } from 'next/navigation';

interface INavItemProps {
  title: string;
  link: string;
  toggle: Dispatch<SetStateAction<boolean>>;
}
const NavItem = (props: INavItemProps) => {
  const { title, link, toggle } = props;
  const pathname = usePathname();

  return (
    <>
      <Link
        href={link}
        className={`${styles.navFontCenter} ${
          pathname == link ? styles.navFontCenterActive : ''
        }`}
        onClick={() => toggle(false)}
      >
        {title}
      </Link>
    </>
  );
};
export default NavItem;
