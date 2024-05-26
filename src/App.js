import { useState } from "react";
import Banner from "./componentes/Banner";
import { Formulario } from "./componentes/Form/Form";
import { Time } from "./componentes/Time";
import { times } from "./data/Time";
import { Footer } from "./componentes/Footer";
import { inicial } from "./data/TimeInicial";

function App() {
  const [collaborators, setCollaborators] = useState(inicial);
  const newCollaboratorsAdded = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function whenDeletingCollaborator() {
    console.log("removendo colaborador");
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        registeredCollaborators={(collaborator) =>
          newCollaboratorsAdded(collaborator)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          name={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={collaborators.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          whenDeleting={whenDeletingCollaborator}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
