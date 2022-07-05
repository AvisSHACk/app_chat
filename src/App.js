import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RutasProtegidas from './componentes/RutasProtegidas';
import { AuthProvider } from './contextos/authContext';
import Inicio from './rutas/Inicio';
import Login from './rutas/Login';
import Registro from './rutas/Registro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/registro"} element={<Registro/>}/>
            <Route element={<RutasProtegidas/>}>
              <Route path={"/"} element={<Inicio/>}/>
            </Route>
          </Routes>
        </AuthProvider>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
