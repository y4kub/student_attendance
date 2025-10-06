const AllStudentList = (props) => {
  const { setStudentInfo, setEditMode, setIseditable, students, setStudents } =
    props;
  const editHandler = (student) => {
    setEditMode(true);
    setIseditable(student);
    setStudentInfo(student.name);
  };

  const removeHandler = (studentId) => {
    const updatedStudentList = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudentList);
  };

  // const makePresentHandler = (student) => {
  //   if (student.isPresent !== undefined) {
  //     return alert(
  //       `Student is already in ${
  //         student.isPresnt === true ? "Present List" : "Absent List"
  //       }`
  //     );
  //   }
  //   const updateStudentList = students.map((item) => {
  //     if (item.id === student.id) {
  //       return { ...item, isPresent: true };
  //     }
  //     return item;
  //   });
  //   setStudents(updateStudentList);
  // };
  // const makeAbsentHandler = (student) => {
  //   console.log("makeAbsentHandler called");
  //   if (student.isPresent !== undefined) {
  //     return alert(
  //       `Student is already in ${
  //         student.isPresnt === true ? "Present List" : "Absent List"
  //       }`
  //     );
  //   }
  //   const updateStudentList = students.map((item) => {
  //     if (item.id === student.id) {
  //       return { ...item, isPresent: false };
  //     }
  //     return item;
  //   });
  //   setStudents(updateStudentList);
  // };
  const makeAttendanceHandler = (student, isAppeared) => {
    if (student.isPresent !== undefined) {
      console.log(student.isPresent, isAppeared);
      return alert(
        `Student is already in ${
          student.isPresent === true ? "Present List" : "Absent List"
        }`
      );
    }
    const updateStudentList = students.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: isAppeared };
      }
      return item;
    });
    setStudents(updateStudentList);
  };
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
