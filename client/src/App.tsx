import "./App.css";
import { Nav } from "./components";
import Footer from "./components/Footer";
import Loading from "./helpers/Loading";
import { Home } from "./pages";
import { motion, useScroll } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Router>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
