import "./header.css"
const Header=()=>{
    return(
    <>
    <div className="header">
    <nav>
    <div className="logo">BookVerse</div>
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Sell/Donate</a></li>
      <li><a href="#">Buy/Exchange</a></li>
      <li><a href="#">E-Books</a></li>
      <li><a href="#">Audio-Books</a></li>
    </ul>
  </nav>
  </div>
    </>);

    
}
export default Header;