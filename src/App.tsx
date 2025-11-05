import { useState } from 'react';
import './css/App.css';
import logo from './assets/logo-azul.png';
import Footer from './Footer.tsx';
import SongCard from './SongCard.tsx';

import mouseIcon from "./assets/mouse-icon.svg"

import sobrecargado from './audio/Sobrecargado - sobrecarga de metodos.mp3';
import seAlejanCositas from './audio/se alejan cositas.mp3';
import elGritoDelDebugging from './audio/El Grito del Debugging.wav';
import elPibeDateTime from './audio/El Pibe DateTime.mp3';
import elTimeSpanAct17 from './audio/El TimeSpan - Act 17.mp3';
import estaCancionIsLikeThis from './audio/Esta cancion is like This_.mp3';
import fragmentosYSeñales from './audio/Fragmentos y señales.mp3';
import keyWordThis from './audio/Key word this.mp3';
import cancion from './audio/cancion.mp3';
import cancionConFecha from './audio/20250813_235407.mp3';
import act17EduardoVasquez from './audio/Act-17-Eduado-Vasquez.mp3';
import rprReplay from './audio/RPReplay_Final1754544611.mp3';
import videoConverter from './audio/VideoToMp3Converter_20250811015513545.mp3';
import sobrecarga from './audio/sobrecarga.mp3';
import programacionConTiempo from './audio/Programacion con Tiempo.mp3';


const songs = [
  { id: 's1', title: 'Sobrecargado', audioSrc: sobrecargado },
  { id: 's2', title: 'Se alejan cositas', audioSrc: seAlejanCositas },
  { id: 's3', title: 'El Grito del Debbugin', audioSrc: elGritoDelDebugging },
  { id: 's4', title: 'El Pibe DateTime', audioSrc: elPibeDateTime },
  { id: 's5', title: 'Programacion con Tiempo', audioSrc: programacionConTiempo },
  { id: 's6', title: 'El TimeSpan', audioSrc: elTimeSpanAct17 },
  { id: 's7', title: 'Esta cancion es like this', audioSrc: estaCancionIsLikeThis },
  { id: 's8', title: 'Fragmentos y señales', audioSrc: fragmentosYSeñales },
  { id: 's9', title: 'key word this', audioSrc: keyWordThis },
  { id: 's10', title: 'Cancion', audioSrc: cancion },
  { id: 's11', title: 'cancion con fecha', audioSrc: cancionConFecha },
  { id: 's12', title: 'la de edu', audioSrc: act17EduardoVasquez },
  { id: 's13', title: 'rpr', audioSrc: rprReplay },
  { id: 's14', title: 'video coverter', audioSrc: videoConverter },
  { id: 's15', title: 'sobrecarga', audioSrc: sobrecarga },
];

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
              alt="Scroll para abajo"
              className="scroll-down-svg"
            />
          </div>
        </section>
        <section className="musicCardsComponents">
          <h2>Repositorio de canciones</h2>
        </section>

        <section className="musicCardsCont">
          {songs.map((song) => (
            <SongCard
              key={song.id}
              title={song.title}
              audioSrc={song.audioSrc}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;