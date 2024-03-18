import NavBar from "./components/Navbar"
import Button from "./components/Button"

const namaAnakKelas = ["muchson", "daffa", "lativa", "nabraska"];

function App() {
  return(
    <>
      <h1>Halaman APP</h1>
      <NavBar nama={"John"}></NavBar>
      <Button></Button>
      <ul>
      {namaAnakKelas.map((nama, index) => (
          <li key={index}>{nama}</li>
        ))}
      </ul>
    </>
  )
}

export default App
