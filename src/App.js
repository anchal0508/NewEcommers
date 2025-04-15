import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/Pages/AboutUs/About";
import Trainings from "./Component/Pages/Training/Trainings";
import ContactUs from "./Component/Pages/ContactUs/ContactUs";
import Login from "./Component/Pages/Login/Login";
import SignUp from "./Component/Pages/Signup/SignUp";
import Certificate from "./Component/Pages/Certificates/Certificate";
import Error from "./Component/Pages/Error";
import HeadingBar from "./Component/Header/HeadingBar";
import FooterBar from "./Component/Footer/FooterBar";
import Category from "./Component/Category/Category";
import SingleProduct from "./Component/SingleProduct/SingleProduct";
import AppContext from "./utils/context";
 
import { Component } from 'react';
import CoursesList from "./Component/Pages/CourseListAndDetails/CoursesList";
import CourseDetails from "./Component/Pages/CourseListAndDetails/CourseDetails";

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
const App = () => {
  return (
    <>
      <AppContext>
        <HeadingBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Trainings" element={<Trainings />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Certificate" element={<Certificate />} /> 
          <Route path="/Category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />

          <Route path="/courseList" element={<CoursesList />} />
        <Route path="/course/:name" element={<CourseDetails />} />
          {/* <Route element={<Error />} /> */}
        </Routes>

        <FooterBar />
      </AppContext>
    </>
  );
};
export default App;
