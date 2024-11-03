import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Projects from "./Pages/Projects";
import About from "./Pages/About";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>

  );
}

export default App;
