import { useTheme } from 'styled-components';
import {
  DescriptionContent,
  HomeContainer,
  HomeContent,
  LogoContent,
  LogoImg,
  SearchInput,
} from './HomeSearch.styles';
import { HomePageButton } from '../HomeButton/HomeButton';

export default function HomeSearch() {
  const theme = useTheme();

  return (
    <HomeContainer>
      <LogoContent>
        <LogoImg src="assets/click-dismelo-logo.png" />
      </LogoContent>

      <HomeContent>
        <DescriptionContent>
          Uma seleção de produtos com a cara da sua loja a um{' '}
          <span style={{ color: theme.colors.primary, fontWeight: 600 }}>
            click
          </span>{' '}
          de distância
        </DescriptionContent>

        <SearchInput />

        <HomePageButton
          size="lg"
          title="Buscar"
          icon="assets/lupa.png"
          style={{ height: '60px', width: '200px' }}
        />
      </HomeContent>
    </HomeContainer>
  );
}
