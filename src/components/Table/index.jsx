import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import Card from '../Card';

let temp_totalMarks = [];
function Table() {

    const [subject1, setSubject1] = useState([0, 0, 0, 0]);
    const [subject2, setSubject2] = useState([0, 0, 0, 0]);
    const [subject3, setSubject3] = useState([0, 0, 0, 0]);
    const [subject4, setSubject4] = useState([0, 0, 0, 0]);
    const [totalMarks, setTotalMarks] = useState([0, 0]);

    const handleChange = (subject_name, row_no) => (e) => {
        if (subject_name === "subject1") {
            let subjectMarks = [...subject1];
            subjectMarks[row_no] = e.target.value;
            setSubject1(subjectMarks)
        }
        else if (subject_name === "subject2") {
            let subjectMarks = [...subject2];
            subjectMarks[row_no] = e.target.value;
            setSubject2(subjectMarks)
        }
        else if (subject_name === "subject3") {
            let subjectMarks = [...subject3];
            subjectMarks[row_no] = e.target.value;
            setSubject3(subjectMarks)
        }
        else if (subject_name === "subject4") {
            let subjectMarks = [...subject4];
            subjectMarks[row_no] = e.target.value;
            setSubject4(subjectMarks)
        }
    }

    useEffect(() => {
        temp_totalMarks[0] = eval(`+ ${subject1[0]} + ${subject2[0]} + ${subject3[0]} + ${subject4[0]}`)
        console.log("temp_totalMarks", temp_totalMarks)


    }, [subject1[0], subject2[0], subject3[0], subject4[0]]);

    useEffect(() => {
        try {
            temp_totalMarks[1] = eval(`+ ${subject1[1]} + ${subject2[1]} + ${subject3[1]} + ${subject4[1]}`)
            console.log("temp_totalMarks", temp_totalMarks)
        }
        catch { }

    }, [subject1[1], subject2[1], subject3[1], subject4[1]]);


    useEffect = (() => {
        setTotalMarks(temp_totalMarks);
    }, [temp_totalMarks])

    console.log("temp_totalMarks")

    return (
        <div className="Table">
            <div className="table-responsive">
                <table className="table">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Roll NO</th>
                            <th scope="col">Semester No</th>
                            <th scope="col">Subject 1 Marks</th>
                            <th scope="col">Subject 2 Marks</th>
                            <th scope="col">Subject 3 Marks</th>
                            <th scope="col">Subject 4 Marks</th>
                            <th scope="col">Total Marks</th>
                            <th scope="col">Grade </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Name" defaultValue={0} />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Roll" />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Semester" />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Subject" defaultValue={0} onChange={handleChange("subject1", "0")} />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Subject" defaultValue={0} onChange={handleChange("subject2", "0")} />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Subject" defaultValue={0} onChange={handleChange("subject3", "0")} />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Subject" defaultValue={0} onChange={handleChange("subject4", "0")} />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="total" />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="grade" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Roll" />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Semester" />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Subject" defaultValue={0} onChange={handleChange("subject1", "1")} />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Subject" defaultValue={0} onChange={handleChange("subject2", "1")} />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Subject" defaultValue={0} onChange={handleChange("subject3", "1")} />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="Subject" defaultValue={0} onChange={handleChange("subject4", "1")} />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="total" />
                            </td>
                            <td>

                                <input type="" class="form-control" id="exampleFormControlInput1" placeholder="grade" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
