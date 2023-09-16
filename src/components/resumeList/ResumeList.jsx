import "./ResumeList.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AiFillEye, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"

const ResumeList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/api')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [])


    const deleteName = (evt) => {
        const id = evt.target.getAttribute('data-id');
        fetch(`/api/${id}`, {
            method: 'DELETE',
        }).then(() => {
            const newData = data.filter((item) => item.id !== parseInt(id));
            setData(newData);
            console.log(data)
        });
    }


    return (
        <div className='resumelist'>
            {data.length === 0 ? <span> <Link to={"/addproject"} className="link">Stated Building Resume</Link></span> : ""}
            {data && data.map((r) => {
                return (
                    // <Resume key={r.id} data={r}  setData= {setData}/>
                    <div className="resume">
                        <span>{r.id.split(0, 1)}</span>
                        <h2>{r.name}</h2>
                        <span>Created at</span>
                        <div className="actions">
                            <li>
                                <Link to={`/resume/${r.id}`} className="link">
                                    <AiFillEye />
                                </Link>
                            </li>
                            <li>
                                <Link to={`/edit/${r.id}`} className="link">
                                    <AiOutlineEdit />
                                </Link>
                            </li>
                            <li>
                                <AiOutlineDelete onClick={deleteName} data-id={r.id} />
                            </li>

                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ResumeList
