import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RutasProtegidas from './componentes/RutasProtegidas';
import { AuthProvider } from './contextos/authContext';
import { ChatProvider } from './contextos/chatsContext';
import Inicio from './rutas/Inicio';
import Layout from './rutas/Layout';
import Login from './rutas/Login';
import Registro from './rutas/Registro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <ChatProvider>
            <Routes>
              <Route path={"/login"} element={<Login/>}/>
              <Route path={"/registro"} element={<Registro/>}/>
              <Route element={<RutasProtegidas/>}>
                <Route path={"/"} element={<Layout/>}>
                  <Route path={":id"} element={<Inicio/>}/>
                </Route>
              </Route>
            </Routes>
          </ChatProvider>
        </AuthProvider>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
