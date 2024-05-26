import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";

export const Colaborador = ({
  nome,
  cargo,
  imagem,
  corDeFundo,
  whenDeleting,
}) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="deletar" onClick={whenDeleting} />

      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};
