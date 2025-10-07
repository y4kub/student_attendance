import AllStudentList from "./allStudentList";
import PresentStudentList from "./presentStudentList";
import AbsentStudentList from "./absentStudentList";

const StudentSection = () => {
  return (
    <div className="student-section">
      <AllStudentList />
      <PresentStudentList />
      <AbsentStudentList />
    </div>
  );
};
export default StudentSection;
