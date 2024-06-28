import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/index.tsx";
import Login from "./components/Login/index.tsx";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />}/>
      </Routes>      
    </div>
  );
}

export default App;
