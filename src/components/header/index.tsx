'use client';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
} from '@nextui-org/react';
import Icon from '../icon';
import { ThemeSwitcher } from '../theme-switcher';
import { setCookie } from '@/lib/cookies';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    setCookie('accessToken', '', 0);
    router.refresh();
  };

  return (
    <Navbar maxWidth="full" shouldHideOnScroll>
      <NavbarBrand>
        <Icon name="box" />
        <p className="ml-2 font-bold text-inherit">STORAGE</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <User
                name="Dao Khanh Minh"
                description="Software Engineer"
                avatarProps={{
                  size: 'sm',
                  src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                }}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" className="w-36">
              <DropdownItem key="account">My Account</DropdownItem>
              <DropdownItem key="logout" onClick={handleLogout}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
