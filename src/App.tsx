import { useState } from 'react'
import './css/App.css'
import logo from './assets/logo-azul.png'
import Footer from './Footer.tsx'
import sobrecargado from './audio/Sobrecargado - sobrecarga de metodos.mp3'
import seAlejanCositas from './audio/se alejan cositas.mp3'
import tuhermana from './audio/El Grito del Debugging.wav'
import tuhermano from './audio/El Pibe DateTime.mp3'
import tuvieja from './audio/El TimeSpan - Act 17.mp3'
import tuviejo from './audio/Esta cancion is like This_.mp3'
import tuabuela from './audio/Fragmentos y señales.mp3'
import tuabuelo from './audio/Key word this.mp3'
import tutia from './audio/cancion.mp3'
import tutio from './audio/20250813_235407.mp3'
import tuprima from './audio/Act-17-Eduado-Vasquez.mp3'
import tuprimo from './audio/RPReplay_Final1754544611.mp3'
import tuhija from './audio/VideoToMp3Converter_20250811015513545.mp3'
import tuhijo from './audio/sobrecarga.mp3'
import tumadrina from './audio/Programacion con Tiempo.mp3'

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
      <section className="musicCardsComponents">
        <h2>Repositorio de canciones</h2>
      </section>

      <section className="musicCardsCont">
        <div className="songCard">
          <p className="songTitle">Sobrecargado</p>
          <audio src={sobrecargado} controls/>
        </div>
        <div className="songCard">
          <p className="songTitle">Se alejan cositas</p>
          <audio src={seAlejanCositas} controls/>
        </div>
         <div className="songCard">
          <p className="songTitle">El Grito del Debbugin</p>
          <audio src={tuhermana} controls/>
        </div>
        <div className="songCard">
          <p className="songTitle">El Pibe DateTime</p>
          <audio src={tuhermano} controls/>
        </div>
        <div className="songCard">
          <p className="songTitle">Programacion con Tiempo</p>
          <audio src={tumadrina} controls/>
        </div>
      </section>

      <section className="musicCardsCont">
        <div className="songCard">
          <p className="songTitle">El TimeSpan</p>
          <audio src={tuvieja} controls/>
        </div>
        <div className="songCard">
          <p className="songTitle">Esta cancion es like this</p>
          <audio src={tuviejo} controls/>
        </div>
        <div className="songCard">
          <p className="songTitle">Fragmentos y señales</p>
          <audio src={tuabuela} controls/>
        </div>
        <div className="songCard">
          <p className="songTitle">key word this</p>
          <audio src={tuabuelo} controls/>
        </div>
        <div className="songCard">
          <p className="songTitle">Cancion</p>
          <audio src={tutia} controls/>
        </div>
      </section>

       <section className="musicCardsCont">
        <div className="songCard">
          <p className="songTitle">cancion con fecha</p>
          <audio src={tutio} controls/>
        </div>
        <div className="songCard">
          <p className="songTitle">la de edu</p>
          <audio src={tuprima} controls/>
        </div>
        <div className="songCard">
          <p className="songTitle">rpr</p>
          <audio src={tuprimo} controls/>
        </div>
        <div className="songCard">
          <p className="songTitle">video coverter</p>
          <audio src={tuhija} controls/>
        </div>
        <div className="songCard">
          <p className="songTitle">sobrecarga</p>
          <audio src={tuhijo} controls/>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default App
