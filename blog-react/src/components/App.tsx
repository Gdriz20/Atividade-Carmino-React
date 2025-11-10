import Footer from "./footer/footer";
import Header from "./header/header";
import { Outlet } from "react-router-dom";

import './global.css'


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