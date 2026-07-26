import { SituationCardData, ServiceDetail, FaqItemData } from '../types';
import { PRESET_MESSAGES } from '../config/whatsapp';

export const HERO_DATA = {
  mainHeadline: "Precisa de orientação sobre pensão alimentícia, guarda, alimentos ou inventário?",
  subheadline: "Conte com orientação jurídica especializada para entender seus direitos, proteger sua família e encontrar o caminho mais adequado e seguro para o seu caso.",
  primaryCtaText: "Falar com um advogado pelo WhatsApp",
  secondaryCtaText: "Solicitar orientação em 1 minuto",
  badges: [
    { text: "Atendimento Rápido via WhatsApp", icon: "Zap" },
    { text: "Orientação Clara e Sigilosa", icon: "ShieldCheck" },
    { text: "Análise Individualizada do Caso", icon: "UserCheck" },
  ]
};

export const SEARCH_KEYWORDS_CHIPS = [
  "Advogado de Pensão Alimentícia",
  "Execução de Pensão Atrasada",
  "Revisão e Alteração do Valor",
  "Guarda dos Filhos e Convivência",
  "Regulamentação de Visitas",
  "Inventário Judicial e Partilha",
  "Ação de Alimentos",
];

export const SITUATION_CARDS: SituationCardData[] = [
  {
    id: "sit-1",
    title: "A pensão alimentícia está atrasada?",
    description: "Precisa cobrar valores pendentes para garantir os direitos do seu filho ou entender quais as consequências jurídicas do descumprimento da obrigação alimentar.",
    iconName: "ClockAlert",
    serviceCategory: "pensao",
    whatsAppText: "Olá, a pensão alimentícia do meu filho está atrasada e preciso de orientação jurídica.",
    keywords: ["cobrar pensão atrasada", "pensão alimentícia atrasada", "execução de alimentos"]
  },
  {
    id: "sit-2",
    title: "Precisa solicitar ou revisar o valor da pensão?",
    description: "Seja para fixar a pensão alimentícia pela primeira vez ou adequar o valor à nova realidade financeira (aumento das necessidades ou redução da capacidade do pagador).",
    iconName: "TrendingUp",
    serviceCategory: "pensao",
    whatsAppText: "Olá, gostaria de orientação para solicitar ou fazer a revisão do valor da pensão alimentícia.",
    keywords: ["revisão de pensão", "aumentar pensão", "diminuir pensão", "pedido de pensão"]
  },
  {
    id: "sit-3",
    title: "Enfrentando uma disputa ou dúvida sobre a guarda?",
    description: "Incertezas quanto à guarda compartilhada ou unilateral, moradia habitual do filho, decisões escolares, de saúde ou responsabilidades de cada genitor.",
    iconName: "Users",
    serviceCategory: "guarda",
    whatsAppText: "Olá, preciso de orientação jurídica em relação à guarda dos meus filhos.",
    keywords: ["guarda compartilhada", "guarda unilateral", "guarda dos filhos"]
  },
  {
    id: "sit-4",
    title: "Precisa regulamentar as visitas e a convivência?",
    description: "Dificuldades para ver o filho, falta de acordo sobre feriados, férias, finais de semana ou necessidade de formalizar juridicamente os dias de convivência.",
    iconName: "CalendarDays",
    serviceCategory: "guarda",
    whatsAppText: "Olá, preciso de ajuda com a regulamentação de visitas e convivência com meu filho.",
    keywords: ["regulamentação de visitas", "regulamentação de convivência", "visitas dos filhos"]
  },
  {
    id: "sit-5",
    title: "Precisa iniciar o inventário após o falecimento?",
    description: "Dúvidas sobre o prazo legal, abertura de inventário judicial, levantamento de bens, testamentos, dívidas e transmissão legal de herança aos herdeiros.",
    iconName: "FileText",
    serviceCategory: "inventario",
    whatsAppText: "Olá, preciso de orientação jurídica para iniciar um inventário judicial.",
    keywords: ["inventário judicial", "abertura de inventário", "inventário pós falecimento"]
  },
  {
    id: "sit-6",
    title: "Existem conflitos entre herdeiros na partilha?",
    description: "Impasse sobre a divisão justa de imóveis, veículos, contas bancárias ou divergências de interesses entre os membros da família na sucessão.",
    iconName: "Scale",
    serviceCategory: "inventario",
    whatsAppText: "Olá, preciso de orientação sobre a partilha de bens e conflito no inventário.",
    keywords: ["partilha de bens", "conflito entre herdeiros", "divisão de herança"]
  }
];

export const SERVICES_DETAILED: ServiceDetail[] = [
  {
    id: "pensao",
    title: "Pensão Alimentícia",
    subtitle: "Atuação jurídica em fixação, cobrança e revisão de obrigações alimentares.",
    badge: "Direito de Família",
    description: "A pensão alimentícia visa garantir a subsistência, saúde, educação e bem-estar dos filhos ou dependentes. A orientação jurídica é essencial para avaliar o binômio necessidade x possibilidade.",
    highlights: [
      "Solicitação e fixação inicial do valor da pensão alimentícia",
      "Cobrança e execução de valores de pensão atrasados",
      "Ação revisional (pedido para aumentar ou diminuir a pensão)",
      "Exoneração de alimentos quando cessado o dever de sustento",
      "Orientação sobre direitos dos filhos e deveres dos genitores"
    ],
    situationsCovered: [
      "Não cumprimento do pagamento mensal",
      "Mudança na renda do pai ou da mãe",
      "Crescimento das despesas do filho (escola, cursos, tratamentos)",
      "Análise de meios de comprovação de renda"
    ],
    whatsAppText: PRESET_MESSAGES.pensao,
    ctaText: "Falar sobre Pensão Alimentícia no WhatsApp",
    iconName: "HeartHandshake"
  },
  {
    id: "guarda",
    title: "Guarda e Convivência Familiar",
    subtitle: "Definição do regime de guarda e regulamentação de rotina de convivência.",
    badge: "Proteção da Criança",
    description: "O foco prioritário na definição da guarda é sempre o melhor interesse e o bem-estar dos filhos. A assessoria jurídica atua para restabelecer o equilíbrio e a previsibilidade na rotina familiar.",
    highlights: [
      "Orientação e pedidos de Guarda Compartilhada",
      "Avaliação e requerimento de Guarda Unilateral",
      "Regulamentação de Regime de Visitas e Convivência",
      "Organização de férias, feriados, datas comemorativas e viagens",
      "Adequação de regras de convivência para prevenir conflitos"
    ],
    situationsCovered: [
      "Genitor dificultando o contato ou convivência",
      "Necessidade de mudar de cidade ou estado",
      "Reorganização da rotina escolar e extraescolar",
      "Divergências na tomada de decisões importantes do menor"
    ],
    whatsAppText: PRESET_MESSAGES.guarda,
    ctaText: "Falar sobre Guarda dos Filhos no WhatsApp",
    iconName: "Users"
  },
  {
    id: "alimentos",
    title: "Alimentos e Direito de Família",
    subtitle: "Proteção dos direitos essenciais dos dependentes e estruturação familiar.",
    badge: "Direito Familiar",
    description: "Atuação completa em ações alimentares para filhos, gestantes (alimentos gravídicos), ex-cônjuges ou ascendentes, pautada no respeito às normas legais e na busca por soluções equilibradas.",
    highlights: [
      "Ação de Alimentos Gravídicos (durante a gestação)",
      "Pensão alimentícia para filhos maiores e estudantes",
      "Pensão entre ex-cônjuges e companheiros",
      "Investigação e reconhecimento de paternidade c/ alimentos",
      "Medidas urgentes para fixação temporária de alimentos"
    ],
    situationsCovered: [
      "Apoio financeiro durante a gestação",
      "Continuidade de pensão para filho universitário",
      "Ajustes no acordo homologado anteriormente",
      "Esclarecimento detalhado sobre o que integra os alimentos"
    ],
    whatsAppText: PRESET_MESSAGES.alimentos,
    ctaText: "Falar sobre Ação de Alimentos no WhatsApp",
    iconName: "ShieldAlert"
  },
  {
    id: "inventario",
    title: "Inventário Judicial e Sucessões",
    subtitle: "Regularização de bens, transmissão de herança e resolução de partilha.",
    badge: "Direito Sucessório",
    description: "Após o falecimento de um familiar, o inventário é o procedimento obrigatório para formalizar a transferência de bens para os herdeiros. Atuamos de forma técnica para conduzir a partilha com transparência.",
    highlights: [
      "Abertura e condução de Inventário Judicial",
      "Levantamento e apuração da relação de bens e dívidas do espólio",
      "Minuta e mediação do plano de partilha entre herdeiros",
      "Atuação em inventários judiciais com desacordo entre herdeiros",
      "Orientações sobre impostos (ITCMD) e documentação necessária"
    ],
    situationsCovered: [
      "Falecimento com bens a inventariar (imóveis, contas, veículos)",
      "Impasse sobre quem será o inventariante",
      "Necessidade de regularizar bens para futura venda ou transferência",
      "Sucessão com herdeiros menores ou incapazes"
    ],
    whatsAppText: PRESET_MESSAGES.inventario,
    ctaText: "Falar sobre Inventário Judicial no WhatsApp",
    iconName: "Landmark"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Contato Inicial Direto",
    description: "Você clica no botão e inicia o diálogo pelo WhatsApp de forma simples, sem burocracia.",
    icon: "MessageSquareText"
  },
  {
    step: "02",
    title: "Relato do Seu Caso",
    description: "Explique sucintamente o seu problema ou dúvida em relação à pensão, guarda ou inventário.",
    icon: "FileSearch"
  },
  {
    step: "03",
    title: "Análise Técnica e Orientação",
    description: "Seus direitos são analisados sob a luz da legislação atual para identificar as alternativas viáveis.",
    icon: "Compass"
  },
  {
    step: "04",
    title: "Definição dos Próximos Passos",
    description: "Você recebe a orientação jurídica clara sobre quais medidas judiciais ou extrajudiciais adotar.",
    icon: "CheckCircle2"
  }
];

export const ATTORNEY_INFO = {
  name: "Dr. Fabrício Bittencourt",
  title: "Advogado Especializado em Direito de Família e Sucessões",
  instagramHandle: "@fabriciobittadv",
  instagramUrl: "https://www.instagram.com/fabriciobittadv/",
  description: "Atuação voltada para a solução técnica, humana e preventiva de conflitos familiares e sucessórios. Compreendemos a delicadeza envolvida em temas como pensão alimentícia, guarda de filhos e inventário de bens, priorizando sempre a clareza, a ética profissional e a segurança jurídica nas orientações fornecidas.",
  principles: [
    {
      title: "Comunicação Humana e Acessível",
      desc: "Tradução do 'juridiquês' para uma linguagem clara, objetiva e transparente."
    },
    {
      title: "Ética e Sigilo Absoluto",
      desc: "Respeito rigoroso às diretrizes da Ordem dos Advogados do Brasil (OAB)."
    },
    {
      title: "Foco no Respeito aos Direitos",
      desc: "Análise individualizada de cada situação familiar sem fórmulas genéricas."
    }
  ]
};

export const FAQ_ITEMS: FaqItemData[] = [
  {
    id: "faq-1",
    question: "O que acontece se a pensão alimentícia não for paga no dia correto?",
    answer: "O não pagamento da pensão alimentícia na data fixada pelo juiz ou em acordo homologado caracteriza inadimplência. É possível buscar a cobrança judicial através de execução de alimentos, com possibilidade de penhora de valores ou até decretação de prisão civil do devedor nos casos dos últimos meses de débito, conforme a lei.",
    category: "Pensão"
  },
  {
    id: "faq-2",
    question: "Como funciona a revisão do valor da pensão alimentícia?",
    answer: "A revisão da pensão alimentícia pode ser solicitada sempre que houver mudança comprovada nas necessidades de quem recebe ou na capacidade financeira de quem paga. É necessária uma ação de revisão de alimentos com provas detalhadas das novas circunstâncias financeiras.",
    category: "Pensão"
  },
  {
    id: "faq-3",
    question: "Guarda compartilhada significa que o filho fica metade do tempo em cada casa?",
    answer: "Não necessariamente. A guarda compartilhada refere-se ao compartilhamento das decisões importantes sobre a vida da criança (escola, saúde, religião). A moradia habitual continua sendo definida no melhor interesse do menor, estabelecendo-se um regime de convivência estruturado.",
    category: "Guarda"
  },
  {
    id: "faq-4",
    question: "O pai ou mãe que não paga pensão perde o direito de ver o filho?",
    answer: "Não. O direito de convivência e visitas do filho é garantido por lei e independe do adimplemento da pensão alimentícia. A cobrança da pensão deve ser feita pelos meios jurídicos próprios e não justifica o impedimento arbitrário das visitas.",
    category: "Guarda"
  },
  {
    id: "faq-5",
    question: "Qual o prazo para dar abertura no inventário judicial?",
    answer: "De acordo com o Código de Processo Civil, o processo de inventário deve ser instaurado dentro de 2 (dois) meses a contar da abertura da sucessão (data do falecimento). O atraso pode sujeitar o processo à cobrança de multa fiscal sobre o imposto de transmissão (ITCMD), a depender das regras do Estado.",
    category: "Inventário"
  },
  {
    id: "faq-6",
    question: "E se os herdeiros não concordarem com a divisão dos bens?",
    answer: "Quando há desacordo entre os herdeiros ou existem herdeiros menores/incapazes, o inventário obrigatoriamente precisará ser realizado pela via judicial. Cada herdeiro pode contar com assistência jurídica para garantir que a partilha respeite estritamente a legítima e o quinhão legal de cada um.",
    category: "Inventário"
  },
  {
    id: "faq-7",
    question: "Como funciona o primeiro atendimento via WhatsApp?",
    answer: "Ao clicar em qualquer botão da página, você será direcionado para o WhatsApp. Lá, você pode relatar sucintamente o seu caso. Nós faremos a triagem inicial das informações para indicar como funciona a consulta ou orientação jurídica necessária para o seu problema.",
    category: "Atendimento"
  }
];
