import Nabvar from "./components/Nabvar/Nabvar"
import Layout from "./components/Layout/Layout"
import Hero from "./components/Hero/Hero"
import CardProducts from "./components/Productos/CardProducts"
import Footer from "./components/Footer/Footer"
// import Categorias from "./components/Categorias/Categorias"

function App() {


  return (
    <>
      <Nabvar/>
      <Layout>
        <Hero/>
        <CardProducts/>
      </Layout>
      <Footer/>
    </>
    
  )
}

export default App
