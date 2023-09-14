
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EditPage = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [inputs, setInputs] = useState({});

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

    const handleChange = (e) => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
    //     const name = inputs.fullname;
    //     const course = inputs.course;
    //     const location = inputs.location;
    //     const title = inputs.title;
    //     const about = inputs.about;
    //     const email = inputs.email;
    //     const phone = inputs.phoneNumber;
    //     const linkedIn = inputs.linkedIn;
    //     const gitHub = inputs.githubId;
    //     const clgName = inputs.clgName;
    //     const clgCourse = inputs.clgCourse;
    //     const clgYear = inputs.clgYear;
    //     const clgGrade = inputs.clgGrade;
    //     const grdName = inputs.grdName;
    //     const grdCourse = inputs.grdCourse;
    //     const grdYear = inputs.grdYear;
    //     const grdGrade = inputs.grdGrade;
    //     const pgName = inputs.pgName;
    //     const pgCourse = inputs.pgCourse;
    //     const pgYear = inputs.pgYear;
    //     const pgGrade = inputs.pgGrade;


    //     fetch(`/api/${id}`, {
    //         method: 'patch',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ name, title, email, phone, linkedIn, gitHub, clgName, clgCourse, clgGrade, clgYear, grdCourse, grdGrade, grdName, grdYear, pgCourse, pgName, pgGrade, pgYear, course, about, location }),
    //     }).then((res) => res.json())
    //         .finally(() => {
    //             alert("resume created sucessfully")
    //         });

    }



    return (
        <div>
            <div className="resume-page">
                <h2>Edit</h2>
                {currData && currData?.map((d) => {
                    return (
                        <div className="addform">
                            <form action="" key={d.id} onSubmit={handleSubmit}>
                                <div className="title">
                                    <input type="text" name="title" placeholder="Title" value={inputs.title = d.title} onChange={handleChange} />
                                </div>
                                <div className="form-top">
                                    <h4>info</h4>
                                    <div className="form-names">
                                        <input type="text" placeholder="Full name" name="fullname" value={d.name} onChange={handleChange} />
                                        <input type="text" name="phoneNumber" id="" placeholder="+91 845xxxxxx" value={d.phone} className="short" onChange={handleChange} />
                                    </div>
                                    <div className="form-names">
                                        <input type="text" placeholder="Location" name="Location" value={d.location} onChange={handleChange} />
                                        <input type="email" name="email" id="" placeholder="example@gmail.cpm" value={d.email} className="short" onChange={handleChange} />
                                    </div>
                                    <div className="form-names">
                                        <input type="text" name="course" placeholder="higher Education (b.tech)" onChange={handleChange} value={d.course} />
                                        <input type="text" name="githubId" id="" placeholder="github Id" onChange={handleChange} value={d.gitHub} />
                                    </div>
                                    <div className="form-names">
                                        <input type="text" name="grdName" placeholder="College name" value={d.grdName} onChange={handleChange} />
                                        <input type="text" name="linkedIn" id="" placeholder="Linkedin Profile" onChange={handleChange} value={d.linkedIn} />
                                    </div>
                                </div>
                                <div className="form-info">
                                    <h4>About</h4>
                                    <div className="form-about">
                                        <textarea name="about" id="" cols="30" rows="5" onChange={handleChange} value={d.about}></textarea>
                                    </div>
                                </div>
                                <div className="form-education">
                                    <h4>Education</h4>
                                    <div className="form-eduaction">
                                        <h5>Secoundry Education</h5>
                                        <div className="education-inputs">
                                            <div className="college">
                                                <input type="text" name="clgName" id="" placeholder="College Name" value={d.clgName} onChange={handleChange} />
                                                <input type="text" name="clgCourse" id="" placeholder="eg- MPC" value={d.clgCourse} onChange={handleChange} />
                                            </div>

                                            <div className="grades">
                                                <input type="text" name="clgYear" id="" placeholder="year" value={d.clgYear} onChange={handleChange} />
                                                <input type="text" name="clgGrade" id="" placeholder="Grade" value={d.clgGrade} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-eduaction">
                                        <h5>Graduation</h5>
                                        <div className="education-inputs">
                                            <div className="college">
                                                <input type="text" name="grdName" id="" placeholder="College Name" value={d.grdName} onChange={handleChange} />
                                                <input type="text" name="grdCourse" id="" placeholder="eg :-(B.Tech)" value={d.grdCourse} onChange={handleChange} />
                                            </div>

                                            <div className="grades">
                                                <input type="text" name="grdYear" id="" placeholder="year" value={d.grdYear} onChange={handleChange} />
                                                <input type="text" name="grdGrade" id="" placeholder="Grade" value={d.grdGrade} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-eduaction">
                                        <h5> Post Graduation</h5>
                                        <div className="education-inputs">
                                            <div className="college">
                                                <input type="text" name="pgName" id="" placeholder="college Name" value={d.pgName} onChange={handleChange} />
                                                <input type="text" name="pgDegree" id="" placeholder="degree" value={d.pgCourse} onChange={handleChange} />
                                            </div>

                                            <div className="grades">
                                                <input type="text" name="pgYear" id="" placeholder="year" value={d.pgYear} onChange={handleChange} />
                                                <input type="text" name="pgGrade" id="" placeholder="Grade" value={d.pgGrade} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <h4>projects</h4>
                                    {d.project && d.project.map((p) => {
                                        return (
                                            <div className="form-projects" key={p.title}>
                                                <input type="text" name="projectTitle" id="" placeholder="project title" value={p.title} onChange={handleChange} />
                                                <textarea name="projectDesc" id="" cols="30" rows="5" placeholder="Desc" value={p.projectDesc} onChange={handleChange}></textarea>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="form-projects">
                                    <h4>Experience</h4>
                                    {d.exp && d.exp.map((e) => {
                                        return (
                                            <div className="form-projects" key={e.companyName}>
                                                <input type="text" name="companyName" id="" placeholder="Company Name" value={e.companyName} onChange={handleChange} />
                                                <input type="number" name="yearofex" id="" placeholder="year of experiance" value={e.exYear} onChange={handleChange} className="short" />
                                                <textarea name="expDesc" id="" cols="30" rows="5" placeholder="Desc" value={e.experianceDesc} onChange={handleChange}></textarea>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="form-skill">
                                    <h4>Skills</h4>
                                    <div className="skill-list">
                                        {d.skill?.map((s) => {
                                            return (
                                                <div className="form-skills" key={s}>
                                                    <input type="text" name="skills" id="" placeholder="skills" value={s} onChange={handleChange} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <button className="submit">Update</button>
                            </form>
                        </div>
                    )
                })}
            </div >
        </div>
    )
}

export default EditPage
