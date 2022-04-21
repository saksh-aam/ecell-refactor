import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Heropage from "./components/mainpage/Heropage";
import Vision from "./components/vision/Vision";
import Contact from "./components/contact/contact";
import Events from "./components/events/events";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Heropage/>
      <Vision />
      <Events/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
