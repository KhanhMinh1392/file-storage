import { Navbar, NavbarBrand, NavbarContent, NavbarItem, User } from '@nextui-org/react';
import { ThemeSwitcher } from '../theme-switcher';
import Link from 'next/link';
import Icon from '../icon';

export default function Header() {
  return (
    <Navbar maxWidth="full" shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">STORAGE</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <User
            name="Dao Khanh Minh"
            description="Software Engineer"
            avatarProps={{
              size: 'sm',
              src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
            }}
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
