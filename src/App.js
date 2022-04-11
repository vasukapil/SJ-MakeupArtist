
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Services from './components/Service/Service';
import { Media } from './components/Media/Media';
import Blog from './components/Blog/Blog';
import Publication from './components/Publication/Publication';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/media" element={<Media/>}/>
        <Route path="/publication" element={<Publication/>}/>
        

        
      </Routes>
         
    </Router>
  );
}

export default App;
