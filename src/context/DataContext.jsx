import { createContext } from "react";

const DataContext = createContext({})


export const DataProvider = ({children}) => {
    const value = "test"
    return (
        <DataContext.Provider value={{
            value
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
