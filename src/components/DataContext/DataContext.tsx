import React, { createContext, useContext } from 'react'

interface Icontext {
    data?: any;
    setDataValue: (props: any) => any;
}

const initial : Icontext = {
    data: null,
    setDataValue: (props) => {
        return
    },
}
const DataContext =  createContext(initial);

const DataProvider = ({children}: {children: any}) => {
    const [data, setData] = React.useState({});
    const setDataValue = (value: any) => {
        setData(value);
    }
    return(
        <DataContext.Provider value={{data, setDataValue}}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => {
    const context = useContext(DataContext);
    const {data, setDataValue} = context;
    return {data, setDataValue}
}

export {useData , DataProvider}