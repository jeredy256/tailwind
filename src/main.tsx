
import ReactDOM from 'react-dom/client'

import './index.css'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import { Home } from './components/Home/index.tsx'
import Error from './components/Routes/Error/index'
import Header from './components/Routes/Header/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path="/header" element={<Header />} />
    <Route path="*" element={<Error />} />
  </Routes>
  </Router>
 
)
