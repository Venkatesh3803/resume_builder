import { AiFillGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import "./resumePage.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ResumePage = ({ add }) => {
    const { id } = useParams()
    const [data, setData] = useState("")

    useEffect(() => {
        const fetchinData = async () => {
            fetch('/api', {
                method: 'GET',
            }).then((res) => res.json()).then((responseJson) => {
                setData(responseJson);
            })
        }
        fetchinData()
    }, [])

    const currData = data && data.find((item) => item.id === id)


    return (
        <div className="resume-page">
            <h2>Resume</h2>

            <div className={add ? "add" : "resume-page-container"}>
                <div className="resume-top">
                    <div className="resume-name">
                        <div className="list">
                            <h3>{currData.name}</h3>
                            <span><AiOutlinePhone /> +91{currData.phone}</span>
                        </div>
                        <div className="list">
                            <span>{currData.location}</span>
                            <span><AiOutlineMail /> {currData.email}</span>
                        </div>
                        <div className="list">
                            <span> {currData.course}</span>
                            <span> <AiFillGithub />{currData.gitHub}</span>
                        </div>
                        <div className="list">
                            <span> {currData.grdName}</span>
                            <span>{currData.linkedIn}</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <h2>info</h2>
                    <div className="info">

                        <p>{currData.about}</p>

                    </div>
                </div>

                <hr />
                <div className="resume-eductaion">
                    <h2>Education</h2>

                    <div className="education-info">
                        <div className="clg-name">
                            <h4>{currData.clgName}</h4>
                            <p>{currData.clgCourse}</p>
                        </div>
                        <div className="percentage">
                            <span>{currData.clgYear}</span>
                            <span>{currData.clgGrade}</span>
                        </div>
                    </div>
                    <div className="education-info">
                        <div className="clg-name">
                            <h4>{currData.grdName}</h4>
                            <p>{currData.grdCourse}</p>
                        </div>
                        <div className="percentage">
                            <span>{currData.grdYear}</span>
                            <span>{currData.grdGrade}</span>
                        </div>
                    </div>
                    <div className="education-info">
                        <div className="clg-name">
                            <h4>{currData.pgName}</h4>
                            <p>{currData.pgCourse}</p>
                        </div>
                        <div className="percentage">
                            <span>{currData.pgYear}</span>
                            <span>{currData.pdGrade}</span>
                        </div>
                    </div>


                </div>
                <hr />
                <div className="resume-projects">
                    <h2>Projects</h2>

                    {currData.project && currData.project.map((p) => {
                        return (
                            <div className="project-info">
                                <h4>{p.title}</h4>
                                <div className="project-desc">
                                    <p>{p.projectDesc}</p>

                                </div>
                            </div>
                        )
                    })}

                </div>
                <hr />
                <div className="resume-exprience">
                    <h2>Experience</h2>
                    <div className="project-info">
                        {currData.exp && currData.exp.map((e) => {
                            return (
                                <div className="project-info">
                                    <h4>{e.companyName}</h4>
                                    <span> <b>{e.exYear}</b>  of Experiance</span>
                                    <div className="project-desc">
                                        <p>{e.experianceDesc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <hr />
                <div className="resume-skills">
                    <h2>Skills</h2>
                    <div className="skills">
                        {currData.skill && currData.skill.map((s) => {
                            return (
                                <li>{s}</li>
                            )
                        })}


                    </div>
                </div>
            </div>

        </div >
    )
}

export default ResumePage
