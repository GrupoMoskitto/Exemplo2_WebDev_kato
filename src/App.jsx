import Contador from './components/Contador'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Error from './routes/Error'
import Login from './routes/Login'

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<Error/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default App