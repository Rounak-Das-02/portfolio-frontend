import { useEffect, useState } from 'react';
import About from './About';
import Achievements from './Achievements';
import Blogs from './Blogs';
import Contact from './Contact';
import Home from './Home';
import ResponsiveNavBar from './Miscellaneous/newNav';
import NavBar from './Navigation/navbar'
import Projects from './Projects';


function LandingPage() {
  let [nav, setNav] = useState(<NavBar/>);

  useEffect(() => {
    const handleResizeWindow = () => {if(window.innerWidth < 1024)setNav(<ResponsiveNavBar/>);else setNav(<NavBar/>)}
     // subscribe to window resize event "onComponentDidMount"
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       // unsubscribe "onComponentDestroy"
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);


  return (
  <>
    <div className="lg:max-h-screen lg:flex lg:flex-row bg-gray-100">
        {nav}
        <div className = "flex flex-col overflow-y-scroll w-full" id = "main">
          <Home></Home>
          <About></About>
          <Blogs></Blogs>
          <Projects></Projects>
          <Achievements></Achievements>
          {/* <Resume></Resume> */}
          <Contact></Contact>
        </div> 
    </div>
  </>
  )
}

export default LandingPage;
