import type { FC, PropsWithChildren } from 'react'

export const Main: FC<PropsWithChildren> = ({ children }) => (
  <main className="min-h-[100dvh]">{children}</main>
)
