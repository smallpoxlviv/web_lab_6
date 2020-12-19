import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import {WrapperToDownFooterStyle} from "./styles/General.styled";
import {Provider} from 'react-redux'
import store from "./redux/store";


function App() {
    return (
        <Provider store={store}>
            <WrapperToDownFooterStyle>
                <Routing/>
                <Footer/>
            </WrapperToDownFooterStyle>
        </Provider>
    );
}

export default App;
