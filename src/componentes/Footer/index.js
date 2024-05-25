import "./Footer.css";

export const Footer = () => {
  return (
    <section className="footer">
      <ul className="social">
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="/imagens/fb.png" alt="logo do facebook" />
          </a>
        </li>
        <li>
          <a href="https://x.com/" target="_blank" rel="noreferrer">
            <img src="/imagens/x.svg" alt="logo do twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/imagens/ig.png" alt="logo do instagram" />
          </a>
        </li>
      </ul>
      <div>
        <img src="/imagens/logo.png" alt="logo do Organo" />
      </div>
      <div className="copyright">
        Densenvolvido por{" "}
        <a
          href="https://www.linkedin.com/in/josenettojn/"
          target="_blank"
          rel="noreferrer"
        >
          José Netto
        </a>
      </div>
    </section>
  );
};
