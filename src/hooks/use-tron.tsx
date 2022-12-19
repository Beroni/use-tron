import React, { createContext, useContext ,ComponentProps} from 'react'

interface ITron{

}

const TronContext = createContext<ITron>({} as ITron)

const TronProvider: React.FC<{
    children?: React.ReactNode
}> = ({children}) => {
    const providerProps = {
        value:{

        }
    }

    return(
        <TronContext.Provider {...providerProps}>{children}</TronContext.Provider>
    )
}

const useTron = () => { 
    const context = useContext(TronContext)

    if(context){
        throw Error("")
    }

    return
}

export { TronProvider, useTron}