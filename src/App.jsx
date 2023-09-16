
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Pages/Home/Home'
import { NotFound } from './components/NotFound/NotFound'
import { Contact } from './components/Pages/Contact/Contact'
import { Shop } from './components/Pages/Shop/Shop';


function App() {

  return (
    // Fragment
    <>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Shop' element={<Shop />} />
      </Routes>
    </div>
    </>
  )
}

export default App
