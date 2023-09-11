import { useState } from "react"
import "./AddForm.css"
import { v4 as uuidv4 } from 'uuid';


const AddForm = () => {
    const [inputs, setInputs] = useState({});
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [experiance, setExperiance] = useState([]);

    const handleChange = (e) => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSkills = () => {
        if (inputs.skills?.length > 2) {
            skills.push(inputs.skills)
        }
    }


    const handleProject = () => {
        if (inputs.projectTitle?.length > 2 && inputs.projectDesc?.length > 10) {
            projects.push({
                title: inputs.projectTitle,
                projectDesc: inputs.projectDesc
            })
        }
    }


    const handleExperiance = () => {
        if (inputs.companyName?.length > 2 && inputs.expDesc?.length > 10) {
            experiance.push({
                companyName: inputs.companyName,
                experianceDesc: inputs.expDesc,
                exYear: inputs.yearofex
            })
        }

    }

    // console.log(projects)
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const id = uuidv4();
        const name = inputs.fullname;
        const course = inputs.course;
        const location = inputs.location;
        const title = inputs.title;
        const about = inputs.about;
        const email = inputs.email;
        const phone = inputs.phoneNumber;
        const linkedIn = inputs.linkedIn;
        const gitHub = inputs.githubId;
        const clgName = inputs.clgName;
        const clgCourse = inputs.clgCourse;
        const clgYear = inputs.clgYear;
        const clgGrade = inputs.clgGrade;
        const grdName = inputs.grdName;
        const grdCourse = inputs.grdCourse;
        const grdYear = inputs.grdYear;
        const grdGrade = inputs.grdGrade;
        const pgName = inputs.pgName;
        const pgCourse = inputs.pgCourse;
        const pgYear = inputs.pgYear;
        const pgGrade = inputs.pgGrade;
        const project = projects;
        const exp = experiance;
        const skill = skills

        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, name, title, email, phone, linkedIn, gitHub, clgName, clgCourse, clgGrade, clgYear, grdCourse, grdGrade, grdName, grdYear, pgCourse, pgName, pgGrade, pgYear, exp, project, skill, course, about, location }),
        }).then((res) => res.json())
            .finally(() => {
                alert("resume created sucessfully")
            });

    }


    return (
        <div className="addform">
            <form action="" className="" onSubmit={handleSubmit}>
                <div className="title">
                    <input type="text" name="title" required placeholder="Title" onChange={handleChange} />
                </div>
                <div className="form-top">
                    <h4>info</h4>
                    <div className="form-names">
                        <input type="text" placeholder="Full name" required name="fullname" onChange={handleChange} />
                        <input type="text" name="phoneNumber" required id="" placeholder="+91 845xxxxxx" className="short" onChange={handleChange} />
                    </div>
                    <div className="form-names">
                        <input type="text" placeholder="location" required name="Location" onChange={handleChange} />
                        <input type="email" name="email" id="" required placeholder="example@gmail.cpm" className="short" onChange={handleChange} />
                    </div>
                    <div className="form-names">
                        <input type="text" name="course" placeholder="higher Education (b.tech)" onChange={handleChange} />
                        <input type="text" name="githubId" id="" placeholder="github Id" onChange={handleChange} />
                    </div>
                    <div className="form-names">
                        <input type="text" name="" placeholder="College name" />
                        <input type="text" name="linkedIn" required id="" placeholder="Linkedin Profile" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-info">
                    <h4>About</h4>
                    <div className="form-about">
                        <textarea name="about" id="" cols="30" rows="5" onChange={handleChange} required></textarea>
                    </div>
                </div>
                <div className="form-education">
                    <h4>Education</h4>
                    <div className="form-eduaction">
                        <h5>Secoundry Education</h5>
                        <div className="education-inputs">
                            <div className="college">
                                <input type="text" name="clgName" id="" placeholder="College Name" onChange={handleChange} />
                                <input type="text" name="clgCourse" id="" placeholder="eg- MPC" onChange={handleChange} />
                            </div>

                            <div className="grades">
                                <input type="text" name="clgYear" id="" placeholder="year" onChange={handleChange} />
                                <input type="text" name="clgGrade" id="" placeholder="Grade" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-eduaction">
                        <h5>Graduation</h5>
                        <div className="education-inputs">
                            <div className="college">
                                <input type="text" name="grdName" id="" placeholder="College Name" onChange={handleChange} />
                                <input type="text" name="grdCourse" id="" placeholder="eg :-(B.Tech)" onChange={handleChange} />
                            </div>

                            <div className="grades">
                                <input type="text" name="grdYear" id="" placeholder="year" onChange={handleChange} />
                                <input type="text" name="grdGrade" id="" placeholder="Grade" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-eduaction">
                        <h5> Post Graduation</h5>
                        <div className="education-inputs">
                            <div className="college">
                                <input type="text" name="pgName" id="" placeholder="college Name" onChange={handleChange} />
                                <input type="text" name="pgDegree" id="" placeholder="degree" onChange={handleChange} />
                            </div>

                            <div className="grades">
                                <input type="text" name="pgYear" id="" placeholder="year" onChange={handleChange} />
                                <input type="text" name="pgGrade" id="" placeholder="Grade" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="">
                    <h4>projects</h4>
                    <div className="form-projects">
                        <input type="text" name="projectTitle" id="" placeholder="project title" onChange={handleChange} />
                        <textarea name="projectDesc" id="" cols="30" rows="5" placeholder="Desc" onChange={handleChange}></textarea>
                        <button type="button" onClick={handleProject}>Add Project</button>
                    </div>

                    {projects && projects.map((p) => {
                        return (
                            <div key={p.projectDesc} className="project-list">
                                <h4 >{p.title}</h4>
                                <p>{p.projectDesc}</p>
                            </div>
                        )
                    })}
                </div>


                <div className="form-projects">
                    <h4>Experience</h4>
                    <div className="form-projects">
                        <input type="text" name="companyName" id="" placeholder="Company Name" onChange={handleChange} />
                        <input type="number" name="yearofex" id="" placeholder="year of experiance" onChange={handleChange} className="short" />
                        <textarea name="expDesc" id="" cols="30" rows="5" placeholder="Desc" onChange={handleChange}></textarea>
                        <button type="button" onClick={handleExperiance}>Add Experiance</button>
                    </div>

                    {experiance && experiance.map((e) => {
                        return (
                            <div key={e.companyName} className="project-list">
                                <h4 >{e.companyName}</h4>
                                <span>{e.exYear}</span>
                                <p>{e.experianceDesc}</p>
                            </div>
                        )
                    })}
                </div>


                <div className="form-skill">
                    <h4>Skills</h4>

                    <div className="form-skills">
                        <input type="text" name="skills" id="" placeholder="skills" onChange={handleChange} />
                        <button type="button" onClick={handleSkills}>Add Skills</button>
                    </div>



                    {skills &&
                        <>
                            <div className="skill-list">
                                {skills?.map((s) => {
                                    return (
                                        <li key={s}>{s}</li>
                                    )
                                })}
                            </div>
                        </>
                    }
                </div>

                <button className="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddForm
