import React from 'react'
import Navbar from './components/Navbar'
import { Route ,Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomsDetails from './pages/RoomsDetails';
import MyBooking from './pages/MyBooking';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<AllRooms/>} />
          <Route path='/rooms/:id' element={<RoomsDetails/>} />
          <Route path='/my-booking' element={<MyBooking/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
