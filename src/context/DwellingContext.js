import React, {useState} from "react";
import logo from "../images/logo.ico";


export const DwellingContext = React.createContext();

export function DwellingProvider({children}) {

    const [dwellings, setDwellings] = useState([
        {
            id: 1,
            img: logo,
            title: "title",
            area: 14,
            price: 123,
            location: "location",
            floors: 4,
            pool: false,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" +
                " tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" +
                " nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis" +
                " aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
                " nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
        },
        {
            id: 2,
            img: logo,
            title: "title",
            area: 15,
            price: 123,
            location: "location",
            floors: 3,
            pool: true,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" +
                " tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" +
                " nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis" +
                " aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
                " nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
        },
        {
            id: 3,
            img: logo,
            title: "title",
            area: 105,
            price: 123,
            location: "location",
            floors: 2,
            pool: true,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" +
                " tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" +
                " nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis" +
                " aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
                " nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
        },
        {
            id: 4,
            img: logo,
            title: "title",
            area: 55,
            price: 13,
            location: "location",
            floors: 1,
            pool: true,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" +
                " tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" +
                " nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis" +
                " aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
                " nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
        },
        {
            id: 5,
            img: logo,
            title: "zzz",
            area: 145,
            price: 124,
            location: "location",
            floors: 2,
            pool: false,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" +
                " tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" +
                " nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis" +
                " aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
                " nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
        }]);

    return (
        <DwellingContext.Provider value={dwellings}>
            {children}
        </DwellingContext.Provider>
    )
}

