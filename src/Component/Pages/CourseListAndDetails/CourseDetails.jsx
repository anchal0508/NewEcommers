import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "../../Pages/CourseListAndDetails/CourseC.scss";
function CourseDetails() {
  const { name } = useParams(); // Get course name from URL
  const [course, setCourse] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(`Fetching course details for: ${name}`); // Debugging

    axios
      .get(`http://localhost:9292/api/subjects/${name}`)
      .then((response) => {
        console.log("Response received:", response.data); // Debugging
        setCourse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
        setError("Course details not found!");
      });
  }, [name]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!course) return <p>Loading...</p>; // Stuck on loading? Check console logs!

  return (
    <div className="mainComtainer">
      <h1>{course.name}</h1>
      <p>{course.introduction}</p>
      <h2>Syllabus</h2>

      {/* Render syllabus in a table format */}
      <table className="indexTable" >
        <thead className="indexTable">
          <tr className="indexTable">
            <th >#</th>
            <th>Topic</th>
          </tr>
        </thead >
        <tbody className="indexTable">
          {course.syllabus && Array.isArray(course.syllabus) ? (
            course.syllabus.map((topic, index) => (
              <tr key={index} className="indexTable">
                <td align="center"  >{index+1}.</td><td >{topic}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No syllabus available</td>
            </tr>
          )}
        </tbody>
      </table>

      <img
        src={course.imageUrl}
        alt={course.name}
        style={{ width: "300px", marginTop: "20px" }}
      />
    </div>
  );
}

export default CourseDetails;
