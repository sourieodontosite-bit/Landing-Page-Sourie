# Component Standards

> Padrão visual e comportamental para cada componente. Siga estas especificações para garantir consistência e qualidade premium em toda a interface.

---

## Navbar

### Estrutura
```
┌──────────────────────────────────────────────────────┐
│  [Logo]          [Nav Links]            [CTA Button] │
└──────────────────────────────────────────────────────┘
```

### Especificações
- **Altura:** `64px-72px` desktop, `56px-64px` mobile
- **Posição:** `fixed` ou `sticky` no topo
- **Background:** Transparente no hero → sólido com `backdrop-filter: blur(12px)` ao scroll
- **Transição de background:** suave, `0.3s ease`
- **Logo:** Lado esquerdo, altura `28px-36px`
- **Links:** Centro ou direita, `font-size: 14px-15px`, `font-weight: 500`
- **CTA:** Botão primário, à direita, tamanho pequeno/médio
- **Mobile:** Logo à esquerda + hamburger à direita. Menu fullscreen ou slide-in

### Comportamento
- Links com hover: underline sutil ou mudança de opacidade (`0.7 → 1`)
- Link ativo: peso bold ou underline
- Scroll: navbar ganha sombra sutil + background sólido/blur
- Z-index alto: `z-index: 50` mínimo

---

## Hero Section

### Estrutura (variações)

**A) Centralizado (mais comum)**
```
┌──────────────────────────────────────┐
│                                      │
│           [Overline/Badge]           │
│          [Headline Display]          │
│          [Subtítulo/Lead]            │
│         [CTA]    [CTA Sec]           │
│                                      │
└──────────────────────────────────────┘
```

**B) Split (texto + imagem)**
```
┌──────────────────────────────────────┐
│                        │             │
│  [Overline]            │   [Imagem]  │
│  [Headline]            │             │
│  [Subtítulo]           │             │
│  [CTA] [CTA Sec]       │             │
│                        │             │
└──────────────────────────────────────┘
```

### Especificações
- **Padding vertical:** `120px-160px` (mínimo `80px` mobile)
- **Headline:** Display size, `max-width: 800px`, centralizado ou left-aligned
- **Subtítulo:** `18px-20px`, `color: secondary`, `max-width: 580px`
- **Espaço headline → subtítulo:** `16px-24px`
- **Espaço subtítulo → CTAs:** `32px-40px`
- **Overline/Badge:** Antes do headline, `12px uppercase`, `letter-spacing: 0.08em`, cor de accent
- **Background:** Cor sólida, gradiente sutil, ou imagem com overlay

### Regras
- **Um único headline** — não divida a atenção
- Subtítulo complementa, não repete o headline
- Máximo **2 CTAs** (primário + secundário/ghost)
- Hero nunca deve ter mais que 4 elementos visuais

---

## Botões

### Variantes

| Variante | Estilo | Uso |
|---|---|---|
| Primary | Background sólido + texto claro | Ação principal: "Começar", "Agendar" |
| Secondary | Background sutil + texto escuro | Ação complementar |
| Ghost/Outline | Borda fina + texto + background transparente | Ação terciária |
| Text | Sem background, sem borda, apenas texto | Links inline, "Saiba mais" |

### Especificações

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

### Tamanhos

| Tamanho | Padding | Font-size | Min-height |
|---|---|---|---|
| Small | `8px 16px` | `13px-14px` | `36px` |
| Medium | `12px 24px` | `14px-15px` | `44px` |
| Large | `16px 32px` | `16px` | `52px` |

### Regras
- **Texto curto:** 2-3 palavras. "Agendar consulta", não "Clique aqui para agendar sua consulta"
- **Ícones:** À esquerda ou direita do texto, nunca sozinhos (exceto icon buttons)
- **Full-width:** Apenas em mobile para CTAs principais
- Mínimo `44px` de altura para touch targets

---

## Cards

### Estrutura Base
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

### Especificações
- **Padding interno:** `24px-32px`
- **Border-radius:** `12px-16px`
- **Background:** Levemente diferente do fundo da seção (`+2-3%` luminosidade)
- **Borda:** `1px solid rgba(0,0,0,0.06)` ou nenhuma
- **Sombra:** Sutil (ver ui-rules.md)
- **Hover:** `translateY(-2px)` + sombra elevada + transição `0.2s`
- **Imagem no card:** Radius igual ao card (com overflow hidden) ou `radius - padding`

### Regras
- Todos os cards em um grid devem ter **mesma altura** (`align-items: stretch`)
- Descrição limitada a **2-3 linhas** — use `line-clamp`
- Se tem CTA, ele fica no bottom do card (use flexbox com `margin-top: auto`)
- Título do card: `H3` ou `H4`, nunca igual ao título da seção

---

## Sections

### Estrutura Padrão
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

### Especificações
- **Padding vertical:** `80px-120px`
- **Título → conteúdo:** `48px-64px`
- **Overline:** `12px`, uppercase, `letter-spacing: 0.06em`, cor de accent ou secundária
- **Background alternado:** Alternar seções entre background primário e secundário para criar ritmo
- **Alinhamento do header:** Centralizado ou à esquerda — consistente em toda a página

### Regras
- **Uma seção = um objetivo** — não misture propósitos
- Header da seção (overline + título + subtítulo) deve ter `max-width: 680px` quando centralizado
- CTAs de seção vêm **após** o conteúdo, com `margin-top: 40px-48px`

---

## Forms

### Especificações de Input
- **Altura:** `44px-48px`
- **Padding:** `12px 16px`
- **Border-radius:** `8px-10px`
- **Borda default:** `1px solid rgba(0,0,0,0.12)`
- **Borda focus:** `2px solid [accent-color]` + `box-shadow: 0 0 0 3px rgba(accent, 0.1)`
- **Font-size:** `16px` (evita zoom em iOS)
- **Label:** Acima do input, `14px`, `font-weight: 500`, `margin-bottom: 6px-8px`
- **Placeholder:** Cor terciária, nunca substitute de label

### Layout de Form
- **Largura máxima:** `480px-560px` para forms simples
- **Gap entre campos:** `20px-24px`
- **Botão submit:** Full-width dentro do form ou alinhado à direita
- **Mensagens de erro:** `13px`, cor vermelha suave (não vermelho puro), abaixo do input com `4px` de gap

---

## CTA Sections

### Estrutura
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

### Especificações
- **Background:** Diferenciado — cor de accent suave, gradiente ou card elevado
- **Padding:** Generoso — `64px-80px` vertical
- **Título:** `H2` ou `H1`, impactante e direto
- **Centralizado** sempre
- **Isolado:** Muito whitespace ao redor

---

## Footer

### Especificações
- **Background:** Escuro (mesmo em light mode) ou neutro diferenciado
- **Padding vertical:** `64px-80px` top, `24px-32px` bottom (abaixo do copyright)
- **Layout:** Grid com 3-4 colunas desktop, stack em mobile
- **Títulos de coluna:** `14px`, `font-weight: 600`, uppercase ou semibold
- **Links:** `14px`, cor secundária clara, hover com opacidade ou cor de accent
- **Copyright:** `13px`, cor terciária, separado por `border-top: 1px` sutil
- **Logo no footer:** Versão monocromática ou em cor clara
