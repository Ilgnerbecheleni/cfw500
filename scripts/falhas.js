const falhas = [{
  "Falha": "A0046",
  "Alarme": "Carga Alta no Motor",
  "Descricao": "Alarme de sobrecarga no motor.",
  "Causas Prováveis": [
    "Ajuste de P0156, P0157 e P0158 com valor baixo para o motor utilizado.",
    "Carga no eixo do motor alta."
  ]
},
 {
  "Falha": "A0047",
  "Alarme": "Carga Alta nos IGBTs",
  "Descricao": "Alarme de sobrecarga no módulo de potência com IGBTs.",
  "Causas Prováveis": "   Corrente alta na saída do inversor."
 },
{
  "Falha": "A0050",
  "Alarme": "Temperatura Elevada no Módulo de Potência",
  "Descricao": "Alarme de temperatura elevada medida no sensor de temperatura (NTC) do módulo de potência.",
  "Causas Prováveis": [
    "Temperatura ambiente ao redor do inversor alta (>50 °C) e corrente de saída elevada.",
    "Ventilador bloqueado ou defeituoso.",
    "Dissipador muito sujo, impedindo o fluxo de ar."
  ]
}
,
 {
  "Falha": "A0090",
  "Alarme": "Alarme Externo",
  "Descricao": "Alarme externo via DIx (opção \"Sem Alarme Externo\" em P026x).",
  "Causas Prováveis": [
    "Fiação nas entradas DI1 a DI8 aberta ou com mau contato."
  ]
}
,
 {
  "Falha": "A0128",
  "Alarme": "Timeout na Recepção de Telegramas",
  "Descricao": "Alarme que indica falha na comunicação serial. Indica que o equipamento parou de receber telegramas seriais válidos por um período maior do que o programado no P0314.",
  "Causas Prováveis": [
    "Verificar instalação da rede, cabo rompido ou falha/mal contato nas conexões com a rede, aterramento.",
    "Garantir que o mestre envie telegramas para o equipamento sempre em um tempo menor que o programado no P0314.",
    "Desabilitar esta função no P0314."
  ]
}
,
 {
  "Falha": "A0133",
  "Alarme": "Sem Alimentação na Interface CAN",
  "Descricao": "Indica que a interface CAN não possui alimentação entre os pinos 1 e 5 do conector.",
  "Causas Prováveis": [
    "Medir se existe tensão dentro da faixa permitida entre os pinos 1 e 5 do conector da interface CAN.",
    "Verificar se os cabos de alimentação não estão trocados ou invertidos.",
    "Verificar problemas de contato no cabo ou no conector da interface CAN."
  ]
}
,
 {
  "Falha": "A0134",
  "Alarme": "Bus Off",
  "Descricao": "Detectado erro de bus off na interface CAN.",
  "Causas Prováveis": [
    "Verificar curto-circuito nos cabos de transmissão do circuito CAN.",
    "Verificar se os cabos não estão trocados ou invertidos.",
    "Verificar se todos os dispositivos da rede utilizam a mesma taxa de comunicação.",
    "Verificar se resistores de terminação com valores corretos foram colocados somente nos extremos do barramento principal.",
    "Verificar se a instalação da rede CAN foi feita de maneira adequada."
  ]
}
,
 {
  "Falha": "A0135",
  "Alarme": "Node Guarding/Heartbeat",
  "Descricao": "Controle de erros da comunicação CANopen detectou erro de comunicação utilizando o mecanismo de guarding.",
  "Causas Prováveis": [
    "Verificar os tempos programados no mestre e no escravo para troca de mensagens. Para evitar problemas devido a atrasos na transmissão e diferenças na contagem dos tempos, recomenda-se que os valores programados para detecção de erros pelo escravo sejam múltiplos dos tempos programados para a troca de mensagens no mestre.",
    "Verificar se o mestre está enviando os telegramas de guarding no tempo programado.",
    "Verificar problemas na comunicação que possam ocasionar perda de telegramas ou atrasos na transmissão."
  ]
}
,
 {
  "Falha": "A0136",
  "Alarme": "Mestre em Idle",
  "Descricao": "Alarme que indica que o mestre da rede DeviceNet está em modo Idle.",
  "Causas Prováveis": [
    "Ajuste a chave que comanda o modo de operação do mestre para execução (Run) ou então o bit correspondente na palavra de configuração do software do mestre. Em caso de dúvidas, consulte a documentação do mestre em uso."
  ]
}
,
 {
  "Falha": "A0137",
  "Alarme": "Timeout na Conexão DeviceNet",
  "Descricao": "Alarme que indica que uma ou mais conexões I/O DeviceNet expiraram.",
  "Causas Prováveis": [
    "Verificar o estado do mestre da rede.",
    "Verificar instalação da rede, cabo rompido ou falha/mal contato nas conexões com a rede."
  ]
}
,
 {
  "Falha": "A0138",
  "Alarme": "Interface Profibus DP em Modo Clear",
  "Descricao": "Indica que o inversor recebeu o comando do mestre da rede Profibus DP para entrar em modo clear.",
  "Causas Prováveis": "   Verifique o estado do mestre da rede, certificando que este se encontra em modo de execução (RUN)."
 },
 {
  "Falha": "A0139",
  "Alarme": "Interface Profibus DP Offline",
  "Descricao": "Indica interrupção na comunicação entre o mestre da rede Profibus DP e o inversor. A interface de comunicação Profibus DP foi para o estado offline.",
  "Causas Prováveis": [
    "Verificar se o mestre da rede está configurado corretamente e operando normalmente.",
    "Verificar curto-circuito ou mau contato nos cabos de comunicação.",
    "Verificar se os cabos não estão trocados ou invertidos.",
    "Verificar se resistores de terminação com valores corretos foram colocados somente nos extremos do barramento principal.",
    "Verificar a instalação da rede de maneira geral – passagem dos cabos, aterramento."
  ]
}
,
 {
  "Falha": "A0140",
  "Alarme": "Erro de Acesso ao Módulo Profibus DP",
  "Descricao": "Indica erro no acesso aos dados do módulo de comunicação Profibus DP.",
  "Causas Prováveis": [
    "Verificar se o módulo Profibus DP está corretamente encaixado.",
    "Erros de hardware decorrentes, por exemplo, do manuseio ou instalação incorreta do acessório podem causar este erro. Se possível realizar testes substituindo o acessório de comunicação."
  ]
}
,
{
  "Falha": "A0163",
  "Alarme": "Falha Sinal AIx 4..20 mA",
  "Descricao": "Sinal da entrada analógica AIx em 4 a 20 mA ou 20 a 4 mA está abaixo de 2 mA.",
  "Causas Prováveis": [
    "Sinal de corrente na entrada analógica AIx interrompido ou nulo.",
    "Erro na parametrização da entrada analógica Aix."
  ]
}
 ,
 {
  "Falha": "A0700",
  "Alarme": "Falha na Comunicação com HMI Remota",
  "Descricao": "Sem comunicação com HMI remota, porém não há comando ou referência de velocidade para esta fonte.",
  "Causas Prováveis": [
    "Verifique se a interface de comunicação com HMI está configurada corretamente no parâmetro P0312.",
    "Cabo da HMI desconectado."
  ]
}
,
 {
  "Falha": "A0702",
  "Alarme": "Inversor Desabilitado",
  "Descricao": "Ocorre quando um bloco de movimento da SoftPLC (Bloco REF) é ativo e o comando de Habilita Geral do drive não está ativo.",
  "Causas Prováveis": "   Verificar se o comando de Habilita Geral do drive está ativo."
 },
 {
  "Falha": "A0704",
  "Alarme": "Dois Movim. Habilitados",
  "Descricao": "Ocorre quando 2 ou mais blocos de movimento da SoftPLC (Bloco REF) estão habilitados ao mesmo tempo.",
  "Causas Prováveis": "   Verificar lógica do programa do usuário."
 },
 {
  "Falha": "A0706",
  "Alarme": "Refer. não Progr. SPLC",
  "Descricao": "Ocorre quando um bloco de movimento da SoftPLC é habilitado e a referência de velocidade não está programada para a SoftPLC.",
  "Causas Prováveis": "   Verificar a programação das referências no modo Local e\/ou Remoto (P0221 e P0222)."
 },
 {
  "Falha": "A0710",
  "Alarme": "Progr. SPLC maior que 8 KB",
  "Descricao": "Ocorre quando tenta-se fazer o download de Prog. SoftPLC muito extenso (maior que 8 KB)  para o inversor.",
  "Causas Prováveis": "   Extensão do Prog. SoftPLC excedeu 8 KBytes."
 },
 {
    "Falha": "F0021",
    "Alarme": "Subtensão no Barramento CC",
    "Descricao": "Falha de subtensão no circuito intermediário.",
    "Causas Prováveis": [
      "Tensão de alimentação errada, confira se os dados na etiqueta do inversor estão de acordo com a rede de alimentação e o parâmetro P0296.",
      "Tensão de alimentação muito baixa, ocasionando tensão no barramento CC menor que o valor mínimo (em P0004): Ud < 200 Vcc em 200-240 Vac (P0296 = 0). Ud < 360 Vcc em 380-480 Vac (P0296 = 1). Ud < 500 Vcc em 500-600 Vac (P0296 = 2).",
      "Falta de fase na entrada.",
      "Falha no circuito de pré-carga."
    ]
  },
  {
    "Falha": "F0022",
    "Alarme": "Sobretensão no Barramento CC",
    "Descricao": "Falha de sobretensão no circuito intermediário.",
    "Causas Prováveis": [
      "Tensão de alimentação errada, confira se os dados na etiqueta do inversor estão de acordo com a rede de alimentação e o parâmetro P0296.",
      "Tensão de alimentação muito alta, resultando em uma tensão no barramento CC maior que o valor máximo (em P0004): Ud > 410 Vcc em 200-240 Vac (P0296 = 0). Ud > 810 Vcc em 380-480 Vac (P0296 = 1). Ud > 1000 Vcc em 500-600 Vac (P0296 = 2).",
      "Inércia de carga muito alta ou rampa de desaceleração muito rápida.",
      "Ajuste de P0151 ou P0153 muito alto."
    ]
  },
  {
    "Falha": "F0031",
    "Alarme": "Falha de Comunicação com Módulo Plug-in",
    "Descricao": "Controle principal não consegue estabelecer o link de comunicação com o módulo Plug-in.",
    "Causas Prováveis": [
      "Módulo Plug-in danificado.",
      "Módulo Plug-in mal conectado.",
      "Problema de identificação do módulo Plug-in, consulte P0027."
    ]
  },
  {
    "Falha": "F0033",
    "Alarme": "Falha no Autoajuste do VVW ",
    "Descricao": "Falha no ajuste da resistência do estator P0409.",
    "Causas Prováveis": [
      "Valor da resistência estatórica em P0409 não está de acordo com a potência do inversor.",
      "Erro nas conexões do motor, desligue a alimentação e verifique a caixa de ligações do motor e as conexões com os bornes do motor.",
      "Potência do motor muito pequena ou muito grande em relação ao inversor."
    ]
  },
 {
  "Falha": "F0048",
  "Alarme": "Sobrecarga nos IGBTs",
  "Descricao": "Falha de sobrecarga no módulo de potência com IGBTs (3 s em 1.5xInom).",
  "Causas Prováveis": "   Corrente alta na saída do inversor (>2xInom)."
 },
   {
    "Falha": "F0051",
    "Alarme": "Sobretemperatura nos IGBTs",
    "Descricao": "Falha de sobretemperatura medida no sensor de temperatura (NTC) do módulo de potência.",
    "Causas Prováveis": [
      "Temperatura ambiente ao redor do inversor alta (>50 °C) e corrente de saída elevada.",
      "Ventilador bloqueado ou defeituoso.",
      "Dissipador muito sujo, impedindo o fluxo de ar."
    ]
  },
  {
    "Falha": "F0070",
    "Alarme": "Sobrecorrente\/Curto- circuito",
    "Descricao": "Sobrecorrente ou curto-circuito na saída, barramento CC ou resistor de frenagem.",
    "Causas Prováveis": [
      "Curto-circuito entre duas fases do motor.",
      "Curto-circuito dos cabos de ligação do resistor de frenagem reostática.",
      "Módulo de IGBTs em curto ou danificado.",
      "Partida com rampa de aceleração muito curta.",
      "Partida com motor girando sem a função Flying Start."
    ]
  },
  {
    "Falha": "F0072",
    "Alarme": "Sobrecarga no Motor",
    "Descricao": "Falha de Sobrecarga no motor (60 s em 1,5xInom).",
    "Causas Prováveis": [
      "Ajuste de P0156, P0157 e P0158 muito baixo em relação à corrente de operação do motor.",
      "Carga no eixo do motor muito alta."
    ]
  },
  {
    "Falha": "F0074",
    "Alarme": "Falta à Terra",
    "Descricao": "Falha de sobrecorrente para o terra.\nObs.:\nPode ser desabilitada ajustando P0343 = 0.",
    "Causas Prováveis": [
      "Curto para o terra em uma ou mais fases de saída.",
      "Capacitância dos cabos do motor elevada ocasionando picos de corrente na saída."
    ]
  },
  {
    "Falha": "F0076",
    "Alarme": "Erro de Conexão no Motor",
    "Descricao": "Esta falha indica que o motor está com falta de fase, desconectado ou com correntes de fase desequilibradas.",
    "Causas Prováveis": [
      "Erro de ligação ou conexões do motor.",
      "Perda de conexão do motor com o drive ou fio partido."
    ]
  },
  {
    "Falha": "F0078",
    "Alarme": "Sobretemper. Motor",
    "Descricao": "Falha de sobretemperatura medida no sensor de temperatura (Triplo PTC) do motor via entrada analógica AIx ou entrada digital DIx.",
    "Causas Prováveis": [
      "Carga no eixo do motor muito alta.",
      "Ciclo de carga muito elevado (grande número de partidas e paradas por minuto).",
      "Temperatura ambiente alta ao redor do motor.",
      "Mau contato ou curto-circuito (3k9 < RPTC < 0k1).",
      "Termistor do motor não instalado.",
      "Eixo do motor travado."
    ]
  },
  {
    "Falha": "F0080",
    "Alarme": "Falha na CPU (Watchdog)",
    "Descricao": "Falha relativa ao algoritmo de supervisão da CPU principal do inversor.",
    "Causas Prováveis": [
      "Ruído elétrico.",
      "Falha no firmware do inversor."
    ]
  },
  {
    "Falha": "F0084",
    "Alarme": "Falha de Autodiagnose",
    "Descricao": "Falha relativa ao algoritmo de identificação automática do hardware do inversor e módulo Plug-in.",
    "Causas Prováveis": [
      "Mau contato nas conexões entre o controle principal e o módulo de potência.",
      "Hardware não compatível com a versão de firmware.",
      "Defeito nos circuitos internos do inversor."
    ]
  },
{
    "Falha": "F0091",
    "Alarme": "Falha Externa",
    "Descricao": "Falha externa via DIx (opção \"Sem Falha Externa\" em P026x).",
    "Causas Prováveis": [
      "Fiação nas entradas DI1 a DI8 aberta ou com mau contato."
    ]
  },
  {
    "Falha": "F0151",
    "Alarme": "Versão de Sw Princ. Incomp.",
    "Descricao": "Versão do Firmware principal difere da versão do firmware no Módulo Plug-in.",
    "Causas Prováveis": [
      "Memória virgem no módulo Plug-in (1ª energização).",
      "Falha no backup de dados durante a desenergização (power-down)."
    ]
  },
  {
    "Falha": "F0182",
    "Alarme": "Falha Reali. de Pulsos",
    "Descricao": "Falha no circuito de realimentação de pulsos da tensão de saída.\nObs.: pode ser desligada em P0397.",
    "Causas Prováveis": [
      "Falha na identificação de hardware, compare P0295 e P0296 com a etiqueta de identificação do inversor.",
      "Falha no circuito interno de realimentação de pulso do inversor."
    ]
  },
  {
    "Falha": "F0228",
    "Alarme": "Timeout na Recepção de Telegramas",
    "Descricao": "Indica falha na comunicação serial. Indica que o equipamento parou de receber telegramas seriais válidos por um período maior do que o programado no P0314.",
    "Causas Prováveis": [
      "Verificar instalação da rede, cabo rompido ou falha/mal contato nas conexões com a rede, aterramento.",
      "Garantir que o mestre envie telegramas para o equipamento sempre em um tempo menor que o programado no P0314.",
      "Desabilitar esta função no P0314."
    ]
  },
  {
    "Falha": "F0233",
    "Alarme": "Sem Alimentação na Interface CAN",
    "Descricao": "Indica que a interface CAN não possui alimentação entre os pinos 1 e 5 do conector.",
    "Causas Prováveis": [
      "Medir se existe tensão dentro da faixa permitida entre os pinos 1 e 5 do conector da interface CAN.",
      "Verificar se os cabos de alimentação não estão trocados ou invertidos.",
      "Verificar problemas de contato no cabo ou no conector da interface CAN."
    ]
  },
  {
    "Falha": "F0234",
    "Alarme": "Bus Off",
    "Descricao": "Detectado erro de bus off na interface CAN.",
    "Causas Prováveis": [
      "Verificar curto-circuito nos cabos de transmissão do circuito CAN.",
      "Verificar se os cabos não estão trocados ou invertidos.",
      "Verificar se todos os dispositivos da rede utilizam a mesma taxa de comunicação.",
      "Verificar se os resistores de terminação estão com valores corretos, e foram colocados somente nos extremos do barramento principal.",
      "Verificar se a instalação da rede CAN foi feita de maneira adequada."
    ]
  },
  {
    "Falha": "F0235",
    "Alarme": "Node Guarding\/ Heartbeat",
    "Descricao": "Controle de erros da comunicação CANopen detectou erro de comunicação utilizando o mecanismo de guarding.",
    "Causas Prováveis": [
      "Verificar os tempos programados no mestre e no escravo para troca de mensagens. Para evitar problemas devido a atrasos na transmissão e diferenças na contagem dos tempos, recomenda-se que os valores programados para detecção de erros pelo escravo sejam múltiplos dos tempos programados para a troca de mensagens no mestre.",
      "Verificar se o mestre está enviando os telegramas de guarding no tempo programado.",
      "Verificar problemas na comunicação que possam ocasionar perda de telegramas ou atrasos na transmissão."
    ]
  },
 {
    "Falha": "F0236",
    "Alarme": "Mestre em Idle",
    "Descricao": "Esta falha indica que o mestre da rede DeviceNet está em modo Idle.",
    "Causas Prováveis": [
      "Ajuste a chave que comanda o modo de operação do mestre para execução (run) ou então o bit correspondente na palavra de configuração do software do mestre. Em caso de dúvidas, consulte a documentação do mestre em uso."
    ]
  },
  {
    "Falha": "F0237",
    "Alarme": "Timeout na Conexão DeviceNet",
    "Descricao": "Esta falha indica que uma ou mais conexões I/O DeviceNet expiraram.",
    "Causas Prováveis": [
      "Verificar o estado do mestre da rede.",
      "Verificar instalação da rede, cabo rompido ou falha/mal contato nas conexões com a rede."
    ]
  },
  {
    "Falha": "F0238",
    "Alarme": "Interface Profibus DP em Modo Clear",
    "Descricao": "Indica que o inversor recebeu o comando do mestre da rede Profibus DP para entrar em modo clear.",
    "Causas Prováveis": [
      "Verifique o estado do mestre da rede, certificando que este se encontra em modo de execução (RUN)."
    ]
  },
  {
    "Falha": "F0239",
    "Alarme": "Interface Profibus DP Offline",
    "Descricao": "Indica interrupção na comunicação entre o mestre da rede Profibus DP e o inversor. A interface de comunicação Profibus DP foi para o estado offline.",
    "Causas Prováveis": [
      "Verificar se o mestre da rede está configurado corretamente e operando normalmente.",
      "Verificar curto-circuito ou mau contato nos cabos de comunicação.",
      "Verificar se os cabos não estão trocados ou invertidos.",
      "Verificar se resistores de terminação com valores corretos foram colocados somente nos extremos do barramento principal.",
      "Verificar a instalação da rede de maneira geral – passagem dos cabos, aterramento."
    ]
  },
  {
    "Falha": "F0240",
    "Alarme": "Falha de Acesso ao Módulo Profibus DP",
    "Descricao": "Indica falha no acesso aos dados do módulo de comunicação Profibus DP.",
    "Causas Prováveis": [
      "Verificar se o módulo Profibus DP está corretamente encaixado.",
      "Erros de hardware decorrentes, por exemplo, do manuseio ou instalação incorreta do acessório podem causar esta falha. Se possível realizar testes substituindo o acessório de comunicação."
    ]
  },
  {
    "Falha": "F0700",
    "Alarme": "Falha na Comunicação com HMI Remota",
    "Descricao": "Sem comunicação com HMI remota, porém há comando ou referência de velocidade para esta fonte.",
    "Causas Prováveis": [
      "Verifique se a interface de comunicação com HMI está configurada corretamente no parâmetro P0312.",
      "Cabo da HMI desconectado."
    ]
  }
]