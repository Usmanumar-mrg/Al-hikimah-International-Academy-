import { Outlet } from 'react-router-dom'
import Header from '../Components/layout/Header.jsx'
import Footer from '../Components/layout/Footer.jsx'
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp.jsx'

function PublicLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default PublicLayout