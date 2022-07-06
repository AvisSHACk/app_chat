import {ContainerApp} from "../elementos/ContainerApp";
import Sidebar from "../componentes/Sidebar";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return ( 
        <ContainerApp>
            <Sidebar/>
            <Outlet/>
        </ContainerApp>
     );
}
 
export default Layout;