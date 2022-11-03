import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "./layouts/HomeLayout";
import { HomeStart } from "./pages/Home/Start";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<HomeStart />} />
      </Route>
    </Routes>
  )
}