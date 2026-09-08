export const WORKSHOPS_REGISTRATION_URL =
  'https://www.e-inscricao.com/ictdf/workshopssimposiomultidisciplinardeassistenciacardiovascularetransplantes'

export const SIMPOSIO_REGISTRATION_URL =
  'https://www.e-inscricao.com/ictdf/simposiomultidisciplinardeassistencia2026'

export type Workshop = {
  id: string
  index: string
  tag: string
  title: string
  shift: string
  time: string
  audience: string
  workload: string
  location: string
  price: number
  description: string
}

export const workshops: Workshop[] = [
  {
    id: 'cec',
    index: '01',
    tag: 'Circulação Extracorpórea',
    title: 'Hands on — Máquina de CEC e Perfusão',
    shift: 'Tarde',
    time: '14h00',
    audience: 'Médico, enfermeiro, fisio, biomédicos e acadêmicos',
    workload: '1h',
    location: 'ICTDF',
    price: 100,
    description:
      'A Circulação Extracorpórea (CEC) é uma das tecnologias mais complexas e vitais do ambiente cirúrgico de alta complexidade. Compreender o funcionamento do ecossistema da perfusão é um diferencial competitivo crucial para equipes multiprofissionais que atuam ou desejam atuar em centros cirúrgicos e UTIs cardiovasculares. Sob supervisão de especialistas, os participantes terão a oportunidade de tocar e montar, integrando a teoria à prática de forma segura e dinâmica.',
  },
  {
    id: 'ecmo',
    index: '02',
    tag: 'ECMO',
    title: 'Hands-On — ECMO na Prática Clínica',
    shift: 'Manhã',
    time: '08h00',
    audience: 'Médico, enfermeiro, fisio, biomédicos e acadêmicos',
    workload: '1h',
    location: 'ICTDF',
    price: 100,
    description:
      'A Oxigenação por Membrana Extracorpórea (ECMO) consolidou-se como uma terapia de suporte de vida crítica e altamente complexa para pacientes com insuficiência respiratória ou cardiovascular refratária. Este workshop hands-on foi estruturado para desmistificar o sistema de ECMO: os participantes terão contato direto com o circuito, simulando o manejo diário, o controle de parâmetros e a resolução rápida de problemas.',
  },
  {
    id: 'anatomia',
    index: '03',
    tag: 'Anatomia Cardíaca',
    title: 'Anatomia Cardíaca e Dissecção',
    shift: 'Tarde',
    time: '14h00',
    audience: 'Médicos e acadêmicos de medicina',
    workload: '1h',
    location: 'ICTDF',
    price: 100,
    description:
      'Ir além dos livros e dos modelos de plástico é fundamental para quem busca a excelência na área cardiovascular. O domínio da anatomia tridimensional do coração é a base para a compreensão de patologias, procedimentos cirúrgicos, hemodinâmica e terapias intensivas. Uma experiência imersiva e puramente prática, com dissecção guiada para o estudo anatômico real, correlacionando estruturas diretamente com a prática clínica.',
  },
  {
    id: 'vias-aereas',
    index: '04',
    tag: 'Vias Aéreas',
    title: 'Hands-On — Manejo das Vias Aéreas',
    shift: 'Tarde',
    time: '14h00',
    audience: 'Aberto ao público',
    workload: '1h',
    location: 'ICTDF',
    price: 100,
    description:
      'Garantir a patência das vias aéreas e uma ventilação eficaz é uma das habilidades mais críticas e determinantes para a sobrevivência do paciente em cenários de urgência, emergência, anestesia e terapia intensiva. Através de simulações em manequins realísticos, você aprenderá a tomar decisões rápidas e a executar técnicas precisas sob pressão, das manobras básicas à abordagem de vias aéreas difíceis.',
  },
  {
    id: 'instabilidades',
    index: '05',
    tag: 'Instabilidades Elétricas',
    title: 'Hands-On — Emergências Cardiológicas',
    shift: 'Manhã',
    time: '08h00',
    audience: 'Profissionais da saúde e acadêmicos',
    workload: '1h',
    location: 'ICTDF',
    price: 50,
    description:
      'No ambiente de emergência e terapia intensiva, as instabilidades elétricas cardíacas representam situações de extrema gravidade em que cada segundo conta. Através de simulações com monitores e desfibriladores reais, os participantes vão praticar o manejo seguro das principais arritmias que ameaçam a vida, desenvolvendo o raciocínio crítico e a liderança em situações de crise.',
  },
  {
    id: 'transplante',
    index: '06',
    tag: 'Insuficiência ao Transplante',
    title: 'Da Insuficiência Cardíaca ao Transplante',
    shift: 'Manhã',
    time: '08h00',
    audience: 'Profissionais da saúde e acadêmicos',
    workload: '1h',
    location: 'ICTDF',
    price: 50,
    description:
      'A Insuficiência Cardíaca em estágio final representa um dos maiores desafios da medicina moderna. A jornada que leva o paciente do diagnóstico crônico ao transplante cardíaco é longa, complexa e altamente dependente de uma linha de cuidado integrada. Uma experiência dinâmica e baseada em cenários reais, onde os participantes discutirão a trajetória de um paciente grave até o efetivo transplante cardíaco.',
  },
]
