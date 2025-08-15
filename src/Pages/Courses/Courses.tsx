import { useQuery } from "@tanstack/react-query";
import { Title } from "@/Components/Title/Title";
import { Maintemplate } from "@/Templates/Maintemplate";
import { PuffLoader } from "react-spinners";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/ui/accordion";
import { Badge } from "@/Components/ui/badge";
import { ExternalLink } from "lucide-react";

import { Tabs } from "antd";

//types
type area = {
  name: string;
  ies: ies[];
};
type courses = {
  id: string;
  name: string;
  link: URL;
  duration: string;
  dificuldade: string;
};
type ies = {
  name: string;
  courses: courses[];
};

export function Courses() {
  const { data, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: () =>
      fetch("https://www.jsonkeeper.com/b/UEDHD.json").then((res) => res.json()),
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

      {data && (
        <div className="items-center flex justify border p-2 m-2 rounded bg-[var(--color-surface)]">
        <Tabs
          defaultActiveKey="Tecnologia"
          tabPosition="left"
          className="flex justify- flex-wrap items-center w-full  mx-auto mt-10 text-left"
          items={data.areas?.map((area: area) => ({
            key: area.name,
            // usando suas classes de cor e fonte
            label: (
              <span className="text-xl text-left text-[var(--color-text)]">
                {area.name}
              </span>
            ),
            children: (
              <div>
                <hr/>
                <p className="text-white">Selecione uma instituição de ensino para ver os cursos disponíveis</p>
                {area.ies?.map((ies: ies) => (
                  <Accordion className="w-auto" key={ies.name} type="single" collapsible>
                    <AccordionItem value={ies.name}>
                      
                      <AccordionTrigger className="text-xl text-[var(--color-text-secondary)]">
                        {ies.name}
                      </AccordionTrigger>
                      <div className="flex gap-2 flex-wrap items-center justify-center">
                        {ies.courses?.map((course: courses) => (
                          <AccordionContent key={course.id}>
                            <div className="p-4 border rounded px-2">
                              <h3 className="text-center text-[var(--color-text)]">{course.name}</h3>
                              <span className="items-center flex justify-center">
                                <Badge variant="default" className="text-center bg-[var(--color-surface)]">
                                Duração de {course.duration}
                              </Badge>
                              </span>
                              
                              <a
                                target="_blank"
                                href={course.link.toString()}
                                className="flex items-center gap-2 mt-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] p-2 rounded"
                              >
                                <ExternalLink /> Acessar
                              </a>
                            </div>
                          </AccordionContent>
                        ))}
                      </div>
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
