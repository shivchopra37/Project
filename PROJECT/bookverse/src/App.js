import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
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
    </>
  );
}

export default App;
