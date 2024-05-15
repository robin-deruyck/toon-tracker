import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import { setupI18n } from '@/i18n/setup.ts'

const boot = async () => {
  await setupI18n()

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

boot().catch(console.error)
