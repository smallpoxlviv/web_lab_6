import React from 'react';
import Header from "../components/Header";
import {ContainerStyle, MarginTopFromHeaderStyle} from "../styles/General.styled";
import logo from "../images/logo.ico";
import {
    HomeMainBlockStyle,
    HomeMainTextBlockStyle,
    HomeMainTextTitleStyle,
    HomeMainTextParagraphStyle,
    HomeItemsBlockStyle,
    HomeItemsUlStyle,
    HomeMainImgStyle,
    HomeButtonBlockStyle,
    HomeButtonStyle
} from "../styles/Home.styled";
import HomeItem from "../components/HomeItem";


function Home() {
    return (
        <>
            <Header search={false}/>
            <MarginTopFromHeaderStyle>
                <ContainerStyle>
                    <HomeMainBlockStyle>
                        <HomeMainImgStyle src={logo} alt="Logo"/>
                        <HomeMainTextBlockStyle>
                            <HomeMainTextTitleStyle>
                                Lorem Ipsum
                            </HomeMainTextTitleStyle>
                            <HomeMainTextParagraphStyle>
                                Został
                                po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej
                                książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając
                                praktycznie niezmienionym.
                            </HomeMainTextParagraphStyle>
                            <HomeMainTextParagraphStyle>
                                Spopularyzowałsię w latach 60. XX w. wraz z publikacją
                                arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne
                                wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach
                                osobistych, jak Aldus PageMaker
                            </HomeMainTextParagraphStyle>
                        </HomeMainTextBlockStyle>
                    </HomeMainBlockStyle>

                    <HomeItemsBlockStyle>
                        <HomeItemsUlStyle>
                            <HomeItem/>
                            <HomeItem/>
                            <HomeItem/>
                        </HomeItemsUlStyle>
                    </HomeItemsBlockStyle>

                    <HomeButtonBlockStyle>
                        <HomeButtonStyle variant="outline-info" href="/item">Show more</HomeButtonStyle>
                    </HomeButtonBlockStyle>

                </ContainerStyle>
            </MarginTopFromHeaderStyle>
        </>
    );
}

export default Home;