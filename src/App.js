import "./App.scss";
import Aboutme from "./components/about-me/Aboutme";
import Contact from "./components/contact-me/Contact";
import Form from "./components/contact-me/Form";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Hero from "./components/hero_section/Hero";
import Hero1 from "./components/hero_section/Hero1";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      <Hero1 />
      <Aboutme />
      <Skills />
      <Services />
      <h1 className='contact-me-title'>Contact Me</h1>
      <div className='service-main'>
        <Contact />
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default App;

// yarn create react-app appname
// npx create-react-app appname
//
// yarn add react-router-dom
// npm install react-router-dom
