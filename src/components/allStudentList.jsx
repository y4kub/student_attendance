import { useContext } from "react";
import { StudentCtx } from "../contexts/studentContext";

const AllStudentList = () => {
  const { studentStates, dispatch, makeAttendanceHandler } =
    useContext(StudentCtx);

  return (
    <div className="list all-student">
      <h2>All Student</h2>
      <ul>
        {studentStates.students.map((student) => (
          <li key={student.id}>
            <b>ID: </b>
            <span>{student.id} </span>
            <b>Name: </b>
            <span>{student.name}</span>
            <button
              onClick={() =>
                dispatch({ type: "edit_student", payload: student })
              }
            >
              Edit
            </button>
            <button
              onClick={() =>
                dispatch({ type: "remove_student", payload: student.id })
              }
            >
              Delete
            </button>
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
