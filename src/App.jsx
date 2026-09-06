import { Routes, Route, Navigate } from 'react-router-dom'
import PublicLayout from './layout/PublicLayout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Academics from './Pages/Academics.jsx'
import Admissions from './Pages/Admissions.jsx'
import Contact from './Pages/Contact.jsx'
import News from './Pages/News.jsx'
import NewsArticle from './Pages/NewsArticle.jsx'
import Gallery from './Pages/Gallery.jsx'
import Portal from './Pages/Portal.jsx'
import NotFound from './Pages/NotFound.jsx'

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
        <Route path="/news/:slug" element={<NewsArticle />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/apply" element={<Navigate to="/admissions" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App