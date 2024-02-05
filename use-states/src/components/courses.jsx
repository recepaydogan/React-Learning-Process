/* eslint-disable no-unused-vars */
import Angular from "../images/a.jpg";
import Bootstrap from "../images/b.png";
import Csharp from "../images/c.png";
import KompleWeb from "../images/k.jpg";
const courseMapping = {
  Angular,
  Bootstrap,
  Csharp,
  KompleWeb,
};
// eslint-disable-next-line react/prop-types
const Courses = ({ courseName }) => {
  console.log(courseName);
  return (
    <div className="imageWrapper">
      <img className="img" src={courseMapping[courseName]}></img>;
    </div>
  );
};

export default Courses;
