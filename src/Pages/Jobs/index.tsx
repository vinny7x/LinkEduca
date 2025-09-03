import { Title } from "@/Components/Title/Title";
import { Maintemplate } from "@/Templates/Maintemplate";
import { useQuery } from "@tanstack/react-query";
import {
  BriefcaseBusinessIcon,
  Building2Icon,
  ClockIcon,
  ExternalLink,
  NewspaperIcon,
} from "lucide-react";
import { PuffLoader } from "react-spinners";
import moment from "moment";
import { Badge } from "@/Components/ui/badge";
type jobType = {
  createdAt: Date;
  company: company;
  updatedt: Date;
  subtitle: string;
  externalLink: string | undefined;
  image: string | undefined;
  title: string;
  id: number;
  jobTags: [jobTags];
};
type company = {
  name: string;
  id: number;
  link: string;
};
type jobTags = {
  id: number;
  tag: {
    name: string;
  };
};
export function Jobs() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: () =>
      fetch("https://api.remotar.com.br/jobs").then((res) => res.json()),
  });
  console.log(data);

  return (
    <Maintemplate>
      <Title subtitle="Encontre vagas de emprego na área de tecnologia">
        Vagas de emprego
      </Title>
      {isLoading && (
        <div className="flex items-center justify-center mt-4">
          <PuffLoader color="#22c55e" />
        </div>
      )}
      {error && <p>ocorreu um erro</p>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ml-[10%] mr-[10%] mt-2">
        {data &&
          data.data.map((job: jobType) => {
            return (
              <div className="border bg-[var(--color-surface)] p-2 rounded justify-center items-center">
                <h2
                  className="text-xl text-center text-[var(--color-text)] m-2"
                  key={job.id}
                >
                  {job.title}
                </h2>
                <h3 className="text-x text-center text-[var(--color-text)] m-2">
                  {job.subtitle}
                </h3>
                <span className="flex items-center justify-center">
                  <Badge
                    className="flex items-center justify-center"
                    variant="secondary"
                  >
                    <ClockIcon />
                    {`Atualizado em ${formatTime(job.createdAt)}`}
                  </Badge>
                </span>

                <div className="flex m-2 gap-2 justify-center flex-wrap">
                  {job.jobTags.map((tag) => {
                    return (
                      <Badge
                        className="text-[var(--colo-text)]"
                        variant="outline"
                      >
                        {tag.tag.name}
                      </Badge>
                    );
                  })}
                </div>
                <img
                  className="w-128 image-center mx-auto"
                  loading="lazy"
                  src={`https://api.remotar.com.br/jobs/${job.id}/thumbnail`}
                  alt=""
                />
                <div className="grid md:grid-cols-3 grid-cols-2 justify-center items-center m-auto gap-2">
                  <a
                    className="justify-center flex items-center gap-2 mt-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] p-2 border rounded"
                    href={job.externalLink}
                    target="_blank"
                  >
                    <BriefcaseBusinessIcon /> Vaga <ExternalLink size="16" />
                  </a>
                  <a
                    className="justify-center flex items-center gap-2 mt-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] p-2 border rounded"
                    href={`https://remotar.com.br/job/${job.id}`}
                    target="_blank"
                  >
                    <NewspaperIcon /> Postagem <ExternalLink size="16" />
                  </a>
                  <a
                    className="justify-center flex items-center gap-2 mt-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] p-2 border rounded"
                    href={job.company.link}
                    target="_blank"
                  >
                    <Building2Icon /> Contratante <ExternalLink size="16" />
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </Maintemplate>
  );
}

function formatTime(time: Date) {
  const date = moment(time);
  return date.format("DD/MM/YYYY [às] HH:MM");
}
