import type { FC, PropsWithChildren } from 'react'
import type { GetImageResult } from 'astro'
import style from './hero.module.scss'

const HeroComp: FC<
  PropsWithChildren<{ title: string; image: GetImageResult }>
> = ({ title, image, children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center max-w-screen-lg xl:max-w-screen-2xl min-h-full mx-auto">
    <div>
      <img
        src={image.src}
        width={image.options.width}
        height={image.options.height}
        alt={title}
      />
      {/** <a href="https://storyset.com/online">Online illustrations by Storyset</a> */}
    </div>
    <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8">
      <h1
        className={`${style.__title} text-2xl md:text-4xl xl:text-6xl font-black`}
      >
        {title}
      </h1>
      <>{children}</>
    </div>
  </div>
)

export default HeroComp
