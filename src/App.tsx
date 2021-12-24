import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './Miscellaneous/Page_404';
import Blog from './Routes/AllBlogs/Blog';
// import LandingPage from './LandingPage';
// import AllAchievements from './Routes/AllAchievements';
// import AllProjects from './Routes/AllProjects';
const LandingPage = React.lazy(()=>import('./LandingPage'))
const AllAchievements = React.lazy(()=>import('./Routes/AllAchievements/AllAchievements'))
const AllProjects = React.lazy(()=>import('./Routes/AllProjects/AllProjects'))  
const AllBlogs = React.lazy(() => import('./Routes/AllBlogs/AllBlogs'))


function App() {
  return (
    <div>
    {/* <LandingPage></LandingPage> */}
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
              <React.Suspense fallback={<></>}>
                <LandingPage />
              </React.Suspense>
            } />

    <Route path="allblogs" element={
                  <React.Suspense fallback={<></>}>
                    <AllBlogs />
                  </React.Suspense>
                } />
    
    <Route path="/blog/:id" element={
                  <React.Suspense fallback={<></>}>
                    <Blog />
                  </React.Suspense>
                } />

    <Route path="allprojects" element={
                  <React.Suspense fallback={<></>}>
                    <AllProjects />
                  </React.Suspense>
                } />

    <Route path="allachievements" element={
                  <React.Suspense fallback={<></>}>
                    <AllAchievements />
                  </React.Suspense>
                } />

    <Route path="*" element={
                  <React.Suspense fallback={<></>}>
                    <PageNotFound />
                  </React.Suspense>
                } />

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
