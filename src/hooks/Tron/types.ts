
export interface ITron{
    connection: {
        isInstalled: boolean;
        isConnected: boolean;
    },
    account: {
        name: string;
        address: string;
        balance: number;
    }
}
