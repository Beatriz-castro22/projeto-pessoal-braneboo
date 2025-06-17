//import './style.css'
import { useState, useEffect } from "react"
import './style.css'
export default function TimeBraineBoo() {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let intervalo = null;

    if (ativo) {
      intervalo = setInterval(() => {
        setSegundos((s) => s + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [ativo]);

  const iniciar = () => setAtivo(true);
  const pausar = () => setAtivo(false);
  const resetar = () => {
    setAtivo(false);
    setSegundos(0);
  };
  const formatarTempo = (totalSegundos) => {
    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;
    const minutosStr = minutos.toString().padStart(2, '0');
    const segundosStr = segundos.toString().padStart(2, '0');
    return `${minutosStr}:${segundosStr}`;
  };


    return (
    <>
        <div className="time">
      <p>⭐Tempo de Estudo / Exercício⭐</p>
            
      <h1>{formatarTempo(segundos)}</h1>
      <button className="p" onClick={iniciar}>Iniciar</button>
      <button className="p" onClick={pausar}>Pausar</button>
      <button className="p" onClick={resetar}>Resetar</button>
        </div>
    </>
    )
}