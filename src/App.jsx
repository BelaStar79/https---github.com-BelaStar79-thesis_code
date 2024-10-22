import Login from './auth/Login.jsx'
import Planification from './pages/Planification.jsx'
import './css/app.css'
import './css/variable.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (

    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/planification' element={<Planification/>}/>
    </Routes>

  )

}

export default App
