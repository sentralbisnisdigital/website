import type { FC } from 'react'

export const Hero: FC = () => (
  <section className="max-w-screen-xl mx-auto px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen items-center">
      <article className="space-y-6">
        <h1 className="font-extrabold text-4xl md:text-6xl">
          Semangat Transformasi Digital.
        </h1>
        <p className="text-2xl">
          Kami adalah desainer dan developer web terbaik yang berbasis di
          Sampit, Kalimantan Tengah.
        </p>
      </article>
      <aside></aside>
    </div>
  </section>
)
