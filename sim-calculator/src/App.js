import Calculator from './components/Calculator';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Calculator/>}/>
      </Routes>
    </div>
  );
}

export default App;
