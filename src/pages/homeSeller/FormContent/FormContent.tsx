import React from 'react';
import HomeSearchInput from '@/components/HomeSearchInput/HomeSearchInput';
import {
  Container,
  Content,
  DescriptionContent,
  DescriptionText,
  FormContainer,
  TextWrapper,
  TitleText,
} from './FormContent.styles';
import { HomePageButton } from '@/components/HomeButton/HomeButton';
import Footer from '@/components/Footer/Footer';
import { cnpjMask } from '@/lib/masks';

export default function FormContent() {
  const [codeValue, setCodeValue] = React.useState(0);
  const [cnpjValue, setCnpjValue] = React.useState('');

  return (
    <Container>
      <Content>
        <DescriptionContent>
          <TextWrapper>
            <TitleText>Área do Vendedor</TitleText>
            <DescriptionText>
              A área do vendedor permite visualizar listas de transmissão, seus
              clientes e produtos, além de compartilhar links personalizados de
              promoções exclusivas inclusive por WhatsApp.
            </DescriptionText>
          </TextWrapper>
          <img src="assets/vendedorLogo.png" style={{ width: '200px' }} />
        </DescriptionContent>

        <FormContainer>
          <HomeSearchInput
            placeholder="Digite seu Código de região de venda"
            pattern="[0-9]"
            value={Math.trunc(codeValue) == 0 ? '' : Math.trunc(codeValue)}
            onChange={(e) => setCodeValue(+e.target.value)}
          />
          <HomeSearchInput
            placeholder="Digite CPF ou CNPJ"
            pattern="[0-9]"
            value={cnpjMask(cnpjValue)}
            onChange={(e) => setCnpjValue(e.target.value)}
          />

          <HomePageButton
            size="lg"
            title="Entrar"
            icon="assets/icon-login.png"
            fullWidth
          />
        </FormContainer>
      </Content>
      <Footer />
    </Container>
  );
}
