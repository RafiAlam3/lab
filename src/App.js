import Main from "./Main";
import Team from './Team';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Routes>

      <Route  path='/Team'  element={<Team/>}/>
      
      </Routes>
     <Main/>
    </div>
  );
}

export default App;
