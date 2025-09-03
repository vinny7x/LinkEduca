import { Title } from "@/Components/Title/Title";
import { Maintemplate } from "@/Templates/Maintemplate";
import { ExternalLink} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function About() {
  return (
    <Maintemplate>
      <section className="m-4 lg:ml-[20%] lg:mr-[20%]">
        <Title subtitle="Conheça mais sobre o projeto, seus objetivos e sua motivação">
          Sobre o projeto
        </Title>
        <br />
        <p>
          <b>Objetivo:</b> O objetivo desse projeto é fornecer uma forma rápida
          e eficaz de encontrar cursos, pois sabemos o quão chato e demorado
          pode ser a busca por bom cursos, e que sejam baratos. Pensando nessa
          dificuldade e nessa perda de tempo procurando por cursos que muitas
          vezes nao atendem às nossas espectativas, esse site foi idealizado,
          uma forma rápida para encontrar cursos livres.
        </p>
        <br />
        <p>
          <b>Motivação:</b> A motivação para este projeto surgiu de uma
          reflexão. Durante o ensino médio, percebi que muitos colegas não
          sabiam sequer da existência de cursos on-line e gratuitos, que
          poderiam ajudá-los a aprender e enriquecer o currículo.
        </p>
        <br />


        <Title>Sobre o desenvolvedor</Title>
<div className="flex flex-col md:flex-row items-start md:items-center gap-6">
  {/* Imagem + botões */}
  <div className="flex flex-col items-center md:items-start gap-4">
    <img
      className="w-32 sm:w-40 md:w-48 lg:w-64 rounded border-[var(--color-primary)] border-2 transform transition-transform duration-300 hover:scale-105 shadow-green-100 shadow-2xl "
      src="/images/vinicios.jpeg"
      alt="Foto de Vinícios"
    />
    <div className="flex flex-row gap-2">
      <a href="https://github.com/vinny7x" target="_blank">
        <button className="flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] p-2 border rounded cursor-pointer">
          <FaGithub /> GitHub <ExternalLink size="16" />
        </button>
      </a>
      <a href="https://www.linkedin.com/in/vinicios-mendes/" target="_blank">
        <button className="flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] p-2 border rounded cursor-pointer">
        <FaLinkedin/>  LinkedIn <ExternalLink size="16" />
        </button>
      </a>
    </div>
  </div>

  {/* Texto */}
  <div className="flex-1">
    <p className="mb-2">
      <b>Vinícios Mendes</b> é um estudante de Sistemas de informação, na{" "}
      <a
        className="underline inline-flex gap-1"
        href="https://graduacao.grancursosonline.com.br"
        target="_blank"
      >
        Gran cento universitário
        <ExternalLink size="16" />
      </a>
      , sendo esse um projeto pensado para a atividade extencionista II.
    </p>
    <p>
      Vinícios é interessado em tudo que envolve tecnologia, desde
      desenvolvimento de software até novas ferramentas e tendências do setor.
      Ele gosta de explorar diferentes áreas, testar novas ideias e aprender
      na prática, sempre procurando entender como as coisas funcionam por trás
      da tela. Projetos pessoais, experiências com programação e descobertas
      tecnológicas fazem parte do seu dia a dia.
    </p>
  </div>
</div>
<br />
<p> Vinícios é interessado em tudo que envolve tecnologia, desde
    desenvolvimento de software até novas ferramentas e tendências do
    setor. Ele gosta de explorar diferentes áreas, testar novas ideias e
    aprender na prática, sempre procurando entender como as coisas
    funcionam por trás da tela. Projetos pessoais, experiências com
    programação e descobertas tecnológicas fazem parte do seu dia a dia.</p>

      </section>
    </Maintemplate>
  );
}
