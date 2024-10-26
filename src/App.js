import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsListPage from "./pages/ProductsListPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import UserProfilePage from "./pages/UserProfilePage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<ProductsListPage />} exact />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route path="/profile" element={<UserProfilePage />}></Route>
           </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
