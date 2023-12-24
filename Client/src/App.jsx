import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Add from './Pages/Add'
import Edit from './Pages/Edit'
import Home from './Pages/Home'
function App() {
  

  return (
    <>
     <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Add/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
     
     </Router>
    </>
  )
}

export default App
