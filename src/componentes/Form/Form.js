import "./Form.css";
import { TextField } from "../TextField/index";
import { DropDown } from "../DropDown/DropDown";

export const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField name="Nome" placeholder="Digite seu nome" />
        <TextField name="Cargo" placeholder="Digite seu cargo" />
        <TextField name="Imagem" placeholder="Insira o endereço da imagem" />
        <DropDown label="Time" itens={times} />
      </form>
    </section>
  );
};
