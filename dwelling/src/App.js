import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import {WrapperToDownFooterStyle} from "./styles/General.styled";

function App() {
    return (
        <WrapperToDownFooterStyle>
            <Routing/>
            <Footer/>
        </WrapperToDownFooterStyle>
    );
}

export default App;
