import { useCartInfo } from '@/hooks/useCartInfo';
import { useFetchAppHeader } from '@/services/header';

export function AppHeader() {
  const { headerData } = useFetchAppHeader();
  const { cartQuantity, cartTotalValue } = useCartInfo();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <h4>HEADER</h4>
      <h4>{cartQuantity}</h4>
      <h4>{cartTotalValue}</h4>
    </div>
  );
}
