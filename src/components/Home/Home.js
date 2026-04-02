import "./Home.css";
import { Link } from "react-router-dom";


function Home(){

    return(
        <>
            <nav className="home-nav">
                <h3>Utility Apps</h3>

                <div>
                    <Link to="/login" className="nav-btn">Login</Link>
                    <Link to="/signup" className="nav-btn">Sign Up</Link>
                </div>
            </nav>



            <div className="home-container">
                <Link to="/todo" className="btn btn-warning link">
                    To Do App
                </Link>
                <Link to="/notes" className="btn btn-warning link">
                    Note Keeper
                </Link>
            </div>
        </>
    )
}

export default Home;