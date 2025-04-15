import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:9292/api/courses")
      .then(response => setCourses(response.data))
      .catch(error => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" , padding:"20px"}}>
      {courses.map((course) => (
        <div key={course.id} 
             onClick={() => navigate(`/course/${course.name}`)}
             style={{
               padding: "20px",
               background: "#f0f0f0",
               borderRadius: "10px",
               cursor: "pointer",
               textAlign: "center",
             }}>
          <img src={course.imageUrl} alt={course.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }} />
          <h3>{course.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
