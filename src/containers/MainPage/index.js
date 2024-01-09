import React from 'react';
import './styles.css';
import MainBlock from '../../components/MainBlock';
import ExpereanceBlock from '../../components/ExpereanceBlock';
import CoursesBlock from '../../components/CoursesBlock';
import WhyBlock from '../../components/WhyBlock';
import FeedbackBlock from '../../components/FeedbackBlock';
import Footer from '../../components/Footer';

function App() {

  return (
    <div className='wrapper'>
      <MainBlock/>
      <ExpereanceBlock/>
      <CoursesBlock/>
      <WhyBlock/>
      <FeedbackBlock/>
      <Footer/>
    </div>
  );
}

export default App;
