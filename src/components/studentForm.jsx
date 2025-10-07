import { useContext } from "react";
import { StudentCtx } from "../contexts/studentContext";

const StudentForm = () => {
  const { editMode, studentInfo, submitHandler, changleStudentNameHandler } =
    useContext(StudentCtx);

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={studentInfo}
        onChange={changleStudentNameHandler}
      />
      <button type="submit">
        {editMode ? "Update Student" : " Add Student"}
      </button>
    </form>
  );
};
export default StudentForm;
