import {ContainerApp} from "../elementos/ContainerApp";
import Sidebar from "../componentes/Sidebar";
import Mensajeria from "../componentes/Mensajeria";

const Inicio = () => {
    return ( 
        <ContainerApp>
            <Sidebar />
            <Mensajeria />
        </ContainerApp>
     );
}
 
export default Inicio;