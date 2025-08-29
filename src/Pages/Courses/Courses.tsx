import { useQuery } from "@tanstack/react-query";
import { Title } from "@/Components/Title/Title";
import { Maintemplate } from "@/Templates/Maintemplate";
import { PuffLoader } from "react-spinners";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { Badge } from "@/Components/ui/badge";
import { ClockIcon, ExternalLink } from "lucide-react";
import { Tabs } from "antd";

// types
type Course = {
  id: string;
  name: string;
  desc: string;
  link: string;
  duration: string;
  dificuldade: string;
};

type Institution = {
  name: string;
  courses: Course[];
};

type Area = {
  name: string;
  ies: Institution[];
};

export function Courses() {
  const { data, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: () =>
      fetch("https://www.jsonkeeper.com/b/UEDHD.json").then((res) =>
        res.json()
      ),
  });

  return (
    <Maintemplate>
      <Title subtitle="Selecione uma área que lhe interessa para ver os cursos disponíveis">
        Cursos Livres
      </Title>

      {isLoading && (
        <div className="flex items-center justify-center mt-4">
          <PuffLoader color="#22c55e" />
        </div>
      )}

      {data?.areas && (
        <div className="flex border p-4 m-6 rounded bg-[var(--color-surface)]">
         <Tabs
  defaultActiveKey="Tecnologia"
  // tab lateral em desktop, em cima no mobile
  tabPosition="top"
  className="w-full mt-6"
  items={data.areas.map((area: Area) => ({
    key: area.name,
    label: (
      <span className="text-lg font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
        {area.name}
      </span>
    ),
    children: (
      <div className="space-y-6">
        <hr className="border-[var(--color-border)]" />
        <p className="text-[var(--color-text-secondary)] text-sm">
          Selecione uma instituição de ensino para ver os cursos disponíveis:
        </p>

        {area.ies.map((institution: Institution) => (
          <Accordion
            key={institution.name}
            type="single"
            collapsible
            className="w-full"
          >
            <AccordionItem value={institution.name}>
              <AccordionTrigger className="text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                {institution.name}
              </AccordionTrigger>

              <AccordionContent>
                <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
                  {institution.courses.map((course: Course) => (
                    <div
                      key={course.id}
                      className="p-6 border rounded-2xl shadow-md hover:shadow-lg bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background-alt)] transition"
                    >
                      <h3 className="text-lg font-bold text-[var(--color-text)] text-center">
                        {course.name}
                      </h3>
                      <p className="text-[var(--color-text)] text-center">{course.desc || ""}</p>

                      <div className="flex justify-center mt-3">
                        <Badge className="flex items-center gap-1 rounded-full px-3 py-1 bg-[var(--color-primary-dark)]/20 text-[var(--color-primary)]">
                          <ClockIcon size={14} />
                          {course.duration}
                        </Badge>
                      </div>
                <span className="flex justify-center items-center m-auto gap-2">

                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={course.link}
                        id="linkcurso"
                        className="justify-center flex items-center gap-2 mt-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] p-2 border rounded"
                      >
                        <ExternalLink size={18} /> Acessar
                      </a>
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    ),
  }))}

          />
        </div>
      )}
    </Maintemplate>
  );
}
