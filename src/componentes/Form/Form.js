import "./Form.css";
import { TextField } from "../TextField/index";
import { DropDown } from "../DropDown/DropDown";
import { Button } from "../Button";
import { useState } from "react";

export const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const whenSave = (e) => {
    e.preventDefault();
    props.registeredCollaborators({
      nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={whenSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          name="Nome"
          placeholder="Digite seu nome"
          value={nome}
          whenChanging={(value) => setNome(value)}
        />
        <TextField
          required={true}
          name="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          whenChanging={(value) => setCargo(value)}
        />
        <TextField
          required={true}
          name="Imagem"
          placeholder="Insira o endereço da imagem"
          value={imagem}
          whenChanging={(value) => setImagem(value)}
        />
        <DropDown
          required={true}
          label="Time"
          itens={props.times}
          value={time}
          whenChanging={(value) => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
