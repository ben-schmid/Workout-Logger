import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import NullPage from './pages/NullPage'
import SignUp from './pages/SignUp'
import Ppl4x from './pages/workouts/pplx4'


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
          <Route path="/workouts/ppl4x" element = {<Ppl4x/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}