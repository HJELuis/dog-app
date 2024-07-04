import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import DogsList from "./components/DogsList";
import GlobalStyle from "./theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Header />      
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dogs" element={<DogsList/>}/>
        </Routes>  
      </ThemeProvider>    
    </div>
  );
}

export default App;
