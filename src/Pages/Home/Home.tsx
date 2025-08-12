import { News } from "@/Components/features/News/News";
import { HomeCards } from "../../Components/features/HomeCards/HomeCards";
import { Title } from "../../Components/Title/Title";
import { Maintemplate } from "../../Templates/Maintemplate";

export function Home() {
  
  return (
    <Maintemplate>
      <Title subtitle="Nossa missão é democratizar o acesso a educação">
        Link Educa
      </Title>
            <HomeCards />

     <News/>
    </Maintemplate>
  );
}
