import React from 'react';
import {ContainerStyle, MarginTopFromHeaderStyle} from "../styles/General.styled"
import {NotFoundStyle} from "../styles/NotFound.styled";


function NotFound() {

    return (
        <>
            <MarginTopFromHeaderStyle>
                <ContainerStyle>
                    <NotFoundStyle>
                        404 NOT FOUND
                    </NotFoundStyle>
                </ContainerStyle>
            </MarginTopFromHeaderStyle>
        </>
    );
};

export default NotFound;