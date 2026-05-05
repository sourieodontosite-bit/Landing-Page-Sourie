# Mobile Performance Insights — sourie.vercel.app

> Análise de pontos críticos a serem melhorados para desempenho mobile.

---

## Resumo executivo

| Métrica | Valor |
|---|---|
| Trabalho total na thread principal | **2,2 s** |
| Latência máxima do caminho crítico | **2.716 ms** |
| Economia estimada de JS não utilizado | **23 KiB** |

---

## 1. 🔴 Reflow Forçado — Alta Prioridade

Um reflow forçado ocorre quando o JavaScript consulta propriedades geométricas (como `offsetWidth`) depois que os estilos são invalidados por uma mudança no DOM. Isso bloqueia a renderização e degrada o desempenho no mobile.

### Principais fontes de reflow

| Arquivo | Tempo de Reflow |
|---|---|
| `/assets/vendor-B5K7KWpk.js` | **398 ms** |
| `/assets/gsap-BkJeZwQD.js` (offset `:60852`) | 319 ms |
| `/assets/gsap-BkJeZwQD.js` (offset `:78875`) | 129 ms |
| Sem atribuição | 44 ms |
| `/assets/gsap-BkJeZwQD.js` (demais offsets) | ~5 ms |

**Total acumulado: ~895 ms de reflow**

### Como corrigir

- Agrupar leituras de layout **antes** das escritas (batch reads/writes).
- Usar `requestAnimationFrame` para atualizações visuais em loops de animação.
- Evitar leitura de `offsetWidth`, `offsetHeight`, `getBoundingClientRect` dentro de animações GSAP sem debounce.
- Revisar os pontos críticos do GSAP nos offsets `:60852` e `:78875`.

---

## 2. 🟡 Trabalho da Thread Principal — 2,2 s Total

O tempo gasto na thread principal é excessivo para mobile, prejudicando o TBT (Total Blocking Time).

### Distribuição por categoria

| Categoria | Tempo |
|---|---|
| Script Evaluation | **808 ms** |
| Style & Layout | **657 ms** |
| Other | 543 ms |
| Script Parsing & Compilation | 103 ms |
| Rendering | 70 ms |
| Parse HTML & CSS | 5 ms |

### Como corrigir

- Aplicar **code splitting** para reduzir o JS avaliado na carga inicial.
- Usar **lazy loading** para bibliotecas não críticas (ex: GSAP, animações).
- Mover scripts não essenciais para `defer` ou `async`.
- Reduzir o tamanho total do payload de JavaScript.

---

## 3. 🔵 Árvore de Dependência da Rede — LCP Bloqueado

A cadeia de solicitações críticas está atrasando o LCP (Largest Contentful Paint) e o FCP (First Contentful Paint).

**Latência máxima do caminho crítico: 2.716 ms**

### Cadeia de carregamento

```
sourie.vercel.app (HTML)                          93 ms   1,42 KiB
└── /assets/index-D2qIOWog.css                   194 ms  12,31 KiB
    └── fonts.googleapis.com /css2                97 ms   1,14 KiB
        ├── fonts.gstatic.com …rP2Fp2ywx….woff2  ⚠️ 2.716 ms  75,18 KiB  ← LCP BLOCKER
        └── fonts.gstatic.com …rP2Hp2ywx….woff2  1.735 ms  61,88 KiB
└── /assets/index-4qP9J2AV.js                    270 ms  17,12 KiB
```

### Pré-conexões configuradas

As seguintes origens já têm pré-conexão ativa:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
```

### Como corrigir

- Adicionar `<link rel="preload">` para as fontes `.woff2` mais pesadas:
  ```html
  <link rel="preload" as="font" type="font/woff2" crossorigin
    href="URL_DA_FONTE_PESADA.woff2">
  ```
- Usar `font-display: swap` para não bloquear a renderização do texto.
- Gerar um **subconjunto de caracteres** (subsetting) para reduzir o tamanho das fontes.
- Avaliar hospedar as fontes localmente, eliminando round-trips externos ao Google Fonts.

---

## 4. 🟡 JavaScript Não Utilizado — Economia de 23 KiB

Código JavaScript está sendo baixado e analisado sem ser necessário na carga inicial.

### Arquivo identificado

| Arquivo | Tamanho transferido | Economia estimada |
|---|---|---|
| `/assets/vendor-re….js` | 60,6 KiB | **22,6 KiB (37%)** |

### Como corrigir

- Aplicar **tree-shaking** no processo de build para remover código morto.
- Separar o vendor bundle em chunks menores usando **dynamic import**:
  ```js
  const { gsap } = await import('./gsap');
  ```
- Usar uma ferramenta de análise de bundle (ex: `rollup-plugin-visualizer`, `webpack-bundle-analyzer`) para identificar dependências pesadas desnecessárias.
- Adiar o carregamento de scripts não críticos até que sejam realmente necessários.

---

## Priorização recomendada

| # | Ação | Impacto | Esforço |
|---|---|---|---|
| 1 | Preload das fontes `.woff2` críticas | Alto (LCP) | Baixo |
| 2 | Corrigir reflows no vendor e GSAP | Alto (TBT) | Médio |
| 3 | Remover JS não utilizado do vendor bundle | Médio (FCP/LCP) | Médio |
| 4 | Code splitting e lazy load de animações | Alto (TBT) | Alto |
