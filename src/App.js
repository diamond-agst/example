import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './containers/MainPage'
import CoursesA1_A2 from './containers/CoursesA1-A2'
import CoursesB1_B2 from './containers/CoursesB1-B2'
import CoursesC1_C2 from './containers/CoursesC1-C2'
import ToeflCourse from './containers/ToeflCourse'
import CambridgeCourse from './containers/CambridgeCourse'
import IndividualCourse from './containers/IndividualCourse'
import TravelGuide from './containers/TravelGuide'


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='CoursesA1_A2' element={<CoursesA1_A2/>}/>
        <Route path='CoursesB1_B2' element={<CoursesB1_B2/>}/>
        <Route path='CoursesC1_C2' element={<CoursesC1_C2/>}/>
        <Route path='ToeflCourse' element={<ToeflCourse/>}/>
        <Route path='CambridgeCourse' element={<CambridgeCourse/>}/>
        <Route path='IndividualCourse' element={<IndividualCourse/>}/>
        <Route path='TravelGuide' element={<TravelGuide/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
