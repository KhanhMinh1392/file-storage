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
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getAccountInfo } from '@/services/account';

export default function Header() {
  const router = useRouter();

  const { data: userInfo } = useQuery({
    queryFn: getAccountInfo,
    queryKey: ['account-info'],
  });

  const handleLogout = () => {
    setCookie('accessToken', '', 0);
    router.replace('/');
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
                name={userInfo?.fullName}
                description="Software Engineer"
                avatarProps={{
                  size: 'sm',
                  src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                }}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" className="w-36">
              <DropdownItem key="account" href="/account" as={Link}>
                My Account
              </DropdownItem>
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
