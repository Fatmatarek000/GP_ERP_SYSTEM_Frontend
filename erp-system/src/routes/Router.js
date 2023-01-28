import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route ,Navigate } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Setting from '../Pages/Setting';
import Booking from '../Pages/Booking';
import Sellproduct from '../Pages/Sellproduct';
export default function Router() {
  return (
<Routes>
<Route path='/' element={<Navigate to={'/dashboard'} element={<Dashboard/>}/>} />
<Route path='/dashboard' element={<Dashboard/>} />
<Route path='/booking' element={<Booking/>} />
<Route path='/setting' element={<Setting/>} />
<Route path='/sellproduct' element={<Sellproduct/>} />

</Routes>
    
  );
}
