// export type ProductType = {
//   cd_produto: string;
//   cd_produto_limpo: number;
//   nm_produto: string;
//   cd_marca: any;
//   cd_fabricante: any;
//   cd_grupo_produto: number;
//   cd_lista_transmissao: number;
//   nm_unidade_medida: string;
//   cd_unidade_medida: number;
//   /** Regra de quantidade mínima, o primeiro valor adicionado no carrinho vai ser esse valor padrão */
//   qt_padrao: any;
//   /** Regra de quantidade de mínima do produto, ou adiciona essa quantidade ou não adiciona nada */
//   id_bloqueia_quantidade_padrao: number;
//   id_lista_combo: number;
//   vl_maximo_lista: number;
//   vl_minimo_lista: number;
//   qt_lista_requer: number;
//   /** Isso determina se o produto está participando de alguma promo (card mostrado acima do produto) */
//   cd_negociacao: any;
//   qt_min: number;
//   /** Regra de múltiplo de quantidade, vai ser adicionado x * qt_multiplo */
//   qt_multiplo: number;
//   qt_max: number;
//   id_contabiliza: any;
//   id_obrigatorio: number;
//   desconto_aplicado: number;
//   vl_produto_bruto: string[];
//   vl_produto_liquido: string[];
//   ds_imagem: string;
//   /** Quantidade de estoque */
//   qt_logico: number;
//   grupos_ativacao: any;
//   ds_codigo: string;
//   ds_codigo_com_lista: string;
//   ds_unidades_disponiveis: UnidadesDisponiveisType[];
//   cd_unidade_negociacao: any;
//   error: number;
// };

// export type UnidadesDisponiveisType = {
//   cd_unidade_medida: number;
//   cd_produto: number;
//   ds_codigo: string;
//   qt_produto: number;
//   qt_produto_fornecedor: number;
//   qt_minima: number;
//   id_tipo: number;
//   id_principal: number;
//   id_exporta_fornecedor: number;
//   ds_unidade: string;
//   id_utilizacao: number;
//   id_montagem: number;
//   vl_peso: number;
//   vl_largura: number;
//   vl_altura: number;
//   vl_comprimento: number;
//   created_at: string;
//   updated_at: any;
//   cd_referencia_externa: any;
//   id_excluir: number;
//   nm_unidade_medida: string;
//   ds_sigla: string;
//   vl_produto_unidade: number[];
//   vl_produto_unidade_liquido: string[];
//   vl_produto_unidade_bruto: string[];
// };

export type ProductType = {
  cd_lista_transmissao: number;
  nr_ordem: string;
  cd_grupo: number;
  nm_grupo: string;
  cd_grupo_filho: number;
  nm_grupo_filho: string;
  cd_produto: number;
  nm_produto: string;
  ds_mascara: number;
  qt_logico: number;
  ds_codigo_fornecedor: string;
  unidades_disponiveis: UnidadesDisponiveisType[];
  vl_total: number;
  id_obrigatorio: number;
  ds_codigo: string;
  qt_total_produto: number;
  id_page: number;
  qt_pagina: number;
  cd_unidade_padrao: number;
  ds_imagem_produto: string;
  cd_marca: number;

  cartInfo: CartProductInfo;
};

export type UnidadesDisponiveisType = {
  cd_unidade: number;
  qt_unidade_produto: number;
  ds_unidade: string;
  vl_preco_base: number;
  vl_preco_unidade: number;
  cd_lista_preco: number;
};

export type CartProductInfo = {
  quantidade: number;
  valorTotal: number;
  unidadeSelecionada: UnidadesDisponiveisType;
};
