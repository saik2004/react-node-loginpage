import { useState } from 'react'
import Navtitle from './components/Navtitle'
import Login from './components/Login'

function App() {


  return (
    <div className='w-full h-screen bg-[#FFFCF9]'>
      <Navtitle/>
      <Login/>
      
      <div className='flex justify-center mt-15'>
        <div className='flex flex-col rounded-sm  gap-1 p-3 text-xs items-center w-fit  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
          <p>Demo credentials</p>
          <p>Email:test123@gmail.com</p>
          <p>Password:abc123</p>
        </div>
      </div>
    </div>


)
}
export default App
