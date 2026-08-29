import Link from "next/link";

type Card = { title: string; description: string };
type Faq = { question: string; answer: string };

export type SupportTopic = {
  eyebrow: string;
  title: string;
  description: string;
  situations: string[];
  supports: Card[];
  experience: string;
  scope: string;
  faqs: Faq[];
  relatedHref: string;
  relatedLabel: string;
  whatsappMessage: string;
  serviceName: string;
};

const whatsappNumber = "5548999163731";

function LeafMark() {
  return <span className="leaf-mark" aria-hidden="true"><i /><i /><i /></span>;
}

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function SupportTopicPage({ topic }: { topic: SupportTopic }) {
  const contactHref = whatsappLink(topic.whatsappMessage);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: topic.serviceName,
    serviceType: "Acompanhamento pedagógico individualizado",
    description: topic.description,
    provider: {
      "@type": "ProfessionalService",
      name: "Carla Prado",
      telephone: "+55 48 99916-3731",
    },
    areaServed: {
      "@type": "City",
      name: "Criciúma",
      address: { "@type": "PostalAddress", addressRegion: "SC", addressCountry: "BR" },
    },
    audience: { "@type": "PeopleAudience", audienceType: "Pais e responsáveis" },
  };

  return <main className="topic-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <header className="topic-header">
      <Link href="/" className="brand" aria-label="Carla Prado, início"><LeafMark /><span>Carla <strong>Prado</strong></span></Link>
      <nav aria-label="Navegação principal">
        <Link href="/#acompanhamento">Acompanhamento</Link>
        <Link href="/autismo-criciuma">Autismo</Link>
        <Link href="/deficiencia-intelectual-criciuma">Deficiência intelectual</Link>
        <a href={contactHref} target="_blank" rel="noreferrer" className="nav-contact">Conversar</a>
      </nav>
    </header>

    <article>
      <section className="topic-hero">
        <div>
          <p className="eyebrow"><LeafMark /> {topic.eyebrow}</p>
          <h1>{topic.title}</h1>
          <p className="topic-lede">{topic.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={contactHref} target="_blank" rel="noreferrer">Conversar com Carla <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#como-funciona">Como funciona <span aria-hidden="true">→</span></a>
          </div>
          <p className="topic-trust">Crianças de 6 a 13 anos · encontros de 50 minutos · atendimento em Criciúma — SC</p>
        </div>
        <div className="topic-hero-media">
          <picture className="portrait-picture">
            <source type="image/webp" srcSet="/carla-prado-profissional-640.webp 640w, /carla-prado-profissional-1122.webp 1122w" sizes="(max-width: 820px) 88vw, 40vw" />
            <img className="portrait-image" src="/carla-prado-profissional-1122.jpg" width={1122} height={1402} alt="Carla Prado, pedagoga e especialista em desenvolvimento e aprendizagem infantil" loading="eager" fetchPriority="high" />
          </picture>
          <p>Carla Prado<br /><strong>Pedagoga · Neuropsicopedagogia</strong></p>
        </div>
      </section>

      <section className="topic-section topic-situations">
        <div className="topic-intro"><p className="eyebrow">No cotidiano da criança</p><h2>Quando esse acompanhamento pode fazer sentido?</h2><p>O ponto de partida não é um rótulo. É compreender a situação que a criança e a família estão vivendo e identificar objetivos educacionais possíveis.</p></div>
        <ul className="topic-situation-list">{topic.situations.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="topic-section topic-supports">
        <div className="topic-intro"><p className="eyebrow">Objetivos individualizados</p><h2>O que pode ser apoiado.</h2><p>Cada acompanhamento é planejado conforme as habilidades atuais, a rotina, os interesses e as necessidades educacionais da criança.</p></div>
        <div className="topic-card-grid">{topic.supports.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      </section>

      <section className="topic-process" id="como-funciona">
        <div className="topic-process-copy"><p className="eyebrow">Como funciona</p><h2>Um caminho claro, construído com a família.</h2><p>O trabalho é educacional e começa por uma conversa objetiva sobre a criança, a rotina e a principal preocupação da família.</p></div>
        <ol>
          <li><span>01</span><div><h3>Conversa inicial</h3><p>Compreensão da demanda, da rotina e dos objetivos que fazem sentido naquele momento.</p></div></li>
          <li><span>02</span><div><h3>Levantamento pedagógico</h3><p>Observação de habilidades, necessidades e estratégias que podem favorecer a aprendizagem.</p></div></li>
          <li><span>03</span><div><h3>Planejamento individualizado</h3><p>Definição de objetivos pedagógicos possíveis, acompanhados de forma gradual.</p></div></li>
          <li><span>04</span><div><h3>Família e escola</h3><p>Orientações para a rotina e diálogo com a escola quando pertinente e autorizado pelos responsáveis.</p></div></li>
        </ol>
      </section>

      <section className="topic-section topic-experience">
        <div className="topic-intro"><p className="eyebrow">Sobre o trabalho da Carla</p><h2>Experiência escolar e atenção à realidade da criança.</h2></div>
        <div className="topic-experience-copy"><p>{topic.experience}</p><p>Carla é pedagoga, especialista em Neuropsicopedagogia e possui formação complementar em ABA. Sua atuação reúne experiência em Atendimento Educacional Especializado, acompanhamento de estudantes com TEA e trabalho em contexto escolar.</p></div>
      </section>

      <aside className="topic-scope">
        <p className="eyebrow">Limites claros</p><h2>Um acompanhamento pedagógico, não clínico.</h2>
        <p>{topic.scope}</p>
      </aside>

      <section className="topic-section topic-faq">
        <div className="topic-intro"><p className="eyebrow">Dúvidas frequentes</p><h2>Perguntas que ajudam a decidir.</h2></div>
        <div className="faq-list">{topic.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="topic-cta">
        <p className="eyebrow"><LeafMark /> Contato inicial</p>
        <h2>Quer entender se esse acompanhamento faz sentido para seu filho?</h2>
        <p>Conte brevemente o momento que vocês estão vivendo. A conversa inicial serve para compreender a demanda e explicar os próximos passos.</p>
        <a className="button button-primary" href={contactHref} target="_blank" rel="noreferrer">Conversar pelo WhatsApp <span aria-hidden="true">→</span></a>
        <small>Evite enviar diagnósticos, laudos ou informações clínicas pelo WhatsApp neste primeiro contato.</small>
      </section>

      <section className="topic-related">
        <p>Também pode ser útil conhecer:</p>
        <Link href={topic.relatedHref}>{topic.relatedLabel} <span aria-hidden="true">→</span></Link>
      </section>
    </article>

    <footer className="topic-footer"><Link href="/" className="brand"><LeafMark /><span>Carla <strong>Prado</strong></span></Link><p>Desenvolvimento e aprendizagem com um olhar que conecta criança, família e escola.</p><div><Link href="/autismo-criciuma">Autismo</Link><Link href="/deficiencia-intelectual-criciuma">Deficiência intelectual</Link><a href={contactHref} target="_blank" rel="noreferrer">WhatsApp: (48) 99916-3731</a></div><small>© {new Date().getFullYear()} Carla Prado.</small></footer>
  </main>;
}
