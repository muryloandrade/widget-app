import { Provider } from "react-redux"
import { Router } from "./Routes/routes"
import { GlobalStyle } from "./global"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Router/>
    </Provider>
  )
}

export default App
