import "./Form.css";
import { Field } from "../Field";
import { DropDown } from "../DropDown/DropDown";
import { Button } from "../Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const whenSave = (e) => {
    e.preventDefault();
    props.registeredCollaborators({
      nome,
      cargo,
      imagem,
      time,
      id: uuidv4(),
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
        <Field
          required={true}
          name="Nome"
          placeholder="Digite seu nome"
          value={nome}
          whenChanging={(value) => setNome(value)}
        />
        <Field
          required={true}
          name="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          whenChanging={(value) => setCargo(value)}
        />
        <Field
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

      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.registerTeam({
            nome: nomeTime,
            cor: corTime,
            id: uuidv4(),
          });
          setNomeTime("");
          setCorTime("");
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        <Field
          required
          name="Nome"
          placeholder="Digite o nome do time"
          value={nomeTime}
          whenChanging={(value) => setNomeTime(value)}
        />
        <Field
          type="color"
          required
          name="Cor"
          placeholder="Digite a cor do time"
          value={corTime}
          whenChanging={(value) => setCorTime(value)}
        />
        <Button>Criar um time</Button>
      </form>
    </section>
  );
};
