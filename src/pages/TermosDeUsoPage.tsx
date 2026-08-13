import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  FileText,
  Target,
  CheckCircle2,
  Copyright,
  UserCheck,
  AlertTriangle,
  ExternalLink as ExternalLinkIcon,
  RefreshCcw,
  Scale,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const clinicName = 'Souriê Odontologia Integrada';
const clinicEmail = CONTACT_INFO.email;
const clinicAddress = CONTACT_INFO.address;
const effectiveDate = '19 de julho de 2026';

export default function TermosDeUsoPage() {
  return (
    <>
      <Helmet>
        <title>Souriê Odontologia | Termos de Uso do Site</title>
        <meta
          name="description"
          content="Leia os Termos de Uso do site da Souriê Odontologia. Direitos, responsabilidades, uso permitido do conteúdo e condições gerais de acesso ao site institucional."
        />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Souriê Odontologia | Termos de Uso do Site" />
        <meta property="og:description" content="Leia os Termos de Uso do site da Souriê Odontologia. Direitos, responsabilidades, uso permitido do conteúdo e condições gerais de acesso ao site institucional." />
      </Helmet>

      {/* ── Hero ── */}
      <header className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-teal-dark to-teal-medium pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />

        <div className="mx-auto max-w-page px-6 md:px-10 lg:px-[63px] relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-white/60 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors">Início</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-white font-medium">Termos de Uso</span>
          </nav>

          <div className="flex items-start gap-5">
            <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 shrink-0 mt-1">
              <FileText size={26} className="text-cyan-light" aria-hidden="true" />
            </div>
            <div>
              <p className="text-cyan-light text-sm font-semibold uppercase tracking-widest mb-3">
                Regras &amp; Diretrizes
              </p>
              <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
                Termos de Uso
              </h1>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
                Ao acessar nosso site, você concorda com estas condições. Leia com atenção antes de continuar.
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

                {/* ── 1. Aceitação ── */}
                <SectionBlock id="aceitacao" icon={FileText} title="1. Aceitação dos Termos">
                  <p>
                    Ao acessar e utilizar o site da <strong className="text-teal-dark">{clinicName}</strong>, você concorda com os presentes Termos de Uso e com nossa{' '}
                    <Link to="/politica-de-privacidade" className="text-teal-primary hover:text-teal-dark underline underline-offset-2 font-medium transition-colors">
                      Política de Privacidade
                    </Link>
                    . Se você não concordar com qualquer parte destes termos, solicitamos que não utilize nosso site.
                  </p>
                  <p>
                    O acesso ao site é gratuito e destinado a qualquer pessoa com capacidade legal para contratar, nos termos da legislação brasileira.
                  </p>
                </SectionBlock>

                {/* ── 2. Objetivo ── */}
                <SectionBlock id="objetivo" icon={Target} title="2. Objetivo do Site" shaded>
                  <p>
                    Este site tem caráter exclusivamente <strong className="text-teal-dark">institucional e informativo</strong>. Seu objetivo é apresentar os serviços odontológicos oferecidos pela {clinicName}, as especialidades da equipe clínica e os canais de contato disponíveis para agendamento de consultas.
                  </p>
                  <p>
                    O site <strong className="text-teal-dark">não realiza vendas online</strong> nem processa pagamentos. O formulário de contato disponível destina-se apenas ao encaminhamento de dúvidas e solicitações de atendimento.
                  </p>
                </SectionBlock>

                {/* ── 3. Uso Permitido ── */}
                <SectionBlock id="uso-permitido" icon={CheckCircle2} title="3. Uso Permitido">
                  <p>O acesso e uso deste site são permitidos para fins lícitos, pessoais e não comerciais. É permitido:</p>
                  <ul className="space-y-2 mt-3">
                    {[
                      'Navegar pelas páginas e conteúdos disponíveis;',
                      'Utilizar o formulário de contato para enviar dúvidas ou solicitações;',
                      'Compartilhar links para páginas do site em redes sociais ou outros canais.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="mt-1 text-teal-primary shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 font-semibold text-red-600">É expressamente proibido:</p>
                  <ul className="space-y-2 mt-3">
                    {[
                      'Reproduzir, copiar ou distribuir o conteúdo do site sem autorização prévia e por escrito da ' + clinicName + ';',
                      'Utilizar o site para fins ilegais, fraudulentos ou que possam causar danos a terceiros;',
                      'Tentar acessar áreas restritas, sistemas ou banco de dados não autorizados;',
                      'Inserir ou transmitir vírus, malwares ou qualquer código malicioso por meio do site;',
                      'Realizar raspagem automática de dados (web scraping) sem autorização expressa.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-text-primary/80">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SectionBlock>

                {/* ── 4. Propriedade Intelectual ── */}
                <SectionBlock id="propriedade" icon={Copyright} title="4. Propriedade Intelectual" shaded>
                  <p>
                    Todo o conteúdo disponível neste site — incluindo textos, imagens, fotografias, logotipos, marcas, ícones, layouts e código-fonte — é de propriedade exclusiva da{' '}
                    <strong className="text-teal-dark">{clinicName}</strong> ou está licenciado para uso pela clínica, e está protegido pelas leis brasileiras de Propriedade Intelectual (Lei nº 9.279/1996 e Lei nº 9.610/1998).
                  </p>
                  <p>
                    Qualquer uso não autorizado desses conteúdos poderá configurar violação de direitos autorais e/ou marcários, sujeitando o infrator às sanções previstas em lei.
                  </p>
                </SectionBlock>

                {/* ── 5. Responsabilidades ── */}
                <SectionBlock id="responsabilidades" icon={UserCheck} title="5. Responsabilidades do Usuário">
                  <p className="mb-4">Ao utilizar este site, você se compromete a:</p>
                  <ul className="space-y-3">
                    {[
                      'Fornecer informações verdadeiras, completas e atualizadas ao preencher o formulário de contato;',
                      'Não utilizar o site de forma que possa prejudicar seu funcionamento ou a experiência de outros usuários;',
                      'Respeitar os direitos de terceiros, incluindo direitos de privacidade e propriedade intelectual;',
                      'Agir em conformidade com a legislação brasileira vigente.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                        <span className="w-6 h-6 rounded-full bg-teal-primary/10 flex items-center justify-center text-teal-dark text-xs font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-text-primary/80 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </SectionBlock>

                {/* ── 6. Limitação ── */}
                <SectionBlock id="limitacao" icon={AlertTriangle} title="6. Limitação de Responsabilidade" shaded>
                  <p className="mb-4">
                    A {clinicName} envidará seus melhores esforços para manter o site disponível, atualizado e seguro. No entanto, não garantimos a disponibilidade ininterrupta do serviço e não nos responsabilizamos por:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Falhas técnicas, interrupções temporárias ou indisponibilidade do site por razões alheias ao nosso controle;',
                      'Danos diretos ou indiretos resultantes do uso ou da impossibilidade de uso do site;',
                      'Imprecisões, erros ou desatualizações nas informações publicadas;',
                      'Ações de terceiros, como ataques cibernéticos, que estejam fora do nosso controle razoável.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-text-primary/80">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-400 shrink-0" aria-hidden="true" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 p-4 rounded-2xl bg-amber-50 border border-amber-200">
                    <p className="text-amber-800 text-sm leading-relaxed">
                      ⚕️ As informações neste site têm caráter <strong>meramente informativo</strong> e não substituem uma consulta com um profissional de saúde. Para diagnósticos, tratamentos ou orientações clínicas, agende uma consulta presencial.
                    </p>
                  </div>
                </SectionBlock>

                {/* ── 7. Links ── */}
                <SectionBlock id="links" icon={ExternalLinkIcon} title="7. Links para Sites de Terceiros">
                  <p>
                    Nosso site pode conter links para sites externos, como redes sociais (Instagram, Facebook) e plataformas de comunicação (WhatsApp). Esses links são fornecidos apenas para sua conveniência.
                  </p>
                  <p>
                    A {clinicName} <strong className="text-teal-dark">não possui controle</strong> sobre o conteúdo, políticas de privacidade ou práticas de sites de terceiros e <strong className="text-teal-dark">não se responsabiliza</strong> por qualquer dano ou prejuízo decorrente do acesso a esses sites.
                  </p>
                </SectionBlock>

                {/* ── 8. Alterações ── */}
                <SectionBlock id="alteracoes" icon={RefreshCcw} title="8. Alterações dos Termos" shaded>
                  <p>
                    A {clinicName} reserva-se o direito de alterar estes Termos de Uso a qualquer momento para refletir mudanças em nossas práticas, na legislação ou no funcionamento do site.
                  </p>
                  <p>
                    As alterações entram em vigor na data de sua publicação nesta página. O uso continuado do site após eventuais alterações representa sua aceitação dos novos termos.
                  </p>
                </SectionBlock>

                {/* ── 9. Legislação ── */}
                <SectionBlock id="legislacao" icon={Scale} title="9. Legislação Aplicável e Foro">
                  <p className="mb-4">
                    Estes Termos de Uso são regidos e interpretados de acordo com as leis da{' '}
                    <strong className="text-teal-dark">República Federativa do Brasil</strong>, em especial:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { law: 'Lei nº 13.709/2018', desc: 'Lei Geral de Proteção de Dados (LGPD)' },
                      { law: 'Lei nº 12.965/2014', desc: 'Marco Civil da Internet' },
                      { law: 'Lei nº 8.078/1990', desc: 'Código de Defesa do Consumidor' },
                      { law: 'Lei nº 10.406/2002', desc: 'Código Civil Brasileiro' },
                    ].map(({ law, desc }) => (
                      <div key={law} className="rounded-2xl border border-teal-primary/15 bg-cyan-light/20 p-4">
                        <p className="font-semibold text-teal-dark text-sm">{law}</p>
                        <p className="text-text-primary/65 text-xs mt-0.5">{desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm text-text-primary/70 leading-relaxed">
                    Fica eleito o foro da Comarca de{' '}
                    <strong className="text-teal-dark">Nova Era, Estado de Minas Gerais</strong>, para dirimir quaisquer controvérsias decorrentes destes termos.
                  </p>
                </SectionBlock>

                {/* ── 10. Contato ── */}
                <SectionBlock id="contato" icon={Mail} title="10. Informações de Contato">
                  <p className="mb-5">
                    Dúvidas, sugestões ou solicitações relacionadas a estes Termos de Uso podem ser encaminhadas por:
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-stone-50 border border-stone-200 p-4">
                      <p className="text-xs font-bold text-teal-dark uppercase tracking-wider mb-1.5">Empresa</p>
                      <p className="text-sm text-text-primary/80">{clinicName}</p>
                    </div>
                    <div className="rounded-2xl bg-stone-50 border border-stone-200 p-4">
                      <p className="text-xs font-bold text-teal-dark uppercase tracking-wider mb-1.5">E-mail</p>
                      <a
                        href={`mailto:${clinicEmail}`}
                        className="text-sm text-teal-primary hover:text-teal-dark font-medium break-all transition-colors"
                      >
                        {clinicEmail}
                      </a>
                    </div>
                    <div className="rounded-2xl bg-stone-50 border border-stone-200 p-4">
                      <p className="text-xs font-bold text-teal-dark uppercase tracking-wider mb-1.5">Endereço</p>
                      <p className="text-sm text-text-primary/80 leading-snug">{clinicAddress}</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-gradient-to-r from-teal-dark/5 to-teal-primary/5 border border-teal-primary/15 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <p className="text-sm text-text-primary/70 flex-1 leading-relaxed">
                      Esta política é efetiva a partir de{' '}
                      <strong className="text-teal-dark">{effectiveDate}</strong>.
                    </p>
                    <Link
                      to="/politica-de-privacidade"
                      className="shrink-0 inline-flex items-center gap-2 bg-teal-primary hover:bg-teal-dark text-white text-sm font-semibold px-5 py-2.5 rounded-pill transition-colors whitespace-nowrap"
                    >
                      Política de Privacidade <ChevronRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </SectionBlock>

              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Reusable section block ── */
function SectionBlock({
  id,
  icon: Icon,
  title,
  shaded = false,
  children,
}: {
  id: string;
  icon: React.ElementType;
  title: string;
  shaded?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`p-8 md:p-12 border-b border-stone-100 last:border-b-0 ${shaded ? 'bg-stone-50/40' : ''}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-xl bg-cyan-light flex items-center justify-center shrink-0">
          <Icon size={18} className="text-teal-dark" aria-hidden="true" />
        </div>
        <h2 id={`${id}-heading`} className="text-xl md:text-2xl font-semibold text-teal-dark">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-text-primary/80 leading-relaxed text-[15px] md:text-base">
        {children}
      </div>
    </section>
  );
}
