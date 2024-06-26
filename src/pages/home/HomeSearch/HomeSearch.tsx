import { useTheme } from "styled-components";
import {
  DescriptionContent,
  HomeContainer,
  HomeContent,
  LogoContent,
  LogoImg,
} from "./HomeSearch.styles";
import { HomePageButton } from "@/components/HomeButton/HomeButton";
import React from "react";
import { cpfMask, cnpjMask } from "@/utils/masks";
import HomeSearchInput from "@/components/HomeSearchInput/HomeSearchInput";

export default function HomeSearch() {
  const [cnpj, setCnpj] = React.useState("");

  const theme = useTheme();

  const maskedInput = (value: string) => {
    if (value.length <= 14) {
      return cpfMask(value);
    }
    return cnpjMask(value);
  };

  return (
    <HomeContainer>
      <LogoContent>
        <LogoImg src="assets/click-dismelo-logo.png" />
      </LogoContent>

      <HomeContent>
        <DescriptionContent>
          Uma seleção de produtos com a cara da sua loja a um{" "}
          <span style={{ color: theme.colors.primary, fontWeight: 600 }}>
            click
          </span>{" "}
          de distância
        </DescriptionContent>

        <div style={{ width: "80%" }}>
          <HomeSearchInput
            placeholder="Informe seu CPF/CNPJ para ver as ofertas"
            value={maskedInput(cnpj)}
            onChange={(e) => setCnpj(e.target.value)}
          />
        </div>

        <HomePageButton
          size="lg"
          title="Buscar"
          icon="assets/lupa.png"
          style={{ height: "60px", width: "200px" }}
        />
      </HomeContent>
    </HomeContainer>
  );
}
