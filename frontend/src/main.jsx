import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import Loginfailed from './components/Loginfailed.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  
   <Routes>
     <Route path='/' element={<App/>}></Route>
     <Route path='/login' element={<Dashboard/>}></Route>
     <Route path='/failed' element={<Loginfailed/>}></Route>
   </Routes>

 </BrowserRouter> 
    
  
)
