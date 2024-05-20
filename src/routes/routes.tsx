import { BrowserRouter, Routes as RRDRouter, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Example from '@/pages/Example';
import { Teste } from '@/pages/Teste';
import { ProductsList } from '@/pages/productsList/productsList';
import { Cart } from '@/pages/cart/cart';

export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Home />} />
        <Route path="/listas" element={<ProductsList />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/example" element={<Example />} />
        <Route path="/teste" element={<Teste />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
