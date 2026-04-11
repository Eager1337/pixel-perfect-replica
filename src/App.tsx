import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";
import PortugalVsSpain from "./pages/PortugalVsSpain";
import PortugalGuide from "./pages/PortugalGuide";
import SpainGuide from "./pages/SpainGuide";
import HealthcareOrientation from "./pages/HealthcareOrientation";
import GuidedSetup from "./pages/GuidedSetup";
import OngoingCarePartner from "./pages/OngoingCarePartner";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/portugal-vs-spain" element={<PortugalVsSpain />} />
        <Route path="/portugal-guide" element={<PortugalGuide />} />
        <Route path="/spain-guide" element={<SpainGuide />} />
        <Route path="/services/healthcare-orientation" element={<HealthcareOrientation />} />
        <Route path="/services/guided-setup" element={<GuidedSetup />} />
        <Route path="/services/ongoing-care-partner" element={<OngoingCarePartner />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
