import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Example from "@/pages/Example";
import { Teste } from "@/pages/Teste";

export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/teste" element={<Teste />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
