import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
<<<<<<< HEAD
import Footer from './Components/Footer/footer';

function App() {
  return (
    <>
    <Header></Header>
    <Footer></Footer>
=======
import Main from './Components/Main/main';
import {
  HashRouter as Router,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
>>>>>>> ba1ec5ce754e3b0d93805535b71d5c1175669827
    </>
  );
}

export default App;
