import { BrowserRouter, Routes as RRDRouter, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import HomeSeller from '@/pages/homeSeller/HomeSeller';

export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Home />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
