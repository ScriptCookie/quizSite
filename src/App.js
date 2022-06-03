import React from 'react';
import Home from './Components/Home';
import Quizpage from './Components/Quizpage';
import Signup from './Components/Signup';
import First from './Components/First';
import Two from './Components/Two';
import Three from './Components/three';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
      navigate('/Home');
  }, []);
  
  return (
    <>
      <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Quizpage' element={<Quizpage/>}></Route> 
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/First' element={<First/>}></Route>
      <Route path='/Two' element={<Two/>}></Route>
      <Route path='/Three' element={<Three/>}></Route>
      </Routes>
    </>
  );
}

export default App;
