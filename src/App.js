import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import DogsList from "./components/DogsList";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dogs" element={<DogsList/>}/>
      </Routes>      
    </div>
  );
}

export default App;
