import { useTron } from './hooks'

function App() {

  const { connection, account } = useTron()


  return (
    <div>
      <h1>
        connection - {JSON.stringify(connection)}
        account - {JSON.stringify(account)}
      </h1>
    </div>
  )
}

export default App
