const StudentForm = (props) => {
  const {
    editMode,
    setStudents,
    students,
    isEditable,
    setStudentInfo,
    studentInfo,
    nextId,
    setNextId,
    setIseditable,
    setEditMode,
  } = props;

  const changleStudentNameHandler = (e) => {
    setStudentInfo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (studentInfo.trim() === "") {
      return alert("Please add student name");
    }
    editMode ? updateHandler() : createHandler();
    console.log("Student" + studentInfo + " " + editMode);
  };
  const createHandler = () => {
    console.log("createHandler called");
    const newStudent = {
      id: nextId,
      name: studentInfo,
      isPresent: undefined,
    };
    setStudents([...students, newStudent]);
    setNextId((prevId) => prevId + 1);
    setStudentInfo("");
    console.log(newStudent.isPresent);
  };
  const updateHandler = () => {
    //console.log("update handler called");
    const updateStudentList = students.map((item) => {
      if (item.id === isEditable.id) {
        return { ...item, name: studentInfo };
      }
      return item;
    });
    setStudents(updateStudentList);
    setIseditable(null);
    setEditMode(false);
    setStudentInfo("");
  };
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
