import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Componentes/shared/Menu";
import Home from "./Componentes/pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
          <Menu>
            <Home/>
          </Menu>
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
