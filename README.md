<div align="center">

# 🦷 Landing Page Souriê Odontologia

**Site institucional moderno, responsivo e performático para a Clínica Souriê Odontologia.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## 📋 Sobre o Projeto

Landing page institucional desenvolvida para a **Clínica Souriê Odontologia**, com foco em conversão, experiência do usuário e performance. O site apresenta os serviços, especialistas e diferenciais da clínica de forma visualmente atrativa e profissional.

### ✨ Destaques

- ⚡ **Alta Performance** — Build otimizado com Vite + Terser
- 📱 **100% Responsivo** — Layout Mobile-First para todos os dispositivos
- 🎨 **Animações Fluidas** — Transições e micro-interações com GSAP
- ♿ **Acessível** — HTML semântico e atributos ARIA
- 🔍 **SEO Otimizado** — Meta tags dinâmicas com React Helmet Async
- 🚀 **Deploy Contínuo** — Hospedagem na Vercel

---

## 🗂️ Estrutura do Projeto

```
src/
├── assets/           # Imagens e recursos estáticos
├── components/
│   ├── layout/       # Header, Footer e estrutura base
│   ├── sections/     # Seções da landing page (Hero, Serviços, etc.)
│   └── shared/       # Componentes reutilizáveis
├── pages/
│   ├── Home.tsx                    # Página principal
│   ├── InternalPage.tsx            # Página de procedimentos
│   ├── DentistPage.tsx             # Página dos especialistas
│   ├── AboutPage.tsx               # Sobre a clínica
│   ├── PoliticaPrivacidadePage.tsx # Política de privacidade
│   └── TermosDeUsoPage.tsx         # Termos de uso
├── utils/            # Constantes e funções auxiliares
├── App.tsx           # Roteamento principal
└── main.tsx          # Entry point
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| React | 19 | Framework de UI |
| TypeScript | 6 | Tipagem estática |
| Vite | 8 | Bundler e dev server |
| Tailwind CSS | 3 | Estilização |
| GSAP | 3 | Animações |
| React Router DOM | 7 | Roteamento SPA |
| React Helmet Async | 3 | SEO / Meta tags |
| Lucide React | latest | Ícones |

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/sourieodontosite-bit/Landing-Page-Sourie.git

# 2. Entre na pasta
cd Landing-Page-Sourie

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera o build de produção
npm run preview  # Visualiza o build de produção localmente
npm run lint     # Executa o ESLint
```

---

## 📦 Deploy

O projeto é implantado automaticamente na **Vercel** a cada push na branch `main`.

```bash
# Deploy manual (requer Vercel CLI)
vercel --prod
```

---

## 📄 Licença

Este projeto é de uso **privado e exclusivo** da Clínica Souriê Odontologia.  
Todos os direitos reservados © 2025 Souriê Odontologia.

---

<div align="center">
  Desenvolvido com ❤️ para a <strong>Souriê Odontologia</strong>
</div>
