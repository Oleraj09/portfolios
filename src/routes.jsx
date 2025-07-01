import { Routes, Route } from "react-router-dom";
import Home from "./module/Home";
import Blogs from "./module/Blogs/BlogPage";
import Portfolio from "./module/Portfolio/PortfolioPage"
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";
import { AuthProvider } from './ContexApi/AuthContext';
import LoginPage from './module/AdminPanel/Login'
import Dashboard from "./module/AdminPanel/Dashboard/Dashboard";
import PrivateRoute from "./routes/PrivateRoutes";
import NotFound from "./components/NotFound";
const AppRoutes = () => (
  <>
    <AuthProvider>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolios" element={<Portfolio />} />
        <Route path="/admin" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  </>
);

export default AppRoutes;
