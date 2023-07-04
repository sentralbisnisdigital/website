import type { FC, PropsWithChildren } from 'react'
import type { GetImageResult } from 'astro'

const HeroComp: FC<
  PropsWithChildren<{ title: string; image: GetImageResult }>
> = ({ title, image, children }) => (
  <div>
    <div>
      <img
        src={image.src}
        width={image.options.width}
        height={image.options.height}
        alt={title}
      />
      {/** <a href="https://storyset.com/online">Online illustrations by Storyset</a> */}
    </div>
    <div>
      <h1>{title}</h1>
      <>{children}</>
    </div>
  </div>
)

export default HeroComp
