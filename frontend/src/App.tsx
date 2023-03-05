import About from "./assets/sections/About"
import Header from "./assets/sections/Header"
import Search from "./assets/sections/Search"

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Search />
        <About />
      </main>
    </div>
  )
}

export default App