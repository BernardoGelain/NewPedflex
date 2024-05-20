import { useAppSelector } from "@/hooks/useReduxHooks";
import { useFetchAppHeader } from "@/services/header";

export function AppHeader() {
  const { headerData } = useFetchAppHeader();

  const { produtosCarrinho } = useAppSelector((state) => state.cart);

  const productsOnCard = produtosCarrinho.filter(
    (it) => it.cartInfo.quantidade > 0
  );

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h4>HEADER</h4>
      <h2>{productsOnCard.length}</h2>
    </div>
  );
}
