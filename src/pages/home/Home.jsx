
import ResumeList from "../../components/resumeList/ResumeList"
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <h1>Job-winning Resume</h1>
            <p>Make a great first impression and land the interview with our collection of attractive and functional CV templates that can be modified to suit any position.
            </p>
            <div className="resume-box">
                <ResumeList />
            </div>
        </div>
    )
}

export default Home
