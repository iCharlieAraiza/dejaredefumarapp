import { Routes, Route } from 'react-router-dom'
import './styles/styles.scss'

import Homepage from './pages/Homepage'
import { useContext } from 'react'
import { GlobalContext } from './context/GlobalContext'
import { Profile } from './pages/Profile'
import { Edit } from './pages/Edit'

function App() {
  const { user } = useContext(GlobalContext)

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage session={user} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<Edit/>} />
      </Routes>
    </>
  )
}

export default App
