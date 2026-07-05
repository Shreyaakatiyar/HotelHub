import AppRoutes from "./routes/AppRoutes"
import { FavouriteProvider } from "./context/FavouriteContext"

function App() {

  return (
    <FavouriteProvider>
      <AppRoutes/>
    </FavouriteProvider>
  )
}

export default App
