import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import MyPageA from './views/MyPageA'
import MyPageB from './views/MyPageB'
import MyPageC from './views/MyPageC'
import MyPageD from './views/MyPageD'
import NotFound from './views/NotFound'
import Home from './views/Home'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/mypagea' element={<MyPageA/>} />
          <Route path='/mypageb' element={<MyPageB/>} />
          <Route path='/mypagec' element={<MyPageC/>} />
          <Route path='/mypaged' element={<MyPageD/>} />
          <Route path='*' element={<NotFound/>} />         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
