# Premium References

> Referências visuais e padrões que definem o nível de qualidade esperado. Use como norte — nunca copie, mas absorva os princípios.

---

## Referência Principal: Apple Design Language

O estilo Apple é o padrão-ouro de interfaces premium. Os princípios que tornam o design Apple reconhecível:

### O que absorver da Apple

1. **Simplicidade radical**
   - Cada tela tem UM foco claro
   - Elementos decorativos inexistentes — tudo é funcional
   - Texto mínimo, cada palavra tem peso

2. **Tipografia como design**
   - Headlines enormes com tracking negativo
   - Hierarquia brutal: título gigante → subtítulo pequeno
   - Pesos de fonte usados como ferramenta de composição
   - San Francisco como fonte sistema — clean, neutra, legível

3. **Whitespace generoso**
   - Seções com 120px+ de padding
   - Espaço entre elementos é deliberadamente grande
   - O produto "respira" — nunca parece apertado

4. **Cores controladas**
   - Backgrounds: branco/off-white ou preto
   - Texto: quase-preto e cinza
   - Accent: uma cor por página/seção, usada com extrema parcimônia
   - Gradientes sutis, quase imperceptíveis

5. **Imagens como protagonistas**
   - Produto em destaque, sem distrações
   - Full-bleed quando faz sentido
   - Qualidade fotográfica impecável

6. **Animações com propósito**
   - Scroll-triggered reveals suaves
   - Parallax sutil (não exagerado)
   - Transições que guiam o olhar, não distraem

### Páginas Apple como referência
- **apple.com/iphone** — Hero section perfeita, hierarquia tipográfica
- **apple.com/macbook-pro** — Scroll storytelling, seções alternadas
- **apple.com/airpods-pro** — Gradientes, dark mode, produto como herói

---

## Referência de Excelência: DD Lab Studio

DD Lab Studio representa o nível de craft e atenção ao detalhe que diferencia uma interface "boa" de uma "excepcional".

### Princípios observados

1. **Micro-detalhes que elevam**
   - Bordas com 1px que criam profundidade sem peso
   - Hover states com transições múltiplas (cor + escala + sombra)
   - Espaçamentos milimetricamente calculados
   - Tipografia com tracking e leading personalizados por contexto

2. **Composição visual sofisticada**
   - Grids assimétricos que criam dinamismo
   - Mistura de seções densas e áreas de respiro
   - Uso de escala para criar drama visual
   - Elementos visuais que guiam o fluxo da leitura

3. **Paleta cromática refinada**
   - Cores nunca puras — sempre ajustadas em saturação e luminosidade
   - Tons que parecem "vividos" porém elegantes
   - Backgrounds com gradientes quase imperceptíveis
   - Contraste calibrado para elegância, não para impacto bruto

4. **Interações premium**
   - Cursor effects personalizados
   - Animações de entrada escalonadas (staggered)
   - Transições entre estados com easing curves customizadas
   - Loading states elegantes (skeleton screens, shimmer effects)

---

## Padrões de Qualidade Obrigatórios

### Visual Identity Checklist

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

### Benchmark Visual

A interface gerada deve ser comparável em qualidade a:

| Referência | O que observar |
|---|---|
| **Stripe.com** | Gradientes, tipografia, seções de código |
| **Linear.app** | Dark mode perfeito, animações sutis, clean |
| **Vercel.com** | Minimalismo, contraste, tipografia display |
| **Raycast.com** | Glassmorphism elegante, UI refinada |
| **Loom.com** | Cores vibrantes mas sofisticadas, ilustrações |
| **Notion.so** | Simplicidade, whitespace, hierarquia |

### Nível de Acabamento Esperado

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

---

## Padrões de Seção Premium

### Hero Section de Referência
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

### Card Grid de Referência
```
Elementos:
- Grid: 3 colunas desktop, 1 mobile
- Card: Padding 28px, radius 14px, borda sutil
- Card header: Ícone 32px + título 20px semibold
- Card body: 15px regular, cor secundária, 2-3 linhas
- Hover: translateY(-3px) + sombra elevada

Sensação: "Informação organizada com clareza e elegância."
```

### CTA Section de Referência
```
Elementos:
- Background: Diferenciado (accent suave, gradiente, ou card)
- Título: H2, impactante, direto
- Subtítulo: Motivador, curto
- Botão: Grande, centralizado, com contraste máximo
- Whitespace: Muito generoso em todas as direções

Sensação: "É agora. Quero agir."
```
