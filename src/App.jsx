
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
import Checkout from './Checkout';
import Congrats from './Congrats';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/media" element={<Publication/>}/>
        <Route path="/album" element={<Media/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/congrats" element={<Congrats/>}/>
        <Route path="/" element={<Home/>}/>
   


      </Routes>
         
    </Router>
  );
}

export default App;


// testing
