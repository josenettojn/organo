import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const Colaborador = ({
  nome,
  cargo,
  imagem,
  corDeFundo,
  whenDeleting,
  id,
  toFavorite,
  colaboradores,
}) => {
  function favorite() {
    toFavorite(colaboradores.id);
  }
  const propsFavorite = {
    size: 25,
    onClick: favorite,
  };

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => whenDeleting(id)}
      />

      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favorite">
          {colaboradores.favorite ? (
            <AiFillHeart {...propsFavorite} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorite} />
          )}
        </div>
      </div>
    </div>
  );
};
