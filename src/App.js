import './App.css';
import Apply from './components/Apply';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Plugins from './components/Plugins';
import Purchase from './components/Purchase';
import Socials from './components/Socials';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Testimonial />
      <Purchase />
      <Apply />
      <Socials />
      <Plugins />
      <Footer />
    </div>
  );
}

export default App;
