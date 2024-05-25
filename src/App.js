import { useState } from "react";
import Banner from "./componentes/Banner";
import { Formulario } from "./componentes/Form/Form";
import { Time } from "./componentes/Time";
import { times } from "./data/Time";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const newCollaboratorsAdded = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  };
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
        />
      ))}
    </div>
  );
}

export default App;
