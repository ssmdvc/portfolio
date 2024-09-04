import About from "./components/About"
import Contacts from "./components/Contacts"

import Landing from "./components/Landing"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"

const App = () => {
  return (
    <div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Landing />
        <About />
        <Technologies />
        <Projects />
        <Contacts />
      </div>
    </div>
  )
}
export default App