import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import NullPage from './pages/NullPage'
import SignUp from './pages/SignUp'


export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element = {<Home />} />
          <Route path="*" element ={<NullPage />} />
          <Route path="/signup" element = {<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}