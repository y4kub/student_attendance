import { createContext, useReducer } from "react";
export const StudentCtx = createContext();

const initState = {
  studentName: "",
  students: [],
  editMode: false,
  isEditable: null,
};
//reducer
const studentReducer = (state, action) => {
  switch (action.type) {
    case "change_student_name": {
      return {
        ...state,
        studentName: action.payload,
      };
    }
    case "create_student": {
      const newStudent = {
        id: Date.now() + "",
        name: state.studentName,
        isPresent: undefined,
      };
      return {
        ...state,
        students: [...state.students, newStudent],
        studentName: "",
      };
    }
    case "edit_student": {
      console.log("edit_student called");
      return {
        ...state,
        editMode: true,
        isEditable: action.payload,
        studentName: action.payload.name,
      };
    }
    case "update_student": {
      return {
        ...state,
        students: state.students.map((item) => {
          if (item.id === state.isEditable.id) {
            return { ...item, name: state.studentName };
          }
          return item;
        }),
        editMode: false,
        isEditable: null,
        studentName: "",
      };
    }
    case "remove_student": {
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    case "change_appearance_status": {
      return {
        ...state,
        students: state.students.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, isPresent: action.payload.isPresent };
          }
          return item;
        }),
      };
    }
    default: {
      return state;
    }
  }
};
const StudentProvider = (props) => {
  const { children } = props;

  const [studentStates, dispatch] = useReducer(studentReducer, initState);
  // const [students, setStudents] = useState([]);
  // const [editMode, setEditMode] = useState(false);
  // const [isEditable, setIseditable] = useState("");
  // const [studentInfo, setStudentInfo] = useState("");
  // const [nextId, setNextId] = useState(0); // Initialize the counter

  const changleStudentNameHandler = (e) => {
    dispatch({ type: "change_student_name", payload: e.target.value });
    //setStudentInfo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (studentStates.studentName.trim() === "") {
      return alert("Please add student name");
    }
    studentStates.editMode
      ? dispatch({ type: "update_student" })
      : dispatch({ type: "create_student" });
    console.log(
      "Student" + studentStates.studentInfo + " " + studentStates.editMode
    );
  };
  // const createHandler = () => {
  //   console.log("createHandler called");
  //   const newStudent = {
  //     id: nextId,
  //     name: studentInfo,
  //     isPresent: undefined,
  //   };
  //   setStudents([...students, newStudent]);
  //   setNextId((prevId) => prevId + 1);
  //   setStudentInfo("");
  //   console.log(newStudent.isPresent);
  // };
  // const updateHandler = () => {
  //   //console.log("update handler called");
  //   const updateStudentList = students.map((item) => {
  //     if (item.id === isEditable.id) {
  //       return { ...item, name: studentInfo };
  //     }
  //     return item;
  //   });
  //   setStudents(updateStudentList);
  //   setIseditable(null);
  //   setEditMode(false);
  //   setStudentInfo("");
  // };
  // const editHandler = (student) => {
  //   setEditMode(true);
  //   setIseditable(student);
  //   setStudentInfo(student.name);
  // };

  // const removeHandler = (studentId) => {
  //   const updatedStudentList = students.filter(
  //     (student) => student.id !== studentId
  //   );
  //   setStudents(updatedStudentList);
  // };

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
    dispatch({
      type: "change_appearance_status",
      payload: { id: student.id, isPresent: isAppeared },
    });
    // const updateStudentList = students.map((item) => {
    //   if (item.id === student.id) {
    //     return { ...item, isPresent: isAppeared };
    //   }
    //   return item;
    // });
    // setStudents(updateStudentList);
  };
  const toggleList = (student) => {
    dispatch({
      type: "change_appearance_status",
      payload: { id: student.id, isPresent: !student.isPresent },
    });
    // const updatedStudentList = students.map((item) => {
    //   if (item.id === student.id) {
    //     return { ...item, isPresent: !item.isPresent };
    //   }
    //   return item;
    // });
    // setStudents(updatedStudentList);
  };
  const ctxValue = {
    studentStates,
    dispatch,
    // studentInfo,
    // setStudentInfo,
    // students,
    // setStudents,
    // editMode,
    // setEditMode,
    // isEditable,
    // setIseditable,
    // nextId,
    // setNextId,
    changleStudentNameHandler,
    submitHandler,
    // updateHandler,
    // createHandler,
    // editHandler,
    // removeHandler,
    makeAttendanceHandler,
    toggleList,
  };
  return <StudentCtx.Provider value={ctxValue}>{children}</StudentCtx.Provider>;
};
export default StudentProvider;
