import Cadastro from "./cadastro/Cadastro";
import Footer from "./footer/footer";
import Header from "./header/header";
import { Outlet } from "react-router-dom";


function App(){

    return(
        <>
        
        <Header />
            <Outlet />
        <Footer />
        
        </>
    )

}

export default App