import { createContext, useState, Fragment } from "react";

export const NameContext = createContext();

export const NameContextWrapper = ({ children }) => {
    const [name, setName] = useState("Users");

    return (
        <Fragment>
            <NameContext.Provider value={{ name, setName }}>
                {children}
            </NameContext.Provider>
        </Fragment>
    );
};