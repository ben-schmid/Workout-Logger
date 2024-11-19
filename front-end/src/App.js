import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import NullPage from './pages/NullPage'
import SignUp from './pages/SignUp'
import Ppl4x from './pages/workouts/ppl4x'
import Ppl5x from './pages/workouts/ppl5x'
import Ppl6x from './pages/workouts/ppl6x'
import Bodybuilding4x from './pages/workouts/bodybuilding4x'
import Bodybuilding5x from './pages/workouts/bodybuilding5x'
import Bodybuilding6x from './pages/workouts/bodybuilidng6x'
import Fundamentals3x from './pages/workouts/fundamentals3x'
import Fundamentals4x from './pages/workouts/fundamentals4x'
import Fundamentals5x from './pages/workouts/fundamentals5x'
import Powerbuilding4x from './pages/workouts/powerbuilding4x'
import Powerbuilding5x from './pages/workouts/powerbuilding5x'
import Powerbuilding6x from './pages/workouts/powerbuilding6x'
import Powerlifting4x from './pages/workouts/powerlifting4x'
import Powerlifting5x from './pages/workouts/powerlifting5x'
import Powerlifting6x from './pages/workouts/powerlifting6x'




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
          <Route path="/workouts/ppl5x" element = {<Ppl5x/>}/>
          <Route path="/workouts/ppl6x" element = {<Ppl6x/>}/>
          <Route path="/workouts/bodybuilding4x" element={<Bodybuilding4x />} />
          <Route path="/workouts/bodybuilding5x" element={<Bodybuilding5x />} />
          <Route path="/workouts/bodybuilding6x" element={<Bodybuilding6x />} />
          <Route path="/workouts/fundamentals3x" element={<Fundamentals3x />} />
          <Route path="/workouts/fundamentals4x" element={<Fundamentals4x />} />
          <Route path="/workouts/fundamentals5x" element={<Fundamentals5x />} />
          <Route path="/workouts/powerbuilding4x" element={<Powerbuilding4x />} />
          <Route path="/workouts/powerbuilding5x" element={<Powerbuilding5x />} />
          <Route path="/workouts/powerbuilding6x" element={<Powerbuilding6x />} />
          <Route path="/workouts/powerlifting4x" element={<Powerlifting4x />} />
          <Route path="/workouts/powerlifting5x" element={<Powerlifting5x />} />
          <Route path="/workouts/powerlifting6x" element={<Powerlifting6x />} />
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}