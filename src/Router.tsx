import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "./layouts/HomeLayout";
import { HomeAnalyzing } from "./pages/Home/Analyzing";
import { HomeDone } from "./pages/Home/Done";
import { HomeInitialize } from "./pages/Home/Initialize";
import { Results } from "./pages/Results";
import { ResultBanana } from "./pages/Results/Banana";
import { ResultGrape } from "./pages/Results/Grape";
import { ResultPlum } from "./pages/Results/Plum";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<HomeInitialize />} />

        <Route path="/analyzing" element={<HomeAnalyzing />} />

      </Route>

      <Route path="/done" element={<HomeDone />} />

      <Route path="/results" element={<Results />} />

      <Route path="/results/grape" element={<ResultGrape />} />
      <Route path="/results/banana" element={<ResultBanana />} />
      <Route path="/results/plum" element={<ResultPlum />} />

    </Routes>
  )
}