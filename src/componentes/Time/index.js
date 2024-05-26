import { Colaborador } from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

export const Time = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(props.corPrimaria, 0.6) }}
      >
        <input
          value={props.corPrimaria}
          onChange={(evento) =>
            props.changeColor(evento.target.value, props.id)
          }
          type="color"
          className="input-color"
        />
        <h3 style={{ borderColor: props.corSecundaria }}>{props.name}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            return (
              <Colaborador
                corDeFundo={props.corPrimaria}
                key={colaborador.id}
                id={colaborador.id}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                whenDeleting={props.whenDeleting}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
