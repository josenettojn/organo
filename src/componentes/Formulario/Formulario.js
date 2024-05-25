import "./Formulario.css";
import { TextField } from "../TextField/index";

export const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField name="Nome" placeholder="Digite seu nome" />
        <TextField name="Cargo" placeholder="Digite seu cargo" />
        <TextField name="Imagem" placeholder="Insira o endereço da imagem" />
      </form>
    </section>
  );
};
