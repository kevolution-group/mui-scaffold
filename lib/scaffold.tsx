import { ContextProvider } from './context'

export const Scaffold: React.FC<React.PropsWithChildren> = ({
  children
}: React.PropsWithChildren) => {
  return (
    <ContextProvider>
      {children}
    </ContextProvider>
  )
}
