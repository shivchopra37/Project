import { Link } from "react-router-dom";
const Main=()=>{
    return(
        <div className="container">
            <div className="left">
                <div className="c1">
                    <p>There is only thing that could replace a Book. The Next Book.</p>
                </div>
                <div className="c2">
                    <h1>
                        Discover, Find, Share Your Books
                    </h1>
                </div>
                <div className="c3">
                    <ul>
                        <li>From Fictional to Education we got you covered</li>
                        <li>All Genres availabel</li>
                    </ul>
                </div>
                <div className="c4">

                    <Link to="">Browse Books</Link>
                    <Link to="">Donate Book</Link>
                </div>
            </div>
            <div className="right"></div>
            
        </div>
    )
}
export default Main;