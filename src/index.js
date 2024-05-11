import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Subpage from "./pages/subpages/subpage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "bacharelado/ciencias-biologicas",
    element: (
      <Subpage
        linkVideo="vdg-yubirEo"
        videoPadrao=""
        listaDisciplinas={[
          "Anatomia Humana Básica",
          "Atividade Curricular Extensionista",
          "Atividade Curricular Extensionista - Cultura",
          "Atividade Curricular Extensionista - Inclusão",
          "Atividade Curricular Extensionista - Sustentabilidade",
          "Avaliação e Recuperação de Áreas Degradadas",
          "Bases Biológicas",
          "Bioquímica",
          "Biotecnologia",
          "Botânica",
          "Comunicação e Expressão",
          "EcoLogia Geral",
          "Educação a Distância: Conceitos e Ambientação",
          "Educação Ambiental",
          "Epidemiologia",
          "Estágio Supervisionado",
          "Física Geral",
          "Fisiologia Humana",
          "Genética e Melhoramento",
          "Gerenciamento de Recursos Naturais",
          "Imunologia Básica",
          "Licenciamento Ambiental",
          "Métodos Quantitativos Estatísticos",
          "Microbiologia Geral e Biossegurança",
          "Paleontologia e Evolução dos Seres Vivos",
          "Parasitologia Geral",
          "Políticas Públicas em Saúde",
          "Projeto Integrador I - Empreendedorismo",
          "Projeto Integrador II",
          "Projeto Integrador III",
          "Química Geral",
          "TCC - Trabalho de Conclusão de Curso",
          "Zoologia e Entomologia",
        ]}
        nomeCurso="Ciências Biológicas"
        tipoCurso="Bacharelado"
        tempoCurso="3.5 Anos"
        descCurso={`Descubra o fascinante mundo da Biologia na nossa faculdade! Com um
        currículo abrangente, nosso curso de Ciências Biológicas oferece uma
        jornada de aprendizado completa.
        
        Desde bases biológicas até a pesquisa científica avançada,
        nossos alunos exploram anatomia, fisiologia, genética, ecologia e
        muito mais. Com ênfase em práticas de sustentabilidade, nossos
        estudantes são preparados para enfrentar os desafios do mundo atual,
        contribuindo para a preservação da vida e do meio ambiente. Venha
        fazer parte desse universo de descobertas e impacto positivo!`}
      />
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
