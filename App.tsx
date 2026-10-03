import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './features/dashboard/Dashboard'
import FamilyPage from './features/dashboard/FamilyPage'
import NotFound from './features/dashboard/NotFound'

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/family/:id" element={<FamilyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}
