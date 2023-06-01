import './App.css';
import ScrollUp from './components/common/scrollUp/ScrollUp';
import About from './components/page/about/About';
import Contact from './components/page/contact/Contact';
import Footer from './components/page/footer/Footer';
import Header from './components/page/header/Header';
import Home from './components/page/home/Home';
import Qualification from './components/page/qualification/Qualification';
import Skills from './components/page/skills/Skills';

function App() {
  return (
    <>
      <Home/>
      <Header/>
      <About/>
      <Qualification/>
      <Skills/>
      <Contact/>
      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
