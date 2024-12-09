import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ProjectPage from './components/ProjectPage/ProjectPage'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to ='/about'/>} /> 
          <Route path='/about' element={<About />} />
          <Route path='/project/:id' element={<ProjectPage />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate replace to ='/about'/>} />
        </Routes>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
