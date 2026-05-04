# Typography System

> A tipografia é responsável por 80% da percepção de qualidade de uma interface. Um sistema tipográfico bem definido transforma qualquer layout de "genérico" para "premium".

---

## Fontes Recomendadas

### Combinações Premium (Google Fonts)

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

### Regra de Ouro
- **Nunca mais que 2 famílias tipográficas** por projeto
- **Nunca mais que 3 pesos** por família (regular, medium, semibold/bold)
- Carregue apenas os pesos que vai usar — performance importa

---

## Escala Tipográfica

Sistema baseado em **Major Third (1.25)** — harmônico e versátil.

### Desktop

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

### Mobile (redução proporcional)

| Nível | Tamanho | Ajuste |
|---|---|---|
| Display | `36px-44px` | Reduzido significativamente |
| H1 | `30px-36px` | |
| H2 | `24px-28px` | |
| H3 | `20px-22px` | |
| Body | `16px` | Mantém (mínimo legível em mobile) |
| Body Small | `14px` | Mantém |

---

## Regras de Aplicação

### Hierarquia com Peso
- Títulos: **Semibold (600) ou Bold (700)** — nunca light para títulos
- Subtítulos: **Medium (500) ou Semibold (600)**
- Body text: **Regular (400)** — nunca bold para parágrafos inteiros
- Labels/Captions: **Medium (500)** — peso extra compensa o tamanho menor

### Hierarquia com Cor
Combine peso com cor para criar camadas visuais:
- **Primário:** `#1D1D1F` — títulos e texto principal
- **Secundário:** `#6E6E73` — subtítulos e texto de suporte
- **Terciário:** `#86868B` — captions, metadata, placeholders
- **Accent:** Cor de destaque — apenas para links, CTAs e destaques pontuais

### Line-height (entrelinhas)
- Títulos grandes: `1.1` a `1.2` — compacto, impactante
- Subtítulos: `1.2` a `1.3`
- Body text: `1.5` a `1.7` — conforto de leitura
- **Nunca** use line-height `1.0` — causa sensação de sufocamento

### Letter-spacing
- Títulos grandes: **negativo** (`-0.01em` a `-0.03em`) — traz coesão
- Body text: `0` ou levíssimo positivo
- Uppercase/Overline: **positivo** (`0.05em` a `0.1em`) — obrigatório para legibilidade
- **Nunca** use letter-spacing positivo em títulos grandes — parece amador

### Largura Máxima de Texto
- Parágrafos: `max-width: 680px` — ideal para leitura confortável
- Headlines: `max-width: 800px` — permite impacto sem quebra estranha
- **Nunca** deixe texto correndo de ponta a ponta em telas largas

---

## Responsividade Tipográfica

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

---

## Erros Fatais em Tipografia

- ❌ Usar mais de 2 famílias de fontes
- ❌ Usar `font-weight: 300` (light) para texto de corpo — ilegível em muitas telas
- ❌ Texto menor que `12px` em qualquer contexto
- ❌ Títulos sem diferença clara de tamanho em relação ao body
- ❌ Parágrafos sem `max-width` — linhas longas demais destroem a leitura
- ❌ Usar a mesma cor e peso para título e body text
- ❌ Letter-spacing positivo em títulos display
- ❌ Line-height apertado (`< 1.4`) em parágrafos
