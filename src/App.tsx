import React from 'react';
import About from './About';
import Home from './Home';
import NavBar from './Navigation/navbar'


function App() {
  return (
    <div className="max-h-screen flex flex-row bg-gray-100">
        <NavBar></NavBar>
        <div className = "flex flex-col overflow-y-scroll w-full" id = "main">
          <Home></Home>
          <About></About>
        </div> 
    </div>
  )
}

export default App;
