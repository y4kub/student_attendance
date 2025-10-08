import { useContext } from "react";
import { StudentCtx } from "../contexts/studentContext";

const StudentForm = () => {
  const { studentStates, submitHandler, changleStudentNameHandler } =
    useContext(StudentCtx);

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={studentStates.studentName}
        onChange={changleStudentNameHandler}
      />
      <button type="submit">
        {studentStates.editMode ? "Update Student" : " Add Student"}
      </button>
    </form>
  );
};
export default StudentForm;
