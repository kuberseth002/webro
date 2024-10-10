import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'
import Blog from './components/Blog'
import Service from './components/Service'
import Pages from './components/Pages'
import Contact from './components/Contact'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='service' element={<Service/>}/>
          <Route path='pages' element={<Pages/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App