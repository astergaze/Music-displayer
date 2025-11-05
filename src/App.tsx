import { useState } from 'react'
import './css/App.css'
import logo from './assets/logo-azul.png'
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
        </div>
      </section>
      <section className='musicCardsComponents'>
          <h2>Repositorio de canciones</h2>
          <div className='musicCardsCont'>
            <div className="musicCard"></div>
          </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default App
