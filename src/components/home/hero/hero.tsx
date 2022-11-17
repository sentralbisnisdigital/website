import type { FC, PropsWithChildren } from 'react'
import style from './hero.module.scss'

const Hero: FC<PropsWithChildren> = ({ children }) => (
  <section className={style.section}>
    <div className={`prose ${style.content}`}>{children}</div>
  </section>
)

export default Hero
