import { useState } from "react";
import Banner from "./componentes/Banner";
import { Formulario } from "./componentes/Form/Form";

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
        registeredCollaborators={(collaborator) =>
          newCollaboratorsAdded(collaborator)
        }
      />
    </div>
  );
}

export default App;
