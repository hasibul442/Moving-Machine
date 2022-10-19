import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/NavBar/NavBar";
import About from "./Pages/About/About";
import Career from "./Pages/Career/Career";
import ContactUs from "./Pages/Contact/ContactUs";
import GeologicalConsultancy from "./Pages/Geological-Consultancy/GeologicalConsultancy";
import HomePage from "./Pages/Homepage/HomePage";
import AirCompressor from "./Pages/Product/AirCompressor";
import Crimping from "./Pages/Product/Crimping";
import Cutting from "./Pages/Product/Cutting";
import DieselGenerator from "./Pages/Product/DieselGenerator";
import Geotextile from "./Pages/Product/Geotextile";
import MountedCrane from "./Pages/Product/MountedCrane";
import SheetPileDriver from "./Pages/Product/SheetPileDriver";
import WelderGenerator from "./Pages/Product/WelderGenerator";
import WeldingMachine from "./Pages/Product/WeldingMachine";
import Rental from "./Pages/Rental/Rental";
import Geological from "./Pages/Services/Geological";
import Services from "./Pages/Services/Services";

function App() {
  
  return (
    <div className="mainbody">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/geological-consultancy"
            element={<GeologicalConsultancy />}
          />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/sheetpiledriver" element={<SheetPileDriver />} />
          <Route path="/dieselgenerator" element={<DieselGenerator />} />
          <Route path="/aircompressor" element={<AirCompressor />} />
          <Route path="/crimping" element={<Crimping />} />
          <Route path="/cutting" element={<Cutting />} />
          <Route path="/geotextile" element={<Geotextile />} />
          <Route path="/mountedcrane" element={<MountedCrane />} />
          <Route path="/weldergenerator" element={<WelderGenerator />} />
          <Route path="/weldingmachine" element={<WeldingMachine />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/geological" element={<Geological />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
