# Spacing & Layout

> O espaçamento é o que separa um layout amador de um profissional. Espaço bem aplicado cria ritmo, hierarquia e elegância — sem adicionar um único elemento visual.

---

## Sistema Base: 8px Grid

Todo espaçamento no projeto é múltiplo de 8. Sem exceções, sem valores arbitrários.

| Token | Valor | Uso principal |
|---|---|---|
| `space-1` | `4px` | Exceção: micro-ajustes internos de ícones/badges |
| `space-2` | `8px` | Gap entre ícone e label, padding interno mínimo |
| `space-3` | `12px` | Padding interno de badges, tags |
| `space-4` | `16px` | Padding interno de botões, gap entre itens de lista |
| `space-5` | `24px` | Padding de cards, gap de grids pequenos |
| `space-6` | `32px` | Espaço entre blocos dentro de uma seção |
| `space-7` | `40px` | Padding lateral de container (tablet) |
| `space-8` | `48px` | Espaço entre título e conteúdo de seção |
| `space-9` | `64px` | Margem entre seções menores |
| `space-10` | `80px` | Padding lateral de container (desktop) |
| `space-11` | `96px` | Espaço vertical entre seções principais |
| `space-12` | `120px` | Espaço generoso entre seções hero/destaque |
| `space-13` | `160px` | Padding vertical de hero sections |

---

## Layout de Container

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

### Variantes de Container

| Tipo | Max-width | Uso |
|---|---|---|
| Narrow | `720px` | Texto longo, artigos, formulários |
| Default | `1200px` | Layout padrão, grids, seções |
| Wide | `1400px` | Grids de imagens, portfolios |
| Full | `100%` | Hero sections, backgrounds edge-to-edge |

---

## Espaçamento Vertical entre Seções

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

### Regras de Espaçamento Vertical
- **Hero section:** `padding-top: 120px+`, `padding-bottom: 80px+`
- **Seções de conteúdo:** `padding: 80px 0` a `padding: 96px 0`
- **Entre título de seção e conteúdo:** `48px` a `64px`
- **Entre subtítulo e parágrafo:** `16px` a `24px`
- **Mobile:** Reduza verticais em ~30-40%, nunca abaixo de `48px` entre seções

---

## Grid de Cards e Conteúdo

### Grid Responsivo

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

### Regras de Grid
- **Gap mínimo entre cards:** `20px` — abaixo disso parece apertado
- **Gap recomendado:** `24px-32px`
- **Cards de texto:** máximo 3-4 colunas
- **Cards de imagem:** até 4 colunas, imagens devem manter aspect-ratio
- **Grid assimétrico** (70/30, 60/40): use para quebrar monotonia em seções alternadas

---

## Espaçamento Interno (Padding de Componentes)

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

---

## Whitespace: A Arma Secreta

### Princípios
1. **Quanto mais importante o elemento, mais espaço ao redor** — isolar cria importância
2. **Elementos relacionados ficam próximos** (Lei da Proximidade de Gestalt)
3. **Margem entre grupos > margem dentro de grupos** — sempre
4. **Whitespace não precisa ser branco** — pode ser qualquer cor de background

### Aplicação Prática
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

### Proporção de Whitespace
- Uma página premium tem **40-50% de espaço vazio**
- Se sua seção parece "vazia demais", provavelmente está certa
- Se parece "equilibrada", provavelmente está apertada
- Adicione mais espaço até parecer "demais", depois reduza 10%

---

## Responsividade de Espaçamento

| Token | Mobile | Tablet | Desktop |
|---|---|---|---|
| Section padding (vertical) | `48px-64px` | `64px-80px` | `80px-120px` |
| Section gap (entre seções) | `48px` | `64px-80px` | `80px-96px` |
| Container padding (lateral) | `20px-24px` | `32px-40px` | `64px-80px` |
| Card padding | `20px` | `24px` | `28px-32px` |
| Grid gap | `16px-20px` | `24px` | `28px-32px` |
| Título → conteúdo | `32px` | `40px` | `48px-64px` |

**Regra:** Nunca reduza espaçamento mobile abaixo de 60% do desktop. O respiro deve ser preservado.
