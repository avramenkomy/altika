import React from 'react';
import AppHeader from './components/appHeader/AppHeader';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import ExpertiseTypes from './components/expertiseTypes/ExpertiseTypes';
import Services from './components/servicesMenu/Services';
import StepByWork from './components/stepByWork/StepByWork';
// import News from './components/news/News';
import ReasonsForExpertise from './components/reasons/ReasonsComponent';
import FooterComponent from './components/footer/FooterComponent';
import License from './components/licenseDocuments/LicenseDocuments';
import Notes from './components/notes/Notes';


function App() {
  return (
    <>
      <div id="header" />
      <AppHeader />
      <main>
        <Intro />
        <div id="about" />
        <About />
        <div id="expertise_types" />
        <ExpertiseTypes />
        <div id="services" />
        <Services />
        <StepByWork />
        <ReasonsForExpertise />
        <License />
        {/* <News /> */} {/* TODO: Скрытый компонент на стадии разработки */}
        <Notes />
      </main>
      <footer>
        <div id='contacts' />
        <FooterComponent />
      </footer>
    </>
  );
}

export default App;
