import type { FC } from 'react'
import { ReactComponent as DigitalTransformIllustration } from '~/assets/svg/digital-transform.svg'

import style from '~/styles/modules/hero.module.scss'

const HEADLINE = {
  title: 'Semangat Transformasi Digital.',
  text: 'Kami adalah sentra kebutuhan bisnis digital Anda: Website, Aplikasi, Jaringan, Infrastruktur, segala rupa.',
}

export const Hero: FC = () => (
  <section className={style.__section}>
    <div className={style.__grid}>
      <article className={style.__headline}>
        <h1 className={style.__heading}>{HEADLINE.title}</h1>
        <p className="text-lg md:text-2xl 2xl:text-3xl">{HEADLINE.text}</p>
      </article>
      <div className={style.__illustration}>
        <DigitalTransformIllustration />
      </div>
    </div>
  </section>
)
