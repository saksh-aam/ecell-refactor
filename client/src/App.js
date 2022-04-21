import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Heropage from "./components/mainpage/Heropage";
import Vision from "./components/vision/Vision";
import Contact from "./components/contact/contact";
import Events from "./components/events/events";

function App() {
  return (
    <div>
      <Heropage/>
      <Vision />
      <Events/>
      <Contact />
    </div>
  );
}

export default App;
