import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Example from "@/pages/Example";

export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
