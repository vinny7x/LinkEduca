import { useQuery } from "@tanstack/react-query";
import { Title } from "@/Components/Title/Title";
import { Maintemplate } from "@/Templates/Maintemplate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { PuffLoader } from "react-spinners";

export function Courses() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["usuarios"], // identificador da query
    queryFn: () =>
      fetch("https://www.jsonkeeper.com/b/UEDHD.json").then((res) =>
        res.json()
      ), //refatorar depois
  });
  //    if (isLoading) return <div>Carregando...</div>
  //   if (error) return <div>Deu ruim: {error.message}</div>
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
        <Tabs
          defaultValue="Tecnologia"
          className="flex flex-col items-center w-full max-w-[600px] mx-auto mt-10"
        >
          <TabsList className="bg-[var(--color-primary-light)]">
            {data.areas?.map((area) => (
              <TabsTrigger
                className="text-[var(--color-text)] data-[state=active]:bg-green-700 data-[state=active]:text-white"
                key={area.name}
                value={area.name}
              >
                {area.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {data.areas?.map((area) => (
            <TabsContent key={area.name} value={area.name}>
              {area?.ies?.map((c) => (
                <div key={c.name}>{c.name}</div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      )}

      {/* <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs> */}
    </Maintemplate>
  );
}
