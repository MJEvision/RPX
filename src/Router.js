import { Routes, Route } from "react-router-dom";
import Vh from "./pages/Vh/vh";
import Percent from "./pages/Percent/percent";
import Rem from "./pages/Rem/rem";
import Em from "./pages/Em/em";
import Vw from "./pages/Vw/vw";
import About from "./pages/About/about";

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<Vh />} />
      <Route path="/about" element={<About />} />
      <Route path="/vh" element={<Vh />} />
      <Route path="/vw" element={<Vw />} />
      <Route path="/percent" element={<Percent />} />
      <Route path="/rem" element={<Rem />} />
      <Route path="/em" element={<Em />} />
    </Routes>
  );
}

export default AppRouter;
