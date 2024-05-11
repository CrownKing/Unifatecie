import React, { useState, useEffect } from "react";
import "../../css/subpage.css";
import WhatsApp_icon from "../../images/WhatsApp_icon.png";
import Contact from "../../contactUs";

const Subpage = ({
  linkVideo,
  videoPadrao,
  listaDisciplinas,
  nomeCurso,
  tipoCurso,
  tempoCurso,
  descCurso,
}) => {
  // Verificar se linkVideo foi fornecido, caso contrário, usar o vídeo padrão
  const videoUrl = linkVideo ? linkVideo : videoPadrao;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player("player", {
        width: "100%",
        height: "100%",
        videoId: linkVideo,
      });
    };
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function abrirWhatsApp() {
    const numero = "992555623";
    const mensagem = "Olá! Tenho muito interesse em estudar na UniFatecie!!!";
    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  }

  return (
    <div>
      <nav className="subPageNavBar flexDirectionRow displayFlex">
        <a
          href="https://unifatecie.estudecombolsa.com/matricula/unifatecie/graduacao?ultimas_vagas&eq=6"
          className="navBarLogoAnchor"
        >
          <img
            src="https://estudecombolsa.com/unifatecie/lading_pages/template_sede2/assets/img/consultor.png"
            className="logoConsultor"
          ></img>
          <img
            src="https://estudecombolsa.com/unifatecie/lading_pages/template_sede2/assets/img/logomarca-small-size.webp"
            className="logo"
          ></img>
        </a>
        <div className="displayFlex alignItemsCenter flexDirectionColumn justifyContentCenter divWpp">
          <span className="bold">
            <i className="fa-brands fa-whatsapp text-success"></i>
            WhatsApp
          </span>
          <span style={{ whiteSpace: "nowrap" }}>
            <a
              className="anchor"
              // Para trocar a noticia mude o link abaixo
              href="https://api.whatsapp.com/send?phone=5531992555623&text=Olá, quero aproveitar a oferta na Graduação Ead UNIFATECIE."
            >
              <text>(31) 99255-5623</text>
            </a>
            <img src={WhatsApp_icon} className="whatsapp"></img>
          </span>
        </div>
        <div className="credenciamentoCursos displayFlex flexDirectionRow">
          <ul className="navList">
            <li className="bold navItem">
              <a className="navLink" href="#list-courses">
                Cursos disponíveis
              </a>
            </li>
            <li className="bold navItem">
              <a
                className="navLink"
                href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/NDc1MQ=="
              >
                Credenciamento
              </a>
            </li>
          </ul>
        </div>
        <div className="displayFlex justifyContentCenter alignItemsCenter navButton">
          <a
            target="_blank"
            href="https://unifatecie.estudecombolsa.com/matricula/unifatecie/graduacao?ultimas_vagas&eq=6"
          >
            <button className="btnNav">Faça sua inscrição</button>
          </a>
        </div>
      </nav>
      <section className="videoSection">
        <div className="videoDiv" id="player"></div>
      </section>
      <div className="headerSubpage">
        <span className="headerTitle">
          Estude {nomeCurso} em uma faculdade nota 5 no MEC
        </span>
        <div>
          <span>
            Em {tempoCurso} você pode ter um diploma de {tipoCurso} em{" "}
            {nomeCurso}
          </span>
        </div>
        <div></div>
      </div>
      <div>
        <h3>O quê é o curso de {nomeCurso}?</h3>
        <div className="descCurso">
          <div>
            <span>{descCurso} </span>
          </div>
        </div>
      </div>
      <div className="materias">
        <h3>Você estudará:</h3>
        <ul className="ulMaterias">
          {listaDisciplinas.map((disciplina, index) => (
            <li key={index} className="listaMaterias">
              {disciplina}
            </li>
          ))}
        </ul>
      </div>
      <div className="formularios">
        <section>
          <Contact />
        </section>
      </div>
      <button
        className="botaoFixo"
        style={{ bottom: `${scrollY}px` }}
        onClick={abrirWhatsApp}
      >
        <img src={WhatsApp_icon}></img>
      </button>
    </div>
  );
};

export default Subpage;
