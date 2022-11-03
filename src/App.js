import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Person from './component/Person';
import Form from './component/Form';
import Planet from './component/Planet';

function App() {
  return (
    <div className="App">
      <Form/>

      <Routes>
        <Route path='/people/:personId' element={<Person/>} />
        <Route path='/planets/:planetId' element={<Planet/>} />
      </Routes>
    </div>
  );
}

export default App;
