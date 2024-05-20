export interface HeaderDataType {
  dadosCliente: DadosClienteType;
  condicoesDisponiveis: CondicoesDisponiveisType[];
  listasDisponiveis: ListasDisponiveisType[];
  vendedoresCliente: any[];
  cdListaMostrar: number;
  cdListaAcesso: number;
  cdCombo: number;
}

export interface DadosClienteType {
  cd_pessoa: number;
  nm_pessoa: string;
  nm_fantasia: string;
  nr_cnpj: string;
  cd_pessoa_matriz: number;
  cd_pessoa_filial: number;
  cd_tipo_pagamento: number;
  cd_condicao: number;
  nr_dias_minimo: number;
  nr_dias_maximo: number;
  vl_limite_credito: string;
  vl_pedido_minimo: string;
}

export interface CondicoesDisponiveisType {
  cd_condicao: number;
  nm_condicao: string;
  nr_dias: number;
  pr_acrescimo: string;
}

export interface ListasDisponiveisType {
  cd_lista_transmissao: number;
  nm_lista_transmissao: string;
  ds_lista_transmissao: string;
  dt_inicio: string;
  dt_termino: string;
  dt_lista_transmissao: string;
  ds_banner: string;
  ds_banner_reduzido: string;
}
