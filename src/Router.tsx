import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "./layouts/HomeLayout";
import { HomeAnalyzing } from "./pages/Home/Analyzing";
import { HomeInitialize } from "./pages/Home/Initialize";
import { HomeStart } from "./pages/Home/Start";
import { ResultGrape } from "./pages/Results/Grape";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<HomeInitialize />} />

        <Route path="/Start" element={<HomeStart />} />

        <Route path="/analyzing" element={<HomeAnalyzing />} />
      </Route>
      <Route path="grape" element={<ResultGrape />} />
    </Routes>
  )
}