import { useContext } from "react";
import { StudentCtx } from "../contexts/studentContext";

const AllStudentList = () => {
  const { editHandler, removeHandler, makeAttendanceHandler, students } =
    useContext(StudentCtx);

  return (
    <div className="list all-student">
      <h2>All Student</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => editHandler(student)}>Edit</button>
            <button onClick={() => removeHandler(student.id)}>Delete</button>
            <button onClick={() => makeAttendanceHandler(student, true)}>
              Make Present
            </button>
            <button onClick={() => makeAttendanceHandler(student, false)}>
              Make Absent
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AllStudentList;
