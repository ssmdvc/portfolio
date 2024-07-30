import About from "./components/About"
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Landing />
        <About />
      </div>
    </div>
  )
}
export default App