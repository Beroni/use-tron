import React, { createContext, useCallback, useEffect, useState } from 'react'

import { ITron } from './types'


const TronContext = createContext<ITron>({} as ITron)

const TronProvider: React.FC<{
    children?: React.ReactNode
}> = ({children}) => {
    const [isInstalled,setInstalled] = useState<boolean>(false);
    const [isConnected,setIsConnected] = useState<boolean>(false);

    const [name,setName] = useState<string>("");
    const [address,setAddress] = useState<string>("");
    const [balance,setBalance] = useState<number>(0);

    const getWallet = () => {
        if(!isConnected){
            return 0
        }
        return
    }


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
                getAddressAndBalance()
                clearInterval(connectedWatcher)
            }
        },2000)
            return () => clearInterval(connectedWatcher)
    },[])


    const getAddressAndBalance = useCallback(async() => {
        const { name, base58: address } = window.tronWeb.defaultAddress;
        setAddress(address)
        setName(name)

        const balance = await window.tronWeb.trx.getBalance(address)

        setBalance(balance)
    },[])


    return(
        <TronContext.Provider value={{
            connection: {
                isInstalled,
                isConnected,
            },
            account: {
                name,
                address,
                balance
            }
        }}>{children}</TronContext.Provider>
    )
}

export { TronProvider,TronContext}