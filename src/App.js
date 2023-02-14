import "./App.css";
import { Testimonio } from "./componentes/Testimonio"; //exportar un componente

class Persona {
  constructor(nombre,pais,imagen,alt,cargo,empresa,testimonio1,negrita,testimonio2
  ) {
    this.nombre = nombre;
    this.pais = pais;
    this.imagen = imagen;
    this.alt = alt;
    this.cargo = cargo;
    this.empresa = empresa;
    this.testimonio1 = testimonio1;
    this.negrita = negrita;
    this.testimonio2 = testimonio2;
  }
}

const p1 = new Persona(
  "Emma Bostian",
  "Suecia",
  "emma",
  "foto emma",
  "Ingeniera de Software",
  "Spotify",
  "Siempre he tenido problemas para aprender JavaScript.He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.Estudiar JavaScript, así como estructuras de datos y algoritmos en",
  "freeCodeCamp me dio las habilidades",
  "y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
);

const p2 = new Persona(
  "Martita Chima",
  "Nigeria",
  "sarah",
  "foto sarah",
  "Ingeniera de Software",
  "ChatDesk",
  "",
  "freeCodeCamp fue la puerta de entrada a mi carrera ",
  "como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
);
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre={p1.nombre}
          pais={p1.pais}
          imagen={p1.imagen}
          alt={p1.alt}
          cargo={p1.cargo}
          empresa={p1.empresa}
          testimonio1={p1.testimonio1}
          negrita={p1.negrita}
          testimonio2={p1.testimonio2}
        />

        <Testimonio
          nombre={p2.nombre}
          pais={p2.pais}
          imagen={p2.imagen}
          alt={p2.alt}
          cargo={p2.cargo}
          empresa={p2.empresa}          
          negrita={p2.negrita}
          testimonio2={p2.testimonio2}
        />
      </div>
    </div>
  );
}

export default App;
