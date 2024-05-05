import "./App.css";
import { Nav } from "./components";
import Footer from "./components/Footer";
import Loading from "./helpers/Loading";
import { Home } from "./pages";
import { motion, useScroll } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Community from "./pages/Community";
import PostPage from "./pages/PostPage";
import News from "./pages/News";
import Challenges from "./pages/Challenges";
import { Learn } from "./pages/Learn";
import Resources from "./pages/Resources";
import { ClimateChange } from "./pages/Learn/ClimateChange";
import BiodiversityLoss from "./pages/Learn/ BiodiversityLoss";
import { Deforestation } from "./pages/Learn/Deforestation";
import EnvironmentalRacism from "./pages/Learn/EnvironmentalRacism";
import { HabitatLoss } from "./pages/Learn/HabitatLoss";
import OceanAcidification from "./pages/Learn/OceanAcidification";
import Overfishing from "./pages/Learn/Overfishing";
import PlasticPollution from "./pages/Learn/PlasticPollution";
import { ResourceDepletion } from "./pages/Learn/resoucre";
import { useEffect } from "react";

function App() {
  const { scrollYProgress } = useScroll();

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <Router>
        <ScrollToTop />

        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Loading />} />
          <Route path="/community">
            <Route index element={<Community />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/news" element={<News />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/learn">
            <Route path="climate-change" element={<ClimateChange />} />
            <Route path="biodiversity-loss" element={<BiodiversityLoss />} />
            <Route path="deforestation" element={<Deforestation />} />
            <Route
              path="EnvironmentalRacism"
              element={<EnvironmentalRacism />}
            />
            <Route path="HabitatLoss" element={<HabitatLoss />} />
            <Route path="OceanAcidification" element={<OceanAcidification />} />
            <Route path="overfishing" element={<Overfishing />} />
            <Route path="plasticPollutions" element={<PlasticPollution />} />
            <Route path="Pollution" element={<PlasticPollution />} />
            <Route path="resourcesDepletion" element={<ResourceDepletion />} />
          </Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
