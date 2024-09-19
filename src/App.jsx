import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NotFoundPage from './pages/NotFoundPage.jsx';


const Home = lazy(() => import("./pages/Home.jsx"));
const Experience = lazy(() => import("./pages/Experience.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />
  },

  {
    path: '/Experience',
    element: <Experience />,
    errorElement: <NotFoundPage />
  },

  {
    path: '/Projects',
    element: <Projects />,
    errorElement: <NotFoundPage />
  }
]);

function App(){
  return (
    <AnimatePresence>
      <Suspense fallback={"Loading..."}>
        <RouterProvider router={router} />
      </Suspense>
    </AnimatePresence>
  )
}

export default App;
