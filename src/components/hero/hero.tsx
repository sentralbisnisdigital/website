import type { FC, PropsWithChildren } from 'react'
import type { GetImageResult } from 'astro'
import style from './hero.module.scss'

const HeroComp: FC<
  PropsWithChildren<{ title: string; image: GetImageResult }>
> = ({ title, image, children }) => (
  <article className="flex flex-col gap-4 lg:gap-6 xl:gap-8 max-w-screen-md 2xl:max-w-screen-lg mx-auto py-8 md:py-16 2xl:py-24">
    <h1
      className={`${style.__title} text-4xl lg:text-6xl 2xl:text-8xl !leading-tight font-black`}
    >
      {title}
    </h1>
    <>{children}</>
    <div className="flex flex-row flex-wrap items-center gap-4">
      <a className="btn md:btn-lg btn-link no-underline !p-0" href="#">
        Lihat portofolio kami
      </a>
      <span className="md:text-lg">atau</span>
      <a className="btn btn-primary md:btn-lg" href="#">
        Kontak kami
      </a>
    </div>
  </article>
)

export default HeroComp
