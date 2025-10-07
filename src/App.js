import "./App.css";
import StudentForm from "./components/studentForm";
import StudentSection from "./components/studentSection";

function App(props) {
  return (
    <div className="App">
      <StudentForm />
      <StudentSection />
    </div>
  );
}

export default App;
