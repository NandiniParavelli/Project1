import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Rooms from './Components/Rooms';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Rooms' element={<Rooms/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}
 
export default App;
