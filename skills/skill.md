@@ -0,0 +1,876 @@
# Guia de Design e Desenvolvimento Premium

Este documento consolida os princípios, padrões e diretrizes essenciais para a criação de interfaces de usuário e experiências digitais de alta qualidade, com foco em um design premium e funcionalidade robusta. Ele serve como uma referência abrangente para garantir consistência, elegância e eficácia em todos os projetos.

---

## Princípios de Design

> Filosofia visual central. Toda decisão de interface deve passar por estes princípios antes de ser implementada.

### 1. Premium por Subtração
A qualidade visual nasce do que você **remove**, não do que adiciona. Cada elemento na tela deve justificar sua existência. Se não comunica, não guia ou não converte — elimine.

- Menos elementos = mais impacto por elemento
- Espaço vazio é um recurso de design, não desperdício
- Um layout com 5 elementos bem posicionados supera um com 15 elementos medianos

### 2. Hierarquia Visual Implacável
O olho do usuário deve seguir um caminho claro e intencional. Nunca deixe o usuário "procurar" o que importa.

- **Um único ponto focal por seção** — título, imagem ou CTA, nunca os três competindo
- Contraste de escala: o elemento principal deve ter no mínimo 2x o tamanho visual do secundário
- Fluxo natural: título → subtítulo → conteúdo → ação
- Profundidade visual com layers sutis (não sombras pesadas, mas separação por cor/opacidade)

### 3. Ritmo e Respiração
A interface deve ter cadência. Seções alternando entre densidade e respiro criam ritmo visual que mantém o usuário engajado sem fadiga.

- Alternar seções densas (conteúdo, cards) com seções amplas (hero, destaques)
- Espaçamento consistente entre blocos — nunca aleatório
- Transições suaves entre seções (gradientes sutis, linhas divisórias elegantes ou simplesmente whitespace generoso)

### 4. Elegância Silenciosa
O design premium não grita. Ele sussurra com confiança. Evite qualquer elemento que pareça "forçado" ou "decorativo sem função".

- Cores sóbrias com acentos estratégicos — nunca mais que 2 cores de destaque
- Animações sutis (200-400ms) que adicionam polimento, não distração
- Bordas finas ou inexistentes — a separação deve vir do espaço e contraste de cor
- Ícones monocromáticos e discretos, nunca coloridos ou ilustrativos demais

### 5. Consistência Absoluta
Um produto premium é reconhecível em qualquer tela. A consistência não é opcional — é a fundação da confiança visual.

- Mesmos radius, mesmas sombras, mesmos espaçamentos em todo o projeto
- Paleta de cores restrita e aplicada com disciplina
- Tipografia com no máximo 2 fontes (1 display + 1 body) e pesos controlados
- Componentes reutilizáveis com variações previsíveis

### 6. Mobile-First com Elegância em Ambos
Não adapte desktop para mobile — projete mobile primeiro e expanda para desktop. A versão mobile deve ser tão refinada quanto a desktop.

- Touch targets generosos (mínimo 44px)
- Tipografia que respira em telas pequenas
- Navegação simplificada sem perder a identidade visual
- Imagens e assets otimizados por breakpoint

### 7. Intencionalidade em Cada Pixel
Nada é acidental. Cada decisão — cor, tamanho, posição, espaço — deve ter um motivo claro.

- Alinhamento matemático, não visual "mais ou menos"
- Grid consistente (8px base system)
- Proporções harmônicas entre elementos
- Peso visual equilibrado na composição geral

---

## Anti-Padrões de Design

> Erros comuns que degradam a qualidade e a percepção de um design. Evite-os a todo custo.

### 🚫 Tipografia

| Anti-pattern | Correção |
|---|---|
| Mais de 2 famílias de fontes | Máximo 2 famílias (1 display + 1 body) |
| `font-weight: 300` (light) para texto de corpo | Usar `font-weight: 400` (regular) ou `500` (medium) |
| Texto menor que `12px` | Mínimo `12px` para captions, `14px` para texto auxiliar |
| Títulos sem diferença clara de tamanho | Usar escala tipográfica consistente (ex: Major Third) |
| Parágrafos sem `max-width` | `max-width: 680px` para leitura confortável |
| Mesma cor e peso para título e body text | Usar hierarquia de cor e peso (primário, secundário, terciário) |
| `letter-spacing` positivo em títulos display | `letter-spacing` negativo (`-0.01em` a `-0.03em`) |
| `line-height` apertado (`< 1.4`) em parágrafos | `line-height: 1.5` a `1.7` para conforto de leitura |
| Elementos flutuando sem alinhamento de grid | Tudo alinhado ao grid de 8px |
| Seções sem whitespace entre elas | Mínimo `80px` de separação visual |

### 🚫 Cores e Contraste

| Anti-pattern | Correção |
|---|---|
| Branco puro `#FFFFFF` como background | Off-whites: `#FAFAFA`, `#F5F5F7`, `#FEFEFE` |
| Preto puro `#000000` para texto | Usar `#1D1D1F`, `#111111` |
| Mais de 3 cores de destaque | Uma accent color + variação (lighter/darker) |
| Texto claro sobre fundo claro | Contraste mínimo 4.5:1 (WCAG AA) |
| Cores neon ou hipersaturadas | Saturação controlada, tons que não "gritam" |
| Backgrounds cinza médio (`#888`, `#999`) | Cinzas devem ser muito claros ou muito escuros |
| Gradiente que muda completamente de cor | Gradientes entre tons próximos da mesma família |
| Vermelho, amarelo, verde primários para UI | Tons ajustados: vermelho → `#EF4444`, não `#FF0000` |

### 🚫 Sombras e Bordas

| Anti-pattern | Correção |
|---|---|
| `box-shadow` com opacidade > `0.2` | Máximo `0.1` para composição, `0.15` para elementos elevados |
| Sombra em apenas uma camada | Usar 2 camadas (blur curto + blur longo) |
| Bordas de `2px+` em containers | Máximo `1px`, cor com baixa opacidade |
| `border-radius: 4px` genérico em tudo | Sistema consistente: `8-12px` botões, `12-16px` cards |
| `border: 1px solid #ccc` em tudo | Bordas contextuais: inputs sim, cards preferencialmente não |
| `outline: none` sem substituto de focus | Sempre fornecer `focus-visible` ring acessível |
| Sombras coloridas saturadas | Sombras em preto com baixa opacidade ou accent ultra-sutil |

### 🚫 Componentes Mal Construídos

#### Botões
- ❌ Botão com 4+ palavras de texto
- ❌ Botão sem hover state
- ❌ Botão sem `min-height` de `44px`
- ❌ Todos os botões com o mesmo estilo (sem hierarquia primary/secondary/ghost)
- ❌ Botão com ícone + texto + ícone (sobrecarregado)
- ❌ Botão com `border-radius: 0` (parece input, não botão)

#### Cards
- ❌ Cards com alturas diferentes no mesmo grid
- ❌ Cards sem padding interno adequado (`< 20px`)
- ❌ Cards com 5+ elementos competindo por atenção
- ❌ Cards sem hover state quando são clicáveis
- ❌ Imagem no card sem `object-fit: cover`

#### Navbar
- ❌ Navbar com mais de 6 links
- ❌ Navbar sem CTA visualmente diferente dos links
- ❌ Navbar que não muda de estilo ao scroll
- ❌ Menu mobile que é apenas os links empilhados sem tratamento
- ❌ Logo com altura inconsistente (muito grande ou pequeno)

#### Forms
- ❌ Inputs sem labels (placeholder não é label)
- ❌ Inputs com altura < `40px`
- ❌ Inputs com `font-size < 16px` (causa zoom em iOS)
- ❌ Botão de submit com mesmo estilo visual de campos
- ❌ Mensagens de erro em vermelho puro `#FF0000`

### 🚫 Animações e Interações

| Anti-pattern | Correção |
|---|---|
| Animações com duração > `500ms` | `150ms-350ms` para micro-interações |
| `transition: all` em elementos complexos | Especificar propriedades: `transform, opacity, box-shadow` |
| `animation: linear` | Usar `ease-out` ou `cubic-bezier(0.4, 0, 0.2, 1)` |
| Hover com `transform: scale(1.1)` | Máximo `scale(1.02-1.03)` ou `translateY(-2px)` |
| Bounce animations | Bouncing é para jogos, não para produtos premium |
| Parallax exagerado | Parallax sutil (`translateY` de poucos px) ou nenhum |
| Animações que bloqueiam interação | Animações devem ser non-blocking |
| Scroll-triggered animations que repetem | Animar apenas uma vez, na primeira visualização |

### 🚫 Padrões "Cara de IA"

Estes são os sinais mais comuns de que uma interface foi gerada por IA sem direção de design:

1.  **Simetria perfeita artificial** — Tudo exatamente centralizado, sem variação. Quebre com alinhamentos intencionais à esquerda.
2.  **Seções idênticas repetidas** — Todas as seções com exatamente a mesma estrutura. Alterne layouts, backgrounds e composições.
3.  **Cores "seguras" demais** — Azul genérico + cinza. Defina uma paleta com personalidade.
4.  **Conteúdo que parece IA** — "Innovative solutions for modern businesses". Escreva conteúdo específico e humano.
5.  **Tudo com o mesmo peso visual** — Sem hierarquia, tudo parece igualmente importante. Defina 1 foco por seção.
6.  **Grid perfeitamente uniforme sem variação** — 3 cards, 3 cards, 3 cards. Intercale com seções de layout diferente.
7.  **Decorações sem função** — Blobs, círculos, ondas aleatórias. Cada elemento visual deve ter propósito.
8.  **Excesso de ícones** — Ícones em tudo: bullets, cards, títulos. Use ícones apenas quando adicionam clareza.
9.  **Bordas arredondadas excessivas** — Tudo com `border-radius: 9999px`. Use radius consistente e moderado.
10. **Gradientes vibrantes sem justificativa** — Gradiente roxo-para-rosa "porque fica bonito". Gradientes devem seguir a paleta definida.

**Regra Final:** Se ao olhar para a interface você conseguir dizer "isso foi feito por uma IA" — refaça. O objetivo é que pareça feito por um designer sênior que se importa com cada detalhe.

---

## Padrões de Componentes

> Diretrizes para a construção de componentes de UI, garantindo consistência e qualidade.

### Botões

#### Especificações
```css
/* Botão base */
.button {
  font-size: 14px-16px;
  font-weight: 500-600;
  padding: 12px 24px;
  border-radius: 8px-12px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
/* Hover — Primary */
.button-primary:hover {
  filter: brightness(1.08);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(accent, 0.2);
}
/* Active */
.button:active {
  transform: translateY(0) scale(0.98);
}
```

#### Tamanhos

| Tamanho | Padding | Font-size | Min-height |
|---|---|---|---|
| Small | `8px 16px` | `13px-14px` | `36px` |
| Medium | `12px 24px` | `14px-15px` | `44px` |
| Large | `16px 32px` | `16px` | `52px` |

#### Regras
- **Texto curto:** 2-3 palavras. "Agendar consulta", não "Clique aqui para agendar sua consulta"
- **Ícones:** À esquerda ou direita do texto, nunca sozinhos (exceto icon buttons)
- **Full-width:** Apenas em mobile para CTAs principais
- Mínimo `44px` de altura para touch targets

### Cards

#### Estrutura Base
```
┌──────────────────────────┐
│  [Imagem — opcional]     │
│                          │
│  [Overline/Tag]          │
│  [Título]                │
│  [Descrição — 2 linhas]  │
│                          │
│  [Link/CTA — opcional]   │
└──────────────────────────┘
```

#### Especificações
- **Padding interno:** `24px-32px`
- **Border-radius:** `12px-16px`
- **Background:** Levemente diferente do fundo da seção (`+2-3%` luminosidade)
- **Borda:** `1px solid rgba(0,0,0,0.06)` ou nenhuma
- **Sombra:** Sutil (ver ui-rules.md)
- **Hover:** `translateY(-2px)` + sombra elevada + transição `0.2s`
- **Imagem no card:** Radius igual ao card (com overflow hidden) ou `radius - padding`

#### Regras
- Todos os cards em um grid devem ter **mesma altura** (`align-items: stretch`)
- Descrição limitada a **2-3 linhas** — use `line-clamp`
- Se tem CTA, ele fica no bottom do card (use flexbox com `margin-top: auto`)
- Título do card: `H3` ou `H4`, nunca igual ao título da seção

### Seções (Sections)

#### Estrutura Padrão
```
┌──────────────────────────────────────┐
│                                      │
│           [Overline]                 │
│        [Título da Seção]             │
│          [Subtítulo]                 │
│                                      │
│    [Conteúdo — cards, grid, etc]     │
│                                      │
│           [CTA — opcional]           │
│                                      │
└──────────────────────────────────────┘
```

#### Especificações
- **Padding vertical:** `80px-120px`
- **Título → conteúdo:** `48px-64px`
- **Overline:** `12px`, uppercase, `letter-spacing: 0.06em`, cor de accent ou secundária
- **Background alternado:** Alternar seções entre background primário e secundário para criar ritmo
- **Alinhamento do header:** Centralizado ou à esquerda — consistente em toda a página

#### Regras
- **Uma seção = um objetivo** — não misture propósitos
- Header da seção (overline + título + subtítulo) deve ter `max-width: 680px` quando centralizado
- CTAs de seção vêm **após** o conteúdo, com `margin-top: 40px-48px`

### Formulários (Forms)

#### Especificações de Input
- **Altura:** `44px-48px`
- **Padding:** `12px 16px`
- **Border-radius:** `8px-10px`
- **Borda default:** `1px solid rgba(0,0,0,0.12)`
- **Borda focus:** `2px solid [accent-color]` + `box-shadow: 0 0 0 3px rgba(accent, 0.1)`
- **Font-size:** `16px` (evita zoom em iOS)
- **Label:** Acima do input, `14px`, `font-weight: 500`, `margin-bottom: 6px-8px`
- **Placeholder:** Cor terciária, nunca substituto de label

#### Layout de Form
- **Largura máxima:** `480px-560px` para forms simples
- **Gap entre campos:** `20px-24px`
- **Botão submit:** Full-width dentro do form ou alinhado à direita
- **Mensagens de erro:** `13px`, cor vermelha suave (não vermelho puro), abaixo do input com `4px` de gap

### Seções de CTA (CTA Sections)

#### Estrutura
```
┌──────────────────────────────────────┐
│  ┌────────────────────────────────┐  │
│  │                                │  │
│  │     [Título impactante]        │  │
│  │     [Subtítulo motivador]      │  │
│  │     [Botão CTA primário]       │  │
│  │                                │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

#### Especificações
- **Background:** Diferenciado — cor de accent suave, gradiente ou card elevado
- **Padding:** Generoso — `64px-80px` vertical
- **Título:** `H2` ou `H1`, impactante e direto
- **Centralizado** sempre
- **Isolado:** Muito whitespace ao redor

### Rodapé (Footer)

#### Especificações
- **Background:** Escuro (mesmo em light mode) ou neutro diferenciado
- **Padding vertical:** `64px-80px` top, `24px-32px` bottom (abaixo do copyright)
- **Layout:** Grid com 3-4 colunas desktop, stack em mobile
- **Títulos de coluna:** `14px`, `font-weight: 600`, uppercase ou semibold
- **Links:** `14px`, cor secundária clara, hover com opacidade ou cor de accent
- **Copyright:** `13px`, cor terciária, separado por `border-top: 1px` sutil
- **Logo no footer:** Versão monocromática ou em cor clara

---

## Regras de UI

> Regras práticas e inegociáveis para construção visual. Aplique em cada componente, seção e página sem exceção.

### Cores

#### Paleta Base
- **Background principal:** Nunca branco puro (`#FFFFFF`). Use off-whites como `#FAFAFA`, `#F8F8F8` ou `#FEFEFE`
- **Background secundário:** Tons neutros suaves — `#F2F2F2`, `#F5F5F7` (Apple-style)
- **Texto principal:** Nunca preto puro (`#000000`). Use `#1D1D1F`, `#111111` ou `#0A0A0A`
- **Texto secundário:** `#6E6E73`, `#86868B` — suficientemente legível, visualmente discreto
- **Accent color:** Uma única cor de destaque. Saturação controlada, nunca neon

#### Regras de Aplicação
- Máximo **3 tons neutros** + **1 cor de destaque** + **1 variação da cor de destaque**
- Backgrounds com gradientes sutis são permitidos: variação máxima de 2-3% entre pontos
- Dark mode: backgrounds `#0A0A0A`, `#111111`, `#1A1A1A` — nunca cinzas médios
- Contraste mínimo WCAG AA (4.5:1 para texto, 3:1 para elementos grandes)

### Bordas e Separadores
- **Bordas de containers:** `1px solid` com opacidade baixa — `rgba(0,0,0,0.06)` a `rgba(0,0,0,0.1)`
- **Nunca** use bordas com cores fortes ou saturadas em containers
- Prefira separação por **espaço e contraste de background** ao invés de linhas
- Quando usar linhas divisórias: `1px`, cor `rgba(0,0,0,0.05)`, nunca full-width (use padding lateral)

### Border Radius
Sistema consistente — escolha UM padrão e mantenha:

| Elemento | Radius |
|---|---|
| Botões | `8px` a `12px` |
| Cards | `12px` a `16px` |
| Inputs | `8px` a `10px` |
| Modais | `16px` a `20px` |
| Badges/Tags | `6px` ou `full` (pill) |
| Imagens em cards | Mesmo radius do card |

**Regra:** O radius de um elemento filho nunca deve ser maior que o do pai.

### Sombras
Sombras premium são quase invisíveis individualmente, mas criam profundidade no conjunto.
```css
/* Sombra sutil — cards e containers */
box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04);
/* Sombra média — elementos elevados, dropdowns */
box-shadow: 0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06);
/* Sombra hover — elevação interativa */
box-shadow: 0 4px 8px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.08);
/* NUNCA usar: */
box-shadow: 0 10px 30px rgba(0,0,0,0.3); /* Muito pesada */
```

**Regras:**
- Use sombras em **2 camadas** (blur curto + blur longo) para realismo
- Opacidade total da sombra nunca acima de `0.12`
- Sombras coloridas são permitidas apenas com a cor de accent, em opacidade muito baixa

### Alinhamento e Grid
- **Grid base:** sistema de 8px — todo espaçamento é múltiplo de 8
- **Container máximo:** `1200px` a `1440px`, centralizado
- **Padding lateral do container:** `24px` mobile, `40px` tablet, `80px` desktop
- Alinhamento à esquerda para texto. Centralizado apenas para hero sections e CTAs
- Nunca justifique texto
- Elementos devem se alinhar a uma grid invisível — se dois blocos estão na mesma seção, suas bordas laterais devem coincidir

### Contraste e Legibilidade
- Texto sobre imagem: **sempre** com overlay escuro (`rgba(0,0,0,0.4)` mínimo) ou claro
- Texto pequeno (< 14px): deve ter contraste mínimo de 7:1
- Nunca coloque texto colorido sobre background colorido
- Links inline devem ter `underline` ou peso diferente — cor sozinha não basta

### Transições e Animações
```css
/* Transição padrão para hover/focus */
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
/* Transição para entrada de elementos */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
/* Transição para modais/overlays */
transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
```

- **Duração:** 150ms-350ms. Nunca acima de 500ms para micro-interações
- **Easing:** Sempre `ease-out` ou cubic-bezier suave. Nunca `linear`
- **Propriedades:** Anime `transform` e `opacity` preferencialmente (GPU-accelerated)
- **Hover em cards:** `translateY(-2px)` + sombra elevada. Sutil, não dramático
- **Hover em botões:** mudança de luminosidade/saturação, não de cor completamente
- **Scroll animations:** `fade-in` + `translateY(20px)` — entrada de baixo para cima, suave

### Estados Interativos
Todo elemento clicável deve ter 4 estados visualmente distintos:
1.  **Default:** Estado normal, neutro
2.  **Hover:** Feedback sutil — mudança de cor, elevação ou opacidade
3.  **Active/Pressed:** Feedback de toque — leve `scale(0.98)` ou escurecimento
4.  **Disabled:** Opacidade `0.4`-`0.5`, cursor `not-allowed`, sem hover effect

### Responsividade

| Breakpoint | Largura | Comportamento |
|---|---|---|
| Mobile | `< 640px` | Stack vertical, 1 coluna, tipografia reduzida |
| Tablet | `640px - 1024px` | 2 colunas, espaçamentos intermediários |
| Desktop | `> 1024px` | Layout completo, espaçamentos generosos |

- Imagens devem usar `object-fit: cover` e nunca distorcer
- Grids de cards: 1 col mobile → 2 col tablet → 3-4 col desktop
- Hero sections: texto centralizado em mobile, lado a lado em desktop
- Menu: hamburger em mobile/tablet, inline em desktop

---

## Sistema de Tipografia

> A tipografia é responsável por 80% da percepção de qualidade de uma interface. Um sistema tipográfico bem definido transforma qualquer layout de "genérico" para "premium".

### Fontes Recomendadas

#### Combinações Premium (Google Fonts)

**Opção 1 — Elegância moderna (recomendada)**
- Display/Títulos: **Inter** (weight 600-700)
- Body: **Inter** (weight 400-500)
- Vantagem: Família única, coesa, otimizada para telas

**Opção 2 — Sofisticação editorial**
- Display/Títulos: **Outfit** (weight 500-700)
- Body: **Inter** (weight 400)
- Vantagem: Outfit tem personalidade sem perder legibilidade

**Opção 3 — Premium com serifa**
- Display/Títulos: **Playfair Display** (weight 500-700)
- Body: **Inter** ou **DM Sans** (weight 400)
- Vantagem: Contraste clássico serif + sans-serif, ideal para luxury

**Opção 4 — Clean e contemporâneo**
- Display/Títulos: **Sora** (weight 500-700)
- Body: **DM Sans** (weight 400-500)
- Vantagem: Geométrica mas humana, excelente para tech/SaaS

#### Regra de Ouro
- **Nunca mais que 2 famílias tipográficas** por projeto
- **Nunca mais que 3 pesos** por família (regular, medium, semibold/bold)
- Carregue apenas os pesos que vai usar — performance importa

### Escala Tipográfica
Sistema baseado em **Major Third (1.25)** — harmônico e versátil.

#### Desktop

| Nível | Tamanho | Peso | Line-height | Letter-spacing | Uso |
|---|---|---|---|---|---|
| Display | `56px-72px` | 700 | `1.1` | `-0.02em` | Hero headlines |
| H1 | `40px-48px` | 700 | `1.15` | `-0.02em` | Títulos de seção |
| H2 | `32px-36px` | 600 | `1.2` | `-0.015em` | Subtítulos de seção |
| H3 | `24px-28px` | 600 | `1.3` | `-0.01em` | Títulos de cards/blocos |
| H4 | `20px` | 600 | `1.4` | `0` | Labels, categorias |
| Body Large | `18px` | 400 | `1.6` | `0` | Texto de destaque, leads |
| Body | `16px` | 400 | `1.6` | `0` | Texto padrão |
| Body Small | `14px` | 400 | `1.5` | `0.01em` | Texto auxiliar, captions |
| Caption | `12px` | 500 | `1.4` | `0.02em` | Labels, metadata |
| Overline | `11px-12px` | 600 | `1.3` | `0.08em` | Categorias, tags (UPPERCASE) |

#### Mobile (redução proporcional)

| Nível | Tamanho | Ajuste |
|---|---|---|
| Display | `36px-44px` | Reduzido significativamente |
| H1 | `30px-36px` | |
| H2 | `24px-28px` | |
| H3 | `20px-22px` | |
| Body | `16px` | Mantém (mínimo legível em mobile) |
| Body Small | `14px` | Mantém |

### Regras de Aplicação

#### Hierarquia com Peso
- Títulos: **Semibold (600) ou Bold (700)** — nunca light para títulos
- Subtítulos: **Medium (500) ou Semibold (600)**
- Body text: **Regular (400)** — nunca bold para parágrafos inteiros
- Labels/Captions: **Medium (500)** — peso extra compensa o tamanho menor

#### Hierarquia com Cor
Combine peso com cor para criar camadas visuais:
- **Primário:** `#1D1D1F` — títulos e texto principal
- **Secundário:** `#6E6E73` — subtítulos e texto de suporte
- **Terciário:** `#86868B` — captions, metadata, placeholders
- **Accent:** Cor de destaque — apenas para links, CTAs e destaques pontuais

#### Line-height (entrelinhas)
- Títulos grandes: `1.1` a `1.2` — compacto, impactante
- Subtítulos: `1.2` a `1.3`
- Body text: `1.5` a `1.7` — conforto de leitura
- **Nunca** use line-height `1.0` — causa sensação de sufocamento

#### Letter-spacing
- Títulos grandes: **negativo** (`-0.01em` a `-0.03em`) — traz coesão
- Body text: `0` ou levíssimo positivo
- Uppercase/Overline: **positivo** (`0.05em` a `0.1em`) — obrigatório para legibilidade
- **Nunca** use letter-spacing positivo em títulos grandes — parece amador

#### Largura Máxima de Texto
- Parágrafos: `max-width: 680px` — ideal para leitura confortável
- Headlines: `max-width: 800px` — permite impacto sem quebra estranha
- **Nunca** deixe texto correndo de ponta a ponta em telas largas

### Responsividade Tipográfica
Use `clamp()` para transições fluidas entre breakpoints:
```css
/* Display */
font-size: clamp(2.25rem, 5vw, 4.5rem);
/* H1 */
font-size: clamp(1.875rem, 4vw, 3rem);
/* H2 */
font-size: clamp(1.5rem, 3vw, 2.25rem);
/* Body Large */
font-size: clamp(1rem, 1.2vw, 1.125rem);
```
**Regra:** O `clamp()` deve ter um mínimo que funcione em 320px e um máximo para 1440px+.

### Erros Fatais em Tipografia
- ❌ Usar mais de 2 famílias de fontes
- ❌ Usar `font-weight: 300` (light) para texto de corpo — ilegível em muitas telas
- ❌ Texto menor que `12px` em qualquer contexto
- ❌ Títulos sem diferença clara de tamanho em relação ao body
- ❌ Parágrafos sem `max-width` — linhas longas demais destroem a leitura
- ❌ Usar a mesma cor e peso para título e body text
- ❌ Letter-spacing positivo em títulos display
- ❌ Line-height apertado (`< 1.4`) em parágrafos

---

## Espaçamento e Layout

> O espaçamento é a base de um bom design. Ele cria hierarquia, legibilidade e uma sensação de calma. Um sistema de espaçamento consistente é crucial para uma interface premium.

### Sistema de Espaçamento (Base 8px)

Todos os espaçamentos (margens, paddings, gaps) devem ser múltiplos de 8px.

| Token | Valor | Uso Comum |
|---|---|---|
| `space-1` | `4px` | Espaçamento mínimo, entre ícone e texto |
| `space-2` | `8px` | Espaçamento entre itens de lista, botões pequenos |
| `space-3` | `12px` | Padding vertical de botões, entre label e input |
| `space-4` | `16px` | Padding horizontal de botões, entre parágrafos |
| `space-5` | `24px` | Gap entre colunas de grid (mobile), padding de cards |
| `space-6` | `32px` | Espaço entre blocos de conteúdo, padding de uma seção |
| `space-7` | `40px` | Padding lateral de container (tablet) |
| `space-8` | `48px` | Espaço entre título e conteúdo de seção |
| `space-9` | `64px` | Margem entre seções menores |
| `space-10` | `80px` | Padding lateral de container (desktop) |
| `space-11` | `96px` | Espaço vertical entre seções principais |
| `space-12` | `120px` | Espaço generoso entre seções hero/destaque |
| `space-13` | `160px` | Padding vertical de hero sections |

### Layout de Container
```css
.container {
  width: 100%;
  max-width: 1200px;        /* Conteúdo principal */
  margin: 0 auto;
  padding-left: 24px;       /* Mobile */
  padding-right: 24px;
}
@media (min-width: 768px) {
  .container {
    padding-left: 40px;     /* Tablet */
    padding-right: 40px;
  }
}
@media (min-width: 1024px) {
  .container {
    padding-left: 80px;     /* Desktop */
    padding-right: 80px;
  }
}
```

#### Variantes de Container

| Tipo | Max-width | Uso |
|---|---|---|
| Narrow | `720px` | Texto longo, artigos, formulários |
| Default | `1200px` | Layout padrão, grids, seções |
| Wide | `1400px` | Grids de imagens, portfolios |
| Full | `100%` | Hero sections, backgrounds edge-to-edge |

### Espaçamento Vertical entre Seções
A distância entre seções define o ritmo da página. **Generosidade aqui é obrigatória.**
```
┌─────────────────────────────┐
│      Hero Section           │
│   padding: 120px-160px      │
│      vertical               │
└─────────────────────────────┘
         ↕ 96px-120px
┌─────────────────────────────┐
│    Content Section          │
│   padding: 80px-96px        │
│      vertical               │
└─────────────────────────────┘
         ↕ 80px-96px
┌─────────────────────────────┐
│    Content Section          │
│   padding: 80px-96px        │
│      vertical               │
└─────────────────────────────┘
         ↕ 96px-120px
┌─────────────────────────────┐
│      CTA / Footer           │
│   padding: 96px-120px       │
│      vertical               │
└─────────────────────────────┘
```

#### Regras de Espaçamento Vertical
- **Hero section:** `padding-top: 120px+`, `padding-bottom: 80px+`
- **Seções de conteúdo:** `padding: 80px 0` a `padding: 96px 0`
- **Entre título de seção e conteúdo:** `48px` a `64px`
- **Entre subtítulo e parágrafo:** `16px` a `24px`
- **Mobile:** Reduza verticais em ~30-40%, nunca abaixo de `48px` entre seções

### Grid de Cards e Conteúdo

#### Grid Responsivo
```css
.grid {
  display: grid;
  gap: 24px;                              /* Mobile: gap menor */
  grid-template-columns: 1fr;            /* Mobile: 1 coluna */
}
@media (min-width: 640px) {
  .grid {
    gap: 28px;
    grid-template-columns: repeat(2, 1fr);  /* Tablet: 2 colunas */
  }
}
@media (min-width: 1024px) {
  .grid {
    gap: 32px;
    grid-template-columns: repeat(3, 1fr);  /* Desktop: 3 colunas */
  }
}
```

#### Regras de Grid
- **Gap mínimo entre cards:** `20px` — abaixo disso parece apertado
- **Gap recomendado:** `24px-32px`
- **Cards de texto:** máximo 3-4 colunas
- **Cards de imagem:** até 4 colunas, imagens devem manter aspect-ratio
- **Grid assimétrico** (70/30, 60/40): use para quebrar monotonia em seções alternadas

### Espaçamento Interno (Padding de Componentes)

| Componente | Padding |
|---|---|
| Botão pequeno | `8px 16px` |
| Botão padrão | `12px 24px` |
| Botão grande | `16px 32px` |
| Card | `24px` a `32px` |
| Input | `12px 16px` |
| Navbar | `16px 0` (vertical) + container padding (horizontal) |
| Modal | `32px` a `40px` |
| Badge/Tag | `4px 12px` |
| Section | `80px 0` (vertical) + container (horizontal) |

### Whitespace: A Arma Secreta

#### Princípios
1.  **Quanto mais importante o elemento, mais espaço ao redor** — isolar cria importância
2.  **Elementos relacionados ficam próximos** (Lei da Proximidade de Gestalt)
3.  **Margem entre grupos > margem dentro de grupos** — sempre
4.  **Whitespace não precisa ser branco** — pode ser qualquer cor de background

#### Aplicação Prática
```
❌ ERRADO (apertado):
[Título]
[Subtítulo]
[Card][Card][Card]
[Botão]
✅ CORRETO (com respiro):
[Título]
      ← 16px
[Subtítulo]
      ← 48px
[Card]  [Card]  [Card]
      ← 40px
[Botão]
```

#### Proporção de Whitespace
- Uma página premium tem **40-50% de espaço vazio**
- Se sua seção parece "vazia demais", provavelmente está certa
- Se parece "equilibrada", provavelmente está apertada
- Adicione mais espaço até parecer "demais", depois reduza 10%

### Responsividade de Espaçamento

| Token | Mobile | Tablet | Desktop |
|---|---|---|---|
| Section padding (vertical) | `48px-64px` | `64px-80px` | `80px-120px` |
| Section gap (entre seções) | `48px` | `64px-80px` | `80px-96px` |
| Container padding (lateral) | `20px-24px` | `32px-40px` | `64px-80px` |
| Card padding | `20px` | `24px` | `28px-32px` |
| Grid gap | `16px-20px` | `24px` | `28px-32px` |
| Título → conteúdo | `32px` | `40px` | `48px-64px` |

**Regra:** Nunca reduza espaçamento mobile abaixo de 60% do desktop. O respiro deve ser preservado.

---

## Referências Premium

> Exemplos e benchmarks de design que representam o padrão de qualidade esperado.

### Princípios de Design da Apple

1.  **Foco no produto**
    - O produto é o herói, o design é o palco
    - Imagens grandes e de alta qualidade
    - Mínimo de texto, direto ao ponto
2.  **Tipografia impecável**
    - Hierarquia clara, tamanhos e pesos bem definidos
    - `line-height` e `letter-spacing` ajustados para legibilidade
    - Uso de uma ou duas fontes com maestria
3.  **Espaçamento generoso**
    - O espaço entre seções e elementos é deliberadamente grande
    - O produto "respira" — nunca parece apertado
4.  **Cores controladas**
    - Backgrounds: branco/off-white ou preto
    - Texto: quase-preto e cinza
    - Accent: uma cor por página/seção, usada com extrema parcimônia
    - Gradientes sutis, quase imperceptíveis
5.  **Imagens como protagonistas**
    - Produto em destaque, sem distrações
    - Full-bleed quando faz sentido
    - Qualidade fotográfica impecável
6.  **Animações com propósito**
    - Scroll-triggered reveals suaves
    - Parallax sutil (não exagerado)
    - Transições que guiam o olhar, não distraem

#### Páginas Apple como referência
- **apple.com/iphone** — Hero section perfeita, hierarquia tipográfica
- **apple.com/macbook-pro** — Scroll storytelling, seções alternadas
- **apple.com/airpods-pro** — Gradientes, dark mode, produto como herói

### Referência de Excelência: DD Lab Studio
DD Lab Studio representa o nível de craft e atenção ao detalhe que diferencia uma interface "boa" de uma "excepcional".

#### Princípios observados
1.  **Micro-detalhes que elevam**
    - Bordas com 1px que criam profundidade sem peso
    - Hover states com transições múltiplas (cor + escala + sombra)
    - Espaçamentos milimetricamente calculados
    - Tipografia com tracking e leading personalizados por contexto
2.  **Composição visual sofisticada**
    - Grids assimétricos que criam dinamismo
    - Mistura de seções densas e áreas de respiro
    - Uso de escala para criar drama visual
    - Elementos visuais que guiam o fluxo da leitura
3.  **Paleta cromática refinada**
    - Cores nunca puras — sempre ajustadas em saturação e luminosidade
    - Tons que parecem "vividos" porém elegantes
    - Backgrounds com gradientes quase imperceptíveis
    - Contraste calibrado para elegância, não para impacto bruto
4.  **Interações premium**
    - Cursor effects personalizados
    - Animações de entrada escalonadas (staggered)
    - Transições entre estados com easing curves customizadas
    - Loading states elegantes (skeleton screens, shimmer effects)

### Padrões de Qualidade Obrigatórios

#### Visual Identity Checklist
Antes de considerar qualquer página "pronta", valide:
- [ ] **Primeiro impacto:** A página impressiona nos primeiros 3 segundos?
- [ ] **Hierarquia:** O olho segue um caminho claro e intencional?
- [ ] **Espaçamento:** Há whitespace generoso entre seções?
- [ ] **Tipografia:** Há contraste claro entre níveis de texto?
- [ ] **Cores:** A paleta é restrita e harmônica?
- [ ] **Consistência:** Todos os componentes seguem o mesmo sistema visual?
- [ ] **Responsividade:** Funciona elegantemente em 375px e 1440px?
- [ ] **Detalhes:** Bordas, sombras e radius são consistentes?
- [ ] **Interações:** Hover e focus states estão implementados?
- [ ] **Performance:** Carrega em < 3s, animações em 60fps?

#### Benchmark Visual
A interface gerada deve ser comparável em qualidade a:

| Referência | O que observar |
|---|---|
| **Stripe.com** | Gradientes, tipografia, seções de código |
| **Linear.app** | Dark mode perfeito, animações sutis, clean |
| **Vercel.com** | Minimalismo, contraste, tipografia display |
| **Raycast.com** | Glassmorphism elegante, UI refinada |
| **Loom.com** | Cores vibrantes mas sofisticadas, ilustrações |
| **Notion.so** | Simplicidade, whitespace, hierarquia |

#### Nível de Acabamento Esperado

**Não aceitável:**
- Interfaces que parecem templates Bootstrap
- Layouts com aparência de "projeto de faculdade"
- UIs com cara de "feito por IA" (genérico, simétrico demais, sem personalidade)
- Designs que parecem "um primeiro rascunho"

**Aceitável:**
- Interface que poderia ser confundida com um produto real de uma startup funded
- Design que um designer sênior aprovaria sem revisões visuais significativas
- UI que transmite confiança e profissionalismo ao primeiro olhar
- Composição que demonstra intencionalidade em cada decisão

### Padrões de Seção Premium

#### Hero Section de Referência
```
Elementos:
- Background: Gradiente sutil ou cor sólida elegante
- Overline: Badge ou texto pequeno uppercase com accent color
- Headline: 48px-72px, bold, tracking negativo, max-width 800px
- Subtítulo: 18px-20px, cor secundária, max-width 540px
- CTAs: 1 primário + 1 ghost, gap 12px entre eles
- Spacing: 120px+ vertical padding
Sensação: "Sei exatamente o que este produto faz e quero saber mais."
```

#### Card Grid de Referência
```
Elementos:
- Grid: 3 colunas desktop, 1 mobile
- Card: Padding 28px, radius 14px, borda sutil
- Card header: Ícone 32px + título 20px semibold
- Card body: 15px regular, cor secundária, 2-3 linhas
- Hover: translateY(-3px) + sombra elevada
Sensação: "Informação organizada com clareza e elegância."
```

#### CTA Section de Referência
```
Elementos:
- Background: Diferenciado (accent suave, gradiente, ou card)
- Título: H2, impactante, direto
- Subtítulo: Motivador, curto
- Botão: Grande, centralizado, com contraste máximo
- Whitespace: Muito generoso em todas as direções
Sensação: "É agora. Quero agir."
```