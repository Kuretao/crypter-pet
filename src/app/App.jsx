import './App.css'
import {AppRoutes} from "./routes.jsx";
import {BrowserRouter} from "react-router-dom";
import {Header} from "../components/header/header.jsx";
import {Footer} from "../components/footer/footer.jsx";

function App() {

  return (
      <BrowserRouter>
        <Header/>
        <main>
          <AppRoutes/>
        </main>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
