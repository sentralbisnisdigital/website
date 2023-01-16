import type { FC } from 'react'

import { ReactComponent as Logo } from '~/assets/svg/logo-color.svg'
import MenuIcon from '~icons/mdi/menu'

export const Header: FC = () => {
  return (
    <nav className="fixed navbar p-4">
      <div className="navbar-start">
        <a href="/">
          <Logo className="md:w-[180px] w-[120px] h-max" />
        </a>
      </div>
      <div className="md:navbar-center hidden"></div>
      <div className="navbar-end">
        <button>
          <MenuIcon className="text-lg" />
        </button>
      </div>
    </nav>
  )
}
