import { Link } from "react-router-dom"
import "./navber.css"

const Navber = () => {

    return (
        <nav>

            <div className="logo">
                <Link to={"/"} className="link">Resume Builder</Link>
            </div>
            <ul>
                <li>
                    HOME
                </li>
                <li>
                    CONTACT
                </li>
                <li>
                    ABOUT
                </li>

                <button>
                    <Link to={"/addproject"} className="link">
                        Add Project
                    </Link>
                </button>
            </ul>

        </nav>
    )
}

export default Navber
