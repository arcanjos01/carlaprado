import Link from "next/link";

type Card = { title: string; description: string };
type Faq = { question: string; answer: string };

export type SupportTopic = {
  path: "/autismo-criciuma" | "/deficiencia-intelectual-criciuma";
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

function WhatsAppIcon() {
  return <svg className="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 2a13.92 13.92 0 0 0-11.94 21.09L2 30l7.12-1.87A14 14 0 1 0 16 2Zm0 25.5a11.48 11.48 0 0 1-5.85-1.6l-.42-.25-4.23 1.11 1.13-4.12-.27-.43A11.5 11.5 0 1 1 16 27.5Zm6.3-8.62c-.35-.18-2.08-1.03-2.4-1.15-.32-.12-.55-.18-.79.18-.23.35-.9 1.15-1.1 1.39-.2.23-.4.26-.75.09a9.34 9.34 0 0 1-2.76-1.7 10.32 10.32 0 0 1-1.91-2.38c-.2-.35 0-.54.16-.71.16-.16.35-.4.52-.6.18-.2.24-.35.35-.59.12-.23.06-.44-.03-.61-.09-.18-.79-1.91-1.08-2.62-.29-.69-.58-.6-.79-.61h-.67c-.23 0-.61.09-.93.44-.32.35-1.22 1.19-1.22 2.9s1.25 3.37 1.42 3.6c.18.24 2.46 3.76 5.96 5.27.83.36 1.48.57 1.99.73.84.27 1.61.23 2.22.14.68-.1 2.08-.85 2.37-1.67.29-.82.29-1.53.2-1.67-.08-.14-.31-.23-.67-.41Z" /></svg>;
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
    url: `https://carlaprado.pages.dev${topic.path}`,
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
        <Link href="/autismo-criciuma" aria-current={topic.path === "/autismo-criciuma" ? "page" : undefined}>Autismo</Link>
        <Link href="/deficiencia-intelectual-criciuma" aria-current={topic.path === "/deficiencia-intelectual-criciuma" ? "page" : undefined}>Deficiência intelectual</Link>
        <a href={contactHref} target="_blank" rel="noreferrer" className="nav-contact"><WhatsAppIcon /><span className="topic-contact-label-short">Conversar</span><span className="topic-contact-label-full">Conversar pelo WhatsApp</span></a>
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
    <a className="whatsapp-float" href={contactHref} target="_blank" rel="noreferrer" aria-label="Conversar com Carla pelo WhatsApp"><WhatsAppIcon /><span className="whatsapp-label-short">Conversar</span><span className="whatsapp-label-full">Conversar pelo WhatsApp</span></a>
  </main>;
}
