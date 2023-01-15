import type { FC, PropsWithChildren } from 'react'

export const Main: FC<PropsWithChildren> = ({ children }) => (
  <main className="min-h-screen">{children}</main>
)
