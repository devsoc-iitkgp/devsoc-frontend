import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import logo from './assets/logo.png';
import Devmate from "./Pages/Devmate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/devmate" element={<Devmate/>}/>
      </Routes>
    </Router>
  )
}

function Home(){
  return(
    <div className="h-screen w-screen bg-[#020049]">
      <div className='w-full h-full flex justify-center items-center'>
        <img className="h-full w-full object-contain" src={logo} alt="logo"/>
      </div>
    </div>
  )
}

export default App