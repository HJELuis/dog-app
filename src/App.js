import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import DogsList from "./components/DogsList";
import GlobalStyle from "./theme/GlobalStyles";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />      
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dogs" element={<DogsList/>}/>
      </Routes>      
    </div>
  );
}

export default App;
