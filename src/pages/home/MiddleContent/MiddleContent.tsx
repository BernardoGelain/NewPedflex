import {
  ContainerMap,
  ContainerTitle,
  ContentItens,
  ContentText,
  GreenText,
  HowItWorksContainer,
  HowItWorksContent,
  ItemBox,
  ItemText,
  ItemTitle,
  MapImage,
  MapText,
  MapTextDefault,
  StyledText,
} from './MiddleContent.styles';

interface MiddleContentProps {
  imgMapa?: string;
  nm_pedflex?: string;
}

export default function MiddleContent({
  imgMapa,
  nm_pedflex,
}: MiddleContentProps) {
  return (
    <>
      <HowItWorksContainer>
        <HowItWorksContent>
          <ContainerTitle>
            Como funciona o{' '}
            <GreenText>{nm_pedflex ? nm_pedflex : 'Pedflex'}</GreenText> ?
          </ContainerTitle>
        </HowItWorksContent>
        <ContentItens>
          <ItemBox>
            <img
              src="assets/caixa-oniz.png"
              style={{ width: '150px' }}
              alt="Ícone vendedor"
            />

            <ItemTitle>
              Como funciona o {nm_pedflex ? nm_pedflex : 'Pedflex'}?
            </ItemTitle>
            <ItemText>
              Nossos times de vendas enviam para o seu whatsApp um mix especial
              de produtos pensados especialmente para sua loja, de acordo com o
              seu giro e necessidade!
            </ItemText>
          </ItemBox>

          <ItemBox>
            <img
              src="assets/icon-rocket.png"
              style={{ width: '150px' }}
              alt="Ícone foguete"
            />

            <ItemTitle>É rápido!</ItemTitle>
            <ItemText>
              Basta clicar e navegar na lista sugerida de itens, selecionar os
              produtos que deseja, incluir as quantidades e enviar o pedido!
            </ItemText>
          </ItemBox>

          <ItemBox>
            <img
              src="assets/icon-login.png"
              style={{ width: '150px' }}
              alt="Ícone de login"
            />

            <ItemTitle>Fácil e simples.</ItemTitle>
            <ItemText>
              Você não precisa fazer nenhum tipo de login! A lista de produtos
              que você recebe já está criada para o seu CNPJ!
            </ItemText>
          </ItemBox>
        </ContentItens>
      </HowItWorksContainer>

      <ContainerMap>
        <ContentText>
          <MapText>
            <MapTextDefault>
              Onde <StyledText>distribuímos</StyledText>?
            </MapTextDefault>
          </MapText>
        </ContentText>
        <MapImage src={imgMapa} loading="lazy" alt="icon mapa" />
      </ContainerMap>
    </>
  );
}
