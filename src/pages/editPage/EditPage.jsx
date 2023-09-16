
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EditPage = () => {
    const { id } = useParams()
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    useEffect(() => {
        const fetchinData = async () => {
            fetch('/api', {
                method: 'GET',
            }).then((res) => res.json()).then((responseJson) => {
                setInputs(responseJson.find((item) => item.id === id));
            })
        }
        fetchinData()
    }, [id])
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

                <div className="addform">
                    <form action="" key={inputs.id} onSubmit={handleSubmit}>
                        <div className="title">
                            <input type="text" name="title" placeholder="Title" value={inputs.title} onChange={handleChange} />
                        </div>
                        <div className="form-top">
                            <h4>info</h4>
                            <div className="form-names">
                                <input type="text" placeholder="Full name" name="name" value={inputs.name} onChange={handleChange} />
                                <input type="text" name="phone" id="" placeholder="+91 845xxxxxx" value={inputs.phone} className="short" onChange={handleChange} />
                            </div>
                            <div className="form-names">
                                <input type="text" placeholder="Location" name="Location" value={inputs.location} onChange={handleChange} />
                                <input type="email" name="email" id="" placeholder="example@gmail.cpm" value={inputs.email} className="short" onChange={handleChange} />
                            </div>
                            <div className="form-names">
                                <input type="text" name="course" placeholder="higher Education (b.tech)" onChange={handleChange} value={inputs.course} />
                                <input type="text" name="gitHub" id="" placeholder="github Id" onChange={handleChange} value={inputs.gitHub} />
                            </div>
                            <div className="form-names">
                                <input type="text" name="grdName" placeholder="College name" value={inputs.grdName} onChange={handleChange} />
                                <input type="text" name="linkedIn" id="" placeholder="Linkedin Profile" onChange={handleChange} value={inputs.linkedIn} />
                            </div>
                        </div>
                        <div className="form-info">
                            <h4>About</h4>
                            <div className="form-about">
                                <textarea name="about" id="" cols="30" rows="5" onChange={handleChange} value={inputs.about}></textarea>
                            </div>
                        </div>
                        <div className="form-education">
                            <h4>Education</h4>
                            <div className="form-eduaction">
                                <h5>Secoundry Education</h5>
                                <div className="education-inputs">
                                    <div className="college">
                                        <input type="text" name="clgName" id="" placeholder="College Name" value={inputs.clgName} onChange={handleChange} />
                                        <input type="text" name="clgCourse" id="" placeholder="eg- MPC" value={inputs.clgCourse} onChange={handleChange} />
                                    </div>

                                    <div className="grades">
                                        <input type="text" name="clgYear" id="" placeholder="year" value={inputs.clgYear} onChange={handleChange} />
                                        <input type="text" name="clgGrade" id="" placeholder="Grade" value={inputs.clgGrade} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-eduaction">
                                <h5>Graduation</h5>
                                <div className="education-inputs">
                                    <div className="college">
                                        <input type="text" name="grdName" id="" placeholder="College Name" value={inputs.grdName} onChange={handleChange} />
                                        <input type="text" name="grdCourse" id="" placeholder="eg :-(B.Tech)" value={inputs.grdCourse} onChange={handleChange} />
                                    </div>

                                    <div className="grades">
                                        <input type="text" name="grdYear" id="" placeholder="year" value={inputs.grdYear} onChange={handleChange} />
                                        <input type="text" name="grdGrade" id="" placeholder="Grade" value={inputs.grdGrade} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-eduaction">
                                <h5> Post Graduation</h5>
                                <div className="education-inputs">
                                    <div className="college">
                                        <input type="text" name="pgName" id="" placeholder="college Name" value={inputs.pgName} onChange={handleChange} />
                                        <input type="text" name="pgCourse" id="" placeholder="degree" value={inputs.pgCourse} onChange={handleChange} />
                                    </div>

                                    <div className="grades">
                                        <input type="text" name="pgYear" id="" placeholder="year" value={inputs.pgYear} onChange={handleChange} />
                                        <input type="text" name="pgGrade" id="" placeholder="Grade" value={inputs.pgGrade} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h4>projects</h4>
                            {inputs.project && inputs.project.map((p) => {
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
                            {inputs.exp && inputs.exp.map((e) => {
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
                                {inputs.skill?.map((s) => {
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

            </div >
        </div>
    )
}

export default EditPage
