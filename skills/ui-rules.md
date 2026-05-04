# UI Rules

> Regras práticas e inegociáveis para construção visual. Aplique em cada componente, seção e página sem exceção.

---

## Cores

### Paleta Base
- **Background principal:** Nunca branco puro (`#FFFFFF`). Use off-whites como `#FAFAFA`, `#F8F8F8` ou `#FEFEFE`
- **Background secundário:** Tons neutros suaves — `#F2F2F2`, `#F5F5F7` (Apple-style)
- **Texto principal:** Nunca preto puro (`#000000`). Use `#1D1D1F`, `#111111` ou `#0A0A0A`
- **Texto secundário:** `#6E6E73`, `#86868B` — suficientemente legível, visualmente discreto
- **Accent color:** Uma única cor de destaque. Saturação controlada, nunca neon

### Regras de Aplicação
- Máximo **3 tons neutros** + **1 cor de destaque** + **1 variação da cor de destaque**
- Backgrounds com gradientes sutis são permitidos: variação máxima de 2-3% entre pontos
- Dark mode: backgrounds `#0A0A0A`, `#111111`, `#1A1A1A` — nunca cinzas médios
- Contraste mínimo WCAG AA (4.5:1 para texto, 3:1 para elementos grandes)

---

## Bordas e Separadores

- **Bordas de containers:** `1px solid` com opacidade baixa — `rgba(0,0,0,0.06)` a `rgba(0,0,0,0.1)`
- **Nunca** use bordas com cores fortes ou saturadas em containers
- Prefira separação por **espaço e contraste de background** ao invés de linhas
- Quando usar linhas divisórias: `1px`, cor `rgba(0,0,0,0.05)`, nunca full-width (use padding lateral)

---

## Border Radius

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

---

## Sombras

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

---

## Alinhamento e Grid

- **Grid base:** sistema de 8px — todo espaçamento é múltiplo de 8
- **Container máximo:** `1200px` a `1440px`, centralizado
- **Padding lateral do container:** `24px` mobile, `40px` tablet, `80px` desktop
- Alinhamento à esquerda para texto. Centralizado apenas para hero sections e CTAs
- Nunca justifique texto
- Elementos devem se alinhar a uma grid invisível — se dois blocos estão na mesma seção, suas bordas laterais devem coincidir

---

## Contraste e Legibilidade

- Texto sobre imagem: **sempre** com overlay escuro (`rgba(0,0,0,0.4)` mínimo) ou claro
- Texto pequeno (< 14px): deve ter contraste mínimo de 7:1
- Nunca coloque texto colorido sobre background colorido
- Links inline devem ter `underline` ou peso diferente — cor sozinha não basta

---

## Transições e Animações

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

---

## Estados Interativos

Todo elemento clicável deve ter 4 estados visualmente distintos:

1. **Default:** Estado normal, neutro
2. **Hover:** Feedback sutil — mudança de cor, elevação ou opacidade
3. **Active/Pressed:** Feedback de toque — leve `scale(0.98)` ou escurecimento
4. **Disabled:** Opacidade `0.4`-`0.5`, cursor `not-allowed`, sem hover effect

---

## Responsividade

| Breakpoint | Largura | Comportamento |
|---|---|---|
| Mobile | `< 640px` | Stack vertical, 1 coluna, tipografia reduzida |
| Tablet | `640px - 1024px` | 2 colunas, espaçamentos intermediários |
| Desktop | `> 1024px` | Layout completo, espaçamentos generosos |

- Imagens devem usar `object-fit: cover` e nunca distorcer
- Grids de cards: 1 col mobile → 2 col tablet → 3-4 col desktop
- Hero sections: texto centralizado em mobile, lado a lado em desktop
- Menu: hamburger em mobile/tablet, inline em desktop
