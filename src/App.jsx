import logo from './assets/logo.png';

function App() {
  return (
    <div className="h-screen w-screen bg-[#020049]">
      <div className='w-full h-full flex justify-center items-center'>
        <img className="h-full w-full object-contain" src={logo} alt="logo"/>
      </div>
    </div>
  )
}

export default App