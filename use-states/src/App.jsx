import "./App.css";
import Courses from "./components/courses";
import { useState } from "react";
function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Csharp", "KompleWeb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}
function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };
  const courseList = courses.map((course, index) => {
    return <Courses key={index} courseName={course} />;
  });
  return (
    <div className="container">
      <button className="btn" onClick={handleClick}>
        Add Course
      </button>
      <div>
        <div className="wrapper">{courseList}</div>
      </div>
    </div>
  );
}

export default App;
