import type { FC } from 'react'
import type { CollectionEntry } from 'astro:content'
import { marked } from 'marked'
import parse from 'html-react-parser'
import style from './expertise.module.scss'

const ExpertiseComp: FC<{ items: CollectionEntry<'expertise'>[] }> = ({
  items,
}) => (
  <div className="max-w-screen-lg mx-auto py-8 md:py-16 2xl:py-24 px-4">
    <h2
      className={`${style.__title} text-2xl md:text-4xl 2xl:text-6xl font-extrabold text-base-100 mb-8`}
    >
      Keahlian Kami
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items
        .sort((a, b) => a.data.order - b.data.order)
        .map((item, i) => {
          return (
            <article
              className={`card bg-base-100 ${
                item.data.isWide ? 'md:col-span-2' : ''
              }`}
              key={i}
            >
              <div className="card-body">
                <h3
                  className={`${style.__title} text-primary text-2xl 2xl:text-3xl font-extrabold`}
                >
                  {item.data.title}
                </h3>
                {parse(
                  marked.parse(item.body, { mangle: false, headerIds: false })
                )}
              </div>
            </article>
          )
        })}
    </div>
  </div>
)

export default ExpertiseComp
