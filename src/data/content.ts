import { NavItem, Amenity, PricingPlan, GalleryMediaItem, Testimonial } from '../types';

// Import local bundled images
import fotoMaps1 from '../assets/images/foto-maps-1.jpg';
import fotoMaps2 from '../assets/images/foto-maps-2.jpg';
import fotoMaps3 from '../assets/images/foto-maps-3.jpg';
import fotoMaps4 from '../assets/images/foto-maps-4.jpg';
import chacaraPiscina from '../assets/images/chacara-piscina.jpg';
import chacaraAreaSocial from '../assets/images/chacara-area-social.jpg';
import chacaraEstrutura from '../assets/images/chacara-estrutura.jpg';

export const FALLBACK_URLS = {
  maps1: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmCMDByyZCRIyUjOFKgdXpGVOmg9iZlxJOpKVC_o6xZrUehfQAgbdgjdskkFPTi5hyI9T0erCtrYtCNEAcHbzZSYl8OigFCbxaM71BkfTUZKn3UKVurIK1EwDeKohG6-SiueMZd9Q=w1200',
  maps2: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlv0uT5gQXQlOfyVnW49vOuB4VbNzgDJXotf-GdVjNEMA9zAjNwEPPhFqBjr2m0xfRz35Rx4mPItDXU5mh8Xk0k33Lg1OppwkEvxdX6eDSr4THOACeX5sQx-SUok_jGQPqsZ8Pq=w1200',
  maps3: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnStCvLO_nPvgJwsmCIPvQCiiklBIWM_oQ_xfzXPFZ2gqlRMMERREDI10V1E_U1Eu3oke66y0XZIlBsqrrFcZkq-VKh8x29X9HG7e5DhtVcyRsH1MYHLzFR4kzmfjQ90PT5K9Y-=w1200',
  maps4: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn8cwtO3rXzx9_VpJP89AZAxPmMJiPO2HDJ3UW167WgBX5ZOaUDxnS-FMacK7LhegHAzy3VPUE0QlBlEc3g9Q8rLUtfxZq2RSo-lPULz5EI-W_C4RlPDwEFCWDVoLPEhAw9y_itA-1MDe5O=w1200',
};

export const IMAGES = {
  hero: fotoMaps1,
  pool: fotoMaps1,
  poolDetail: chacaraPiscina,
  socialArea: fotoMaps2,
  tablesAndChairs: chacaraAreaSocial,
  deckEvent: fotoMaps3,
  gourmetChurrasqueira: fotoMaps4,
  kitchenSupport: chacaraEstrutura,
};

export const VENUE_INFO = {
  name: 'Chácara Espaço Luz Eventos',
  tagline: 'O Cenário Perfeito para Sua Celebração Memorável',
  subtitle: 'Transformamos seus sonhos em realidade, com um ambiente luxuoso e serviços impecáveis em Timon-MA.',
  reviewsHighlight: '+100 avaliações positivas',
  ratingScore: '4.9',
  address: 'Centro, Timon - MA, 65630-110',
  cityState: 'Timon - MA',
  whatsappPrimary: '(86) 99432-1834',
  whatsappPrimaryClean: '5586994321834',
  whatsappPrimaryUrl: 'https://wa.me/5586994321834?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20evento%20na%20Ch%C3%A1cara%20Espa%C3%A7o%20Luz%20Eventos!',
  phoneSupport24h: '(35) 99776-5245',
  phoneSupport24hClean: '5535997765245',
  phoneSupport24hUrl: 'https://wa.me/5535997765245?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Ch%C3%A1cara%20Espa%C3%A7o%20Luz%20Eventos%20(Atendimento%2024h).',
  instagram: 'https://www.instagram.com/chacaraespacoluz/',
  instagramHandle: '@chacaraespacoluz',
  capacity: 'Até 100 convidados confortavelmente',
  googleMapsPlaceUrl: 'https://www.google.com.br/maps/place/Ch%C3%A1cara+Espa%C3%A7o+Luz+Eventos/@-5.1027664,-42.8209776,17z/',
  googleMapsReviewUrl: 'https://www.google.com.br/maps/place/Ch%C3%A1cara+Espa%C3%A7o+Luz+Eventos/@-5.1027664,-42.8209776,17z/',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31787.974911658425!2d-42.845!3d-5.0939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e3a246db1d4f9%3A0x7d23d8c1c5c56c20!2sCentro%2C%20Timon%20-%20MA%2C%2065630-110!5e0!3m2!1spt-BR!2sbr!4v1710760000000!5m2!1spt-BR!2sbr'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Nossos Espaços', href: '#espacos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Preços', href: '#precos' },
  { label: 'Contato', href: '#contato' }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'espaco-privativo',
    title: 'Locação 100% Exclusiva',
    description: 'A chácara inteira fica fechada e reservada para o seu grupo pelo período contratado, garantindo total privacidade, segurança e liberdade para você e seus convidados.',
    iconName: 'ShieldCheck',
    highlight: true
  },
  {
    id: 'piscina',
    title: 'Piscina com Cascata & Iluminação',
    description: 'Piscina ampla e cristalina para momentos refrescantes de dia e com iluminação cênica à noite para fotos e comemorações inesquecíveis.',
    iconName: 'Waves',
    highlight: true
  },
  {
    id: 'mesas-cadeiras',
    title: '15 Mesas & 60 Cadeiras Já Inclusas',
    description: 'Mobiliário completo incluso na locação sem custo adicional, garantindo economia e praticidade imediata para acomodar seus convidados.',
    iconName: 'Armchair',
    highlight: true
  },
  {
    id: 'churrasqueira',
    title: 'Área Gourmet com Churrasqueira',
    description: 'Churrasqueira ampla e arejada com bancada de apoio, perfeita para churrascos de família, confraternizações e aniversários.',
    iconName: 'Flame'
  },
  {
    id: 'freezer',
    title: '1 Freezer Horizontal Potente',
    description: 'Freezer dedicado para gelar rapidamente cervejas, refrigerantes, águas e conservar sacos de gelo durante toda a sua festa.',
    iconName: 'Snowflake'
  },
  {
    id: 'cozinha-equipada',
    title: 'Cozinha com Fogão & Geladeira',
    description: 'Estrutura prática com fogão e geladeira para preparação de alimentos, apoio a buffets ou armazenamento de bolos e doces.',
    iconName: 'UtensilsCrossed'
  },
  {
    id: 'tenda',
    title: '1 Tenda Estruturada de Apoio',
    description: 'Cobertura complementar versátil que oferece sombra extra e proteção para ilha de buffet, bar ou área dos músicos.',
    iconName: 'Tent'
  },
  {
    id: 'capacidade',
    title: 'Capacidade para até 100 Pessoas',
    description: 'Espaço com excelente circulação entre o salão coberto, deck da piscina e área verde, acomodando até 100 pessoas confortavelmente.',
    iconName: 'Users'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'fds-dia',
    name: 'Pacote Final de Semana — Dia',
    badge: 'Mais Escolhido para Famílias',
    timeRange: 'De 07:30 às 17:30hs',
    period: 'weekend',
    price: 1300,
    priceFormatted: 'R$ 1.300,00',
    description: 'Perfeito para aniversários, churrascos em família, confraternizações e comemorações diurnas com uso total da piscina.',
    poolIncluded: true,
    features: [
      'Piscina completa com cascata liberada',
      'Espaço 100% privativo para o seu grupo',
      'Até 100 pessoas confortavelmente',
      '15 Mesas e 60 Cadeiras inclusas sem taxa',
      '1 Freezer horizontal potente para bebidas',
      'Cozinha completa com fogão e geladeira',
      'Área de churrasqueira + 1 Tenda estruturada',
      'Sexta à noite, sábados, domingos e feriados'
    ],
    popular: true
  },
  {
    id: 'fds-noite',
    name: 'Pacote Final de Semana — Noite',
    badge: 'Perfeito para Festas & Noites Especiais',
    timeRange: 'De 18:30 às 02:00hs',
    period: 'weekend',
    price: 1800,
    priceFormatted: 'R$ 1.800,00',
    description: 'Ambiente sofisticado com iluminação cênica na piscina, salão coberto e clima perfeito para festas inesquecíveis.',
    poolIncluded: true,
    features: [
      'Piscina com iluminação noturna cênica',
      'Espaço 100% privativo e exclusivo',
      'Até 100 pessoas confortavelmente',
      '15 Mesas e 60 Cadeiras inclusas sem taxa',
      '1 Freezer horizontal para bebidas trincando',
      'Cozinha completa com fogão e geladeira',
      'Área de churrasqueira + 1 Tenda estruturada',
      'Sexta à noite, sábados, domingos e feriados'
    ],
    popular: false
  },
  {
    id: 'meio-semana-dia',
    name: 'Meio de Semana — Dia',
    badge: '50% de Abatimento Especial',
    timeRange: 'Horário flexível diurno (8h às 17h)',
    period: 'weekday',
    price: 650,
    priceFormatted: 'R$ 650,00',
    originalPrice: 'R$ 1.300,00',
    description: 'Excelente custo-benefício para reuniões corporativas, confraternizações de empresas e workshops.',
    poolIncluded: false,
    features: [
      'Economia de 50% de terça a sexta à tarde',
      'Sem uso de piscina (ideal para negócios/aulas)',
      '15 Mesas e 60 Cadeiras inclusas',
      'Cozinha com fogão, geladeira e freezer',
      'Churrasqueira e tenda de apoio',
      'Ambiente reservado e tranquilo no Centro'
    ]
  },
  {
    id: 'meio-semana-noite',
    name: 'Meio de Semana — Noite',
    badge: '50% de Abatimento Especial',
    timeRange: 'Horário noturno (18h às 00h / negociável)',
    period: 'weekday',
    price: 900,
    priceFormatted: 'R$ 900,00',
    originalPrice: 'R$ 1.800,00',
    description: 'Celebre com economia expressiva sem abrir mão da infraestrutura física e de todo o conforto.',
    poolIncluded: false,
    features: [
      'Economia de 50% de terça a sexta',
      'Sem uso de piscina',
      '15 Mesas e 60 Cadeiras inclusas',
      'Área coberta e área gourmet completa',
      'Cozinha com fogão, geladeira e freezer',
      'Facilidade de estacionamento e acesso'
    ]
  }
];

export const GALLERY_MEDIA: GalleryMediaItem[] = [
  {
    id: 'gal-maps-1',
    type: 'image',
    url: fotoMaps1,
    previewUrl: fotoMaps1,
    fallbackUrl: FALLBACK_URLS.maps1,
    title: 'Piscina com Cascata & Solário',
    category: 'piscina',
    alt: 'Piscina cristalina com cascata, solário e iluminação na Chácara Espaço Luz Eventos em Timon-MA.',
    caption: 'Piscina ampla com cascata relaxante, água cristalina e solário para dias ensolarados e festas inesquecíveis.',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-maps-2',
    type: 'image',
    url: fotoMaps2,
    previewUrl: fotoMaps2,
    fallbackUrl: FALLBACK_URLS.maps2,
    title: 'Área Social e Salão para Confraternizações',
    category: 'estrutura',
    alt: 'Área social ampla e coberta da Chácara Espaço Luz com mesas, cadeiras e circulação livre.',
    caption: 'Salão coberto e arejado com circulação livre para até 100 pessoas, protegido do sol e da chuva.',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-maps-3',
    type: 'image',
    url: fotoMaps3,
    previewUrl: fotoMaps3,
    fallbackUrl: FALLBACK_URLS.maps3,
    title: 'Deck Integrado à Piscina & Eventos',
    category: 'eventos',
    alt: 'Deck ao redor da piscina pronto para recepção e festas na Chácara Espaço Luz.',
    caption: 'Espaço planejado integrando o deck da piscina ao salão de festas, ideal para acomodar convidados e estações de buffet.',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-maps-4',
    type: 'image',
    url: fotoMaps4,
    previewUrl: fotoMaps4,
    fallbackUrl: FALLBACK_URLS.maps4,
    title: 'Área Gourmet, Bancada & Churrasqueira',
    category: 'estrutura',
    alt: 'Área gourmet com churrasqueira, bancada de apoio e freezer na Chácara Espaço Luz.',
    caption: 'Infraestrutura com churrasqueira espaçosa, bancada de apoio, tomadas e 1 freezer horizontal potente para suas bebidas.',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-piscina-detalhe',
    type: 'image',
    url: chacaraPiscina,
    previewUrl: chacaraPiscina,
    fallbackUrl: FALLBACK_URLS.maps1,
    title: 'Piscina com Cascata em Detalhes',
    category: 'piscina',
    alt: 'Detalhe da cascata e área de banho da piscina na Chácara Espaço Luz.',
    caption: 'Cascata refrescante, acabamento de primeira linha e ambiente seguro e limpo para toda a família.',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-mesas-cadeiras',
    type: 'image',
    url: chacaraAreaSocial,
    previewUrl: chacaraAreaSocial,
    fallbackUrl: FALLBACK_URLS.maps2,
    title: '15 Mesas & 60 Cadeiras Já Inclusas',
    category: 'estrutura',
    alt: 'Mobiliário incluso composto por 15 mesas e 60 cadeiras na Chácara Espaço Luz.',
    caption: 'Economia e praticidade: todo o mobiliário já faz parte da sua locação sem nenhum custo extra.',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-apoio-cozinha',
    type: 'image',
    url: chacaraEstrutura,
    previewUrl: chacaraEstrutura,
    fallbackUrl: FALLBACK_URLS.maps4,
    title: 'Cozinha Completa com Fogão & Geladeira',
    category: 'estrutura',
    alt: 'Cozinha com fogão, geladeira e suporte na Chácara Espaço Luz Eventos.',
    caption: 'Apoio prático para buffets, churrasqueiros e armazenamento de alimentos, sobremesas e bebidas.',
    aspectRatio: 'portrait'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Mariana & Rafael Costa',
    role: 'Casamento Intimista & Recepção',
    rating: 5,
    date: 'Fevereiro de 2026',
    comment: 'Alugamos a chácara para nossa recepção e foi a melhor escolha em Timon! Espaço 100% privativo para nossa família, as 15 mesas e 60 cadeiras já vieram prontas e a piscina iluminada à noite rendeu fotos espetaculares. Nossos convidados amaram!',
    avatarText: 'MR'
  },
  {
    id: 't-2',
    name: 'Carlos Eduardo Brandão',
    role: 'Confraternização de Empresa',
    rating: 5,
    date: 'Janeiro de 2026',
    comment: 'Excelente estrutura no Centro de Timon, super fácil de chegar para quem vem de Teresina também. As 15 mesas e 60 cadeiras já inclusas facilitaram demais a organização. Atendimento nota 10 pelo WhatsApp!',
    avatarText: 'CB'
  },
  {
    id: 't-3',
    name: 'Juliana Medeiros',
    role: 'Aniversário de 30 Anos',
    rating: 5,
    date: 'Dezembro de 2025',
    comment: 'Fiz meu aniversário durante o dia no sábado. Piscina limpa, churrasqueira excelente e o freezer garantiu tudo gelado o dia inteiro. Mais de 100 avaliações positivas não mentem, o lugar é impecável!',
    avatarText: 'JM'
  }
];
