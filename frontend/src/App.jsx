
import './App.css'
import Nav from './Components/Nav/Nav'
import {Routes,Route} from 'react-router-dom'
import ContactUs from './Pages/Contact_us/ContactUs'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import AboutUs from './Pages/About/AboutUs'
import Status from './Components/Status/Status'
// import Footer from './Components/Footer/Footer'

function App() {
  
  return (
    <>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/About' element={<AboutUs/>}/>
     </Routes>
     {/* <Footer/> */}
     <Status/>
    </>
  )
}

export default App
