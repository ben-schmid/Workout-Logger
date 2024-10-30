import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import NullPage from './pages/NullPage'


export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element = {<Home />} />
          <Route path="*" element ={<NullPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}