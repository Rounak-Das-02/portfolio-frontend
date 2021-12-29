import { useEffect, useState } from 'react';
import About from './About';
import Achievements from './Achievements';
import Blogs from './Blogs';
import Contact from './Contact';
import Home from './Home';
import ResponsiveNavBar from './Miscellaneous/newNav';
import NavBar from './Navigation/navbar'
import Projects from './Projects';

const NavigationBar = () => {
    if(window.innerWidth < 1024) 
    return(<div className="pb-10"><ResponsiveNavBar/></div>);
    else 
    return(<NavBar/>)
}
function LandingPage() {
  // let [nav, setNav] = useState(<NavBar/>);

  // useEffect(() => {
  //   const handleResizeWindow = () => {if(window.innerWidth < 1024)setNav(<div className="pb-10"><ResponsiveNavBar/></div>);else setNav(<NavBar/>)}
  //    // subscribe to window resize event "onComponentDidMount"
  //    window.addEventListener("resize", handleResizeWindow);
  //    return () => {
  //      // unsubscribe "onComponentDestroy"
  //      window.removeEventListener("resize", handleResizeWindow);
  //    };
  //  }, []);


  return (
  <>
    <div className="lg:max-h-screen lg:flex lg:flex-row bg-gray-100">
        {/* {nav} */}
        <NavigationBar/>
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
