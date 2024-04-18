import { HomePageButton } from "@/pages/home/components/HomeButton/HomeButton";
import {
  FooterContainer,
  ServiceContent,
  ServiceTitle,
  ServiceItems,
  IconFooter,
  WrapItem,
  SocialMediaContent,
  SocialMediaIcon,
  FooterButtonBox,
  BraveoBox,
} from "./Footer.styles";
import { useTheme } from "styled-components";

interface FooterProps {
  phone?: string | number;
  email?: string;
  horario?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  nr_consultor?: string;
  logo?: string;
  site?: string;
}

export default function Footer({
  email,
  facebook = "https://facebook.com",
  horario,
  instagram = "https://instagram.com",
  linkedin = "https://linkedin.com",
  logo,
  nr_consultor,
  phone,
  site,
}: FooterProps) {
  const theme = useTheme();

  console.log(theme);

  return (
    <FooterContainer>
      <ServiceContent>
        <ServiceTitle>Central de atendimento</ServiceTitle>
        <ServiceItems>
          <WrapItem>
            <IconFooter src="assets/phoneFooter.png" alt="icone fone" />
            <span>(54) 996650672</span>
          </WrapItem>
          <WrapItem>
            <IconFooter src="assets/icon-email.png" alt="icone email" />
            <span>example@email.com</span>
          </WrapItem>
          <WrapItem>
            <IconFooter src="assets/clock.png" alt="icone relogio" />
            <span>Segunda à Sexta-feira</span>
          </WrapItem>
        </ServiceItems>

        <SocialMediaContent>
          <SocialMediaIcon
            src="assets/icon-facebook.png"
            onClick={() => {
              window.open();
            }}
            alt="icone facebook"
          />
          <SocialMediaIcon
            src="assets/icon-instagram.png"
            onClick={() => {
              window.open();
            }}
            alt="icone instagram"
          />
          <SocialMediaIcon
            src="assets/icon-linkedin.png"
            onClick={() => {
              window.open(linkedin);
            }}
            alt="icone linkedin"
          />
        </SocialMediaContent>
      </ServiceContent>

      <FooterButtonBox>
        <HomePageButton
          title="Fale com um consultor"
          icon="assets/icon-whatsapp.png"
          bgColor={theme.colors.primary}
          size="lg"
          onClick={() => {
            window.open(`https://wa.me/${nr_consultor}`);
          }}
        />
        <BraveoBox>
          <img
            src={"assets/dismelo-logo.png"}
            width="12px"
            height="18px"
            alt="logo"
            style={{ marginRight: "8px" }}
          />
          <span style={{ color: theme.colors.input, whiteSpace: "nowrap" }}>
            é uma empresa grupo
          </span>
          <img
            src="assets/braveo-logo.png"
            alt="logoBraveo"
            width="25px"
            height="50px"
          />
        </BraveoBox>
      </FooterButtonBox>
    </FooterContainer>
  );
}
