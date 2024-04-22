
import { HomePageButton } from '../../components/HomeButton/HomeButton';
import { Header } from './Home.styles';
import Footer from '@/components/Footer/Footer';
import MiddleContent from './components/MiddleContent/MiddleContent';
import HomeSearch from './components/HomeSearch/HomeSearch';

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

      <HomeSearch />

      <MiddleContent imgMapa={imgMapa} nm_pedflex={nm_pedflex} />

      <Footer />

    </>
  );
}
