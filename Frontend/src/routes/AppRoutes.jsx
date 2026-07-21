import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import PoschLuxury from "../pages/PoschLuxury";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects/posch-luxury"
          element={<PoschLuxury />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;