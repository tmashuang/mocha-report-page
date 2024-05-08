import { createTheme, MantineProvider } from "@mantine/core"
import { CardGrid } from './components/card/CardGrid';

const theme = createTheme({})

const App = () => {
  return (
    <>
    <MantineProvider theme={theme}>
      <div className="App">
        {/* <header className="App-header">
        </header> */}
          {/* <CardInfo /> */}
          <CardGrid/>
      </div>
    </MantineProvider>
    </>
  )
}

export default App
