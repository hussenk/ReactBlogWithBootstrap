import { Route, Routes } from "react-router-dom";
import About from "../pages/About.page";
import Buy from "../pages/Buy.page";
import Home from "../pages/Home.page";
import Tour from "../pages/Tour.page";

const Container = () => {
  return (
    <div>
      <Routes>
        <Route path="buy" element={<Buy />}></Route>
        <Route path="aboutus" element={<About />}></Route>
        <Route path="tour" element={<Tour />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default Container;
