import './App.css'
import { ModalsProvider } from '@mantine/modals'
import { MantineProvider } from '@mantine/core'
import { Header } from '@/components/Header'
import { Toolbar } from '@/components/Toolbar'

export const App = () => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <div className="main-container">
          <Header />
          <Toolbar />
        </div>
      </ModalsProvider>
    </MantineProvider>
  )
}
