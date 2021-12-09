import React from 'react'
import { Room } from './Components/Pages/Room'
import { GuestInfo } from './Components/Pages/GuestInfo';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  return (
    <div>
      <GuestInfo/>
      <Room/>
    </div>
  )
}
