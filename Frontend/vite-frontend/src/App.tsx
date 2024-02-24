import './App.css'
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavHeader from './components/NavHeader'
import Services from './components/Services';
import WebsiteList from './components/WebsiteList';

type Props = {}

function App({}: Props) {
  return (
    <>
    <NavHeader />
    <Hero />
    <About />
    <Services />
    <WebsiteList /> 
    <Footer /> 
    </>
  )
}

export default App;