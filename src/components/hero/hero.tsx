import type { FC, PropsWithChildren } from 'react'
import style from './hero.module.scss'

const HeroComp: FC<PropsWithChildren<{ title: string; subtitle: string }>> = ({
  title,
  subtitle,
  children,
}) => (
  <article className="flex flex-col gap-2 max-w-screen-md 2xl:max-w-screen-lg mx-auto py-8 md:py-16 2xl:py-24">
    <span className="block uppercase text-sm md:text-lg font-bold text-neutral-content">
      {subtitle}
    </span>
    <h1
      className={`${style.__title} text-4xl lg:text-6xl !leading-tight font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary`}
    >
      {title}
    </h1>
    <>{children}</>
    <div className="flex flex-row flex-wrap items-center gap-4 mt-8">
      <a className="btn btn-primary md:btn-lg" href="#">
        Kontak kami
      </a>
      <span className="md:text-lg">atau</span>
      <a className="btn md:btn-lg btn-link no-underline !p-0" href="#">
        Lihat portofolio kami
      </a>
    </div>
  </article>
)

export default HeroComp
