import { BrowserRouter, Routes, Route } from "react-router";

import "./styles/global.css";
import "./styles/theme.css";
import { Home } from "./Pages/Home/Home";
import { Courses } from "./Pages/Courses/Courses";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Jobs } from "./Pages/Jobs";
import { About } from "./Pages/About";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/vagas" element={<Jobs />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
