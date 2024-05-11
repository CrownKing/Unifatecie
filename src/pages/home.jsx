import React, { useState, useEffect } from "react";
import "../App.css";
import imgCentral from "../images/Banner.jpg";
import imgCentralMobile from "../images/BannerMobile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import WhatsApp_icon from "../images/WhatsApp_icon.png";
import caioCastro from "../images/caioCastro.jpg";
import lab from "../images/lab.JPG";
import Zendesk, { ZendeskAPI } from "../ZendexConfig.js";
import Contact from "../contactUs.jsx";
import { useNavigate } from "react-router-dom";

const ZENDESK_KEY = "cc13a79f-625e-4714-9201-7282a08f5cf2";
function Home() {
  const [tempoRestante, setTempoRestante] = useState(null);
  const [isVisible, setIsVisible] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  function formatTwoDigits(value) {
    return value < 10 ? `0${value}` : value;
  }

  const toggleDiv = (segmentClicked) => {
    if (isVisible === segmentClicked) {
      setIsVisible("");
    } else {
      setIsVisible(segmentClicked);
    }
  };
  const handleClick = (nomeSubpage) => {
    navigate("/" + nomeSubpage, {});
  };

  const handleLoaded = () => {
    ZendeskAPI("messenger", "");
  };

  function abrirWhatsApp() {
    const numero = "992555623";
    const mensagem = "Olá! Tenho muito interesse em estudar na UniFatecie!!!";
    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const agora = new Date();
      const meiaNoite = new Date(agora);
      meiaNoite.setHours(24, 0, 0, 0); // Define a meia-noite do dia atual

      const diferenca = meiaNoite - agora;

      const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

      setTempoRestante({ horas, minutos, segundos });

      if (diferenca <= 0) {
        clearInterval(interval);
      }
    }, 1000);
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player("player", {
        width: "100%",
        height: "100%",
        videoId: "jMxaq-w6iMk",
      });
    };
    return () => {
      clearInterval(interval);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="allSite">
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />

        <section className="topMessage">
          <div>
            <span className="bold">
              {" "}
              OFERTA RELÂMPAGO⚡ Mensalidades a partir de R$ 45,00
            </span>
            <a
              className="anchor"
              target="_blank"
              href="https://unifatecie.estudecombolsa.com/matricula/unifatecie/graduacao?ultimas_vagas&eq=6"
            >
              <button className="garantaButton"> GARANTA AGORA</button>
            </a>
          </div>
        </section>
        <nav className="navBar flexDirectionRow displayFlex">
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
        <section>
          <img
            src={window.innerWidth < 800 ? imgCentralMobile : imgCentral}
            className="banner"
          ></img>{" "}
        </section>

        <div className="displayFlex justifyContentCenter alignItemsCenter bold textDark">
          <h3>Graduação e Pós-Graduação EAD</h3>
        </div>
        <div className="textAlignCenter frase">
          <h1 className="uppercase">
            {" "}
            o{" "}
            <strong>
              ead <span>+barato</span>{" "}
            </strong>{" "}
            do <strong>brasil!</strong>
          </h1>
        </div>
        <section className="container textAlignCenter">
          <h1 className="textHighlight bold">
            O curso que você deseja com até 80% com DESCONTO regressivo.
          </h1>
          <p className="textDark bold">
            DESCONTO RELÂMPAGO - APENAS PARA OS PRÉ-INSCRITOS HOJE.
          </p>
          <div className="countdown justifyContentCenter">
            <h2 className="bold textDark"> SOMENTE ATÉ HOJE ! </h2>
            {tempoRestante && (
              <div className="displayFlex flexDirectionRow justifyContentCenter">
                <div className="displayFlex flexDirectionColumn">
                  <span className="largeText">00:</span>
                  <span className="smallText">Dias</span>
                </div>
                <div className="displayFlex flexDirectionColumn">
                  <span className="largeText">
                    {formatTwoDigits(tempoRestante.horas)}:
                  </span>
                  <span className="smallText">Horas</span>
                </div>
                <div className="displayFlex flexDirectionColumn">
                  <span className="largeText">
                    {formatTwoDigits(tempoRestante.minutos)}:
                  </span>
                  <span className="smallText">Minutos</span>
                </div>
                <div className="displayFlex flexDirectionColumn">
                  <span className="largeText">
                    {formatTwoDigits(tempoRestante.segundos)}
                  </span>
                  <span className="smallText">Segundos</span>
                </div>
              </div>
            )}
            <div>
              <a>
                <button href="#form">CADASTRE-SE</button>
              </a>
            </div>
          </div>
          <h1 className="bold textHighlight">Confira os cursos disponíveis</h1>
          <h1 className="bold"> no EAD da UniFatecie</h1>
          <div className="containerInput">
            <div className="inputDiv">
              <form action="https://unifatecie.estudecombolsa.com/pesquisa_cursos_search">
                <input
                  type="text"
                  name="course"
                  placeholder="Pesquise aqui seu curso"
                ></input>
              </form>
            </div>
          </div>
          {/* Bacharelado */}
          <section className="container" id="list-courses">
            <div className="options">
              <div className="colItem ">
                <div id="accordion">
                  <a className="anchorCursos" data-target="#bacharelado">
                    <div
                      className="textAlignLeft titulolista displayFlex alignItemsCenter textColorWhite"
                      onClick={() => toggleDiv("bacharelado")}
                    >
                      <img src="https://estudecombolsa.com/unifatecie/lading_pages/template_sede2/assets/img/bacharelado-icon.webp"></img>
                      <h4>BACHARELADO{">"} </h4>
                    </div>
                  </a>
                  {isVisible === "bacharelado" && (
                    <div
                      className="divListaCursos"
                      id="bacharelado"
                      aria-labelledby="bacharelado"
                      data-parent="#accordion"
                    >
                      {/* CienciasBiologicas */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <b>
                                  Ciências Biológicas
                                  <span className="textHighlight">
                                    3.5 Anos
                                  </span>
                                  {/* Adiciona um evento onClick no texto para abrir ou fechar a Subpage */}
                                  <span
                                    onClick={() =>
                                      handleClick("cienciasBiologicas")
                                    }
                                  >
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </span>
                                </b>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  className="btn btn-lista"
                                  onClick={() =>
                                    handleClick(
                                      "bacharelado/ciencias-biologicas"
                                    )
                                  } // Adiciona um evento onClick para abrir ou fechar a Subpage
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* Economia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Economia{" "}
                                    <span className="textHighlight">
                                      3 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/economia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Química */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/quimica"
                                >
                                  <b>
                                    Química{" "}
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/quimica"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Teologia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/teologia"
                                >
                                  <b>
                                    Teologia{" "}
                                    <span className="textHighlight">
                                      3 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/teologia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Administração */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Administração{" "}
                                    <span className="textHighlight">
                                      3 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/administracao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Biblioteconomia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Biblioteconomia{" "}
                                    <span className="textHighlight">
                                      3 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/biblioteconomia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Ciencias Contabeis */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Ciências Contábeis{" "}
                                    <span className="textHighlight">
                                      3 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-contabeis"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Educação Física */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Educação Física{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/educacao-fisica"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Psicopedagogia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Psicopedagogia{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/psicopedagogia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Publicidade e Propaganda */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Publicidade e Propaganda{" "}
                                    <span className="textHighlight">
                                      3 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/publicidade-e-propaganda"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Serviço Social */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Serviço Social{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/servico-social"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Sistemas de Informação */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Sistemas de Informação{" "}
                                    <span className="textHighlight">
                                      3 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/sistemas-de-informacao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Artes Visuais */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Artes Visuais{" "}
                                    <span className="textHighlight">
                                      2.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/artes-visuais"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Jornalismo */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Jornalismo{" "}
                                    <span className="textHighlight">
                                      3 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/jornalismo"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Engenharia de Produção */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Engenharia de Produção{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-de-producao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>
                      {/* Engenharia Ambiental e Sanitária */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Engenharia Ambiental e Sanitária{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-ambiental-e-sanitaria"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Engenharia de Software */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Engenharia de Software{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-de-software"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Engenharia de Design Digital */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Engenharia de Design Digital{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-de-design-digital"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Engenharia de Alimentos */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Engenharia de Alimentos{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-de-alimentos"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Engenharia de Controle e Automação */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Engenharia de Controle e Automação{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-de-controle-e-automacao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Zootecnia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Zootecnia{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/zootecnia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Engenharia Química */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Engenharia Química{" "}
                                  <span className="textHighlight">5 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-quimica"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Arquitetura e Urbanismo */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Arquitetura e Urbanismo{" "}
                                  <span className="textHighlight">4 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/arquitetura-e-urbanismo"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Engenharia Agronômica */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Engenharia Agronômica{" "}
                                  <span className="textHighlight">4 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-agronomica"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Engenharia Civil */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Engenharia Civil{" "}
                                  <span className="textHighlight">4 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-civil"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* Engenharia da Computação */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Engenharia da Computação{" "}
                                  <span className="textHighlight">4 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-da-computacao"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Engenharia Elétrica */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Engenharia Elétrica{" "}
                                  <span className="textHighlight">4 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-eletrica"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* Engenharia Mecânica */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Engenharia Mecânica{" "}
                                  <span className="textHighlight">4 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-mecanica"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Psicanálise */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Psicanálise{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/psicanalise"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Biomedicina */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Biomedicina{" "}
                                  <span className="textHighlight">
                                    3.5 Anos
                                  </span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/biomedicina"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* Farmácia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Farmácia{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/farmacia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Fisioterapia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Fisioterapia{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/fisioterapia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Fonoaudiologia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Fonoaudiologia{" "}
                                  <span className="textHighlight">4 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/fonoaudiologia"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Nutrição */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Nutrição{" "}
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/nutricao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Terapia Ocupacional */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Terapia Ocupacional{" "}
                                  <span className="textHighlight">4 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/terapia-ocupacional"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Licenciatura */}
              <div className="colItem ">
                <div id="accordion">
                  <a className="anchorCursos" data-target="#licenciatura">
                    <div
                      className="textAlignLeft titulolista displayFlex alignItemsCenter textColorWhite"
                      onClick={() => toggleDiv("licenciatura")}
                    >
                      <img src="https://estudecombolsa.com/unifatecie/lading_pages/template_sede2/assets/img/licenciatura-icon.webp"></img>
                      <h4>LICENCIATURA{">"} </h4>
                    </div>
                  </a>
                  {isVisible === "licenciatura" && (
                    <div
                      className="divListaCursos"
                      id="licenciatura"
                      aria-labelledby="licenciatura"
                      data-parent="#accordion"
                    >
                      {/* Artes */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Artes
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* Ciencias Biológicas */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Ciencias Biológicas{" "}
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/economia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Computação */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/quimica"
                                >
                                  <b>
                                    Computação{" "}
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/quimica"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Educação Fisica */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/teologia"
                                >
                                  <b>
                                    Educação Fisica{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/teologia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Filosofia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Filosofia{" "}
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/administracao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Fisica */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Física{" "}
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/biblioteconomia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Geografia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Geografia{" "}
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-contabeis"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* História */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    História{" "}
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/educacao-fisica"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Letras */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Letras - Português e Inglês{" "}
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/psicopedagogia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Letras Libras */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Letras - Português e Libras{" "}
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/publicidade-e-propaganda"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Matemática */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Matemática{" "}
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/servico-social"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Pedagogia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Pedagogia{" "}
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/sistemas-de-informacao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Musica */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Música{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/artes-visuais"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Sociologia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Sociologia{" "}
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/jornalismo"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Engenharia de Produção */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Educação Especial{" "}
                                    <span className="textHighlight">
                                      4 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-de-producao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Tecnólogo */}
              <div className="colItem ">
                <div id="accordion">
                  <a className="anchorCursos" data-target="#tecnologo">
                    <div
                      className="textAlignLeft titulolista displayFlex alignItemsCenter textColorWhite"
                      onClick={() => toggleDiv("tecnologo")}
                    >
                      <img src="https://estudecombolsa.com/unifatecie/lading_pages/template_sede2/assets/img/tecnologo-icon.webp"></img>
                      <h4>TECNOLOGO{">"} </h4>
                    </div>
                  </a>
                  {isVisible === "tecnologo" && (
                    <div
                      className="divListaCursos"
                      id="tecnologo"
                      aria-labelledby="tecnologo"
                      data-parent="#accordion"
                    >
                      {/* Agronegócio */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Agronegócio
                                    <span className="textHighlight">
                                      2.5 Anos
                                    </span>
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* Análise e Desenvolvimento de Sistemas */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Análise e Desenvolvimento de Sistemas{" "}
                                    <span className="textHighlight">
                                      2 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/economia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Comércio Exterior */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/quimica"
                                >
                                  <b>
                                    Comércio Exterior{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/quimica"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Design de Interiores */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/teologia"
                                >
                                  <b>
                                    Design de Interiores{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/teologia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Design de Moda */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Design de Moda{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/administracao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Gastronomia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Gastronomia{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/biblioteconomia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Gerontologia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Gerontologia{" "}
                                    <span className="textHighlight">
                                      2 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-contabeis"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Gestão Ambiental */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Gestão Ambiental{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/educacao-fisica"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Gestão Comercial */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Gestão Comercial{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/psicopedagogia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Gestão da Qualidade */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Gestão da Qualidade{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/publicidade-e-propaganda"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Gestão da Produção Industrial */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Gestão da Produção Industrial{" "}
                                    <span className="textHighlight">
                                      2.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/servico-social"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Gestão de Recursos Humanos */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Gestão de Recursos Humanos{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/sistemas-de-informacao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Gestão Financeira */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Gestão Financeira{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/artes-visuais"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Gestão Hospitalar */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Gestão Hospitalar{" "}
                                    <span className="textHighlight">
                                      2.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/jornalismo"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Gestão Pública */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Gestão Pública{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-de-producao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>
                      {/* Hotelaria */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Hotelaria{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-ambiental-e-sanitaria"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Logística */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Logística{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-de-software"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Marketing */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Marketing{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-de-design-digital"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Negócios Imobiliários */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Negócios Imobiliários{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-de-alimentos"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Podologia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            {/* Conteúdo */}
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Podologia{" "}
                                    <span className="textHighlight">
                                      2 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              {/* Botão */}
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-de-controle-e-automacao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                            {/* Fim do conteúdo */}
                          </li>
                        </ul>
                      </div>

                      {/* Processos Gerenciais */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Processos Gerenciais{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/zootecnia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Processos Químicos */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Processos Químicos{" "}
                                  <span className="textHighlight">
                                    2.5 Anos
                                  </span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-quimica"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Secretario Executivo */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Secretario Executivo{" "}
                                  <span className="textHighlight">
                                    1.5 Anos
                                  </span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/arquitetura-e-urbanismo"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Segurança do Trabalho */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Segurança do Trabalho{" "}
                                  <span className="textHighlight">
                                    2.5 Anos
                                  </span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-agronomica"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Segurança Pública */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Segurança Pública{" "}
                                  <span className="textHighlight">
                                    1.5 Anos
                                  </span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-civil"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* Sistemas para Internet */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Sistemas para Internet{" "}
                                  <span className="textHighlight">2 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-da-computacao"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Terapias Integrativas e Complementares */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Terapias Integrativas e Complementares{" "}
                                  <span className="textHighlight">2 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-eletrica"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* Energias Renováveis */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Energias Renováveis{" "}
                                  <span className="textHighlight">2 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-mecanica"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Tecnologia Oftálmica */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Tecnologia Oftálmica{" "}
                                    <span className="textHighlight">
                                      2.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/psicanalise"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Automação Industrial */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Automação Industrial{" "}
                                  <span className="textHighlight">
                                    2.5 Anos
                                  </span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/biomedicina"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* Investigação Forense e Perícia Criminal */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Investigação Forense e Perícia Criminal{" "}
                                    <span className="textHighlight">
                                      2.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/farmacia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Ciência da Felicidade */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Ciência da Felicidade{" "}
                                    <span className="textHighlight">
                                      2 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/fisioterapia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Criminologia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Criminologia{" "}
                                  <span className="textHighlight">
                                    2.5 Anos
                                  </span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/fonoaudiologia"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Design Gráfico */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Design Gráfico{" "}
                                    <span className="textHighlight">
                                      2 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/nutricao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Segurança da Informação */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Segurança da Informação{" "}
                                  <span className="textHighlight">2 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/terapia-ocupacional"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Estética e Cosmética */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Estética e Cosmética{" "}
                                  <span className="textHighlight">2 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-da-computacao"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Serviços Jurídicos */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Serviços Jurídicos{" "}
                                  <span className="textHighlight">
                                    1.5 Anos
                                  </span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-eletrica"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* Radiologia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Radiologia{" "}
                                  <span className="textHighlight">
                                    2.5 Anos
                                  </span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/engenharia-mecanica"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Agrocomputação */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Agrocomputação{" "}
                                    <span className="textHighlight">
                                      2.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/psicanalise"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Design de Produtos */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Design de Produtos{" "}
                                  <span className="textHighlight">
                                    1.5 Anos
                                  </span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/biomedicina"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* Jogos Digitais */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Jogos Digitais{" "}
                                    <span className="textHighlight">
                                      2 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/farmacia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Processo Cervejeiros */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Processo Cervejeiros{" "}
                                    <span className="textHighlight">
                                      2.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/fisioterapia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Processos Escolares */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Processos Escolares{" "}
                                  <span className="textHighlight">2 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/fonoaudiologia"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Produção Publicitária */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Produção Publicitária{" "}
                                    <span className="textHighlight">
                                      1.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/nutricao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Saneamento Ambiental */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Saneamento Ambiental{" "}
                                  <span className="textHighlight">
                                    1.5 Anos
                                  </span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/terapia-ocupacional"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Sistemas Biomédicos */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Sistemas Biomédicos{" "}
                                    <span className="textHighlight">
                                      2.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/psicanalise"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Gestão Fiscal e Tributária */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Gestão Fiscal e Tributária{" "}
                                  <span className="textHighlight">2 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/biomedicina"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* Massoterapia */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Massoterapia{" "}
                                    <span className="textHighlight">
                                      2.5 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/farmacia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Segurança no Trânsito */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Segurança no Trânsito{" "}
                                    <span className="textHighlight">
                                      2 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/fisioterapia"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Agente comunitário */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Agente comunitário{" "}
                                  <span className="textHighlight">2 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/fonoaudiologia"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>

                      {/* Coach e Desenvolvimento Humano */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Coach e Desenvolvimento Humano{" "}
                                    <span className="textHighlight">
                                      2 Anos
                                    </span>{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/nutricao"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Gestão de Segurança Privada */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="textDark"
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                              >
                                <b>
                                  Gestão de Segurança Privada{" "}
                                  <span className="textHighlight">2 Anos</span>{" "}
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </b>
                              </a>
                            </p>
                            <p className="botao">
                              <a
                                target="_blank"
                                href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/terapia-ocupacional"
                                className="btn btn-lista"
                              >
                                Saiba mais sobre o curso{" "}
                                <i
                                  className="fa-solid fa-circle-chevron-right ml-3"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="colItem ">
                <div id="accordion">
                  <a className="anchorCursos" data-target="#segundaGraduacao">
                    <div
                      className="textAlignLeft titulolista displayFlex alignItemsCenter textColorWhite"
                      onClick={() => toggleDiv("segundaGraduacao")}
                    >
                      <img src="https://estudecombolsa.com/unifatecie/lading_pages/template_sede2/assets/img/licenciatura-icon.webp"></img>
                      <h4>SEGUNDA GRADUAÇÃO{">"} </h4>
                    </div>
                  </a>
                  {isVisible === "segundaGraduacao" && (
                    <div
                      className="divListaCursos"
                      id="segundaGraduacao"
                      aria-labelledby="segundaGraduacao"
                      data-parent="#accordion"
                    >
                      {/* Ciências da computação */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>Entrar em contato via whatsapp</b>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="colItem ">
                <div id="accordion">
                  <a className="anchorCursos" data-target="#formPedagogica">
                    <div
                      className="textAlignLeft titulolista displayFlex alignItemsCenter textColorWhite"
                      onClick={() => toggleDiv("formPedagogica")}
                    >
                      <img src="https://estudecombolsa.com/unifatecie/lading_pages/template_sede2/assets/img/licenciatura-icon.webp"></img>
                      <h4>FORMAÇÃO PEDAGÓGICA{">"} </h4>
                    </div>
                  </a>
                  {isVisible === "formPedagogica" && (
                    <div
                      className="divListaCursos"
                      id="formPedagogica"
                      aria-labelledby="formPedagogica"
                      data-parent="#accordion"
                    >
                      {/* Ciências da computação */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>Entrar em contato via whatsapp</b>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Segunda Licenciatura */}
              <div className="colItem ">
                <div id="accordion">
                  <a className="anchorCursos" data-target="#segLicenciatura">
                    <div
                      className="textAlignLeft titulolista displayFlex alignItemsCenter textColorWhite"
                      onClick={() => toggleDiv("segLicenciatura")}
                    >
                      <img src="https://estudecombolsa.com/unifatecie/lading_pages/template_sede2/assets/img/licenciatura-icon.webp"></img>
                      <h4>SEGUNDA LICENCIATURA{">"} </h4>
                    </div>
                  </a>
                  {isVisible === "segLicenciatura" && (
                    <div
                      className="divListaCursos"
                      id="segLicenciatura"
                      aria-labelledby="segLicenciatura"
                      data-parent="#accordion"
                    >
                      {/* Ciências da computação */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>
                                    Ciências da computação
                                    <span className="textHighlight">
                                      3.5 Anos
                                    </span>
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </b>
                                </a>
                              </p>
                              <p className="botao">
                                <a
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                  className="btn btn-lista"
                                >
                                  Saiba mais sobre o curso{" "}
                                  <i
                                    className="fa-solid fa-circle-chevron-right ml-3"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="colItem">
                <div id="accordion">
                  <a className="anchorCursos" data-target="#posGraduacao">
                    <div
                      className="textAlignLeft titulolista displayFlex alignItemsCenter textColorWhite"
                      onClick={() => toggleDiv("posGraduacao")}
                    >
                      <img src="https://estudecombolsa.com/unifatecie/lading_pages/template_sede2/assets/img/tecnologo-icon.webp"></img>
                      <h4>PÓS GRADUAÇÃO{">"} </h4>
                    </div>
                  </a>
                  {isVisible === "posGraduacao" && (
                    <div
                      className="divListaCursos"
                      id="posGraduacao"
                      aria-labelledby="posGraduacao"
                      data-parent="#accordion"
                    >
                      {/* Ciências da computação */}
                      <div className="corpoLista textAlignLeft">
                        <ul>
                          <li>
                            <div className="conteudo">
                              <p>
                                <a
                                  className="textDark"
                                  target="_blank"
                                  href="https://unifatecie.estudecombolsa.com/pesquisa_cursos/bacharelado/ciencias-biologicas"
                                >
                                  <b>Entrar em contato via whatsapp</b>
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="mecSection">
            <div className="mecContainer">
              <span className="whiteSpace">A UniFatecie tem EAD </span>
              <span className="textHighlight"> Nota 5 no MEC!!!!</span>
            </div>
            <div className="imgMecDiv">
              <img
                src="https://estudecombolsa.com/unifatecie/lading_pages/template_sede2/assets/img/conceito-maximo_MEC.webp"
                alt=""
              ></img>
              <div className="textMec">
                <div className="missaoDiv">
                  <span className="mecTextHeader">Missao:</span>
                  <span>
                    Promover educação transformadora, inclusiva e de qualidade,
                    contribuindo para o desenvolvimento humano para a construção
                    de uma sociedade mais justa, ética e igualitária.
                  </span>
                </div>
                <br></br>
                <div className="missaoDiv">
                  <span className="mecTextHeader">Visão:</span>
                  <span>
                    Ser reconhecida como um Grupo Educacional de excelência,
                    consolidado no ensino nos seus diversos níveis e
                    modalidades, atendendo aos nossos.
                  </span>
                </div>
                <br></br>
                <div className="missaoDiv">
                  <span className="mecTextHeader">Valores:</span>
                  <span>
                    Comprometimento, Hospitalidade, Inovação, Respeito,
                    Responsabilidade Social, Sustentabilidade, Transparência,
                    Inclusão.
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="motivosSection">
            <div className="motivosSectionHeader">
              <span>
                A UniFatecie tem tudo que você precisa para alavancar nos
                estudos
              </span>
            </div>
            <div className="motivosDiv">
              <div className="motivosDivImg">
                <img src="https://static.wixstatic.com/media/8c476d_0061e5b668a34580bd5e29a12a56cec7~mv2.jpg/v1/fill/w_576,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/382230465_316377807640142_5012234739300888390_n.jpg"></img>
                <span>
                  Cursos de Graduação EaD, com início imediato, conclusão a
                  partir de 18 meses, instituição nota máxima junto MEC.
                </span>
              </div>
              <div className="motivosDivImg">
                <img src={caioCastro}></img>
                <span>
                  {" "}
                  Apoio em mais de 800 polos e locais de estágio conveniados em
                  todos os estados do Brasil, mais de 200 mil alunos.
                </span>
              </div>
              <div className="motivosDivImg">
                <img src={lab}></img>
                <span>
                  Videoaulas práticas gravadas em modernos laboratórios.
                </span>
              </div>
              <div className="motivosDivImg">
                <img src="https://oab.estrategia.com/portal/wp-content/uploads/2023/04/13170319/exame-38-oab-edital-prestes-a-ser-publicado.png"></img>
                <span>
                  A UNIFATECIE encontra-se vinculada a importantes conselhos
                  profissionais, tais como: CREA, CONFEA, CREF, OAB, CFP, COREN,
                  dentre outros.
                </span>
              </div>
              <div className="motivosDivImg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5duTgYs7Vql1U_cI_Tb05VAGHGyo3eyrfmA&s"></img>
                <span>
                  {" "}
                  Acesso ao conteúdo na palma da sua mão por meio de
                  multiplataforma de aprendizagem, em que você poderá assistir
                  às aulas pelo seu celular, tablet ou computador. Onde, como e
                  quando quiser através do nosso aplicativo.
                </span>
              </div>
              <div className="motivosDivImg">
                <img src="https://oab.estrategia.com/portal/wp-content/uploads/2023/04/13170319/exame-38-oab-edital-prestes-a-ser-publicado.png"></img>
                <span>
                  Acesso aos laboratórios e bibliotecas virtuais para práticas
                  acadêmicas.
                </span>
              </div>
            </div>
          </section>
          <section className="videoSection">
            <div className="videoDiv" id="player"></div>
          </section>
          <section>
            <Contact />
          </section>
        </section>
        <button
          className="botaoFixo"
          style={{ bottom: `${scrollY}px` }}
          onClick={abrirWhatsApp}
        >
          <img src={WhatsApp_icon}></img>
        </button>
      </div>
    </>
  );
}

export default Home;
