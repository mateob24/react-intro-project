// import { Fragment, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Pages/Home/Home'
import { NotFound } from './components/NotFound/NotFound'
import { Contact } from './components/Pages/Contact/Contact'


function App() {

  return (
    // Fragment
    <>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        {/* <Routes path='' element={< />} /> */}
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
    </>
  )
}

export default App
