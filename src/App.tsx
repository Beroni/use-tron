import { useTron } from './hooks'

function App() {

  const { connection } = useTron()


  return (
    <div>
      <h1>
        connection - {JSON.stringify(connection)}
      </h1>
    </div>
  )
}

export default App
