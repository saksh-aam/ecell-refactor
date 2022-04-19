import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Heropage from "./components/mainpage/Heropage";
import Vision from "./components/vision/Vision";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div>
      <Heropage/>
      <Vision />
      <Contact />
    </div>
  );
}

export default App;
