import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Intake from "./pages/Intake";
import Confirmation from "./pages/Confirmation";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:serviceId" element={<Intake />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
