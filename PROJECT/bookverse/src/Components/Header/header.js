import { Link } from "react-router-dom";
import "./header.css"
const Header=()=>{
    return(
    <>
    <div className="header">
    <nav>
    <div className="logo">BookVerse</div>
    <div className="other_than_logo">
    <ul className="nav-links">
      <li><Link to="#">Home</Link></li>
      <li><Link to="#">Sell/Donate</Link></li>
      <li><Link to="/buy">Buy/Exchange</Link></li>
      <li><Link to="#">E-Books</Link></li>
      <li><Link to="#">Audio-Books</Link></li>
    </ul>
    </div>
  </nav>
  </div>
    </>)

    
}
export default Header;