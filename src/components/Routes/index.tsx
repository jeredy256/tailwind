import {BrowserRouter as Root, Router,Routes} from 'react-router-dom'
import { Home } from '../Home'

<Root>
    <Routes>
        <Rooter path='/' element={<Home}/>
    </Routes>
</Root>


const Rota =() =>{
    return (
        <Root />
    )
}
export default Rota