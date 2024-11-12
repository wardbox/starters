import './Root.css'
import { Outlet } from 'react-router-dom'
import '@fontsource-variable/public-sans'
import { ThemeProvider } from './components/theme-provider'
import { Toaster } from './components/ui/toaster'
import { Nav } from './components/ui/nav'
import waspLogo from './static/waspLogo.png'
import { useAuth } from 'wasp/client/auth'
import { Footer } from './components/ui/footer'

export default function Root() {
  const { data: user, isLoading } = useAuth()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex flex-col h-screen">
          <header className='border-b'>
          <Nav logo={waspLogo} user={user} userLoading={isLoading} />
        </header>
        <main className="mb-auto p-12 w-full max-w-7xl mx-auto">
            <Outlet />
          </main>
        <Toaster />
        <footer className="flex justify-center p-3 border-t z-50">
            <Footer />
          </footer>
        </div>
    </ThemeProvider>
  )
}
