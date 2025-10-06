import AllStudentList from "./allStudentList";
import PresentStudentList from "./presentStudentList";
import AbsentStudentList from "./absentStudentList";
const StudentSection = (props) => {
  const { setStudentInfo, setIseditable, students, setStudents, setEditMode } =
    props;
  const toggleList = (student) => {
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: !item.isPresent };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };
  return (
    <div className="student-section">
      <AllStudentList
        setStudentInfo={setStudentInfo}
        setEditMode={setEditMode}
        setIseditable={setIseditable}
        students={students}
        setStudents={setStudents}
      />
      <PresentStudentList students={students} toggleList={toggleList} />
      <AbsentStudentList students={students} toggleList={toggleList} />
    </div>
  );
};
export default StudentSection;
