import { useState, createContext } from "react";
export const StudentCtx = createContext();

const StudentProvider = (props) => {
  const { children } = props;
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [isEditable, setIseditable] = useState("");
  const [studentInfo, setStudentInfo] = useState("");
  const [nextId, setNextId] = useState(0); // Initialize the counter

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
  const toggleList = (student) => {
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: !item.isPresent };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };
  const ctxValue = {
    studentInfo,
    setStudentInfo,
    students,
    setStudents,
    editMode,
    setEditMode,
    isEditable,
    setIseditable,
    nextId,
    setNextId,
    changleStudentNameHandler,
    submitHandler,
    updateHandler,
    createHandler,
    editHandler,
    removeHandler,
    makeAttendanceHandler,
    toggleList,
  };
  return <StudentCtx.Provider value={ctxValue}>{children}</StudentCtx.Provider>;
};
export default StudentProvider;
