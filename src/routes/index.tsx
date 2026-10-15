import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  BookOpen, BookHeart, HandHeart, Flame, Sparkles, NotebookPen, PenLine, CalendarCheck, Check, ImageIcon,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookMockup } from "@/components/BookMockup";
import { product } from "@/config/product";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "30 Dias de Encontro com Deus — Diário devocional digital" },
      { name: "description", content: "Diário devocional digital de 30 dias com reflexões bíblicas, orações guiadas e desafios práticos de fé. Material em PDF." },
      { property: "og:title", content: "30 Dias de Encontro com Deus" },
      { property: "og:description", content: "Uma jornada de fé, oração e transformação espiritual em 30 dias." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const hasCheckout = product.checkoutUrl.trim().length > 0;

function BuyButton({ children }: { children: string }) {
  const href = hasCheckout ? product.checkoutUrl : "#comprar";
  return (
    <a
      href={href}
      {...(hasCheckout ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="bg-gold inline-flex min-h-14 items-center justify-center rounded-full px-9 py-4 text-sm font-bold tracking-[0.15em] text-primary-foreground shadow-soft transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
    >
      {children}
    </a>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
      <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
    </div>
  );
}

const features = [
  [BookOpen, "30 dias de devocionais", "Uma jornada organizada em temas progressivos."],
  [BookHeart, "Reflexões baseadas em passagens bíblicas", "Ensinamentos aplicados à vida cotidiana."],
  [HandHeart, "Orações guiadas e originais", "Para expressar sentimentos, gratidão e pedidos."],
  [Flame, "Desafios práticos de fé", "Pequenas atitudes para viver o que foi aprendido."],
  [Sparkles, "Mensagens especiais", "Palavras de reflexão e incentivo para o coração."],
  [NotebookPen, "Espaço para pedidos de oração", "Registre aquilo que deseja entregar a Deus."],
  [PenLine, "Páginas de gratidão e anotações", "Campos para escrever seus aprendizados."],
  [CalendarCheck, "Acompanhamento da jornada", "Uma página para marcar os dias concluídos."],
] as const;

const weeks = [
  ["01", "Aproximando-se de Deus", "Começar com o coração aberto, aprender a confiar e cultivar uma oração sincera."],
  ["02", "Fortalecendo a fé", "Esperança nos dias difíceis, paciência na espera, coragem e perseverança."],
  ["03", "Transformando o coração", "Amor ao próximo, humildade, paz e generosidade."],
  ["04", "Vivendo a fé na prática", "Sabedoria nas decisões, propósito e continuidade da caminhada."],
] as const;

const faqs = [
  ["O que é o devocional?", "“30 Dias de Encontro com Deus” é um diário devocional digital para acompanhar uma jornada de 30 dias de leitura bíblica, reflexão, oração e prática da fé."],
  ["O que está incluído?", "30 dias de devocionais com reflexões bíblicas, orações guiadas, desafios de fé, mensagens especiais, espaço para pedidos de oração, páginas de gratidão e anotações e uma página de acompanhamento da jornada."],
  ["Como funciona a jornada de 30 dias?", "A jornada é dividida em quatro etapas semanais. A sugestão é reservar de 10 a 15 minutos por dia para ler, refletir, orar e escrever. Os dois últimos dias são dedicados à consolidação dos aprendizados."],
  ["Qual é o formato do produto?", "É um produto 100% digital, em PDF. Não há envio de livro físico. As páginas podem ser impressas, se preferir."],
  ["Como o material será entregue?", "O material é disponibilizado digitalmente após a confirmação da compra. A forma e o prazo de acesso são informados pela plataforma de pagamento no momento da compra."],
  ["Como funciona o pagamento?", "O pagamento é feito em uma plataforma de pagamento segura. As formas de pagamento disponíveis aparecem na página de checkout."],
] as const;

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { el.classList.add("tl-play"); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref}>
      <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
        {weeks.map(([n, t, d], i) => (
          <div key={n} className="relative" style={{ "--i": i } as React.CSSProperties}>
            {i < weeks.length - 1 && (
              <div className="tl-line absolute left-10 top-5 hidden h-px w-[calc(100%-1rem)] bg-gradient-to-r from-primary to-primary/40 md:block" />
            )}
            <div className="tl-circle relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-background font-display text-primary">{n}</div>
            <div className="tl-body">
              <p className="eyebrow mt-6">Semana {Number(n)}</p>
              <h3 className="mt-2 text-2xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="tl-note mx-auto mt-14 max-w-2xl text-center text-sm text-muted-foreground">Os dois últimos dias são dedicados à consolidação dos aprendizados e à continuidade da sua caminhada com Deus.</p>
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      <header className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-lg tracking-wide text-foreground">30 Dias <span className="italic text-primary">de Encontro com Deus</span></span>
        <a href="#comprar" className="hidden text-xs font-semibold tracking-[0.2em] text-primary transition hover:text-accent sm:block">COMPRAR</a>
      </header>

      {/* Hero */}
      <section className="relative isolate bg-background">
        <div className="glow-spot pointer-events-none absolute -right-40 top-0 -z-10 h-[50rem] w-[50rem]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-28 md:grid-cols-[1.1fr_1fr] md:pb-28 md:pt-36">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <p className="eyebrow">Devocional cristão • Jornada de 30 dias</p>
            <h1 className="mt-5 text-4xl leading-[1.08] text-foreground md:text-[3.6rem]">
              30 dias para desacelerar, <span className="text-gold italic">fortalecer sua fé</span> e dedicar um momento especial à sua caminhada com Deus.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Um diário devocional digital com reflexões bíblicas, orações guiadas e desafios práticos para ajudar você a construir uma rotina de fé, um dia de cada vez.
            </p>
            <div className="my-10 flex justify-center md:hidden"><BookMockup size="md" animated /></div>
            <ul className="mt-8 space-y-3">
              {["30 dias de reflexões devocionais.", "Orações e desafios de fé.", "Espaço para escrever e registrar sua jornada."].map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground/90">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/50"><Check className="h-3 w-3 text-primary" /></span>{b}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col items-start gap-3">
              <BuyButton>QUERO COMEÇAR MINHA JORNADA</BuyButton>
              <span className="text-xs tracking-[0.2em] text-muted-foreground">MATERIAL DIGITAL • PDF</span>
            </div>
          </div>
          <div className="hidden md:block"><BookMockup animated /></div>
        </div>
      </section>

      {/* Conexão */}
      <section className="border-y border-border bg-card">
        <Reveal className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <GoldRule />
          <h2 className="mt-8 text-3xl leading-snug md:text-5xl">No meio de tantos compromissos, reserve um momento para cuidar da sua vida espiritual.</h2>
          <div className="mt-8 space-y-4 text-muted-foreground md:text-lg">
            <p>A correria do cotidiano pode tornar difícil manter uma rotina de oração e reflexão.</p>
            <p>O devocional 30 Dias de Encontro com Deus foi pensado para ajudar você a reservar alguns minutos do dia para ler, refletir, orar e registrar aquilo que deseja levar para a vida.</p>
            <p>Não se trata de fazer tudo perfeitamente, mas de construir uma rotina possível, com intenção e constância.</p>
          </div>
          <blockquote className="mx-auto mt-12 max-w-2xl border-y border-primary/30 py-8 font-display text-2xl italic leading-relaxed text-accent md:text-3xl">
            Um dia de cada vez. Uma reflexão de cada vez. Um momento especial para sua caminhada com Deus.
          </blockquote>
        </Reveal>
      </section>

      {/* O que vai encontrar */}
      <section className="bg-background">
        <Reveal className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="eyebrow text-center">Conteúdo</p>
          <h2 className="mt-3 text-center text-4xl md:text-5xl">O que você vai encontrar</h2>
          <GoldRule className="mt-6" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([Icon, t, d]) => (
              <div key={t} className="group rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.4} />
                </div>
                <h3 className="mt-5 text-xl leading-snug">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Jornada */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="eyebrow text-center">A jornada</p>
          <h2 className="mt-3 text-center text-4xl md:text-5xl">Quatro etapas, trinta dias</h2>
          <Timeline />
        </div>
      </section>

      {/* Visualização */}
      <section className="bg-background">
        <Reveal className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="eyebrow text-center">Visualização</p>
          <h2 className="mt-3 text-center text-4xl md:text-5xl">Conheça o seu devocional</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">Um material digital em PDF, organizado para acompanhar você durante 30 dias.</p>
          <div className="mt-16 grid items-center gap-16 md:grid-cols-3">
            <BookMockup size="sm" tilt={25} />
            <BookMockup size="md" tilt={-8} />
            <BookMockup size="sm" tilt={-30} />
          </div>
          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {["Abertura do dia", "Reflexão bíblica", "Oração guiada", "Anotações"].map((p) => (
              <div key={p} className="flex aspect-[3/4] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-primary/30 bg-card p-4 text-center">
                <ImageIcon className="h-5 w-5 text-primary/60" strokeWidth={1.4} />
                <span className="text-sm text-muted-foreground">{p}</span>
                <span className="text-[0.65rem] tracking-[0.2em] text-muted-foreground/60">PRÉVIA EM BREVE</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Oferta */}
      <section id="comprar" className="scroll-mt-6 bg-background">
        <Reveal className="mx-auto max-w-5xl px-6 pb-24 md:pb-32">
          <div className="grid items-center gap-12 rounded-3xl border border-primary/25 bg-card p-8 shadow-soft md:grid-cols-[auto_1fr] md:p-14">
            <BookMockup size="md" />
            <div>
              <p className="eyebrow">{product.name}</p>
              <h2 className="mt-3 text-3xl md:text-4xl">Sua jornada de 30 dias começa com um primeiro passo.</h2>
              <p className="mt-4 text-muted-foreground">Tenha um material organizado para acompanhar seus momentos de leitura bíblica, oração e reflexão ao longo dos próximos 30 dias.</p>
              <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
                {features.map(([, t]) => <li key={t} className="flex gap-2 text-foreground/85"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{t}</li>)}
              </ul>
              <div className="my-8 h-px bg-border" />
              <p className="text-xs tracking-[0.2em] text-muted-foreground">{product.format.toUpperCase()}</p>
              <p className="text-gold mt-2 font-display text-5xl">{product.price || "Preço em breve"}</p>
              <div className="mt-6">
                {hasCheckout ? (
                  <BuyButton>QUERO MEU DEVOCIONAL</BuyButton>
                ) : (
                  <>
                    <button disabled className="min-h-14 cursor-not-allowed rounded-full border border-primary/40 px-9 py-4 text-sm font-bold tracking-[0.15em] text-primary/70">QUERO MEU DEVOCIONAL</button>
                    <p className="mt-3 text-xs text-muted-foreground">As vendas abrirão em breve.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card">
        <Reveal className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <h2 className="text-center text-4xl md:text-5xl">Perguntas frequentes</h2>
          <GoldRule className="mt-6" />
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map(([q, a]) => (
              <AccordionItem key={q} value={q} className="border-primary/20">
                <AccordionTrigger className="text-left font-display text-xl text-foreground hover:text-primary hover:no-underline">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* CTA final */}
      <section className="relative isolate bg-background">
        <Reveal className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="order-2 text-center md:order-1 md:text-left">
            <h2 className="text-4xl md:text-5xl">Dê espaço à sua fé na rotina de <span className="text-gold italic">todos os dias.</span></h2>
            <p className="mt-5 text-muted-foreground md:text-lg">Comece sua jornada de 30 dias com um material preparado para acompanhar seus momentos de oração, leitura e reflexão.</p>
            <div className="mt-8"><BuyButton>COMEÇAR MINHA JORNADA</BuyButton></div>
          </div>
          <div className="order-1 md:order-2"><BookMockup size="md" tilt={-18} /></div>
        </Reveal>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:justify-between">
          <div>
            <p className="font-display text-lg text-foreground">{product.name}</p>
            <p>Produto digital · {product.format}. Não há entrega física.</p>
            {product.contactEmail && <a href={`mailto:${product.contactEmail}`} className="hover:text-primary">{product.contactEmail}</a>}
          </div>
          <nav className="flex flex-wrap gap-4">
            {([["Política de privacidade", product.privacyUrl], ["Termos de uso", product.termsUrl], ["Política de reembolso", product.refundUrl]] as const).map(([l, u]) =>
              u ? <a key={l} href={u} className="hover:text-primary">{l}</a> : <span key={l} title="Em breve">{l} (em breve)</span>,
            )}
          </nav>
        </div>
      </footer>
    </main>
  );
}
