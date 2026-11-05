# Plano de Reorganização e Padronização de Imagens

Padronização e reorganização semestral completa da biblioteca de imagens da clínica Souriê Odontologia, organizando 120 ativos em pastas semânticas com nomenclatura kebab-case estritamente padronizada por domínio, preservando 100% da integridade das rotas, componentes e SEO sem nenhuma alteração funcional ou visual.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Aguardando aprovação do usuário para a execução (Passo 4)**. Nenhuma imagem foi movida ou alterada até este momento. A aplicação será executada somente após você clicar em "Proceed" ou confirmar a aprovação deste plano.

- **Nomenclatura 100% Padronizada**: Nomes reformulados de forma uniforme e semântica:
  - *Equipe*: prefixos claros de titulação (`dr-breno.webp`, `dra-estefania.webp`, `dr-victor.webp`, `dra-beatriz.webp`, `dra-tayna.webp`, `dra-junia.webp`, `dra-maria-eduarda.webp`, `equipe-completa.webp`).
  - *Dentistas (Bentos & Casos)*: padrões uniformes `bento-1.webp`, `bento-2.webp`, `caso-aparelho-fixo.webp`, `caso-coroa.webp`, `caso-coroas-antes-depois.webp`, etc.
  - *Clínica*: nomes objetivos sobre o ambiente (`fachada-clinica.webp`, `consultorio-principal.webp`, `recepcao-interna.webp`, `scanner-3d-tecnologia.webp`, `banner-historia.webp`).
  - *Hero & Logo*: `hero-desktop.webp`, `hero-mobile.webp`, `logo-sourie.svg`.
  - *Depoimentos*: `paciente-fabiana.webp`, `paciente-ingrid.webp`, `paciente-jennifer.webp`.
  - *Arquivadas (Não Utilizadas)*: limpeza de hashes aleatórios e caracteres residuais, padronizados com clareza.
- **Distribuição entre pastas**: Confirmado pelo usuário — ativos consumidos por componentes React ficam em `src/assets/images/`, enquanto ativos estáticos de metadados de topo e favicon ficam em `public/`.
- **Destino de imagens não utilizadas**: Confirmado pelo usuário — subpastas dedicadas `nao-utilizadas/` (`src/assets/images/nao-utilizadas/` e `public/nao-utilizadas/`), sem apagar nenhum arquivo.
- **Identificação da profissional**: Padronizado para Maria Eduarda (`maria-eduarda/` e arquivos `dra-maria-eduarda.webp`, `planejamento-alimentar.webp`, etc.).
- **Transparência e segurança**: Operações atômicas de movimentação com checagem de integridade antes e depois do build.

---

## 1. Overview & Core Concept

- **O que faz**: Reestrutura a árvore de imagens em uma taxonomia modular clara, elegante e previsível, corrigindo todas as importações em arquivos TypeScript, TSX, HTML e SEO.
- **Público / Manutenibilidade**: Equipe de engenharia e mantenedores do projeto, proporcionando facilidade imediata para localizar qualquer foto ou caso clínico pelo nome semântico.
- **Valor Principal**: Elimina nomes longos, espaços, acentos, pontos fora de extensões e hashes gerados automaticamente, proporcionando padrão profissional de nível enterprise.

---

## 2. User Experience & Visual Design

- **Garantia de Fidelidade Visual**: Nenhuma alteração de CSS, Tailwind, dimensões, posições de corte (`object-position`), layouts ou lógica de renderização será efetuada.
- **Continuidade do LCP e SEO**: Metadados sociais (`og:image`), cartões Twitter, favicon do navegador e Structured Data JSON-LD permanecem com URLs preservadas.

---

## 3. Key Product Decisions & Trade-Offs

- **Padronização Semântica Estrita vs. Manter Nomes Originais**:
  - *Abordagem escolhida*: Em vez de apenas converter nomes existentes para minúsculas (o que mantinha nomes confusos como `close-up-de-dentes-com-aparelho-ortodontico.webp` ou `taynafoto.webp`), padronizamos semanticamente a convenção por domínio (`caso-aparelho-fixo.webp`, `dra-tayna.webp`, `fachada-clinica.webp`, etc.).
  - *Por que*: Atende com precisão o pedido de "renomeie mais padronizados os nomes das imagens e tal", tornando o código imensamente mais legível.
- **Isolamento de Imagens Não Utilizadas (`nao-utilizadas/`)**:
  - *Abordagem escolhida*: 55 arquivos sem referências ativas identificadas no código são realocados para subpastas dedicadas com nomes limpos.
  - *Por que*: Mantém todas as imagens disponíveis para uso futuro sem poluir as pastas do layout em produção.

---

## 4. Technical Architecture & Data Strategy

```
ESTRUTURA DE PASTAS PROPOSTA (NOMES PADRONIZADOS)
==================================================
public/
  ├── favicon.svg                   (Meta/Navegador)
  ├── og-image.webp                 (OpenGraph / Redes Sociais)
  ├── hero-image.webp               (Schema JSON-LD)
  ├── banner-historia.webp          (Banner público / AboutVideo)
  ├── robots.txt, sitemap.xml, llms.txt
  └── nao-utilizadas/               (19 imagens públicas órfãs arquivadas com segurança)

src/assets/images/
  ├── logo/                         (Identidade visual: logo-sourie.svg)
  ├── hero/                         (hero-desktop.webp, hero-mobile.webp)
  ├── equipe/                       (dr-breno, dra-estefania, dr-victor, dra-beatriz,
  │                                  dra-tayna, dra-junia, dra-maria-eduarda, equipe-completa)
  ├── dentistas/
  │   ├── breno/                    (bento-1, bento-tecnologia, bento-3, bento-4)
  │   ├── estefania/                (bento-1, caso-aparelho-fixo, caso-aparelho-ortopedico, caso-invisalign)
  │   ├── victor/                   (bento-1, bento-3, bento-4, caso-resultado)
  │   ├── beatriz/                  (bento-2, bento-3, caso-coroa, caso-coroas-antes-depois)
  │   ├── tayna/                    (bento-atendimento, caso-escovas-kids, caso-odontopediatria)
  │   ├── junia/                    (bento-atendimento, caso-mandibula, caso-bigode-chines)
  │   └── maria-eduarda/            (planejamento-alimentar, bento-consulta-2, bento-consulta-3, bento-consulta-4)
  ├── procedimentos/                (canal, cirurgias, clinica-geral, clinica-geral-landscape,
  │                                  estetica, odontopediatria, ortodontia, protese,
  │                                  proteses-implantes, hero-odontopediatria, hero-ortodontia)
  ├── clinica/                      (fachada-clinica, consultorio-principal, consultorio-atendimento,
  │                                  equipamentos-clinica, recepcao-interna, scanner-3d-tecnologia,
  │                                  atendimento-dr-victor, historia-fundacao, banner-historia, equipe-tecnologia)
  ├── depoimentos/                  (paciente-fabiana, paciente-ingrid, paciente-jennifer)
  └── nao-utilizadas/               (36 imagens src órfãs arquivadas com segurança)
```

---

## Tabela Completa de Migração Padronizada (120 Imagens)

### A. Imagens em Uso no Projeto (65 arquivos)

| # | Caminho Antigo | Novo Caminho Padronizado | Componentes que Utilizam |
|---|----------------|--------------------------|--------------------------|
| 1 | `public/HistoriaHero.webp` | `public/banner-historia.webp` | src/components/sections/AboutVideo.tsx |
| 2 | `public/favicon.svg` | `public/favicon.svg` | index.html, src/utils/SEOData.ts |
| 3 | `public/hero-image.webp` | `public/hero-image.webp` | src/utils/SEOData.ts |
| 4 | `public/og-image.webp` | `public/og-image.webp` | index.html, src/components/shared/SEO.tsx, src/utils/SEOData.ts |
| 5 | `src/assets/Close-up de dentes com aparelho ortodôntico.webp` | `src/assets/images/dentistas/estefania/caso-aparelho-fixo.webp` | src/pages/DentistPage.tsx |
| 6 | `src/assets/Coroas-antes-e-depois_Beatriz.webp` | `src/assets/images/dentistas/beatriz/caso-coroas-antes-depois.webp` | src/pages/DentistPage.tsx |
| 7 | `src/assets/DentistPage/Breno/Tecnologia.webp` | `src/assets/images/dentistas/breno/bento-tecnologia.webp` | src/pages/DentistPage.tsx |
| 8 | `src/assets/DentistPage/Breno/bento1.webp` | `src/assets/images/dentistas/breno/bento-1.webp` | src/pages/DentistPage.tsx |
| 9 | `src/assets/DentistPage/Breno/bento3.webp` | `src/assets/images/dentistas/breno/bento-3.webp` | src/pages/DentistPage.tsx |
| 10 | `src/assets/DentistPage/Breno/bento4.webp` | `src/assets/images/dentistas/breno/bento-4.webp` | src/pages/DentistPage.tsx |
| 11 | `src/assets/DentistPage/Estefania/bento1-estefania.webp` | `src/assets/images/dentistas/estefania/bento-1.webp` | src/pages/DentistPage.tsx |
| 12 | `src/assets/DentistPage/Victor/bento 1.webp` | `src/assets/images/dentistas/victor/bento-1.webp` | src/pages/DentistPage.tsx |
| 13 | `src/assets/DentistPage/Victor/bento 3.webp` | `src/assets/images/dentistas/victor/bento-3.webp` | src/pages/DentistPage.tsx |
| 14 | `src/assets/DentistPage/Victor/bento 4.webp` | `src/assets/images/dentistas/victor/bento-4.webp` | src/pages/DentistPage.tsx |
| 15 | `src/assets/DentistPage/Victor/resultado.webp` | `src/assets/images/dentistas/victor/caso-resultado.webp` | src/pages/DentistPage.tsx |
| 16 | `src/assets/HistoriaHero.webp` | `src/assets/images/clinica/banner-historia.webp` | src/components/sections/HeroSplit.tsx |
| 17 | `src/assets/Ingrid.webp` | `src/assets/images/depoimentos/paciente-ingrid.webp` | src/components/sections/BentoTestimonialsSection.tsx |
| 18 | `src/assets/Jennifer.webp` | `src/assets/images/depoimentos/paciente-jennifer.webp` | src/components/sections/BentoTestimonialsSection.tsx |
| 19 | `src/assets/Logo.svg` | `src/assets/images/logo/logo-sourie.svg` | src/components/sections/Footer.tsx, src/components/shared/Navbar.tsx |
| 20 | `src/assets/Procedimentos/Canal.webp` | `src/assets/images/procedimentos/canal.webp` | src/components/sections/ServicesSection.tsx, src/pages/InternalPage.tsx |
| 21 | `src/assets/Procedimentos/Cirurgias.webp` | `src/assets/images/procedimentos/cirurgias.webp` | src/components/sections/ServicesSection.tsx, src/pages/InternalPage.tsx |
| 22 | `src/assets/Procedimentos/Clinica-geral-landscape.webp` | `src/assets/images/procedimentos/clinica-geral-landscape.webp` | src/pages/InternalPage.tsx |
| 23 | `src/assets/Procedimentos/Clinica-geral.webp` | `src/assets/images/procedimentos/clinica-geral.webp` | src/components/sections/ServicesSection.tsx, src/pages/InternalPage.tsx |
| 24 | `src/assets/Procedimentos/Estetica.webp` | `src/assets/images/procedimentos/estetica.webp` | src/components/sections/ServicesSection.tsx, src/pages/InternalPage.tsx |
| 25 | `src/assets/Procedimentos/Odontopediatria.webp` | `src/assets/images/procedimentos/odontopediatria.webp` | src/components/sections/ServicesSection.tsx, src/pages/InternalPage.tsx |
| 26 | `src/assets/Procedimentos/Ortodontia.webp` | `src/assets/images/procedimentos/ortodontia.webp` | src/components/sections/ServicesSection.tsx, src/pages/InternalPage.tsx |
| 27 | `src/assets/Procedimentos/Protese.webp` | `src/assets/images/procedimentos/protese.webp` | src/components/sections/ServicesSection.tsx, src/pages/InternalPage.tsx |
| 28 | `src/assets/Tecnologia.webp` | `src/assets/images/clinica/scanner-3d-tecnologia.webp` | src/components/sections/AboutTimeline.tsx, src/components/sections/PainSolutionSection.tsx, src/pages/InternalPage.tsx |
| 29 | `src/assets/Victor-tratamento.webp` | `src/assets/images/clinica/atendimento-dr-victor.webp` | src/components/sections/AboutGallery.tsx, src/pages/InternalPage.tsx |
| 30 | `src/assets/alimentos.webp` | `src/assets/images/dentistas/maria-eduarda/planejamento-alimentar.webp` | src/pages/DentistPage.tsx |
| 31 | `src/assets/aparelho-ortopedico-Estefania.webp` | `src/assets/images/dentistas/estefania/caso-aparelho-ortopedico.webp` | src/pages/DentistPage.tsx |
| 32 | `src/assets/beatriz.webp` | `src/assets/images/equipe/dra-beatriz.webp` | src/components/sections/AboutTeam.tsx, src/components/sections/TeamSection.tsx, src/pages/DentistPage.tsx |
| 33 | `src/assets/beatriz2.webp` | `src/assets/images/dentistas/beatriz/bento-2.webp` | src/pages/DentistPage.tsx |
| 34 | `src/assets/beatriz3.webp` | `src/assets/images/dentistas/beatriz/bento-3.webp` | src/pages/DentistPage.tsx |
| 35 | `src/assets/breno.webp` | `src/assets/images/equipe/dr-breno.webp` | src/components/sections/AboutTeam.tsx, src/components/sections/TeamSection.tsx, src/pages/DentistPage.tsx |
| 36 | `src/assets/clinica-externa.webp` | `src/assets/images/clinica/fachada-clinica.webp` | src/components/sections/AboutGallery.tsx, src/components/sections/ClinicEnvironment.tsx, src/pages/InternalPage.tsx, src/pages/InternalPage.tsx |
| 37 | `src/assets/clinica-interna-1.webp` | `src/assets/images/clinica/consultorio-principal.webp` | src/components/sections/AboutTimeline.tsx, src/pages/DentistPage.tsx, src/pages/InternalPage.tsx |
| 38 | `src/assets/clinica-interna-2.webp` | `src/assets/images/clinica/consultorio-atendimento.webp` | src/components/sections/PainSolutionSection.tsx, src/pages/InternalPage.tsx |
| 39 | `src/assets/clinica-interna-3.webp` | `src/assets/images/clinica/equipamentos-clinica.webp` | src/components/sections/PainSolutionSection.tsx, src/pages/InternalPage.tsx |
| 40 | `src/assets/clinica-internamente.webp` | `src/assets/images/clinica/recepcao-interna.webp` | src/components/sections/AboutGallery.tsx |
| 41 | `src/assets/coroa.webp` | `src/assets/images/dentistas/beatriz/caso-coroa.webp` | src/pages/DentistPage.tsx |
| 42 | `src/assets/dra.junia.webp` | `src/assets/images/equipe/dra-junia.webp` | src/components/sections/AboutTeam.tsx, src/components/sections/TeamSection.tsx, src/pages/DentistPage.tsx |
| 43 | `src/assets/equipe-sem-fundo.webp` | `src/assets/images/equipe/equipe-completa.webp` | src/components/sections/AboutTeam.tsx, src/components/sections/TeamSection.tsx |
| 44 | `src/assets/equipe-tecnologia.webp` | `src/assets/images/clinica/equipe-tecnologia.webp` | src/components/sections/AboutGallery.tsx, src/pages/InternalPage.tsx |
| 45 | `src/assets/escovas-de-dente-kid.webp` | `src/assets/images/dentistas/tayna/caso-escovas-kids.webp` | src/pages/DentistPage.tsx |
| 46 | `src/assets/estefania.webp` | `src/assets/images/equipe/dra-estefania.webp` | src/components/sections/AboutTeam.tsx, src/components/sections/TeamSection.tsx, src/pages/DentistPage.tsx |
| 47 | `src/assets/fabiana.webp` | `src/assets/images/depoimentos/paciente-fabiana.webp` | src/components/sections/BentoTestimonialsSection.tsx |
| 48 | `src/assets/hero-mobile.webp` | `src/assets/images/hero/hero-mobile.webp` | src/components/sections/HeroSection.tsx |
| 49 | `src/assets/hero-section.webp` | `src/assets/images/hero/hero-desktop.webp` | src/components/sections/HeroSection.tsx |
| 50 | `src/assets/invisalign-img.webp` | `src/assets/images/dentistas/estefania/caso-invisalign.webp` | src/pages/DentistPage.tsx |
| 51 | `src/assets/junia-atendendo.webp` | `src/assets/images/dentistas/junia/bento-atendimento.webp` | src/pages/DentistPage.tsx |
| 52 | `src/assets/mulher-sorrindo-invisalign.webp` | `src/assets/images/procedimentos/hero-ortodontia.webp` | src/pages/InternalPage.tsx |
| 53 | `src/assets/nutri_mariana.webp` | `src/assets/images/equipe/dra-maria-eduarda.webp` | src/components/sections/AboutTeam.tsx, src/components/sections/TeamSection.tsx, src/pages/DentistPage.tsx |
| 54 | `src/assets/nutrimariana2.webp` | `src/assets/images/dentistas/maria-eduarda/bento-consulta-2.webp` | src/pages/DentistPage.tsx |
| 55 | `src/assets/nutrimariana3.webp` | `src/assets/images/dentistas/maria-eduarda/bento-consulta-3.webp` | src/pages/DentistPage.tsx |
| 56 | `src/assets/nutrimariana4.webp` | `src/assets/images/dentistas/maria-eduarda/bento-consulta-4.webp` | src/pages/DentistPage.tsx |
| 57 | `src/assets/odontopediatria-hero.webp` | `src/assets/images/procedimentos/hero-odontopediatria.webp` | src/pages/InternalPage.tsx |
| 58 | `src/assets/odontopediatria.webp` | `src/assets/images/dentistas/tayna/caso-odontopediatria.webp` | src/pages/DentistPage.tsx |
| 59 | `src/assets/proteses.webp` | `src/assets/images/procedimentos/proteses-implantes.webp` | src/components/sections/ServicesSection.tsx, src/pages/InternalPage.tsx |
| 60 | `src/assets/que-somos.webp` | `src/assets/images/clinica/historia-fundacao.webp` | src/components/sections/AboutTimeline.tsx |
| 61 | `src/assets/resultado-mandibula.webp` | `src/assets/images/dentistas/junia/caso-mandibula.webp` | src/pages/DentistPage.tsx |
| 62 | `src/assets/resultados-bigode-chines.webp` | `src/assets/images/dentistas/junia/caso-bigode-chines.webp` | src/pages/DentistPage.tsx |
| 63 | `src/assets/tayna.webp` | `src/assets/images/dentistas/tayna/bento-atendimento.webp` | src/pages/DentistPage.tsx |
| 64 | `src/assets/taynafoto.webp` | `src/assets/images/equipe/dra-tayna.webp` | src/components/sections/AboutTeam.tsx, src/components/sections/TeamSection.tsx, src/pages/DentistPage.tsx |
| 65 | `src/assets/victor.webp` | `src/assets/images/equipe/dr-victor.webp` | src/components/sections/AboutTeam.tsx, src/components/sections/TeamSection.tsx, src/pages/DentistPage.tsx |

---

### B. Imagens Não Utilizadas no Código (55 arquivos - Nenhuma será apagada)

| # | Caminho Antigo | Destino Seguro Padronizado | Status |
|---|----------------|----------------------------|--------|
| 1 | `public/Logo-Link.png` | `public/nao-utilizadas/logo-link.png` | Arquivada em subpasta segura |
| 2 | `public/Logo-Link.webp` | `public/nao-utilizadas/logo-link.webp` | Arquivada em subpasta segura |
| 3 | `public/assets/aistudio/Close-up_de_dentes_com_aparelho_ortod_ntico_463c28a7.webp` | `public/nao-utilizadas/legado-ia-close-up-de-dentes-com-aparelho-ortod-ntico.webp` | Arquivada em subpasta segura |
| 4 | `public/assets/aistudio/Coroas-antes-e-depois_Beatriz_caf533ae.webp` | `public/nao-utilizadas/legado-ia-coroas-antes-e-depois-beatriz.webp` | Arquivada em subpasta segura |
| 5 | `public/assets/aistudio/Extra__o_de_Siso_Impactado_em_Corte_Anat_mico_c3a5aea7.webp` | `public/nao-utilizadas/legado-ia-extra-o-de-siso-impactado-em-corte-anat-mico.webp` | Arquivada em subpasta segura |
| 6 | `public/assets/aistudio/Logo-Link_bf46ee5d.webp` | `public/nao-utilizadas/legado-ia-logo-link.webp` | Arquivada em subpasta segura |
| 7 | `public/assets/aistudio/aparelho-ortopedico-Estefania_50608c45.webp` | `public/nao-utilizadas/legado-ia-aparelho-ortopedico-estefania.webp` | Arquivada em subpasta segura |
| 8 | `public/assets/aistudio/bento1-estefania_2024acb3.webp` | `public/nao-utilizadas/legado-ia-bento1-estefania.webp` | Arquivada em subpasta segura |
| 9 | `public/assets/aistudio/breno_4b64f645.webp` | `public/nao-utilizadas/legado-ia-breno.webp` | Arquivada em subpasta segura |
| 10 | `public/assets/aistudio/children-sourie_b02dc2cb.jpeg` | `public/nao-utilizadas/legado-ia-children-sourie.jpeg` | Arquivada em subpasta segura |
| 11 | `public/assets/aistudio/coroa_0eb80be4.webp` | `public/nao-utilizadas/legado-ia-coroa.webp` | Arquivada em subpasta segura |
| 12 | `public/assets/aistudio/escovas-de-dente-kid_6cd5fc47.webp` | `public/nao-utilizadas/legado-ia-escovas-de-dente-kid.webp` | Arquivada em subpasta segura |
| 13 | `public/assets/aistudio/invisalign-img_4a7a716c.webp` | `public/nao-utilizadas/legado-ia-invisalign-img.webp` | Arquivada em subpasta segura |
| 14 | `public/assets/aistudio/taynafoto_ab9becb7.webp` | `public/nao-utilizadas/legado-ia-taynafoto.webp` | Arquivada em subpasta segura |
| 15 | `public/assets/coroa.webp` | `public/nao-utilizadas/coroa.webp` | Arquivada em subpasta segura |
| 16 | `public/children-sourie.webp` | `public/nao-utilizadas/children-sourie.webp` | Arquivada em subpasta segura |
| 17 | `public/icons.svg` | `public/nao-utilizadas/icons.svg` | Arquivada em subpasta segura |
| 18 | `public/odontopediatria-hero.webp` | `public/nao-utilizadas/odontopediatria-hero.webp` | Arquivada em subpasta segura |
| 19 | `public/og-image.png` | `public/nao-utilizadas/og-image.png` | Arquivada em subpasta segura |
| 20 | `src/assets/Cirurgias.webp` | `src/assets/images/nao-utilizadas/cirurgias.webp` | Arquivada em subpasta segura |
| 21 | `src/assets/DentistPage/Estefania/bento1.webp` | `src/assets/images/nao-utilizadas/estefania-bento1.webp` | Arquivada em subpasta segura |
| 22 | `src/assets/DentistPage/Estefania/bento2.webp` | `src/assets/images/nao-utilizadas/estefania-bento2.webp` | Arquivada em subpasta segura |
| 23 | `src/assets/DentistPage/Estefania/bento3.webp` | `src/assets/images/nao-utilizadas/estefania-bento3.webp` | Arquivada em subpasta segura |
| 24 | `src/assets/DentistPage/Estefania/bento4.webp` | `src/assets/images/nao-utilizadas/estefania-bento4.webp` | Arquivada em subpasta segura |
| 25 | `src/assets/DentistPage/Victor/bento 2.webp` | `src/assets/images/nao-utilizadas/victor-bento-2.webp` | Arquivada em subpasta segura |
| 26 | `src/assets/Ingrid.png` | `src/assets/images/nao-utilizadas/ingrid.png` | Arquivada em subpasta segura |
| 27 | `src/assets/Jennifer.jpg` | `src/assets/images/nao-utilizadas/jennifer.jpg` | Arquivada em subpasta segura |
| 28 | `src/assets/Logo-Link.webp` | `src/assets/images/nao-utilizadas/logo-link.webp` | Arquivada em subpasta segura |
| 29 | `src/assets/Ortodontia.webp` | `src/assets/images/nao-utilizadas/ortodontia.webp` | Arquivada em subpasta segura |
| 30 | `src/assets/Thais.png` | `src/assets/images/nao-utilizadas/thais.png` | Arquivada em subpasta segura |
| 31 | `src/assets/Thais.webp` | `src/assets/images/nao-utilizadas/thais.webp` | Arquivada em subpasta segura |
| 32 | `src/assets/beatriz1.webp` | `src/assets/images/nao-utilizadas/beatriz1.webp` | Arquivada em subpasta segura |
| 33 | `src/assets/children-sourie.webp` | `src/assets/images/nao-utilizadas/children-sourie.webp` | Arquivada em subpasta segura |
| 34 | `src/assets/clinica-interna-2.jpg` | `src/assets/images/nao-utilizadas/clinica-interna-2.jpg` | Arquivada em subpasta segura |
| 35 | `src/assets/clinica-interna-3.png` | `src/assets/images/nao-utilizadas/clinica-interna-3.png` | Arquivada em subpasta segura |
| 36 | `src/assets/clinica-interna-4.jpg` | `src/assets/images/nao-utilizadas/clinica-interna-4.jpg` | Arquivada em subpasta segura |
| 37 | `src/assets/estefania-atendendo.webp` | `src/assets/images/nao-utilizadas/estefania-atendendo.webp` | Arquivada em subpasta segura |
| 38 | `src/assets/fabiana.jpeg` | `src/assets/images/nao-utilizadas/fabiana.jpeg` | Arquivada em subpasta segura |
| 39 | `src/assets/fabiana.jpg` | `src/assets/images/nao-utilizadas/fabiana.jpg` | Arquivada em subpasta segura |
| 40 | `src/assets/hero-image-mobile.webp` | `src/assets/images/nao-utilizadas/hero-image-mobile.webp` | Arquivada em subpasta segura |
| 41 | `src/assets/hero-image.webp` | `src/assets/images/nao-utilizadas/hero-image.webp` | Arquivada em subpasta segura |
| 42 | `src/assets/logo sourie (1).svg` | `src/assets/images/nao-utilizadas/logo-sourie-variacao.svg` | Arquivada em subpasta segura |
| 43 | `src/assets/que-somos.jpg` | `src/assets/images/nao-utilizadas/que-somos.jpg` | Arquivada em subpasta segura |
| 44 | `src/assets/react.svg` | `src/assets/images/nao-utilizadas/react.svg` | Arquivada em subpasta segura |
| 45 | `src/assets/tayna-atendimento.webp` | `src/assets/images/nao-utilizadas/tayna-atendimento.webp` | Arquivada em subpasta segura |
| 46 | `src/assets/tayna.jpg` | `src/assets/images/nao-utilizadas/tayna.jpg` | Arquivada em subpasta segura |
| 47 | `src/assets/teethback.svg` | `src/assets/images/nao-utilizadas/teethback.svg` | Arquivada em subpasta segura |
| 48 | `src/assets/testimonial1.jpeg` | `src/assets/images/nao-utilizadas/testimonial1.jpeg` | Arquivada em subpasta segura |
| 49 | `src/assets/testimonial1.webp` | `src/assets/images/nao-utilizadas/testimonial1.webp` | Arquivada em subpasta segura |
| 50 | `src/assets/testimonial2.jpeg` | `src/assets/images/nao-utilizadas/testimonial2.jpeg` | Arquivada em subpasta segura |
| 51 | `src/assets/testimonial2.webp` | `src/assets/images/nao-utilizadas/testimonial2.webp` | Arquivada em subpasta segura |
| 52 | `src/assets/testimonial3.jpeg` | `src/assets/images/nao-utilizadas/testimonial3.jpeg` | Arquivada em subpasta segura |
| 53 | `src/assets/testimonial3.webp` | `src/assets/images/nao-utilizadas/testimonial3.webp` | Arquivada em subpasta segura |
| 54 | `src/assets/victor-scanner-3d.webp` | `src/assets/images/nao-utilizadas/victor-scanner-3d.webp` | Arquivada em subpasta segura |
| 55 | `src/assets/vite.svg` | `src/assets/images/nao-utilizadas/vite.svg` | Arquivada em subpasta segura |

---

## Roteiro de Aplicação (Após Aprovação)

1. **Criação dos Novos Diretórios**:
   - Criação recursiva de todas as subpastas em `src/assets/images/` e `public/nao-utilizadas/`.
2. **Movimentação Segura**:
   - Transferência dos 120 arquivos conforme a tabela padronizada acima.
3. **Atualização Atômica das Importações**:
   - Atualização de caminhos nos componentes:
     - `src/pages/DentistPage.tsx` (30 imports atualizados)
     - `src/pages/InternalPage.tsx` (18 imports atualizados)
     - `src/components/sections/ServicesSection.tsx` (8 imports atualizados)
     - `src/components/sections/AboutTeam.tsx` (8 imports atualizados)
     - `src/components/sections/TeamSection.tsx` (8 imports atualizados)
     - `src/components/sections/AboutGallery.tsx` (4 imports atualizados)
     - `src/components/sections/AboutTimeline.tsx` (3 imports atualizados)
     - `src/components/sections/PainSolutionSection.tsx` (3 imports atualizados)
     - `src/components/sections/BentoTestimonialsSection.tsx` (3 imports atualizados)
     - `src/components/sections/HeroSection.tsx` (2 imports atualizados)
     - `src/components/sections/HeroSplit.tsx` (1 import atualizado)
     - `src/components/sections/AboutVideo.tsx` (1 caminho atualizado)
     - `src/components/sections/ClinicEnvironment.tsx` (1 import atualizado)
     - `src/components/sections/Footer.tsx` (1 import atualizado)
     - `src/components/shared/Navbar.tsx` (1 import atualizado)
4. **Verificação & Testes de Integridade**:
   - Verificação cruzada automática de que todo import aponta para um arquivo físico existente no disco.
   - Execução do comando oficial de compilação (`compile_applet` / `npm run build`) para certificar 0 erros de compilação.
   - Geração do relatório final com resumo de alterações.
