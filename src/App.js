import './App.css';
import Movielist from "./Component/Movielist"

import Description from './Component/Description';
import { Route, Routes } from 'react-router';

function App() {
  
  return (
    <div className="App">
      
      
   
   <Routes>
   <Route exact path="/" element={<Movielist/>} />
   <Route path='/description' element={<Description/>}     />
   
   </Routes>
    </div>
  );
}

export default App;
