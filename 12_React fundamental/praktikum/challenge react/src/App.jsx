import NavBar from "./components/Navbar"
import Button from "./components/Button"
import Hero from "./components/hero";
import './App.css'

const namaAnakKelas = ["muchson", "daffa", "lativa", "nabraska"];

const handleChangeUsername = (event) =>{
  console.log("a");
}


function App() {
  return(
    <>
      <h1>Halaman APP</h1>
      <Hero></Hero>
      <NavBar nama={"John"}></NavBar>
      <Button></Button>
      <ul>
      {namaAnakKelas.map((nama, index) => (
          <li key={index}>{nama}</li>
        ))}
      </ul>

      <form action="">
        <input type="text" name="nama" placeholder="username" id="username" 
        onChange={handleChangeUsername}/>
        <input type="password" name="umur" placeholder="password" onChange={(e)=> {
          console.log('b')
        }}/>
        <input type="submit" value="tombol"/>
      </form>
    </>
  )
}

export default App
