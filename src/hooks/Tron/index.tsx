import React, { createContext, useEffect, useState } from 'react'

import { ITron } from './types'

declare global {
    interface Window {
      tronWeb: any;
    }
  }
  

const TronContext = createContext<ITron>({} as ITron)

const TronProvider: React.FC<{
    children?: React.ReactNode
}> = ({children}) => {


    const [isInstalled,setInstalled] = useState<boolean>(false)
    const [isConnected,setIsConnected] = useState<boolean>(false)


    useEffect(() => { 
        const installedWatcher = setInterval(() => {
            if(window.tronWeb){
                setInstalled(true)
                clearInterval(installedWatcher)
            }
        },2000)

            return () => clearInterval(installedWatcher)

    },[])

    useEffect(() => { 
        const connectedWatcher = setInterval(() => {
            if(window.tronWeb && window.tronWeb.ready){
                setIsConnected(true)
                clearInterval(connectedWatcher)
            }
        },2000)

            return () => clearInterval(connectedWatcher)

    },[])


    return(
        <TronContext.Provider value={{
            connection: {
                isInstalled,
                isConnected,
            }
        }}>{children}</TronContext.Provider>
    )
}

export { TronProvider,TronContext}