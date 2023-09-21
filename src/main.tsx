
import ReactDOM from 'react-dom/client'

import './index.css'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import { Home } from './components/Home/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
  <Routes>
    <Route path='/' element={<Home />}></Route>
  </Routes>
  </Router>
 
)
