import type { FC } from 'react'
import type { CollectionEntry } from 'astro:content'
import style from './expertise.module.scss'

const ExpertiseComp: FC<{ entry: CollectionEntry<'home'> }> = ({ entry }) => (
  <div className="max-w-screen-xl mx-auto py-8 md:py-16 2xl:py-24 px-4">
    <h2
      className={`${style.__title} text-2xl md:text-4xl 2xl:text-6xl font-extrabold text-center text-base-100 mb-8`}
    >
      {entry.data.expertises.title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-24">
      {entry.data.expertises.items
        .sort((a, b) => a.order - b.order)
        .map((item, i) => {
          return (
            <article
              className={`card bg-base-100 ${
                item.isWide ? 'md:col-span-2' : ''
              }`}
              key={i}
            >
              <div className="card-body">
                <h3
                  className={`${style.__title} text-primary text-2xl 2xl:text-3xl font-extrabold`}
                >
                  {item.title}
                </h3>
                <p className="text-lg">{item.content}</p>
              </div>
            </article>
          )
        })}
    </div>
  </div>
)

export default ExpertiseComp
