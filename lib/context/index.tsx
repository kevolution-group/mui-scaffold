import { createContext } from 'react'

const ScaffoldContext = createContext({})

export const ContextProvider: React.FC<React.PropsWithChildren> = ({
  children
}: React.PropsWithChildren) => {
  return (
    <ScaffoldContext.Provider value={{}}>
      {children}
    </ScaffoldContext.Provider>
  )
}
