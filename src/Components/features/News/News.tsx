import { Title } from "@/Components/Title/Title";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink } from "lucide-react";
import { PuffLoader } from "react-spinners";
//types
type news = {
  title: string;
  desc: string;
  image: string;
  link: URL;
};

export function News() {
  const { data, isLoading } = useQuery({
    queryKey: ["news"], // identificador da query
    queryFn: () =>
      fetch("https://www.jsonkeeper.com/b/WODO9.json").then((res) =>
        res.json()
      ), //refatorar depois
  });
  return (
    <section>
      <Title>Destaques</Title>
      {isLoading && (
        <div className="flex items-center justify-center mt-4">
          <PuffLoader color="#22c55e" />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-[10%] mr-[10%] mt-2">
        {data &&
          data.map((news: news, i: number) => (
            <div
              key={i}
              className="bg-[var(--color-surface)] p-4 rounded-xl flex flex-col items-center text-white h-full border"
            >
              <img
                className="w-full max-h-64 object-contain rounded-md"
                src={news.image}
                alt={news.title}
              />
              <h1 className="text-lg font-bold mt-3 text-center">
                {news.title}
              </h1>
              <h3 className="text-[var(--color-text)] text-sm opacity-90 mt-1 text-center flex-grow">
                {news.desc}
              </h3>
              <a
                target="_blank"
                href={news.link.toString()}
                className="flex items-center gap-2 mt-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] p-2 border rounded"
              >
                <ExternalLink /> Acessar
              </a>
            </div>
          ))}
      </div>
    </section>
  );
}
