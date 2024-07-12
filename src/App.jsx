import './App.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from "./Pages/HomePage/HomePage"
import Department from './Pages/Department/Department';
import Events from './Pages/Events/Events';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent/FooterComponent';


function App(){
  return(
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/department" element={<Department/>}></Route>
      <Route path="/events" element={<Events/>}></Route>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}
export default App