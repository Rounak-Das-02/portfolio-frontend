import React from 'react';
import About from './About';
import Achievements from './Achievements';
import Blogs from './Blogs';
import Contact from './Contact';
import Home from './Home';
import NavBar from './Navigation/navbar'
import Projects from './Projects';
import Resume from './Resume';


function App() {
  return (
    <div className="max-h-screen flex flex-row bg-gray-100">
        <NavBar></NavBar>
        <div className = "flex flex-col overflow-y-scroll w-full" id = "main">
          <Home></Home>
          <About></About>
          <Blogs></Blogs>
          <Projects></Projects>
          <Achievements></Achievements>
          <Resume></Resume>
          <Contact></Contact>
        </div> 
    </div>
  )
}

export default App;
