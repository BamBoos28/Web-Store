import './App.css'
import { lazy} from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar  from './cmp/navCmp'

import Home from "./pg/homePg"
import Katalog from "./pg/katalogPg"
import Contact from "./pg/contactPg"
// const Home = lazy(() => import('./pg/homePg.jsx'))
// const Katalog = lazy(() => import('./pg/katalogPg.jsx'))
// const Contact = lazy(() => import('./pg/contactPg.jsx'))

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
