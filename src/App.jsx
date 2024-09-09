import React, {lazy} from 'react';
const Home = lazy(() => import("./pages/Home.jsx"));

function App(){
  return (
    <Home />
  )
}

export default App
