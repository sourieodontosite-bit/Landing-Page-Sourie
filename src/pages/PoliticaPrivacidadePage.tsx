import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Users, Cookie, Clock, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const clinicName = 'Souriê Odontologia Integrada';
const clinicEmail = CONTACT_INFO.email;
const clinicAddress = CONTACT_INFO.address;
const effectiveDate = '19 de julho de 2026';

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Helmet>
        <title>Souriê Odontologia | Política de Privacidade</title>
        <meta
          name="description"
          content="Entenda como a Souriê Odontologia coleta, armazena e protege seus dados pessoais em conformidade com a LGPD. Transparência e respeito à sua privacidade."
        />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Souriê Odontologia | Política de Privacidade" />
        <meta property="og:description" content="Entenda como a Souriê Odontologia coleta, armazena e protege seus dados pessoais em conformidade com a LGPD. Transparência e respeito à sua privacidade." />
      </Helmet>

      {/* ── Hero ── */}
      <header className="relative overflow-hidden bg-gradient-to-br from-teal-dark via-teal-medium to-navy-dark pt-20 pb-24 md:pt-28 md:pb-32">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />

        <div className="mx-auto max-w-page px-6 md:px-10 lg:px-[63px] relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-white/60 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors">Início</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-white font-medium">Política de Privacidade</span>
          </nav>

          <div className="flex items-start gap-5">
            <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 shrink-0 mt-1">
              <Shield size={26} className="text-cyan-light" aria-hidden="true" />
            </div>
            <div>
              <p className="text-cyan-light text-sm font-semibold uppercase tracking-widest mb-3">
                Privacidade &amp; Dados
              </p>
              <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
                Política de Privacidade
              </h1>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
                Entenda como tratamos seus dados pessoais com transparência e respeito,
                em conformidade com a LGPD (Lei nº 13.709/2018).
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-bg-light min-h-screen">
        <div className="mx-auto max-w-page px-6 md:px-10 lg:px-[63px]">
          <div className="py-12 lg:py-16">

            {/* ── Main content ── */}
            <main>
              <article className="bg-white rounded-card border border-stone-100 shadow-sm overflow-hidden">

                {/* ── Intro ── */}
                <section id="intro" aria-labelledby="intro-heading" className="p-8 md:p-12 border-b border-stone-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-cyan-light flex items-center justify-center shrink-0">
                      <Shield size={18} className="text-teal-dark" aria-hidden="true" />
                    </div>
                    <h2 id="intro-heading" className="text-xl md:text-2xl font-semibold text-teal-dark">
                      Nossa Política
                    </h2>
                  </div>

                  <div className="prose-custom space-y-4 text-text-primary/80 leading-relaxed text-[15px] md:text-base">
                    <p>
                      A sua privacidade é importante para nós. É política do{' '}
                      <strong className="text-teal-dark">Souriê Odontologia Integrada</strong>{' '}
                      respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site{' '}
                      <a
                        href="https://sourie.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-primary hover:text-teal-dark underline underline-offset-2 font-medium transition-colors"
                      >
                        Souriê Odontologia Integrada
                      </a>
                      , e outros sites que possuímos e operamos.
                    </p>
                    <p>
                      Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                    </p>
                    <p>
                      Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                    </p>
                    <p>
                      Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                    </p>
                    <p>
                      O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas{' '}
                      <a
                        href="https://politicaprivacidade.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-primary hover:text-teal-dark underline underline-offset-2 font-medium transition-colors"
                      >
                        políticas de privacidade
                      </a>
                      .
                    </p>
                    <p>
                      Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                    </p>
                    <p>
                      O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
                    </p>
                  </div>
                </section>

                {/* ── Cookies ── */}
                <section id="cookies" aria-labelledby="cookies-heading" className="p-8 md:p-12 border-b border-stone-100 bg-stone-50/40">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-cyan-light flex items-center justify-center shrink-0">
                      <Cookie size={18} className="text-teal-dark" aria-hidden="true" />
                    </div>
                    <h2 id="cookies-heading" className="text-xl md:text-2xl font-semibold text-teal-dark">
                      Cookies e Publicidade
                    </h2>
                  </div>

                  <ul className="space-y-3 text-[15px] md:text-base text-text-primary/80 leading-relaxed">
                    {[
                      'O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.',
                      'Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.',
                      'Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.',
                      'Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-primary/50 shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* ── Compromisso ── */}
                <section id="compromisso" aria-labelledby="compromisso-heading" className="p-8 md:p-12 border-b border-stone-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-light flex items-center justify-center shrink-0">
                      <Users size={18} className="text-teal-dark" aria-hidden="true" />
                    </div>
                    <h2 id="compromisso-heading" className="text-xl md:text-2xl font-semibold text-teal-dark">
                      Compromisso do Usuário
                    </h2>
                  </div>

                  <p className="text-text-primary/80 text-[15px] md:text-base leading-relaxed mb-5">
                    O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a{' '}
                    <strong className="text-teal-dark">Souriê Odontologia Integrada</strong>{' '}
                    oferece no site e com caráter enunciativo, mas não limitativo:
                  </p>

                  <ul className="space-y-3">
                    {[
                      { letter: 'A', text: 'Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;' },
                      { letter: 'B', text: 'Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;' },
                      { letter: 'C', text: 'Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da Souriê Odontologia Integrada, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.' },
                    ].map(({ letter, text }) => (
                      <li key={letter} className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100">
                        <span className="w-7 h-7 rounded-full bg-teal-primary/10 border border-teal-primary/20 flex items-center justify-center text-teal-dark text-xs font-bold shrink-0 mt-0.5">
                          {letter}
                        </span>
                        <span className="text-text-primary/80 text-[15px] md:text-base leading-relaxed">{text}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* ── Mais informações ── */}
                <section id="mais-info" aria-labelledby="mais-info-heading" className="p-8 md:p-12 border-b border-stone-100 bg-stone-50/40">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-cyan-light flex items-center justify-center shrink-0">
                      <Eye size={18} className="text-teal-dark" aria-hidden="true" />
                    </div>
                    <h2 id="mais-info-heading" className="text-xl md:text-2xl font-semibold text-teal-dark">
                      Mais Informações
                    </h2>
                  </div>

                  <p className="text-text-primary/80 text-[15px] md:text-base leading-relaxed">
                    Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                  </p>
                </section>

                {/* ── Armazenamento ── */}
                <section id="armazenamento" aria-labelledby="armazenamento-heading" className="p-8 md:p-12 border-b border-stone-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-cyan-light flex items-center justify-center shrink-0">
                      <Lock size={18} className="text-teal-dark" aria-hidden="true" />
                    </div>
                    <h2 id="armazenamento-heading" className="text-xl md:text-2xl font-semibold text-teal-dark">
                      Armazenamento e Segurança
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { title: 'Criptografia HTTPS', desc: 'Toda transmissão de dados ocorre em canal criptografado.' },
                      { title: 'Acesso restrito', desc: 'Apenas colaboradores autorizados têm acesso às informações.' },
                      { title: 'Retenção mínima', desc: 'Os dados são mantidos apenas pelo tempo estritamente necessário.' },
                    ].map(({ title, desc }) => (
                      <div key={title} className="rounded-2xl border border-teal-primary/15 bg-cyan-light/20 p-5">
                        <p className="font-semibold text-teal-dark text-sm mb-1.5">{title}</p>
                        <p className="text-text-primary/70 text-sm leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Vigência ── */}
                <section id="vigencia" aria-labelledby="vigencia-heading" className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-cyan-light flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-teal-dark" aria-hidden="true" />
                    </div>
                    <h2 id="vigencia-heading" className="text-xl md:text-2xl font-semibold text-teal-dark">
                      Vigência
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-teal-dark/5 to-teal-primary/5 border border-teal-primary/15 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <p className="text-text-primary/80 text-[15px] leading-relaxed">
                        Esta política é efetiva a partir de{' '}
                        <strong className="text-teal-dark">{effectiveDate}</strong>.
                        Podemos atualizá-la periodicamente; a versão vigente estará sempre disponível nesta página.
                      </p>
                    </div>
                    <div className="shrink-0">
                      <Link
                        to="/termos-de-uso"
                        className="inline-flex items-center gap-2 bg-teal-primary hover:bg-teal-dark text-white text-sm font-semibold px-5 py-2.5 rounded-pill transition-colors whitespace-nowrap"
                      >
                        Ver Termos de Uso <ChevronRight size={15} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  {/* Contact info */}
                  <div className="mt-6 text-sm text-text-primary/60 leading-relaxed space-y-1">
                    <p><strong className="text-teal-dark">Responsável:</strong> {clinicName}</p>
                    <p>
                      <strong className="text-teal-dark">E-mail:</strong>{' '}
                      <a href={`mailto:${clinicEmail}`} className="text-teal-primary hover:text-teal-dark transition-colors">
                        {clinicEmail}
                      </a>
                    </p>
                    <p><strong className="text-teal-dark">Endereço:</strong> {clinicAddress}</p>
                  </div>
                </section>

              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
