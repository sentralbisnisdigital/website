import type { FC } from 'react'
import type { CollectionEntry } from 'astro:content'
import * as Nav from '@radix-ui/react-navigation-menu'

const HeaderComp: FC<{ menu: CollectionEntry<'menu'> }> = ({ menu }) => (
  <div className="flex flex-row items-center justify-between w-full">
    <a href="/">
      <img
        src="https://placekitten.com/75/75"
        className="w-[35px] h-[35px] object-contain"
        width={75}
        height={75}
        alt="logo"
      />
    </a>
    <HeaderMenu menu={menu} />
  </div>
)

export default HeaderComp

const HeaderMenu: FC<{ menu: CollectionEntry<'menu'> }> = ({ menu }) => (
  <Nav.Root>
    <Nav.List className="flex flex-row items-center gap-4">
      {menu.data.items.map((item, i) => (
        <Nav.Item key={i}>
          <Nav.Link href={item.href}>{item.title}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav.List>
  </Nav.Root>
)
