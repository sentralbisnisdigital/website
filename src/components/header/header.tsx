import type { FC } from 'react'
import type { CollectionEntry } from 'astro:content'
import type { GetImageResult } from 'astro'
import * as Nav from '@radix-ui/react-navigation-menu'

const HeaderComp: FC<{
  menu: CollectionEntry<'menu'>
  logo: GetImageResult
}> = ({ menu, logo }) => (
  <div className="flex flex-row items-center justify-between w-full">
    <a href="/">
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
