import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Form from './Components/Page2/form';

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
        <Route path="/" element={<Main />}/>
        <Route path="/form" element={<Form />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
