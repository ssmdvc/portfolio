import About from "./components/About"
import Experience from "./components/Experience"
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies"

const App = () => {
  return (
    <div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Landing />
        <About />
        <Technologies />
        <Experience />
      </div>
    </div>
  )
}
export default App