import "./App.css";
import { useState } from "react";
import StudentForm from "./components/studentForm";
import StudentSection from "./components/studentSection";

function App() {
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [isEditable, setIseditable] = useState("");
  const [studentInfo, setStudentInfo] = useState("");
  const [nextId, setNextId] = useState(0); // Initialize the counter

  return (
    <div className="App">
      <StudentForm
        editMode={editMode}
        setStudents={setStudents}
        students={students}
        isEditable={isEditable}
        setStudentInfo={setStudentInfo}
        studentInfo={studentInfo}
        nextId={nextId}
        setNextId={setNextId}
        setIseditable={setIseditable}
        setEditMode={setEditMode}
      />
      <StudentSection
        setStudentInfo={setStudentInfo}
        setIseditable={setIseditable}
        students={students}
        setStudents={setStudents}
        setEditMode={setEditMode}
      />
    </div>
  );
}

export default App;
