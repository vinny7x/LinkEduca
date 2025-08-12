import { Link } from "react-router";

export function HomeCards() {
  return (
    <div className="select-none max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-6 m-2 mt-8 justify-center">
      <Link to="/cursos">
        <div className="bg-[url(/images/study.jpg)] flex-1 p-6 flex items-center justify-center min-h-[12rem] bg-cover bg-center border-[var(--color-border)] border-4 rounded-md">
          <span className="bg-gray-800 px-2 py-1 rounded text-xl text-[var(--color-primary-light)]">
            Cursos Gratuitos
          </span>
        </div>
      </Link>

      <Link to="/vagas">
        <div className="bg-[url(/images/working.jpg)] flex-1 p-6 flex items-center justify-center min-h-[12rem] bg-cover bg-center border-[var(--color-border)] border-4 rounded-md">
          <span className="bg-gray-800 px-2 py-1 rounded text-xl text-[var(--color-primary-light)]">
            Vagas de emprego
          </span>
        </div>
      </Link>
    </div>
  );
}
