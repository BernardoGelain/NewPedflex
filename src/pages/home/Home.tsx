import { HomePageButton } from "./components/HomeButton/HomeButton";
import { Header } from "./Home.styles";
import Footer from "@/components/Footer/Footer";
import MiddleContent from "./components/MiddleContent/MiddleContent";

interface HomeProps {
  imgMapa: string;
  nm_pedflex?: string;
}

export default function Home({ imgMapa, nm_pedflex }: HomeProps) {
  return (
    <>
      <Header>
        <HomePageButton
          title="Acesso Vendedor"
          onClick={() => {}}
          icon="assets/vendedorTerno.png"
          //linkTo="adasd"
        />
      </Header>
      <MiddleContent imgMapa={imgMapa} nm_pedflex={nm_pedflex} />
      <Footer />
    </>
  );
}
