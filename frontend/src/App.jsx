import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import URLshortner from './Pages/ShortURL/URLshortner';
import './index.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import ProfilePage from './Pages/Profile/profilePage';
import URLHistory from './Pages/ShortURL/URLHistory';


function App() {
  return (
    <Router>
        <HeaderMegaMenu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/profile' element={<ProfilePage/>} />  
            <Route path='/shorten' element={<URLshortner/>} />
            <Route path='/history' element={<URLHistory/>} />
            <Route element={<PrivateRoute/>}>

            </Route>
        </Routes>
    </Router>
  )
}

export default App
