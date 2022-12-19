import { useContext } from 'react'

import { TronProvider, TronContext } from './Tron'

const useTron = () => { 
    const context = useContext(TronContext)

    if(context){
        throw new Error('useTron must me used within a TronProvider');
    }

    return context;
}

export { useTron, TronProvider };