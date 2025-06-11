import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout.tsx'
import { HomePage } from '../pages/home/home.tsx'
import { AboutPage } from '../pages/about/about.tsx'
import { NnensPage } from '../pages/nnens/nnens.tsx'
import { QwertyPage } from '../pages/qwerty/qwerty.tsx'

// @ts-ignore
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="nens" element={<NnensPage />} />
          <Route path="qwerty/ass" element={<QwertyPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
