


import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Testimonial from "./Pages/Testimonial";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Home from "./Pages/Home";















function App() {
  return(
    <div>
  
<BrowserRouter>
<Routes>
  <Route index element={<Home/>} />
  <Route path="/home" element={<Home/>}/>
  <Route path="/about" element={<About/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/projects" element={<Projects/>} />
  <Route path="/sestimonial" element={<Testimonial/>} />
  <Route path="/contact" element={<Contact/>} />
</Routes>
</BrowserRouter>
  
     
    
  
    </div>



  )
}
export default App;