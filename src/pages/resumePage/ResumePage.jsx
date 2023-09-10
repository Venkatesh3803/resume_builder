import { AiFillGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import "./resumePage.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ResumePage = ({ add }) => {
    const { id } = useParams()
    console.log(id)

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

    const currData = data && data.filter((item) => item.id === id)


    return (
        <div className="resume-page">
            <h2>Resume</h2>
            {currData && currData.map((d) => {
                return (
                    <div className={add ? "add" : "resume-page-container"}>
                        <div className="resume-top">
                            <div className="resume-name">
                                <div className="list">
                                    <h3>{d.name}</h3>
                                    <span><AiOutlinePhone /> +91{d.phone}</span>
                                </div>
                                <div className="list">
                                    <span>{d.location}</span>
                                    <span><AiOutlineMail /> {d.email}</span>
                                </div>
                                <div className="list">
                                    <span> {d.course}</span>
                                    <span> <AiFillGithub />{d.gitHub}</span>
                                </div>
                                <div className="list">
                                    <span> {d.grdName}</span>
                                    <span>{d.linkedIn}</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h2>info</h2>
                            <div className="info">

                                <p>{d.about}</p>

                            </div>
                        </div>

                        <hr />
                        <div className="resume-eductaion">
                            <h2>Education</h2>

                            <div className="education-info">
                                <div className="clg-name">
                                    <h4>{d.clgName}</h4>
                                    <p>{d.clgCourse}</p>
                                </div>
                                <div className="percentage">
                                    <span>{d.clgYear}</span>
                                    <span>{d.clgGrade}</span>
                                </div>
                            </div>
                            <div className="education-info">
                                <div className="clg-name">
                                    <h4>{d.grdName}</h4>
                                    <p>{d.grdCourse}</p>
                                </div>
                                <div className="percentage">
                                    <span>{d.grdYear}</span>
                                    <span>{d.grdGrade}</span>
                                </div>
                            </div>
                            <div className="education-info">
                                <div className="clg-name">
                                    <h4>{d.pgName}</h4>
                                    <p>{d.pgCourse}</p>
                                </div>
                                <div className="percentage">
                                    <span>{d.pgYear}</span>
                                    <span>{d.pdGrade}</span>
                                </div>
                            </div>


                        </div>
                        <hr />
                        <div className="resume-projects">
                            <h2>Projects</h2>

                            {d.project && d.project.map((p) => {
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
                                {d.exp && d.exp.map((e) => {
                                    return (
                                        <div className="project-info">
                                            <h4>{e.companyName}</h4>
                                            <h4>{e.exYear}</h4>
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
                                {d.skill && d.skill.map((s) => {
                                    return (
                                        <li>{s}</li>
                                    )
                                })}


                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default ResumePage
