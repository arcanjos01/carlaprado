import type { Metadata } from "next";
import SupportTopicPage, { type SupportTopic } from "../components/SupportTopicPage";

const topic: SupportTopic = {
  path: "/deficiencia-intelectual-criciuma",
  eyebrow: "Deficiência intelectual · Criciúma",
  title: "Apoio pedagógico para crianças com deficiência intelectual em Criciúma",
  description: "Acompanhamento individualizado para apoiar aprendizagem, autonomia e participação escolar, respeitando o ritmo, as habilidades e os objetivos de cada criança.",
  situations: [
    "A criança precisa de mais tempo, organização ou adaptações para realizar atividades escolares.",
    "A família busca formas de favorecer autonomia nas tarefas e na rotina.",
    "Há dificuldade para compreender instruções, sequenciar etapas ou colocar em prática o que aprendeu.",
    "A escola e a família precisam de estratégias mais alinhadas às necessidades da criança.",
    "O foco deixou de ser comparação com outras crianças e passou a ser avanço possível, participação e autonomia.",
  ],
  supports: [
    { title: "Habilidades acadêmicas", description: "Apoio para leitura, escrita, raciocínio e conteúdos trabalhados de modo compatível com as necessidades atuais." },
    { title: "Compreensão de instruções", description: "Estratégias para tornar comandos, materiais e etapas mais claros e possíveis de acompanhar." },
    { title: "Organização e sequência", description: "Atividades que favoreçam planejar, iniciar e concluir tarefas com apoio gradual." },
    { title: "Autonomia", description: "Objetivos relacionados à participação da criança em tarefas da rotina, de maneira progressiva e respeitosa." },
    { title: "Atividades adaptadas", description: "Ajustes pedagógicos que considerem habilidades atuais, interesses e formas mais acessíveis de aprender." },
    { title: "Família e escola", description: "Orientações e diálogo quando pertinentes, sempre com consentimento dos responsáveis." },
  ],
  experience: "A atuação de Carla em contexto escolar, inclusive no Atendimento Educacional Especializado, contribui para um acompanhamento que considera a criança em suas habilidades, possibilidades de aprendizagem e participação na rotina.",
  scope: "O acompanhamento é pedagógico. Não realiza diagnóstico, não substitui o ensino regular, o Atendimento Educacional Especializado da escola, avaliações clínicas ou terapias de outras áreas. Os objetivos são definidos individualmente, sem promessas de resultado ou comparação com outras crianças.",
  faqs: [
    { question: "A criança precisa ter laudo ou diagnóstico?", answer: "A família pode procurar orientação sobre aprendizagem e autonomia mesmo antes de possuir um diagnóstico. Quando uma avaliação diagnóstica é indicada, ela cabe aos profissionais competentes." },
    { question: "O atendimento é apenas reforço escolar?", answer: "Não necessariamente. O trabalho pode envolver habilidades acadêmicas, adaptação de atividades, organização de tarefas, compreensão de instruções e desenvolvimento de autonomia." },
    { question: "Como os objetivos são definidos?", answer: "De forma individualizada, considerando idade, habilidades atuais, necessidades, interesses e informações trazidas pela família e, quando pertinente, pela escola." },
    { question: "É possível trabalhar autonomia e rotina?", answer: "Sim. Podem ser planejadas estratégias pedagógicas para favorecer realização gradual de tarefas, organização e participação da criança na própria rotina." },
    { question: "O acompanhamento substitui o AEE ou terapias?", answer: "Não. Pode complementar o trabalho da escola e de outros profissionais, mas não substitui o Atendimento Educacional Especializado, o ensino regular, avaliações clínicas ou terapias." },
  ],
  relatedHref: "/autismo-criciuma",
  relatedLabel: "acompanhamento pedagógico para crianças autistas",
  whatsappMessage: "Olá, Carla! Encontrei a página sobre apoio pedagógico para crianças com deficiência intelectual e gostaria de conversar sobre meu filho.",
  serviceName: "Apoio pedagógico para crianças com deficiência intelectual em Criciúma",
};

export const metadata: Metadata = {
  title: "Deficiência Intelectual em Criciúma | Carla Prado",
  description: "Apoio pedagógico individualizado para crianças de 6 a 13 anos com deficiência intelectual em Criciúma, com foco em aprendizagem, autonomia e participação escolar.",
  alternates: { canonical: "/deficiencia-intelectual-criciuma" },
  openGraph: { title: "Deficiência Intelectual em Criciúma | Carla Prado", description: "Apoio pedagógico individualizado para aprendizagem, autonomia e participação escolar.", url: "/deficiencia-intelectual-criciuma", locale: "pt_BR", type: "website", images: [{ url: "/carla-prado-profissional-1122.jpg", width: 1122, height: 1402, alt: "Carla Prado, pedagoga e especialista em desenvolvimento e aprendizagem infantil", type: "image/jpeg" }] },
};

export default function DeficienciaIntelectualCriciumaPage() {
  return <SupportTopicPage topic={topic} />;
}
