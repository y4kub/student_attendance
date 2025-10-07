import { useContext } from "react";
import { StudentCtx } from "../contexts/studentContext";

const AbsentStudentList = () => {
  const { students, toggleList } = useContext(StudentCtx);
  const absentStudentList = students.filter((item) => item.isPresent === false);
  return (
    <div className="list absent-studetns">
      <h2>Absent List</h2>{" "}
      <ul>
        {absentStudentList.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => toggleList(student)}>
              Accidentally added
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AbsentStudentList;
