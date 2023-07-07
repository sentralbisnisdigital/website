import type { FC } from 'react'
import type { CollectionEntry } from 'astro:content'
import type { GetImageResult } from 'astro'
import * as Nav from '@radix-ui/react-navigation-menu'
import MenuIcon from '~icons/material-symbols/menu'

const HeaderComp: FC<{
  menu: CollectionEntry<'menu'>
  logo: GetImageResult
}> = ({ menu, logo }) => (
  <div className="navbar bg-base-100 max-w-screen-xl mx-auto px-0">
    <div className="flex-1">
      <a className="btn btn-ghost pl-0" href="/">
        <img
          src={logo.src}
          className="w-auto h-[35px] object-contain"
          width={logo.options.width}
          height={logo.options.height}
          alt="logo"
          loading="eager"
          decoding="async"
        />
      </a>
    </div>
    <div className="flex-none">
      <HeaderMenu menu={menu} />
    </div>
  </div>
)

export default HeaderComp

const HeaderMenu: FC<{ menu: CollectionEntry<'menu'> }> = ({ menu }) => (
  <Nav.Root>
    <Nav.List className="menu menu-horizontal">
      {menu.data.items.map((item, i) => (
        <Nav.Item className="hidden md:flex" key={i}>
          <Nav.Link href={item.href}>{item.title}</Nav.Link>
        </Nav.Item>
      ))}
      <Nav.Item className="md:hidden dropdown dropdown-end">
        <Nav.Trigger className="-mr-6">
          <MenuIcon />
        </Nav.Trigger>
        <Nav.Content className="dropdown-content menu bg-base-100 mt-3">
          <ul className="w-full h-full">
            {menu.data.items.map((item, i) => (
              <li key={i}>
                <Nav.Link href={item.href}>{item.title}</Nav.Link>
              </li>
            ))}
          </ul>
        </Nav.Content>
      </Nav.Item>
    </Nav.List>
  </Nav.Root>
)
