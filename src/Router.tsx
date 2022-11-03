import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "./layouts/HomeLayout";
import { HomeAnalyzing } from "./pages/Home/Analyzing";
import { HomeStart } from "./pages/Home/Start";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<HomeStart />} />

        <Route path="/analyze" element={<HomeAnalyzing />} />
      </Route>
    </Routes>
  )
}