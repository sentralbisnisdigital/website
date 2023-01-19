import type { FC } from 'react'

import { ReactComponent as Logo } from '~/assets/svg/logo-color.svg'
import MenuIcon from '~icons/mdi/menu'

const MENU_ITEMS = [
  {
    link: '/layanan',
    title: 'Layanan',
  },
  {
    link: '/#team',
    title: 'Team',
  },
  {
    link: '/#portfolio',
    title: 'Portfolio',
  },
  {
    link: '/#kontak',
    title: 'Kontak Kami',
  },
]

export const Header: FC = () => {
  return (
    <nav className="fixed navbar p-4">
      <div className="navbar-start">
        <a href="/">
          <Logo className="md:w-[120px] w-[90px] h-max" />
        </a>
      </div>
      <div className="navbar-end">
        <Menu />
      </div>
    </nav>
  )
}

const Menu: FC = () => (
  <ul tabIndex={0} className="menu menu-horizontal">
    {MENU_ITEMS.map((menu, i) => (
      <li className="hidden md:flex p-1" key={i}>
        <a href={menu.link}>{menu.title}</a>
      </li>
    ))}
    <li className="md:hidden dropdown dropdown-end">
      <label tabIndex={0}>
        <MenuIcon className="md:text-2xl text-lg" />
      </label>
      <ul className="dropdown-content menu bg-base-100 border border-base-200 rounded-box w-52">
        {MENU_ITEMS.map((menu, i) => (
          <li key={i}>
            <a href={menu.link}>{menu.title}</a>
          </li>
        ))}
      </ul>
    </li>
  </ul>
)
