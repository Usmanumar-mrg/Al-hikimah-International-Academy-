import { Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Academics from './pages/Academics.jsx'
import Admissions from './pages/Admissions.jsx'
import Contact from './pages/Contact.jsx'
import News from './pages/News.jsx'
import Gallery from './pages/Gallery.jsx'
import Portal from './pages/Portal.jsx'
import Apply from './pages/Apply.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App