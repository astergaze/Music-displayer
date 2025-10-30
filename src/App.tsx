import './css/App.css'
import logo from './assets/logo-azul.png'
import mouseIcon from "./assets/Mouse-icon.svg" 
import Footer from './Footer.tsx'

function App() {

  return (
    <>
    <main>
      <section>
        <div className='landingFirst'>
          <img src={logo} alt="" />
          <h1>Proyectos creados por estudiantes</h1>
          <p>Musica creada por IA, con fines educativos sobre temas de programacion en C#</p>
          <img 
            src={mouseIcon} 
            alt="Deslizar abajo" 
            className='mouse-animation' 
          />
        </div>
      </section>
      
      <section className='musicCardsComponents'>
          <h2>Repositorio de canciones</h2>
          <div className='musicCardsCont'>
          </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default App