import Link from 'next/link';
import styles from '@/app/page.module.css';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface INavItemDropdownProps {
  title: string;
  link?: Array<string>;
}
const NavItemDropdown = (props: INavItemDropdownProps) => {
  const { title, link } = props;

  return (
    <>
      <p className={styles.navFontCenter}>
        {title} <IoIosArrowDown color="#040B4A" size={20} />
      </p>
    </>
  );
};
export default NavItemDropdown;
