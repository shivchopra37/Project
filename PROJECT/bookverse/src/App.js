import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';

import Main from './Components/Main/main';
import BuyExchange from './Components/BuyExchange/buy';
import BookPage from './Components/BookPage/bookpage';
import {
  HashRouter as Router,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import ReviewsSection from './Components/page 4/ReviewSection';
function App() {
  return (
    <>
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/buy" element={<BuyExchange />} />
<<<<<<< HEAD
        <Route path="/review" element={<ReviewsSection/>}/>
=======
        <Route path="/sample" element={<BookPage />} />

>>>>>>> f832f5bd49d03e1a4276e40efcca3b09d73b2c88
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
