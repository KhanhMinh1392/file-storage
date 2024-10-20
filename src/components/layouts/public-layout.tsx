import SignIn from '@/components/sign-in';
import { Button } from '@nextui-org/button';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { PropsWithChildren, Suspense } from 'react';
import Icon from '../icon';
import { ThemeSwitcher } from '../theme-switcher';
import React from 'react';
import Link from 'next/link';

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar className="[&>header]:max-w-[1280px]" shouldHideOnScroll>
        <NavbarContent>
          <NavbarBrand className="mr-8 flex-grow-0" as={Link} href="/">
            <Icon name="box" />
            <p className="ml-2 text-xl font-bold text-inherit">STORAGE</p>
          </NavbarBrand>
          <NavbarContent className="hidden gap-8 md:flex">
            <NavbarItem as={Link} href={'/overview'} isActive>
              Overview
            </NavbarItem>
            <NavbarItem as={Link} href={'/features'}>
              Features
            </NavbarItem>
            <NavbarItem>Customers</NavbarItem>
            <NavbarItem>Pricing</NavbarItem>
          </NavbarContent>
        </NavbarContent>
        <NavbarContent justify="end" className="hidden sm:flex">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
            <SignIn />
          </NavbarItem>
          <NavbarItem>
            <Button variant="bordered">Try it</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {children}
    </>
  );
}
