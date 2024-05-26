import { useState } from "react";
import Banner from "./componentes/Banner";
import { Formulario } from "./componentes/Form/Form";
import { Time } from "./componentes/Time";
import { Footer } from "./componentes/Footer";
import { inicial } from "./data/TimeInicial";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Frontend",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [collaborators, setCollaborators] = useState(inicial);
  const newCollaboratorsAdded = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function whenDeletingCollaborator(id) {
    setCollaborators(
      collaborators.filter((colaborador) => colaborador.id !== id)
    );
  }
  function changeColorTime(color, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = color;
        }
        return time;
      })
    );
  }

  function registerTeam(newTeam) {
    setTimes([...times, { ...newTeam, id: uuidv4() }]);
  }

  function resolvetoFavorite(id) {
    setCollaborators(
      collaborators.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorite = !colaborador.favorite;
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        registerTeam={registerTeam}
        times={times.map((time) => time.nome)}
        registeredCollaborators={(collaborator) =>
          newCollaboratorsAdded(collaborator)
        }
      />
      <section className="times">
        <h1 className="title">Minha organização</h1>
        {times.map((time) => (
          <Time
            toFavorite={resolvetoFavorite}
            changeColor={changeColorTime}
            key={time.nome}
            id={time.id}
            corPrimaria={time.cor}
            corSecundaria={time.cor}
            colaboradores={collaborators.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            whenDeleting={whenDeletingCollaborator}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default App;
