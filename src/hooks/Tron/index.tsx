import React, { createContext } from 'react'

import { ITron } from './types'

const defaultData : ITron = {
    connection:{
        isConnected: false,
        isInstalled: false,
    }
}

const TronContext = createContext<ITron>(defaultData)

const TronProvider: React.FC<{
    children?: React.ReactNode
}> = ({children}) => {
    const providerProps = {
        value : defaultData,
    }

    return(
        <TronContext.Provider {...providerProps}>{children}</TronContext.Provider>
    )
}

export { TronProvider,TronContext}