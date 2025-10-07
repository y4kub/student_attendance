import { useContext } from "react";
import { StudentCtx } from "../contexts/studentContext";

const PresentStudentList = () => {
  const { students, toggleList } = useContext(StudentCtx);
  const presentStudentList = students.filter((item) => item.isPresent === true);
  return (
    <div className="list present-students">
      <h2>Present List</h2>
      <ul>
        {presentStudentList.map((student) => (
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

export default PresentStudentList;
