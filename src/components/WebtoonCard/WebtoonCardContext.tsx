import { createContext, PropsWithChildren, useContext } from 'react'
import { WithWebtoon } from '@/types.ts'

const CardContext = createContext<WithWebtoon>({} as WithWebtoon)

export const WebtoonCardProvider = ({ children, webtoon }: PropsWithChildren<WithWebtoon>) => {
  return <CardContext.Provider value={{ webtoon }}>{children}</CardContext.Provider>
}

export const useCardWebtoon = () => {
  const context = useContext(CardContext)
  if (context === undefined) throw new Error('useCard must be used within a CardProvider')
  return context
}
