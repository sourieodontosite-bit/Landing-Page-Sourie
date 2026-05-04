# Anti-Patterns

> Lista exaustiva do que NUNCA fazer. Se a interface gerada apresentar qualquer item desta lista, ela deve ser corrigida antes de ser considerada aceitável.

---

## 🚫 Aparência Genérica

| Anti-pattern | Por que é ruim | O que fazer |
|---|---|---|
| Usar cores padrão do framework (azul Bootstrap `#0d6efd`) | Grita "template", zero personalidade | Definir paleta própria com accent customizado |
| Gradientes arco-íris ou multicoloridos | Amador, caótico, sem sofisticação | Gradientes sutis com 2 tons próximos |
| Ícones de bibliotecas diferentes misturados | Inconsistência visual óbvia | Uma única biblioteca (Lucide, Phosphor ou Heroicons) |
| Placeholder images (`via.placeholder.com`) | Destrói credibilidade, parece inacabado | Imagens reais ou gerar com IA |
| Lorem ipsum visível | Produto inacabado, não demonstra valor | Conteúdo real ou realista |
| Favicon padrão do framework | Descuido, desleixo nos detalhes | Favicon personalizado |

---

## 🚫 Tipografia Mal Executada

| Anti-pattern | Correção |
|---|---|
| Tudo no mesmo tamanho e peso | Criar hierarquia clara com 3+ níveis de tamanho |
| Texto em `font-weight: 300` (light) como body | Usar `400` mínimo para corpo de texto |
| Headlines sem `letter-spacing` negativo | Aplicar `-0.01em` a `-0.03em` em títulos grandes |
| Parágrafos sem `max-width` em telas largas | Limitar a `680px` para conforto de leitura |
| `line-height: 1` ou `normal` em parágrafos | Usar `1.5` a `1.7` para body text |
| Mais de 2 famílias de fonte | Escolher no máximo 2 e manter |
| Texto em caps lock sem letter-spacing | Adicionar `0.05em+` de spacing em uppercase |
| Títulos e body text na mesma cor e peso | Diferenciar por cor E peso simultaneamente |

---

## 🚫 Layout e Espaçamento

| Anti-pattern | Correção |
|---|---|
| Seções com `padding: 20px` | Mínimo `64px` mobile, `80px` desktop |
| Cards colados sem gap | Mínimo `20px` de gap, idealmente `24px-32px` |
| Conteúdo encostando nas bordas da tela | Container com padding lateral adequado |
| Tudo centralizado (texto, cards, ícones) | Centralizar apenas hero e CTAs; conteúdo alinhado à esquerda |
| Grid com 5+ colunas de cards | Máximo 3-4 colunas; legibilidade primeiro |
| Espaçamento inconsistente entre seções | Sistema de spacing com tokens fixos |
| Elementos flutuando sem alinhamento de grid | Tudo alinhado ao grid de 8px |
| Seções sem whitespace entre elas | Mínimo `80px` de separação visual |

---

## 🚫 Cores e Contraste

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

---

## 🚫 Sombras e Bordas

| Anti-pattern | Correção |
|---|---|
| `box-shadow` com opacidade > `0.2` | Máximo `0.1` para composição, `0.15` para elementos elevados |
| Sombra em apenas uma camada | Usar 2 camadas (blur curto + blur longo) |
| Bordas de `2px+` em containers | Máximo `1px`, cor com baixa opacidade |
| `border-radius: 4px` genérico em tudo | Sistema consistente: `8-12px` botões, `12-16px` cards |
| `border: 1px solid #ccc` em tudo | Bordas contextuais: inputs sim, cards preferencialmente não |
| `outline: none` sem substituto de focus | Sempre fornecer `focus-visible` ring acessível |
| Sombras coloridas saturadas | Sombras em preto com baixa opacidade ou accent ultra-sutil |

---

## 🚫 Componentes Mal Construídos

### Botões
- ❌ Botão com 4+ palavras de texto
- ❌ Botão sem hover state
- ❌ Botão sem `min-height` de `44px`
- ❌ Todos os botões com o mesmo estilo (sem hierarquia primary/secondary/ghost)
- ❌ Botão com ícone + texto + ícone (sobrecarregado)
- ❌ Botão com `border-radius: 0` (parece input, não botão)

### Cards
- ❌ Cards com alturas diferentes no mesmo grid
- ❌ Cards sem padding interno adequado (`< 20px`)
- ❌ Cards com 5+ elementos competindo por atenção
- ❌ Cards sem hover state quando são clicáveis
- ❌ Imagem no card sem `object-fit: cover`

### Navbar
- ❌ Navbar com mais de 6 links
- ❌ Navbar sem CTA visualmente diferente dos links
- ❌ Navbar que não muda de estilo ao scroll
- ❌ Menu mobile que é apenas os links empilhados sem tratamento
- ❌ Logo com altura inconsistente (muito grande ou pequeno)

### Forms
- ❌ Inputs sem labels (placeholder não é label)
- ❌ Inputs com altura < `40px`
- ❌ Inputs com `font-size < 16px` (causa zoom em iOS)
- ❌ Botão de submit com mesmo estilo visual de campos
- ❌ Mensagens de erro em vermelho puro `#FF0000`

---

## 🚫 Animações e Interações

| Anti-pattern | Correção |
|---|---|
| Animações com duração > `500ms` em micro-interações | `150ms-350ms` para hover, clicks, toggles |
| `transition: all` em elementos complexos | Especificar propriedades: `transform, opacity, box-shadow` |
| `animation: linear` para qualquer coisa | Usar `ease-out` ou `cubic-bezier(0.4, 0, 0.2, 1)` |
| Hover com `transform: scale(1.1)` | Máximo `scale(1.02-1.03)` ou `translateY(-2px)` |
| Bounce animations em elementos de UI | Bouncing é para jogos, não para produtos premium |
| Parallax exagerado que causa motion sickness | Parallax sutil (`translateY` de poucos px) ou nenhum |
| Animações que bloqueiam interação | Animações devem ser non-blocking |
| Scroll-triggered animations que repetem | Animar apenas uma vez, na primeira visualização |

---

## 🚫 Padrões "Cara de IA"

Estes são os sinais mais comuns de que uma interface foi gerada por IA sem direção de design:

1. **Simetria perfeita artificial** — Tudo exatamente centralizado, sem variação. Quebre com alinhamentos intencionais à esquerda
2. **Seções idênticas repetidas** — Todas as seções com exatamente a mesma estrutura. Alterne layouts, backgrounds e composições
3. **Cores "seguras" demais** — Azul genérico + cinza. Defina uma paleta com personalidade
4. **Conteúdo que parece IA** — "Innovative solutions for modern businesses". Escreva conteúdo específico e humano
5. **Tudo com o mesmo peso visual** — Sem hierarquia, tudo parece igualmente importante. Defina 1 foco por seção
6. **Grid perfeitamente uniforme sem variação** — 3 cards, 3 cards, 3 cards. Intercale com seções de layout diferente
7. **Decorações sem função** — Blobs, círculos, ondas aleatórias. Cada elemento visual deve ter propósito
8. **Excesso de ícones** — Ícones em tudo: bullets, cards, títulos. Use ícones apenas quando adicionam clareza
9. **Bordas arredondadas excessivas** — Tudo com `border-radius: 9999px`. Use radius consistente e moderado
10. **Gradientes vibrantes sem justificativa** — Gradiente roxo-para-rosa "porque fica bonito". Gradientes devem seguir a paleta definida

---

## Regra Final

> Se ao olhar para a interface você conseguir dizer "isso foi feito por uma IA" — refaça. O objetivo é que pareça feito por um designer sênior que se importa com cada detalhe.
