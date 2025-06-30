import { Routes, Route } from "react-router-dom";
import Home from "./module/Home";
import Blogs from "./module/Blogs/BlogPage";
import Portfolio from "./module/Portfolio/PortfolioPage"
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <ScrollToHash />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/portfolios" element={<Portfolio />} />
    </Routes>
  </>
);

export default AppRoutes;
