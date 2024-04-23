
import Footer from '@/components/Footer/Footer';
import MiddleContent from './components/MiddleContent/MiddleContent';
import HomeSearch from './components/HomeSearch/HomeSearch';

interface HomeProps {
  imgMapa?: string;
  nm_pedflex?: string;
}

export default function Home({ imgMapa, nm_pedflex }: HomeProps) {
  return (
    <>
      <HomeSearch />

      <MiddleContent imgMapa={imgMapa} nm_pedflex={nm_pedflex} />

      <Footer />

    </>
  );
}
