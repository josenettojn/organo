import "./Form.css";
import { TextField } from "../TextField/index";
import { DropDown } from "../DropDown/DropDown";
import { Button } from "../Button";

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

  const InSave = (e) => {
    console.log("Cadastrado com sucesso");
    e.preventDefault();
  };

  return (
    <section className="formulario">
      <form onSubmit={InSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField required={true} name="Nome" placeholder="Digite seu nome" />
        <TextField
          required={true}
          name="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextField
          required={true}
          name="Imagem"
          placeholder="Insira o endereço da imagem"
        />
        <DropDown required={true} label="Time" itens={times} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
