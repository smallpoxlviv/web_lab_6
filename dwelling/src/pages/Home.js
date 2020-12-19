import React, {useMemo, useState} from 'react';
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
import {useSelector} from "react-redux";
import {getQuantity} from "../redux/quantitySlice";


function Home() {

    const [items, setItems] = useState([
        {
            id: 1,
            img: logo,
            title: "title",
            itemParagraphs: ["On sait depuis longtemps que travailler avec du texte lisible et contenant du sens\n" +
            "est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
                "L'avantage du\nLorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une\n" +
                "distribution de lettres plus ou moins normale, et en tout cas"]
        },
        {
            id: 2,
            img: logo,
            title: "title",
            itemParagraphs: ["On sait depuis longtemps que travailler avec du texte lisible et contenant du sens\n" +
            "est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
                "L'avantage du\nLorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une\n" +
                "distribution de lettres plus ou moins normale, et en tout cas"]
        },
        {
            id: 3,
            img: logo,
            title: "title",
            itemParagraphs: ["On sait depuis longtemps que travailler avec du texte lisible et contenant du sens\n" +
            "est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
                "L'avantage du\nLorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une\n" +
                "distribution de lettres plus ou moins normale, et en tout cas"]
        },
        {
            id: 4,
            img: logo,
            title: "title",
            itemParagraphs: ["On sait depuis longtemps que travailler avec du texte lisible et contenant du sens\n" +
            "est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
                "L'avantage du\nLorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une\n" +
                "distribution de lettres plus ou moins normale, et en tout cas"]
        },
        {
            id: 5,
            img: logo,
            title: "title",
            itemParagraphs: ["On sait depuis longtemps que travailler avec du texte lisible et contenant du sens\n" +
            "est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
                "L'avantage du\nLorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une\n" +
                "distribution de lettres plus ou moins normale, et en tout cas"]
        }
    ]);

    let [showMore, setShowMore] = useState({
        button: false,
        slicesNum: 1,
        currentSliceIdx: 0
    });

    let itemsSlices = useMemo(() => {
        let slices = [];
        let idx = 0;
        let slice;
        let button = false;
        let slicesNum = 0;
        while (idx < items.length) {
            slice = items.slice(idx, idx + 3);
            slices.push(slice);
            idx += 3;
            slicesNum += 1;
        }
        if (slicesNum > 1) {
            button = true;
        }
        setShowMore({...showMore, button:button, slicesNum: slicesNum});
        return slices;
    }, [items]);

    const [itemsToShow, setItemsToShow] = useState([...itemsSlices[0]]);

    const showMoreHomeItems = () => {
        let button = true;
        let currentSliceIdx = showMore.currentSliceIdx;
        if (currentSliceIdx === showMore.slicesNum - 2) {
            button = false;
        }
        if (currentSliceIdx < showMore.slicesNum - 1) {
            currentSliceIdx = currentSliceIdx + 1;
            setItemsToShow([...itemsToShow, ...itemsSlices[currentSliceIdx]]);
        }
        setShowMore({...showMore, button:button, currentSliceIdx: currentSliceIdx})
    }

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
                            {itemsToShow.map((item) => (
                                <HomeItem key={item.id} item={item}/>
                            ))}
                        </HomeItemsUlStyle>
                    </HomeItemsBlockStyle>

                    {showMore.button && (
                        <HomeButtonBlockStyle>
                            <HomeButtonStyle onClick={showMoreHomeItems} variant="outline-info">Show
                                more</HomeButtonStyle>
                        </HomeButtonBlockStyle>)}
                </ContainerStyle>
            </MarginTopFromHeaderStyle>
        </>
    );
}

export default Home;