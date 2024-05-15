import './App.css'
import { ModalsProvider } from '@mantine/modals'
import { MantineProvider } from '@mantine/core'
import { Header } from '@/components/Header'
import { Toolbar } from '@/components/Toolbar'
import { Footer } from '@/components/Footer'
import { Results } from '@/components/Results'

export const App = () => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <div className="main-container">
          <Header />
          <Toolbar />
          <Results />
          <Footer />
        </div>
      </ModalsProvider>
    </MantineProvider>
  )
}
