import { Button } from '@nextui-org/button';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { PropsWithChildren } from 'react';
import Icon from '../icon';
import { ThemeSwitcher } from '../theme-switcher';

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar className="[&>header]:max-w-[1280px]" shouldHideOnScroll>
        <NavbarContent>
          <NavbarBrand className="mr-8 flex-grow-0">
            <Icon name="box" />
            <p className="ml-2 text-xl font-bold text-inherit">STORAGE</p>
          </NavbarBrand>
          <NavbarContent className="hidden gap-8 md:flex">
            <NavbarItem>Overview</NavbarItem>
            <NavbarItem>Features</NavbarItem>
            <NavbarItem>Customers</NavbarItem>
            <NavbarItem>Pricing</NavbarItem>
          </NavbarContent>
        </NavbarContent>
        <NavbarContent justify="end" className="hidden sm:flex">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
            <Button variant="bordered">SignIn</Button>
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
