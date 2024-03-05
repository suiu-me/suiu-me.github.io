import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/features/home";
import { NotFound } from "@/features/misc";

export function AppRoutes () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

