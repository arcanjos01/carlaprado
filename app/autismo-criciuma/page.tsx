import type { Metadata } from "next";
import SupportTopicPage, { type SupportTopic } from "../components/SupportTopicPage";

const topic: SupportTopic = {
  path: "/autismo-criciuma",
  eyebrow: "Autismo (TEA) · Criciúma",
  title: "Acompanhamento pedagógico para crianças autistas em Criciúma",
  description: "Apoio individualizado para crianças de 6 a 13 anos, conectando aprendizagem, autonomia, rotina, família e escola de forma respeitosa e possível.",
  situations: [
    "A criança encontra dificuldade para acompanhar atividades ou participar da rotina escolar.",
    "A família procura estratégias mais claras para tarefas, estudo e autonomia no dia a dia.",
    "Há necessidade de adaptar a forma de apresentar atividades e organizar etapas.",
    "A escola relata desafios de participação, atenção ou realização das propostas.",
    "A família recebeu orientações, mas ainda não sabe como transformá-las em ações práticas.",
  ],
  supports: [
    { title: "Aprendizagem", description: "Estratégias para leitura, escrita, raciocínio e realização de atividades, respeitando a forma como a criança aprende." },
    { title: "Organização de tarefas", description: "Apoio para compreender etapas, iniciar, manter e concluir atividades de forma mais gradual." },
    { title: "Autonomia na rotina", description: "Estratégias pedagógicas que podem favorecer participação crescente em tarefas adequadas à idade e ao contexto." },
    { title: "Participação escolar", description: "Compreensão das demandas reais da escola e busca de estratégias que favoreçam presença e envolvimento." },
    { title: "Orientação à família", description: "Orientações possíveis para que objetivos e estratégias façam sentido na rotina da casa." },
    { title: "Diálogo com a escola", description: "Quando pertinente e autorizado, consideração de informações que ajudem a dar coerência ao acompanhamento." },
  ],
  experience: "A experiência de Carla no Atendimento Educacional Especializado e no acompanhamento de estudantes com TEA contribui para um olhar pedagógico atento à aprendizagem, à participação e à autonomia no contexto real da criança.",
  scope: "O serviço não realiza diagnóstico de autismo, não substitui acompanhamento médico, psicológico, fonoaudiológico, terapêutico ocupacional ou outras atuações clínicas. A formação complementar em ABA integra seu repertório educacional, mas o serviço não é apresentado como terapia ABA estruturada.",
  faqs: [
    { question: "A criança precisa ter diagnóstico de autismo?", answer: "Não necessariamente. A conversa inicial pode começar a partir das necessidades percebidas pela família. Quando uma avaliação diagnóstica é necessária, ela deve ser conduzida por profissionais habilitados." },
    { question: "O acompanhamento é terapia ABA?", answer: "Não. O trabalho tem natureza pedagógica e educacional. Carla possui formação complementar em ABA e pode utilizar conhecimentos compatíveis com objetivos de aprendizagem e autonomia, sem substituir uma terapia ABA estruturada." },
    { question: "A escola pode participar?", answer: "Sim, quando isso for pertinente e autorizado pelos responsáveis. O diálogo pode ajudar a alinhar estratégias entre criança, família e escola." },
    { question: "O que pode ser trabalhado?", answer: "Os objetivos podem envolver aprendizagem, organização de tarefas, autonomia, rotina, participação escolar, leitura, escrita e outras habilidades relacionadas ao contexto educacional." },
    { question: "O acompanhamento substitui outros profissionais?", answer: "Não. Ele pode complementar o trabalho da escola e de outros profissionais, mas não substitui avaliações, tratamentos ou terapias de outras áreas." },
  ],
  relatedHref: "/deficiencia-intelectual-criciuma",
  relatedLabel: "apoio pedagógico para crianças com deficiência intelectual",
  whatsappMessage: "Olá, Carla! Encontrei a página sobre acompanhamento pedagógico para crianças autistas e gostaria de conversar sobre meu filho.",
  serviceName: "Acompanhamento pedagógico para crianças autistas em Criciúma",
};

export const metadata: Metadata = {
  title: "Acompanhamento para Autismo em Criciúma | Carla Prado",
  description: "Apoio pedagógico para crianças autistas de 6 a 13 anos em Criciúma, com estratégias para aprendizagem, autonomia, rotina e participação escolar.",
  alternates: { canonical: "/autismo-criciuma" },
  openGraph: { title: "Acompanhamento para Autismo em Criciúma | Carla Prado", description: "Apoio pedagógico individualizado para aprendizagem, autonomia, rotina e participação escolar.", url: "/autismo-criciuma", locale: "pt_BR", type: "website", images: [{ url: "/carla-prado-profissional-1122.jpg", width: 1122, height: 1402, alt: "Carla Prado, pedagoga e especialista em desenvolvimento e aprendizagem infantil", type: "image/jpeg" }] },
};

export default function AutismoCriciumaPage() {
  return <SupportTopicPage topic={topic} />;
}
