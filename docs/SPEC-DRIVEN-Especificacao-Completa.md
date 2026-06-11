# SPEC-DRIVEN — Especificação Completa da Árvore de Links Premium

**Documento:** Specification-Driven Document  
**Versão:** 1.0  
**Data:** 2026-06-10  
**Status:** ✅ Pronto para implementação  

---

## Índice

1. [Objetivo do Projeto](#1-objetivo-do-projeto)
2. [Arquitetura da Página](#2-arquitetura-da-página)
3. [Copy Completa](#3-copy-completa)
4. [Design System](#4-design-system)
5. [Paleta de Cores](#5-paleta-de-cores)
6. [Componentes](#6-componentes)
7. [Animações](#7-animações)
8. [SEO](#8-seo)
9. [Estrutura Next.js](#9-estrutura-nextjs)
10. [Especificação Técnica](#10-especificação-técnica)
11. [Wireframe ASCII](#11-wireframe-ascii)
12. [JSON de Configuração](#12-json-de-configuração)

---

## 1. Objetivo do Projeto

> Referência cruzada: [PRD-001](./PRD-001-Arvore-de-Links-Premium.md)

### 1.1 Visão

Transformar uma simples lista de links em uma **experiência premium de marca pessoal** que projeta autoridade, gera confiança e converte visitantes em leads e clientes.

### 1.2 Público-Alvo

| Segmento | Perfil | Necessidade |
|---|---|---|
| **Primário** | Empresários e gestores (28-45) | Contratar serviços/produtos |
| **Secundário** | Profissionais curiosos (22-35) | Consumir conteúdo gratuito |
| **Terciário** | Recrutadores/parceiros | Avaliar competência profissional |

### 1.3 Objetivos Mensuráveis

| Objetivo | Métrica | Meta |
|---|---|---|
| Gerar leads via WhatsApp | Cliques no botão WhatsApp | 200+ cliques/mês |
| Solicitar orçamentos | Cliques no CTA orçamento | 50+ cliques/mês |
| Aumentar presença social | Cliques em redes sociais | 300+ cliques/mês |
| Transmitir autoridade | Tempo na página | > 45 segundos |
| Reduzir bounce rate | Taxa de rejeição | < 40% |

### 1.4 Jornada do Usuário Detalhada

```
ENTRADA (Instagram/LinkedIn/WhatsApp Bio)
    │
    ▼
HERO SECTION ─────────────────────────────── Impacto Visual (0-3s)
    │  • Foto profissional de alta qualidade
    │  • Nome + Cargo + Frase de posicionamento
    │  • Floating badges com números
    │  • CTA principal pulsante
    │
    ▼
LINKS ESTRATÉGICOS ───────────────────────── Exploração (3-15s)
    │  • Cards premium com ícones e descrição
    │  • Hierarquia visual: orçamento > WhatsApp > portfólio
    │  • Hover effects que convidam ao clique
    │
    ▼
PRODUTOS E SERVIÇOS ──────────────────────── Interesse (15-25s)
    │  • Cards com título, descrição e CTA
    │  • Preço ou "a partir de" quando aplicável
    │  • Badge "Mais vendido" ou "Novo"
    │
    ▼
PROVA SOCIAL ─────────────────────────────── Confiança (25-40s)
    │  • Depoimentos com foto, nome e empresa
    │  • Números de impacto (clientes, projetos, anos)
    │  • Logos de empresas atendidas
    │
    ▼
SOBRE MIM ────────────────────────────────── Conexão (40-50s)
    │  • Mini bio profissional
    │  • Certificações e conquistas
    │  • Foto secundária
    │
    ▼
REDES SOCIAIS + RODAPÉ ───────────────────── Extensão (50-60s)
    │  • Botões sociais modernos
    │  • Informações institucionais
    │
    ▼
CONVERSÃO ────────────────────────────────── Ação Final
    • WhatsApp / Orçamento / Newsletter
```

---

## 2. Arquitetura da Página

### 2.1 Seção: HERO

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│          ┌──────────────────┐                        │
│          │                  │                        │
│          │   FOTO PERFIL    │    ← Circular, borda   │
│          │   (160x160px)    │      gradient, glow    │
│          │                  │                        │
│          └──────────────────┘                        │
│                                                      │
│     [Badge: +500 Projetos] [Badge: 10+ Anos]         │
│                                                      │
│              NOME COMPLETO                           │
│         Cargo | Especialidade                        │
│                                                      │
│     "Frase de posicionamento impactante              │
│      que transmite autoridade e valor"               │
│                                                      │
│     ┌──────────────────────────────┐                 │
│     │  ★  SOLICITAR ORÇAMENTO  ★   │  ← CTA Premium │
│     └──────────────────────────────┘                 │
│                                                      │
└──────────────────────────────────────────────────────┘
```

#### Especificações:

| Elemento | Especificação |
|---|---|
| **Foto** | 160x160px, `border-radius: 50%`, borda gradient 3px, `box-shadow` com glow da cor primária |
| **Nome** | `font-size: 2rem` (32px), `font-weight: 800`, cor branca |
| **Cargo** | `font-size: 1rem` (16px), `font-weight: 400`, cor `text-muted` |
| **Frase** | `font-size: 1.125rem` (18px), `font-weight: 400`, `max-width: 480px`, centralizada |
| **CTA** | Background gradient, `padding: 16px 32px`, `border-radius: 12px`, glow effect |
| **Floating Badges** | `backdrop-filter: blur(10px)`, `bg-white/10`, `border: 1px solid white/20` |
| **Background** | Gradient radial sutil da cor primária (5% opacity) sobre `bg-background` |

---

### 2.2 Seção: LINKS ESTRATÉGICOS

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│            ═══ Links Estratégicos ═══                │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │ 🏢  Conheça Minha Empresa                      │  │
│  │     Soluções digitais para seu negócio crescer │  │
│  │                                         →      │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │ 💬  Fale Comigo no WhatsApp                    │  │
│  │     Resposta rápida e atendimento personalizado│  │
│  │                                         →      │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │ 📋  Solicitar Orçamento Gratuito               │  │
│  │     Receba uma proposta personalizada em 24h   │  │
│  │                                         →      │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌─────────────────────┐  ┌─────────────────────┐   │
│  │ 📁 Portfólio        │  │ 🏆 Cases de Sucesso │   │
│  │    Ver projetos     │  │    Resultados reais  │   │
│  └─────────────────────┘  └─────────────────────┘   │
│                                                      │
│  ┌─────────────────────┐  ┌─────────────────────┐   │
│  │ 🎬 YouTube          │  │ 📸 Instagram        │   │
│  │    Conteúdo grátis  │  │    Acompanhe o dia  │   │
│  └─────────────────────┘  └─────────────────────┘   │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │ 💼  LinkedIn                                   │  │
│  │     Conecte-se profissionalmente               │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

#### Especificações dos Cards:

| Propriedade | Valor |
|---|---|
| **Background** | `bg-white/5` (glass effect) |
| **Borda** | `border: 1px solid white/10` |
| **Border Radius** | `16px` |
| **Padding** | `20px 24px` |
| **Backdrop Filter** | `blur(10px)` |
| **Sombra** | `0 4px 30px rgba(0,0,0,0.1)` |
| **Ícone** | Lucide, 24px, cor primária |
| **Título** | `font-weight: 600`, `font-size: 1rem` |
| **Descrição** | `font-weight: 400`, `font-size: 0.875rem`, cor muted |
| **Seta** | `ChevronRight` icon, `20px`, animação ao hover |

#### Layout:

| Tipo | Desktop | Mobile |
|---|---|---|
| **Cards full** (3 primeiros) | 1 coluna, 100% width | 1 coluna, 100% width |
| **Cards half** (4 seguintes) | 2 colunas, grid | 1 coluna, stack |
| **Card full** (último) | 1 coluna, 100% width | 1 coluna, 100% width |

---

### 2.3 Seção: PRODUTOS E SERVIÇOS

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│           ═══ Produtos & Serviços ═══                │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │ [MAIS VENDIDO]                                 │  │
│  │                                                │  │
│  │  Consultoria Digital Premium                   │  │
│  │                                                │  │
│  │  Diagnóstico completo + plano de ação          │  │
│  │  personalizado para transformar sua            │  │
│  │  presença digital.                             │  │
│  │                                                │  │
│  │  ✓ Análise de mercado                          │  │
│  │  ✓ Estratégia personalizada                    │  │
│  │  ✓ Acompanhamento por 30 dias                  │  │
│  │                                                │  │
│  │  A partir de R$ XXX                            │  │
│  │                                                │  │
│  │  ┌──────────────────────────────┐              │  │
│  │  │     QUERO SABER MAIS →       │              │  │
│  │  └──────────────────────────────┘              │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌──────────────────┐  ┌──────────────────┐         │
│  │ [NOVO]           │  │                  │         │
│  │ Curso Online     │  │ Mentoria 1:1     │         │
│  │                  │  │                  │         │
│  │ Aprenda do zero  │  │ Acompanhamento   │         │
│  │ ao avançado...   │  │ individual...    │         │
│  │                  │  │                  │         │
│  │ [ACESSAR →]      │  │ [AGENDAR →]      │         │
│  └──────────────────┘  └──────────────────┘         │
│                                                      │
└──────────────────────────────────────────────────────┘
```

#### Especificações:

| Elemento | Especificação |
|---|---|
| **Card principal** | Full width, borda gradient animada, badge "Mais Vendido" |
| **Cards secundários** | Grid 2 colunas desktop, stack mobile |
| **Badge** | `bg-primary`, `px-3 py-1`, `rounded-full`, `font-size: 0.75rem`, `font-weight: 600` |
| **Título** | `font-size: 1.25rem`, `font-weight: 700` |
| **Descrição** | `font-size: 0.875rem`, `line-height: 1.6` |
| **Checklist** | Lucide `Check` icon, cor verde, `gap: 8px` |
| **Preço** | `font-size: 1.125rem`, `font-weight: 600`, cor primária |
| **CTA** | `bg-primary`, `text-white`, `rounded-xl`, `padding: 12px 24px` |

---

### 2.4 Seção: PROVA SOCIAL

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│             ═══ O Que Dizem Sobre Mim ═══            │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │  +500    │  │  +50     │  │  10+     │           │
│  │ Projetos │  │ Empresas │  │  Anos    │           │
│  │Entregues │  │Atendidas │  │Experiência│          │
│  └──────────┘  └──────────┘  └──────────┘           │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  ★ ★ ★ ★ ★                                    │  │
│  │                                                │  │
│  │  "Transformou completamente a presença         │  │
│  │   digital da minha empresa. Profissionalismo   │  │
│  │   e resultados incríveis."                     │  │
│  │                                                │  │
│  │  ┌────┐                                        │  │
│  │  │FOTO│  Maria Silva                           │  │
│  │  └────┘  CEO, Empresa XYZ                      │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  ★ ★ ★ ★ ★                                    │  │
│  │                                                │  │
│  │  "O melhor investimento que fiz este ano.      │  │
│  │   ROI de 300% em 3 meses."                     │  │
│  │                                                │  │
│  │  ┌────┐                                        │  │
│  │  │FOTO│  João Santos                           │  │
│  │  └────┘  Diretor, Empresa ABC                  │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

#### Especificações:

| Elemento | Especificação |
|---|---|
| **Stats** | Grid 3 colunas, número grande (`2rem`, `font-weight: 800`), label pequeno (`0.875rem`) |
| **Testimonial Card** | `bg-white/5`, `border: 1px solid white/10`, `rounded-2xl`, `p-6` |
| **Stars** | 5 estrelas amarelas (`#FBBF24`), `16px` |
| **Quote** | `font-size: 1rem`, `font-style: italic`, `line-height: 1.7` |
| **Avatar** | `48px`, circular, `border: 2px solid primary` |
| **Name** | `font-weight: 600`, `font-size: 0.875rem` |
| **Company** | `font-weight: 400`, `font-size: 0.75rem`, cor muted |
| **Layout** | Carousel no mobile, stack no desktop |

---

### 2.5 Seção: SOBRE MIM

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│              ═══ Sobre Mim ═══                       │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │                                                │  │
│  │  Olá! Sou [Nome], especialista em [área]       │  │
│  │  com mais de [X] anos de experiência ajudando  │  │
│  │  empresas e profissionais a [benefício].       │  │
│  │                                                │  │
│  │  Ao longo da minha trajetória, já impactei     │  │
│  │  mais de [número] negócios e acredito que      │  │
│  │  [filosofia/valor].                            │  │
│  │                                                │  │
│  │  📍 Localização                                │  │
│  │  🎓 Formação/Certificação                      │  │
│  │  🏆 Principal conquista                        │  │
│  │                                                │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

### 2.6 Seção: REDES SOCIAIS

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│           ═══ Me Acompanhe ═══                       │
│                                                      │
│       [IG]  [YT]  [LI]  [TT]  [GH]                 │
│                                                      │
│        Cada botão: 48px, rounded, glass effect       │
│        Hover: scale(1.1) + glow da cor da rede       │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

### 2.7 Seção: RODAPÉ

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  © 2026 [Nome]. Todos os direitos reservados.        │
│  Feito com ❤️ e muito café.                          │
│                                                      │
│  CNPJ: XX.XXX.XXX/XXXX-XX                           │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 3. Copy Completa

### 3.1 Hero Section

| Elemento | Copy |
|---|---|
| **Headline** | Transformando ideias em resultados digitais |
| **Subheadline** | Especialista em Soluções Digitais \| Estratégia & Performance |
| **Frase de posicionamento** | Ajudo empresas e profissionais a construírem presença digital que gera autoridade, atrai clientes e multiplica resultados. |
| **CTA principal** | Solicitar Orçamento Gratuito |

### 3.2 Links Estratégicos

| Link | Título | Descrição | CTA implícito |
|---|---|---|---|
| 1 | 🏢 Conheça Minha Empresa | Soluções digitais sob medida para seu negócio crescer | → |
| 2 | 💬 Fale Comigo no WhatsApp | Atendimento rápido e personalizado. Respondo em até 2h | → |
| 3 | 📋 Solicitar Orçamento Gratuito | Receba uma proposta personalizada em até 24 horas | → |
| 4 | 📁 Portfólio | Conheça projetos que geraram resultado | → |
| 5 | 🏆 Cases de Sucesso | Veja resultados reais de clientes reais | → |
| 6 | 🎬 Canal do YouTube | Conteúdo gratuito sobre estratégia digital | → |
| 7 | 📸 Instagram | Bastidores e dicas diárias | → |
| 8 | 💼 LinkedIn | Conecte-se profissionalmente | → |

### 3.3 Produtos e Serviços

#### Card Principal

| Elemento | Copy |
|---|---|
| **Badge** | Mais Vendido |
| **Título** | Consultoria Digital Premium |
| **Descrição** | Diagnóstico completo + plano de ação personalizado para transformar sua presença digital e gerar resultados mensuráveis. |
| **Checklist** | ✓ Análise completa de mercado e concorrência |
|  | ✓ Estratégia digital personalizada |
|  | ✓ Plano de ação detalhado |
|  | ✓ Acompanhamento por 30 dias |
| **Preço** | A partir de R$ 2.997 |
| **CTA** | Quero Saber Mais → |

#### Cards Secundários

**Card 2:**

| Elemento | Copy |
|---|---|
| **Badge** | Novo |
| **Título** | Curso Online Completo |
| **Descrição** | Do zero ao avançado: aprenda a construir uma presença digital que vende, com aulas práticas e suporte. |
| **CTA** | Acessar Agora → |

**Card 3:**

| Elemento | Copy |
|---|---|
| **Título** | Mentoria 1:1 |
| **Descrição** | Acompanhamento individual e personalizado para acelerar seus resultados em tempo recorde. |
| **CTA** | Agendar Sessão → |

### 3.4 Prova Social

#### Estatísticas

| Número | Label |
|---|---|
| +500 | Projetos Entregues |
| +50 | Empresas Atendidas |
| 10+ | Anos de Experiência |

#### Depoimentos

**Depoimento 1:**

> "Transformou completamente a presença digital da minha empresa. O profissionalismo e a atenção aos detalhes são impressionantes. Resultado: 3x mais leads em 60 dias."
>
> — **Maria Silva**, CEO da TechFlow

**Depoimento 2:**

> "O melhor investimento que fiz este ano. A consultoria trouxe clareza estratégica e ROI de 300% em apenas 3 meses. Recomendo de olhos fechados."
>
> — **João Santos**, Diretor da Digital Plus

**Depoimento 3:**

> "Profissional excepcional. Entregou muito além do esperado. Nosso faturamento online cresceu 150% após implementar as estratégias."
>
> — **Ana Oliveira**, Fundadora da Creative Lab

### 3.5 Sobre Mim

> Olá! Sou [Nome], especialista em soluções digitais com mais de 10 anos de experiência ajudando empresas e profissionais a construírem presença digital que realmente gera resultados.
>
> Ao longo da minha trajetória, já impactei mais de 500 projetos e acredito que tecnologia, estratégia e design são os pilares para qualquer negócio prosperar no digital.

**Badges:**
- 📍 Brasil
- 🎓 Certificado Google & Meta
- 🏆 Top 1% Profissionais Digitais

### 3.6 CTAs de Conversão (Copy Hierarchy)

| Prioridade | CTA | Onde aparece |
|---|---|---|
| 🔴 P0 | Solicitar Orçamento Gratuito | Hero, Produtos |
| 🔴 P0 | Fale Comigo no WhatsApp | Links, Floating button |
| 🟡 P1 | Quero Saber Mais | Cards de produto |
| 🟡 P1 | Agendar Sessão | Mentoria |
| 🟢 P2 | Acessar Agora | Curso |
| 🟢 P2 | Ver Projetos | Portfólio |

---

## 4. Design System

### 4.1 Tipografia

```
Font Stack:
├── Primary: Inter (Variable, Google Fonts)
│   ├── Display:    800 (ExtraBold)   │ Headings grandes
│   ├── Heading:    700 (Bold)        │ Section titles
│   ├── Subheading: 600 (SemiBold)    │ Card titles
│   ├── Body:       400 (Regular)     │ Textos
│   └── Caption:    400 (Regular)     │ Labels pequenos
│
└── Mono: JetBrains Mono (Google Fonts)
    └── Code/Badge:  500 (Medium)     │ Badges técnicos
```

#### Escala Tipográfica (Mobile → Desktop)

| Token | Mobile | Desktop | Weight | Line Height |
|---|---|---|---|---|
| `text-display` | 28px / 1.75rem | 40px / 2.5rem | 800 | 1.1 |
| `text-h1` | 24px / 1.5rem | 32px / 2rem | 700 | 1.2 |
| `text-h2` | 20px / 1.25rem | 24px / 1.5rem | 700 | 1.3 |
| `text-h3` | 18px / 1.125rem | 20px / 1.25rem | 600 | 1.4 |
| `text-body` | 16px / 1rem | 16px / 1rem | 400 | 1.6 |
| `text-body-sm` | 14px / 0.875rem | 14px / 0.875rem | 400 | 1.5 |
| `text-caption` | 12px / 0.75rem | 12px / 0.75rem | 400 | 1.4 |
| `text-overline` | 11px / 0.6875rem | 12px / 0.75rem | 600 | 1.2 |

### 4.2 Espaçamentos

```
Spacing Scale (base: 4px):
├── spacing-0:   0px
├── spacing-1:   4px     │ Micro gaps
├── spacing-2:   8px     │ Tight spacing
├── spacing-3:   12px    │ Small padding
├── spacing-4:   16px    │ Default padding
├── spacing-5:   20px    │ Card padding
├── spacing-6:   24px    │ Section gap
├── spacing-8:   32px    │ Component gap
├── spacing-10:  40px    │ Section padding (mobile)
├── spacing-12:  48px    │ Section padding
├── spacing-16:  64px    │ Section gap (desktop)
├── spacing-20:  80px    │ Page section gap
├── spacing-24:  96px    │ Large section gap
└── spacing-32:  128px   │ Hero padding
```

### 4.3 Grid System

```
Container:
├── Max Width: 640px (content area)
├── Page Max Width: 100vw
├── Padding X: 16px (mobile) / 24px (tablet) / 32px (desktop)
│
├── Breakpoints:
│   ├── sm:  640px   │ Small phones → Large phones
│   ├── md:  768px   │ Tablets
│   ├── lg:  1024px  │ Small desktops
│   └── xl:  1280px  │ Large desktops
│
└── Grid:
    ├── 1 coluna:  Links full-width
    ├── 2 colunas: Links half-width (desktop)
    └── 3 colunas: Stats
```

### 4.4 Bordas

| Token | Valor | Uso |
|---|---|---|
| `rounded-sm` | 8px | Badges, tags |
| `rounded-md` | 12px | Botões, inputs |
| `rounded-lg` | 16px | Cards |
| `rounded-xl` | 20px | Cards destacados |
| `rounded-2xl` | 24px | Hero card |
| `rounded-full` | 9999px | Avatar, pills |

#### Border Colors

| Token | Valor | Uso |
|---|---|---|
| `border-default` | `rgba(255,255,255,0.1)` | Cards, divisores |
| `border-hover` | `rgba(255,255,255,0.2)` | Hover state |
| `border-active` | Cor primária, 50% opacity | Active/focus |
| `border-gradient` | Gradient primário | Cards destaque |

### 4.5 Sombras

| Token | Valor | Uso |
|---|---|---|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Botões |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards em repouso |
| `shadow-lg` | `0 10px 25px rgba(0,0,0,0.15)` | Cards em hover |
| `shadow-xl` | `0 20px 50px rgba(0,0,0,0.25)` | Modais, hero card |
| `shadow-glow` | `0 0 40px rgba(primary, 0.15)` | CTA principal |
| `shadow-glow-lg` | `0 0 80px rgba(primary, 0.1)` | Hero background |

### 4.6 Efeitos Glass (Glassmorphism)

| Token | Valor |
|---|---|
| `glass-bg` | `rgba(255,255,255,0.05)` |
| `glass-bg-hover` | `rgba(255,255,255,0.08)` |
| `glass-border` | `1px solid rgba(255,255,255,0.1)` |
| `glass-blur` | `backdrop-filter: blur(10px)` |
| `glass-blur-heavy` | `backdrop-filter: blur(20px)` |

### 4.7 Responsividade

| Aspecto | Mobile (< 640px) | Tablet (640-1024px) | Desktop (> 1024px) |
|---|---|---|---|
| Container padding | 16px | 24px | 32px |
| Hero foto | 120px | 140px | 160px |
| Headline size | 28px | 34px | 40px |
| Cards grid | 1 col | 2 col | 2 col |
| Stats grid | 3 col (compact) | 3 col | 3 col |
| Section gap | 48px | 64px | 80px |
| CTA size | Full width | Auto | Auto |

---

## 5. Paleta de Cores

### 5.1 Dark Theme (Padrão)

```
╔══════════════════════════════════════════════════════════════╗
║                      PALETA DE CORES                        ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ┌─────────────────────────── BACKGROUNDS ──────────────┐   ║
║  │                                                       │   ║
║  │  bg-body       #09090B   HSL(240, 10%, 3.9%)         │   ║
║  │  bg-card       #18181B   HSL(240, 5.9%, 10%)         │   ║
║  │  bg-elevated   #27272A   HSL(240, 3.7%, 15.9%)      │   ║
║  │  bg-surface    #3F3F46   HSL(240, 5.2%, 26%)        │   ║
║  │                                                       │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                              ║
║  ┌─────────────────────────── PRIMARY ──────────────────┐   ║
║  │                                                       │   ║
║  │  primary-50    #EEF2FF   (Lightest)                  │   ║
║  │  primary-100   #E0E7FF                               │   ║
║  │  primary-200   #C7D2FE                               │   ║
║  │  primary-300   #A5B4FC                               │   ║
║  │  primary-400   #818CF8                               │   ║
║  │  primary-500   #6366F1   ← BASE (Indigo)            │   ║
║  │  primary-600   #4F46E5                               │   ║
║  │  primary-700   #4338CA                               │   ║
║  │  primary-800   #3730A3                               │   ║
║  │  primary-900   #312E81   (Darkest)                   │   ║
║  │                                                       │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                              ║
║  ┌─────────────────────────── SECONDARY ────────────────┐   ║
║  │                                                       │   ║
║  │  secondary-50  #F5F3FF   (Lightest)                  │   ║
║  │  secondary-400 #C084FC                               │   ║
║  │  secondary-500 #A855F7   ← BASE (Violet)            │   ║
║  │  secondary-600 #9333EA                               │   ║
║  │  secondary-900 #581C87   (Darkest)                   │   ║
║  │                                                       │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                              ║
║  ┌─────────────────────────── ACCENT ───────────────────┐   ║
║  │                                                       │   ║
║  │  accent-400    #22D3EE   (Cyan - highlights)         │   ║
║  │  accent-500    #06B6D4   ← BASE                      │   ║
║  │  success       #10B981   (Emerald - positivo)        │   ║
║  │  warning       #F59E0B   (Amber - atenção)           │   ║
║  │  error         #EF4444   (Red - erro)                │   ║
║  │                                                       │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                              ║
║  ┌─────────────────────────── TEXT ─────────────────────┐   ║
║  │                                                       │   ║
║  │  text-primary    #FAFAFA   (Zinc-50, quase branco)   │   ║
║  │  text-secondary  #A1A1AA   (Zinc-400)                │   ║
║  │  text-muted      #71717A   (Zinc-500)                │   ║
║  │  text-disabled   #52525B   (Zinc-600)                │   ║
║  │                                                       │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                              ║
║  ┌─────────────────────────── GRADIENTS ────────────────┐   ║
║  │                                                       │   ║
║  │  gradient-primary:                                    │   ║
║  │    from: #6366F1 → to: #A855F7                       │   ║
║  │    (Indigo → Violet)                                  │   ║
║  │                                                       │   ║
║  │  gradient-accent:                                     │   ║
║  │    from: #6366F1 → via: #A855F7 → to: #06B6D4       │   ║
║  │    (Indigo → Violet → Cyan)                           │   ║
║  │                                                       │   ║
║  │  gradient-hero-glow:                                  │   ║
║  │    radial from: rgba(99,102,241,0.15) → transparent  │   ║
║  │                                                       │   ║
║  │  gradient-card-border:                                │   ║
║  │    conic from: transparent → primary → transparent   │   ║
║  │                                                       │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

### 5.2 Aplicação das Cores

| Contexto | Cor | Token |
|---|---|---|
| Fundo da página | `#09090B` | `bg-body` |
| Cards | `rgba(255,255,255,0.05)` sobre `bg-body` | `glass-bg` |
| CTA principal | Gradient `primary-500 → secondary-500` | `gradient-primary` |
| Texto principal | `#FAFAFA` | `text-primary` |
| Texto secundário | `#A1A1AA` | `text-secondary` |
| Bordas de cards | `rgba(255,255,255,0.1)` | `border-default` |
| Ícones de links | `primary-400` (#818CF8) | - |
| Hover de cards | `rgba(255,255,255,0.08)` | `glass-bg-hover` |
| Glow do hero | `rgba(99,102,241,0.15)` | `gradient-hero-glow` |
| Estrelas de review | `#FBBF24` (Amber-400) | - |
| WhatsApp | `#25D366` | - |
| Instagram | Gradient nativo | - |
| LinkedIn | `#0A66C2` | - |
| YouTube | `#FF0000` | - |

### 5.3 Contraste e Acessibilidade

| Combinação | Ratio | WCAG AA | WCAG AAA |
|---|---|---|---|
| text-primary sobre bg-body | 19.4:1 | ✅ Pass | ✅ Pass |
| text-secondary sobre bg-body | 7.2:1 | ✅ Pass | ✅ Pass |
| text-muted sobre bg-body | 4.6:1 | ✅ Pass | ❌ Fail |
| primary-400 sobre bg-body | 5.8:1 | ✅ Pass | ❌ Fail |
| text-primary sobre bg-card | 16.1:1 | ✅ Pass | ✅ Pass |

---

## 6. Componentes

### 6.1 Button

```
┌─────────────────────────────────────────────────────────────┐
│ COMPONENT: Button                                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Variants:                                                   │
│                                                             │
│ ┌─── PRIMARY ──────────────────────────────────┐            │
│ │  bg: gradient-primary                         │            │
│ │  text: white                                  │            │
│ │  shadow: shadow-glow                          │            │
│ │  padding: 16px 32px                           │            │
│ │  border-radius: 12px                          │            │
│ │  font-weight: 600                             │            │
│ │  font-size: 1rem                              │            │
│ └───────────────────────────────────────────────┘            │
│                                                             │
│ ┌─── SECONDARY ────────────────────────────────┐            │
│ │  bg: glass-bg                                 │            │
│ │  border: glass-border                         │            │
│ │  text: text-primary                           │            │
│ │  backdrop-filter: blur(10px)                  │            │
│ │  padding: 12px 24px                           │            │
│ │  border-radius: 12px                          │            │
│ └───────────────────────────────────────────────┘            │
│                                                             │
│ ┌─── GHOST ────────────────────────────────────┐            │
│ │  bg: transparent                              │            │
│ │  text: text-secondary                         │            │
│ │  padding: 12px 24px                           │            │
│ │  border-radius: 12px                          │            │
│ └───────────────────────────────────────────────┘            │
│                                                             │
│ States:                                                     │
│                                                             │
│ ┌─── HOVER ────────────────────────────────────┐            │
│ │  Primary: brightness(1.1), scale(1.02),       │            │
│ │           shadow-glow-lg                      │            │
│ │  Secondary: glass-bg-hover, border-hover      │            │
│ │  Ghost: glass-bg                              │            │
│ │  transition: all 200ms ease-out               │            │
│ └───────────────────────────────────────────────┘            │
│                                                             │
│ ┌─── ACTIVE ───────────────────────────────────┐            │
│ │  scale(0.98), brightness(0.95)                │            │
│ │  transition: all 100ms ease-out               │            │
│ └───────────────────────────────────────────────┘            │
│                                                             │
│ ┌─── FOCUS ────────────────────────────────────┐            │
│ │  outline: 2px solid primary-400               │            │
│ │  outline-offset: 2px                          │            │
│ │  ring: ring-2 ring-primary-400/50             │            │
│ └───────────────────────────────────────────────┘            │
│                                                             │
│ ┌─── DISABLED ─────────────────────────────────┐            │
│ │  opacity: 0.5                                 │            │
│ │  cursor: not-allowed                          │            │
│ │  pointer-events: none                         │            │
│ └───────────────────────────────────────────────┘            │
│                                                             │
│ Sizes:                                                      │
│ ┌── SM: py-2 px-4 text-sm ──┐                              │
│ ┌── MD: py-3 px-6 text-base ┐ (default)                    │
│ ┌── LG: py-4 px-8 text-lg ──┐                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Props TypeScript:**

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  'aria-label'?: string;
}
```

---

### 6.2 LinkCard

```
┌─────────────────────────────────────────────────────────────┐
│ COMPONENT: LinkCard                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Variants:                                                   │
│                                                             │
│ ┌─── FULL WIDTH ───────────────────────────────┐            │
│ │                                               │            │
│ │  ┌────┐  Title                           →   │            │
│ │  │ICON│  Description text here               │            │
│ │  └────┘                                      │            │
│ │                                               │            │
│ │  Width: 100%                                  │            │
│ │  Grid: icon(48px) | content(flex) | arrow     │            │
│ └───────────────────────────────────────────────┘            │
│                                                             │
│ ┌─── HALF WIDTH ───────────────────────────────┐            │
│ │                                               │            │
│ │  ┌────┐                                      │            │
│ │  │ICON│  Title                               │            │
│ │  └────┘  Description                         │            │
│ │                                               │            │
│ │  Width: calc(50% - gap/2)                    │            │
│ │  Stack: vertical                              │            │
│ └───────────────────────────────────────────────┘            │
│                                                             │
│ ┌─── FEATURED ─────────────────────────────────┐            │
│ │                                               │            │
│ │  Border: gradient animated (conic)            │            │
│ │  Shadow: shadow-glow                          │            │
│ │  Bg: slightly brighter glass                  │            │
│ │  Badge: optional floating badge               │            │
│ │                                               │            │
│ └───────────────────────────────────────────────┘            │
│                                                             │
│ Base Styles:                                                │
│ ├── bg: glass-bg                                            │
│ ├── border: glass-border                                    │
│ ├── border-radius: 16px                                     │
│ ├── padding: 20px 24px                                      │
│ ├── backdrop-filter: blur(10px)                             │
│ ├── cursor: pointer                                         │
│ └── transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1)     │
│                                                             │
│ States:                                                     │
│ ├── Hover:                                                  │
│ │   ├── bg: glass-bg-hover                                  │
│ │   ├── border-color: white/20                              │
│ │   ├── transform: translateY(-2px)                         │
│ │   ├── shadow: shadow-lg                                   │
│ │   └── Arrow: translateX(4px)                              │
│ ├── Active: scale(0.98)                                     │
│ ├── Focus: ring-2 ring-primary-400/50                       │
│ └── Disabled: opacity-50, pointer-events-none               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Props TypeScript:**

```typescript
interface LinkCardProps {
  title: string;
  description?: string;
  href: string;
  icon: string; // Lucide icon name
  variant: 'full' | 'half' | 'featured';
  badge?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
}
```

---

### 6.3 SocialButton

```
┌─────────────────────────────────────────────────────────────┐
│ COMPONENT: SocialButton                                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ┌──────┐                                                    │
│ │      │  48x48px                                           │
│ │ ICON │  rounded-xl (12px)                                 │
│ │      │  bg: glass-bg                                      │
│ └──────┘  border: glass-border                              │
│           icon: 24px, text-secondary                        │
│                                                             │
│ States:                                                     │
│ ├── Hover:                                                  │
│ │   ├── scale(1.1)                                          │
│ │   ├── bg: brand color (ex: #E1306C for Instagram)         │
│ │   ├── icon color: white                                   │
│ │   └── shadow: 0 0 20px brand-color/30                     │
│ ├── Active: scale(0.95)                                     │
│ └── Focus: ring-2 ring-primary-400/50                       │
│                                                             │
│ Brand Colors:                                               │
│ ├── Instagram:  #E1306C                                     │
│ ├── YouTube:    #FF0000                                     │
│ ├── LinkedIn:   #0A66C2                                     │
│ ├── Twitter/X:  #000000 (or #1DA1F2)                       │
│ ├── GitHub:     #333333                                     │
│ ├── TikTok:     #000000                                     │
│ └── WhatsApp:   #25D366                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Props TypeScript:**

```typescript
interface SocialButtonProps {
  platform: 'instagram' | 'youtube' | 'linkedin' | 'twitter' | 'github' | 'tiktok' | 'whatsapp';
  href: string;
  'aria-label': string;
  className?: string;
}
```

---

### 6.4 HeroCard

```
┌─────────────────────────────────────────────────────────────┐
│ COMPONENT: HeroCard                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ┌───────────────────────────────────────────┐               │
│ │          ┌──────────┐                     │               │
│ │          │  AVATAR  │  160px circular     │               │
│ │          │          │  border: 3px grad   │               │
│ │          └──────────┘  glow: primary/20   │               │
│ │                                           │               │
│ │     [Badge] [Badge] [Badge]               │               │
│ │                                           │               │
│ │          DISPLAY NAME                     │               │
│ │        role | specialty                   │               │
│ │                                           │               │
│ │     "Positioning statement that           │               │
│ │      captures attention and value"        │               │
│ │                                           │               │
│ │     ┌──────────────────────┐              │               │
│ │     │  PRIMARY CTA BUTTON  │              │               │
│ │     └──────────────────────┘              │               │
│ │                                           │               │
│ └───────────────────────────────────────────┘               │
│                                                             │
│ Background: radial-gradient hero-glow                       │
│ Padding: 80px 20px (mobile) / 128px 32px (desktop)         │
│ Text-align: center                                          │
│ Max-width: 640px (content)                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Props TypeScript:**

```typescript
interface HeroCardProps {
  avatar: {
    src: string;
    alt: string;
  };
  name: string;
  role: string;
  tagline: string;
  badges: Array<{
    icon: string;
    text: string;
  }>;
  cta: {
    text: string;
    href: string;
  };
}
```

---

### 6.5 TestimonialCard

```
┌─────────────────────────────────────────────────────────────┐
│ COMPONENT: TestimonialCard                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ┌───────────────────────────────────────────┐               │
│ │                                           │               │
│ │  ★ ★ ★ ★ ★        (5 stars, amber)       │               │
│ │                                           │               │
│ │  "Quote text that provides social         │               │
│ │   proof and builds trust with specific    │               │
│ │   results mentioned."                     │               │
│ │                                           │               │
│ │  ┌──────┐                                 │               │
│ │  │AVATAR│  Author Name                    │               │
│ │  └──────┘  Title, Company                 │               │
│ │                                           │               │
│ └───────────────────────────────────────────┘               │
│                                                             │
│ Specs:                                                      │
│ ├── bg: glass-bg                                            │
│ ├── border: glass-border                                    │
│ ├── border-radius: 24px                                     │
│ ├── padding: 32px                                           │
│ ├── Star size: 16px                                         │
│ ├── Quote: text-body, italic, line-height: 1.7              │
│ ├── Avatar: 48px circular                                   │
│ ├── Author: text-body-sm, font-weight: 600                  │
│ └── Company: text-caption, text-muted                       │
│                                                             │
│ States:                                                     │
│ ├── Default: subtle glass                                   │
│ ├── Hover: border-hover, translateY(-2px)                   │
│ └── Mobile: full-width, swipeable                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Props TypeScript:**

```typescript
interface TestimonialCardProps {
  rating: number; // 1-5
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
  className?: string;
}
```

---

### 6.6 FloatingBadge

```
┌─────────────────────────────────────────────────────────────┐
│ COMPONENT: FloatingBadge                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ┌────────────────────────┐                                  │
│ │  🎯  +500 Projetos     │                                  │
│ └────────────────────────┘                                  │
│                                                             │
│ Specs:                                                      │
│ ├── bg: glass-bg                                            │
│ ├── backdrop-filter: blur(10px)                             │
│ ├── border: glass-border                                    │
│ ├── border-radius: 9999px (pill)                            │
│ ├── padding: 8px 16px                                       │
│ ├── font-size: 0.75rem (12px)                               │
│ ├── font-weight: 500                                        │
│ ├── display: inline-flex                                    │
│ ├── gap: 6px                                                │
│ ├── align-items: center                                     │
│ └── color: text-secondary                                   │
│                                                             │
│ Animation:                                                  │
│ ├── Float: translateY(-3px) ↔ translateY(3px)               │
│ ├── Duration: 3s                                            │
│ ├── Easing: ease-in-out                                     │
│ └── Infinite loop                                           │
│                                                             │
│ States:                                                     │
│ ├── Hover: bg: glass-bg-hover, scale(1.05)                 │
│ └── Mobile: Static (no float animation)                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Props TypeScript:**

```typescript
interface FloatingBadgeProps {
  icon: string; // emoji or Lucide icon
  text: string;
  position?: 'left' | 'right';
  delay?: number; // animation delay in seconds
  className?: string;
}
```

---

### 6.7 StatCard

```
┌─────────────────────────────────────────────────────────────┐
│ COMPONENT: StatCard                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ┌──────────────────┐                                        │
│ │                  │                                        │
│ │     +500         │  number: text-display, font-weight:800 │
│ │  Projetos        │  label: text-body-sm, text-muted       │
│ │  Entregues       │                                        │
│ │                  │                                        │
│ └──────────────────┘                                        │
│                                                             │
│ Specs:                                                      │
│ ├── text-align: center                                      │
│ ├── padding: 24px 16px                                      │
│ ├── Number animation: countUp on inView                     │
│ └── Gradient text on number (optional)                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Props TypeScript:**

```typescript
interface StatCardProps {
  value: string; // "+500", "10+", etc.
  numericValue?: number; // for countUp animation
  label: string;
  suffix?: string;
  prefix?: string;
}
```

---

### 6.8 ProductCard

```
┌─────────────────────────────────────────────────────────────┐
│ COMPONENT: ProductCard                                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ┌───────────────────────────────────────────┐               │
│ │  [BADGE]                                  │               │
│ │                                           │               │
│ │  Product Title                            │               │
│ │                                           │               │
│ │  Description text that explains           │               │
│ │  the product value proposition.           │               │
│ │                                           │               │
│ │  ✓ Feature 1                              │               │
│ │  ✓ Feature 2                              │               │
│ │  ✓ Feature 3                              │               │
│ │                                           │               │
│ │  A partir de R$ X.XXX                     │               │
│ │                                           │               │
│ │  ┌──────────────────────┐                 │               │
│ │  │    CTA BUTTON →       │                │               │
│ │  └──────────────────────┘                 │               │
│ └───────────────────────────────────────────┘               │
│                                                             │
│ Variants:                                                   │
│ ├── featured: gradient border, larger padding, glow         │
│ └── default: glass-bg, standard sizing                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Props TypeScript:**

```typescript
interface ProductCardProps {
  title: string;
  description: string;
  features?: string[];
  price?: string;
  badge?: string;
  cta: {
    text: string;
    href: string;
  };
  featured?: boolean;
  className?: string;
}
```

---

### 6.9 SectionHeader

```
┌─────────────────────────────────────────────────────────────┐
│ COMPONENT: SectionHeader                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│           ═══ Section Title ═══                              │
│         Optional subtitle text                               │
│                                                             │
│ Specs:                                                      │
│ ├── Title: text-h2, text-primary, text-center               │
│ ├── Subtitle: text-body-sm, text-muted, text-center         │
│ ├── Decorative line: 48px, 2px, gradient-primary            │
│ ├── Gap: 8px between title and subtitle                     │
│ └── Margin-bottom: spacing-10                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. Animações

### 7.1 Especificações Framer Motion

#### Fade In (Entrada base)

```typescript
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.4, 0.25, 1] // cubic-bezier premium
  }
};
```

#### Slide Up (Cards e seções)

```typescript
const slideUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.4, 0.25, 1]
  }
};
```

#### Stagger Children (Grupos de cards)

```typescript
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  viewport: { once: true }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    ease: [0.25, 0.4, 0.25, 1]
  }
};
```

#### Hover Premium (Cards)

```typescript
const hoverCard = {
  whileHover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  whileTap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
};
```

#### Scale In (Avatar, badges)

```typescript
const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.5,
    ease: [0.34, 1.56, 0.64, 1] // spring-like
  }
};
```

#### Float (Floating badges)

```typescript
const float = {
  animate: {
    y: [-3, 3, -3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
```

#### Gradient Border Rotation (Featured cards)

```css
@keyframes gradient-rotate {
  0% { --angle: 0deg; }
  100% { --angle: 360deg; }
}

.gradient-border {
  background: conic-gradient(
    from var(--angle),
    transparent 60%,
    #6366F1 80%,
    #A855F7 90%,
    transparent 100%
  );
  animation: gradient-rotate 4s linear infinite;
}
```

#### Counter Animation (Stats)

```typescript
const countUp = {
  from: 0,
  to: targetNumber,
  duration: 2,
  delay: 0.3,
  easing: "easeOut"
};
```

### 7.2 Micro-Interações

| Elemento | Trigger | Animação | Duração |
|---|---|---|---|
| CTA Button | Hover | `scale(1.02)` + glow increase | 200ms |
| CTA Button | Click | `scale(0.98)` | 100ms |
| Link Card | Hover | `translateY(-4px)` + border brighten | 300ms |
| Link Card Arrow | Hover (parent) | `translateX(4px)` | 200ms |
| Social Button | Hover | `scale(1.1)` + bg brand color | 200ms |
| Avatar | Load | `scale(0.8→1)` + opacity | 500ms |
| Floating Badge | Continuous | `translateY(-3px↔3px)` | 3000ms |
| Stats Number | InView | Count up animation | 2000ms |
| Section | InView | `opacity(0→1)` + `y(30→0)` | 600ms |
| Testimonial | InView | Slide up + stagger | 500ms + 100ms delay |

### 7.3 Performance de Animações

| Regra | Implementação |
|---|---|
| Apenas `transform` e `opacity` | Evitar animar `width`, `height`, `margin`, `padding` |
| `will-change` seletivo | Apenas em elementos que animam frequentemente |
| `prefers-reduced-motion` | Desabilitar animações para acessibilidade |
| GPU Acceleration | `transform: translateZ(0)` em elementos animados |
| `LazyMotion` | Carregar features do Framer Motion sob demanda |

```typescript
// Respeitar preferência do usuário
const prefersReducedMotion = 
  typeof window !== 'undefined' && 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const getAnimation = (animation: Variant) => 
  prefersReducedMotion ? {} : animation;
```

---

## 8. SEO

### 8.1 Meta Tags

```html
<title>[Nome] — Especialista em Soluções Digitais | Links Oficiais</title>

<meta name="description" content="Acesse todos os links, serviços e conteúdos de [Nome]. Especialista em soluções digitais com +500 projetos entregues e 10+ anos de experiência. Solicite um orçamento gratuito." />

<meta name="keywords" content="[nome], soluções digitais, consultoria digital, marketing digital, desenvolvimento web, [cidade]" />

<meta name="author" content="[Nome Completo]" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://[seudominio].com" />
```

### 8.2 Open Graph

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://[seudominio].com" />
<meta property="og:title" content="[Nome] — Especialista em Soluções Digitais" />
<meta property="og:description" content="Acesse todos os links, serviços e conteúdos. +500 projetos entregues e 10+ anos de experiência." />
<meta property="og:image" content="https://[seudominio].com/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:site_name" content="[Nome] — Links Oficiais" />
```

### 8.3 Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://[seudominio].com" />
<meta name="twitter:title" content="[Nome] — Especialista em Soluções Digitais" />
<meta name="twitter:description" content="Acesse todos os links, serviços e conteúdos. +500 projetos entregues." />
<meta name="twitter:image" content="https://[seudominio].com/og-image.jpg" />
<meta name="twitter:creator" content="@[seuhandle]" />
```

### 8.4 Schema.org (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "[Nome Completo]",
    "alternateName": "[Nome artístico/marca]",
    "description": "Especialista em soluções digitais com mais de 10 anos de experiência.",
    "image": "https://[seudominio].com/avatar.jpg",
    "url": "https://[seudominio].com",
    "jobTitle": "Especialista em Soluções Digitais",
    "worksFor": {
      "@type": "Organization",
      "name": "[Nome da Empresa]"
    },
    "sameAs": [
      "https://instagram.com/[handle]",
      "https://youtube.com/@[handle]",
      "https://linkedin.com/in/[handle]",
      "https://twitter.com/[handle]"
    ],
    "knowsAbout": [
      "Marketing Digital",
      "Desenvolvimento Web",
      "Consultoria Digital",
      "Estratégia Digital"
    ]
  },
  "dateModified": "2026-06-10",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://[seudominio].com"
      }
    ]
  }
}
```

### 8.5 Metadata API (Next.js)

```typescript
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://[seudominio].com'),
  title: {
    default: '[Nome] — Especialista em Soluções Digitais | Links Oficiais',
    template: '%s | [Nome]',
  },
  description: 'Acesse todos os links, serviços e conteúdos de [Nome]. +500 projetos entregues.',
  keywords: ['soluções digitais', 'consultoria', 'marketing digital'],
  authors: [{ name: '[Nome Completo]' }],
  creator: '[Nome Completo]',
  publisher: '[Nome Completo]',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://[seudominio].com',
    title: '[Nome] — Especialista em Soluções Digitais',
    description: 'Acesse todos os links, serviços e conteúdos.',
    siteName: '[Nome] Links',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '[Nome] — Links Oficiais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Nome] — Especialista em Soluções Digitais',
    description: 'Acesse todos os links, serviços e conteúdos.',
    images: ['/og-image.jpg'],
    creator: '@[handle]',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
};
```

---

## 9. Estrutura Next.js

```
linktree-premium/
│
├── 📁 app/                          # App Router
│   ├── layout.tsx                   # Root layout (fonts, metadata, providers)
│   ├── page.tsx                     # Home page (single page)
│   ├── globals.css                  # Global styles + Tailwind directives
│   ├── favicon.ico                  # Favicon
│   ├── apple-icon.png              # Apple touch icon
│   ├── opengraph-image.jpg         # OG image (auto-detected by Next.js)
│   └── robots.ts                   # Robots.txt config
│
├── 📁 components/                   # Componentes React
│   ├── 📁 ui/                       # Base UI components
│   │   ├── Button.tsx              # Button component
│   │   ├── Badge.tsx               # Badge component
│   │   └── SectionHeader.tsx       # Section header component
│   │
│   ├── 📁 sections/                 # Page sections
│   │   ├── HeroSection.tsx         # Hero with avatar, name, CTA
│   │   ├── LinksSection.tsx        # Strategic links grid
│   │   ├── ProductsSection.tsx     # Products & services
│   │   ├── TestimonialsSection.tsx  # Social proof section
│   │   ├── AboutSection.tsx        # About me section
│   │   ├── SocialSection.tsx       # Social media buttons
│   │   └── FooterSection.tsx       # Footer
│   │
│   ├── 📁 cards/                    # Card components
│   │   ├── LinkCard.tsx            # Link card (full/half/featured)
│   │   ├── ProductCard.tsx         # Product/service card
│   │   ├── TestimonialCard.tsx     # Testimonial card
│   │   ├── StatCard.tsx            # Stats number card
│   │   └── FloatingBadge.tsx       # Floating badge
│   │
│   ├── 📁 social/                   # Social components
│   │   └── SocialButton.tsx        # Social media button
│   │
│   └── 📁 layout/                   # Layout components
│       ├── Container.tsx           # Max-width container
│       └── GradientBackground.tsx  # Background effects
│
├── 📁 hooks/                        # Custom React hooks
│   ├── useCountUp.ts              # Counter animation hook
│   ├── useMediaQuery.ts           # Responsive breakpoint hook
│   └── useReducedMotion.ts        # Accessibility motion hook
│
├── 📁 lib/                          # Utilities & config
│   ├── utils.ts                   # cn() helper, formatters
│   ├── animations.ts             # Framer Motion variants
│   ├── supabase.ts               # Supabase client + tracking functions
│   └── constants.ts              # Static constants
│
├── 📁 data/                         # Data layer
│   ├── config.json                # Main configuration JSON
│   └── types.ts                   # TypeScript interfaces for config
│
├── 📁 public/                       # Static assets
│   ├── 📁 images/
│   │   ├── avatar.webp            # Profile photo
│   │   ├── avatar-about.webp      # About section photo
│   │   ├── og-image.jpg           # Open Graph image
│   │   └── 📁 testimonials/       # Testimonial avatars
│   │       ├── maria.webp
│   │       ├── joao.webp
│   │       └── ana.webp
│   │
│   ├── favicon.svg                # SVG favicon
│   └── manifest.json              # PWA manifest
│
├── 📄 tailwind.config.ts           # Tailwind configuration
├── 📄 tsconfig.json                # TypeScript config
├── 📄 next.config.js               # Next.js config
├── 📄 package.json                 # Dependencies
├── 📄 postcss.config.js            # PostCSS config
├── 📄 .env.local                   # Environment variables
├── 📄 .gitignore                   # Git ignore
└── 📄 README.md                    # Project documentation
```

### 9.1 Dependências (package.json)

```json
{
  "name": "linktree-premium",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "@supabase/supabase-js": "^2.45.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "@types/node": "^20.14.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0"
  }
}
```

---

## 10. Especificação Técnica

### 10.1 Stack Tecnológico Completo

| Camada | Tecnologia | Versão | Propósito |
|---|---|---|---|
| **Framework** | Next.js | 14.2+ | App Router, SSG, SEO |
| **Linguagem** | TypeScript | 5.5+ | Type safety |
| **Estilização** | TailwindCSS | 3.4+ | Utility-first CSS |
| **Animações** | Framer Motion | 11+ | Animações declarativas |
| **Ícones** | Lucide React | 0.400+ | Ícones SVG |
| **Utilitário CSS** | clsx + tailwind-merge | 2.1+ / 2.3+ | Class merging |
| **BaaS** | Supabase | 2.45+ | Analytics, tracking, futuro admin |
| **Deploy** | Vercel + GitHub | - | CDN, Edge, CI/CD |
| **Imagens** | next/image | Built-in | Otimização automática |
| **Fontes** | next/font/google | Built-in | Zero layout shift |

### 10.2 Configuração TailwindCSS

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        card: '#18181B',
        elevated: '#27272A',
        surface: '#3F3F46',
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        secondary: {
          50: '#F5F3FF',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          900: '#581C87',
        },
        accent: {
          400: '#22D3EE',
          500: '#06B6D4',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display': ['2.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'display-mobile': ['1.75rem', { lineHeight: '1.1', fontWeight: '800' }],
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
        'card-xl': '24px',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(99, 102, 241, 0.15)',
        'glow-lg': '0 0 80px rgba(99, 102, 241, 0.1)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'glass': '10px',
        'glass-heavy': '20px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'gradient-rotate': 'gradient-rotate 4s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-3px)' },
          '50%': { transform: 'translateY(3px)' },
        },
        'gradient-rotate': {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.15)' },
          '50%': { boxShadow: '0 0 60px rgba(99, 102, 241, 0.25)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### 10.3 Utilitário cn()

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 10.4 Variantes de Animação

```typescript
// lib/animations.ts
import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const slideUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const defaultTransition = {
  duration: 0.6,
  ease: [0.25, 0.4, 0.25, 1],
};

export const springTransition = {
  duration: 0.5,
  ease: [0.34, 1.56, 0.64, 1],
};
```

### 10.5 TypeScript Interfaces

```typescript
// data/types.ts

export interface SiteConfig {
  profile: ProfileConfig;
  links: LinkConfig[];
  products: ProductConfig[];
  testimonials: TestimonialConfig[];
  stats: StatConfig[];
  social: SocialConfig[];
  about: AboutConfig;
  seo: SEOConfig;
  theme: ThemeConfig;
  footer: FooterConfig;
}

export interface ProfileConfig {
  name: string;
  role: string;
  tagline: string;
  avatar: string;
  badges: BadgeConfig[];
  cta: CTAConfig;
}

export interface BadgeConfig {
  icon: string;
  text: string;
}

export interface CTAConfig {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export interface LinkConfig {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  variant: 'full' | 'half' | 'featured';
  badge?: string;
  external: boolean;
  order: number;
  active: boolean;
}

export interface ProductConfig {
  id: string;
  title: string;
  description: string;
  features?: string[];
  price?: string;
  badge?: string;
  cta: CTAConfig;
  featured: boolean;
  order: number;
  active: boolean;
}

export interface TestimonialConfig {
  id: string;
  rating: number;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
  active: boolean;
}

export interface StatConfig {
  id: string;
  value: string;
  numericValue: number;
  label: string;
  prefix?: string;
  suffix?: string;
  order: number;
}

export interface SocialConfig {
  platform: string;
  href: string;
  ariaLabel: string;
  order: number;
  active: boolean;
}

export interface AboutConfig {
  text: string;
  highlights: Array<{
    icon: string;
    text: string;
  }>;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  canonical: string;
  locale: string;
  twitterHandle: string;
}

export interface ThemeConfig {
  defaultMode: 'dark' | 'light';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface FooterConfig {
  copyright: string;
  tagline: string;
  cnpj?: string;
}
```

---

## 11. Wireframe ASCII

### 11.1 Layout Desktop (> 768px)

```
╔══════════════════════════════════════════════════════════════════╗
║                        VIEWPORT: 1440px                         ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │                  MAX-WIDTH: 640px                        │   ║
║  │                  MARGIN: 0 auto                          │   ║
║  │                  PADDING: 0 32px                          │   ║
║  │                                                          │   ║
║  │  ╔══════════════════════════════════════════════════╗     │   ║
║  │  ║              HERO SECTION                        ║     │   ║
║  │  ║          padding: 128px 0 64px                   ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║            ┌────────────┐                        ║     │   ║
║  │  ║            │            │                        ║     │   ║
║  │  ║            │   AVATAR   │  160x160               ║     │   ║
║  │  ║            │  circular  │  glow border           ║     │   ║
║  │  ║            │            │                        ║     │   ║
║  │  ║            └────────────┘                        ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║   [🎯 +500 Projetos]  [⏰ 10+ Anos]             ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║         NOME COMPLETO                            ║     │   ║
║  │  ║    Especialista em Soluções Digitais             ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║   "Ajudo empresas e profissionais a              ║     │   ║
║  │  ║    construírem presença digital que              ║     │   ║
║  │  ║    gera autoridade e resultados"                 ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║   ┌────────────────────────────────┐             ║     │   ║
║  │  ║   │  ★ SOLICITAR ORÇAMENTO GRÁTIS  │             ║     │   ║
║  │  ║   └────────────────────────────────┘             ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ╚══════════════════════════════════════════════════╝     │   ║
║  │                                                          │   ║
║  │                    gap: 80px                              │   ║
║  │                                                          │   ║
║  │  ╔══════════════════════════════════════════════════╗     │   ║
║  │  ║          LINKS ESTRATÉGICOS                      ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║        ═══ Links Estratégicos ═══                ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║  ┌──────────────────────────────────────────┐    ║     │   ║
║  │  ║  │ 🏢 Conheça Minha Empresa             →   │    ║     │   ║
║  │  ║  │    Soluções digitais sob medida           │    ║     │   ║
║  │  ║  └──────────────────────────────────────────┘    ║     │   ║
║  │  ║                 gap: 12px                        ║     │   ║
║  │  ║  ┌──────────────────────────────────────────┐    ║     │   ║
║  │  ║  │ 💬 Fale no WhatsApp                  →   │    ║     │   ║
║  │  ║  │    Atendimento rápido e personalizado     │    ║     │   ║
║  │  ║  └──────────────────────────────────────────┘    ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║  ┌──────────────────────────────────────────┐    ║     │   ║
║  │  ║  │ 📋 Solicitar Orçamento Gratuito      →   │    ║     │   ║
║  │  ║  │    Proposta personalizada em 24h          │    ║     │   ║
║  │  ║  └──────────────────────────────────────────┘    ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║  ┌─────────────────┐  ┌─────────────────┐       ║     │   ║
║  │  ║  │ 📁 Portfólio    │  │ 🏆 Cases        │       ║     │   ║
║  │  ║  │    Projetos que │  │    Resultados   │       ║     │   ║
║  │  ║  │    geram result.│  │    reais        │       ║     │   ║
║  │  ║  └─────────────────┘  └─────────────────┘       ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║  ┌─────────────────┐  ┌─────────────────┐       ║     │   ║
║  │  ║  │ 🎬 YouTube      │  │ 📸 Instagram    │       ║     │   ║
║  │  ║  │    Conteúdo     │  │    Bastidores   │       ║     │   ║
║  │  ║  │    gratuito     │  │    e dicas      │       ║     │   ║
║  │  ║  └─────────────────┘  └─────────────────┘       ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║  ┌──────────────────────────────────────────┐    ║     │   ║
║  │  ║  │ 💼 LinkedIn                           →   │    ║     │   ║
║  │  ║  │    Conecte-se profissionalmente            │    ║     │   ║
║  │  ║  └──────────────────────────────────────────┘    ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ╚══════════════════════════════════════════════════╝     │   ║
║  │                                                          │   ║
║  │                    gap: 80px                              │   ║
║  │                                                          │   ║
║  │  ╔══════════════════════════════════════════════════╗     │   ║
║  │  ║          PRODUTOS & SERVIÇOS                     ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║        ═══ Produtos & Serviços ═══               ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║  ┌──────────────────────────────────────────┐    ║     │   ║
║  │  ║  │ [MAIS VENDIDO]                           │    ║     │   ║
║  │  ║  │                                          │    ║     │   ║
║  │  ║  │  Consultoria Digital Premium             │    ║     │   ║
║  │  ║  │                                          │    ║     │   ║
║  │  ║  │  Diagnóstico completo + plano de ação    │    ║     │   ║
║  │  ║  │  personalizado...                        │    ║     │   ║
║  │  ║  │                                          │    ║     │   ║
║  │  ║  │  ✓ Análise de mercado                    │    ║     │   ║
║  │  ║  │  ✓ Estratégia personalizada              │    ║     │   ║
║  │  ║  │  ✓ Acompanhamento 30 dias                │    ║     │   ║
║  │  ║  │                                          │    ║     │   ║
║  │  ║  │  A partir de R$ 2.997                    │    ║     │   ║
║  │  ║  │                                          │    ║     │   ║
║  │  ║  │  ┌────────────────────────┐              │    ║     │   ║
║  │  ║  │  │  QUERO SABER MAIS →    │              │    ║     │   ║
║  │  ║  │  └────────────────────────┘              │    ║     │   ║
║  │  ║  └──────────────────────────────────────────┘    ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║  ┌─────────────────┐  ┌─────────────────┐       ║     │   ║
║  │  ║  │ [NOVO]          │  │                 │       ║     │   ║
║  │  ║  │ Curso Online    │  │ Mentoria 1:1    │       ║     │   ║
║  │  ║  │                 │  │                 │       ║     │   ║
║  │  ║  │ Aprenda do zero │  │ Acompanhamento  │       ║     │   ║
║  │  ║  │ ao avançado...  │  │ individual...   │       ║     │   ║
║  │  ║  │                 │  │                 │       ║     │   ║
║  │  ║  │ [ACESSAR →]     │  │ [AGENDAR →]     │       ║     │   ║
║  │  ║  └─────────────────┘  └─────────────────┘       ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ╚══════════════════════════════════════════════════╝     │   ║
║  │                                                          │   ║
║  │                    gap: 80px                              │   ║
║  │                                                          │   ║
║  │  ╔══════════════════════════════════════════════════╗     │   ║
║  │  ║          PROVA SOCIAL                            ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║       ═══ O Que Dizem Sobre Mim ═══              ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║  ┌──────────┐  ┌──────────┐  ┌──────────┐       ║     │   ║
║  │  ║  │   +500   │  │   +50    │  │   10+    │       ║     │   ║
║  │  ║  │ Projetos │  │ Empresas │  │  Anos    │       ║     │   ║
║  │  ║  │Entregues │  │Atendidas │  │Experiên. │       ║     │   ║
║  │  ║  └──────────┘  └──────────┘  └──────────┘       ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║  ┌──────────────────────────────────────────┐    ║     │   ║
║  │  ║  │  ★ ★ ★ ★ ★                              │    ║     │   ║
║  │  ║  │  "Transformou completamente a presença   │    ║     │   ║
║  │  ║  │   digital da minha empresa..."           │    ║     │   ║
║  │  ║  │  [IMG] Maria Silva, CEO TechFlow         │    ║     │   ║
║  │  ║  └──────────────────────────────────────────┘    ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║  ┌──────────────────────────────────────────┐    ║     │   ║
║  │  ║  │  ★ ★ ★ ★ ★                              │    ║     │   ║
║  │  ║  │  "O melhor investimento que fiz..."      │    ║     │   ║
║  │  ║  │  [IMG] João Santos, Dir. Digital Plus    │    ║     │   ║
║  │  ║  └──────────────────────────────────────────┘    ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║  ┌──────────────────────────────────────────┐    ║     │   ║
║  │  ║  │  ★ ★ ★ ★ ★                              │    ║     │   ║
║  │  ║  │  "Profissional excepcional..."           │    ║     │   ║
║  │  ║  │  [IMG] Ana Oliveira, Fund. Creative Lab  │    ║     │   ║
║  │  ║  └──────────────────────────────────────────┘    ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ╚══════════════════════════════════════════════════╝     │   ║
║  │                                                          │   ║
║  │                    gap: 80px                              │   ║
║  │                                                          │   ║
║  │  ╔══════════════════════════════════════════════════╗     │   ║
║  │  ║              SOBRE MIM                           ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║        ═══ Sobre Mim ═══                         ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║  ┌──────────────────────────────────────────┐    ║     │   ║
║  │  ║  │                                          │    ║     │   ║
║  │  ║  │  Olá! Sou [Nome], especialista em...     │    ║     │   ║
║  │  ║  │  ...mais de 10 anos de experiência...    │    ║     │   ║
║  │  ║  │                                          │    ║     │   ║
║  │  ║  │  📍 Brasil                               │    ║     │   ║
║  │  ║  │  🎓 Certificado Google & Meta            │    ║     │   ║
║  │  ║  │  🏆 Top 1% Profissionais Digitais        │    ║     │   ║
║  │  ║  │                                          │    ║     │   ║
║  │  ║  └──────────────────────────────────────────┘    ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ╚══════════════════════════════════════════════════╝     │   ║
║  │                                                          │   ║
║  │                    gap: 48px                              │   ║
║  │                                                          │   ║
║  │  ╔══════════════════════════════════════════════════╗     │   ║
║  │  ║            REDES SOCIAIS                         ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║       ═══ Me Acompanhe ═══                       ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║       [IG]  [YT]  [LI]  [TT]  [GH]              ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ╚══════════════════════════════════════════════════╝     │   ║
║  │                                                          │   ║
║  │                    gap: 48px                              │   ║
║  │                                                          │   ║
║  │  ╔══════════════════════════════════════════════════╗     │   ║
║  │  ║              FOOTER                              ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ║  © 2026 [Nome]. Todos os direitos reservados.    ║     │   ║
║  │  ║  Feito com ❤️ e muito café.                      ║     │   ║
║  │  ║  CNPJ: XX.XXX.XXX/XXXX-XX                       ║     │   ║
║  │  ║                                                  ║     │   ║
║  │  ╚══════════════════════════════════════════════════╝     │   ║
║  │                                                          │   ║
║  └──────────────────────────────────────────────────────────┘   ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### 11.2 Layout Mobile (< 640px)

```
╔════════════════════════════╗
║     VIEWPORT: 375px        ║
║  ┌──────────────────────┐  ║
║  │   PADDING: 0 16px    │  ║
║  │                      │  ║
║  │  ╔════════════════╗  │  ║
║  │  ║   HERO          ║  │  ║
║  │  ║  pad: 64px 0    ║  │  ║
║  │  ║                 ║  │  ║
║  │  ║   ┌────────┐    ║  │  ║
║  │  ║   │ AVATAR │    ║  │  ║
║  │  ║   │ 120px  │    ║  │  ║
║  │  ║   └────────┘    ║  │  ║
║  │  ║                 ║  │  ║
║  │  ║  [Badge][Badge] ║  │  ║
║  │  ║                 ║  │  ║
║  │  ║   NOME          ║  │  ║
║  │  ║   (28px)        ║  │  ║
║  │  ║   Cargo         ║  │  ║
║  │  ║                 ║  │  ║
║  │  ║   "Frase de     ║  │  ║
║  │  ║    posiciona-   ║  │  ║
║  │  ║    mento"       ║  │  ║
║  │  ║                 ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ CTA 100%W  │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║                 ║  │  ║
║  │  ╚════════════════╝  │  ║
║  │                      │  ║
║  │       gap: 48px      │  ║
║  │                      │  ║
║  │  ╔════════════════╗  │  ║
║  │  ║  LINKS          ║  │  ║
║  │  ║                 ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Card Full  │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Card Full  │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Card Full  │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Card Stack │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Card Stack │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Card Stack │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Card Stack │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Card Full  │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║                 ║  │  ║
║  │  ╚════════════════╝  │  ║
║  │                      │  ║
║  │       gap: 48px      │  ║
║  │                      │  ║
║  │  ╔════════════════╗  │  ║
║  │  ║  PRODUCTS       ║  │  ║
║  │  ║                 ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Featured   │ ║  │  ║
║  │  ║  │ Card Full  │ ║  │  ║
║  │  ║  │            │ ║  │  ║
║  │  ║  │ ✓ Feat 1   │ ║  │  ║
║  │  ║  │ ✓ Feat 2   │ ║  │  ║
║  │  ║  │            │ ║  │  ║
║  │  ║  │ R$ X.XXX   │ ║  │  ║
║  │  ║  │ [CTA]      │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Card Stack │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Card Stack │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║                 ║  │  ║
║  │  ╚════════════════╝  │  ║
║  │                      │  ║
║  │       gap: 48px      │  ║
║  │                      │  ║
║  │  ╔════════════════╗  │  ║
║  │  ║  SOCIAL PROOF   ║  │  ║
║  │  ║                 ║  │  ║
║  │  ║  ┌──┐ ┌──┐ ┌──┐ ║  │  ║
║  │  ║  │50│ │50│ │10│ ║  │  ║
║  │  ║  │0 │ │  │ │+ │ ║  │  ║
║  │  ║  └──┘ └──┘ └──┘ ║  │  ║
║  │  ║                 ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Testimonial│ ║  │  ║
║  │  ║  │ Card       │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Testimonial│ ║  │  ║
║  │  ║  │ Card       │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Testimonial│ ║  │  ║
║  │  ║  │ Card       │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ║                 ║  │  ║
║  │  ╚════════════════╝  │  ║
║  │                      │  ║
║  │  ╔════════════════╗  │  ║
║  │  ║  ABOUT          ║  │  ║
║  │  ║  ┌────────────┐ ║  │  ║
║  │  ║  │ Bio card   │ ║  │  ║
║  │  ║  └────────────┘ ║  │  ║
║  │  ╚════════════════╝  │  ║
║  │                      │  ║
║  │  ╔════════════════╗  │  ║
║  │  ║  SOCIAL ICONS   ║  │  ║
║  │  ║ [IG][YT][LI]   ║  │  ║
║  │  ║ [TT][GH]       ║  │  ║
║  │  ╚════════════════╝  │  ║
║  │                      │  ║
║  │  ╔════════════════╗  │  ║
║  │  ║  FOOTER         ║  │  ║
║  │  ║  © 2026 Nome    ║  │  ║
║  │  ╚════════════════╝  │  ║
║  │                      │  ║
║  └──────────────────────┘  ║
║                            ║
╚════════════════════════════╝
```

---

## 12. JSON de Configuração

```json
{
  "profile": {
    "name": "Renato Farias",
    "role": "Estrategista Digital | Fundador Origo Company & Openova",
    "tagline": "Transformo marcas em máquinas de autoridade e conversão digital. Estratégia, performance e resultados reais para quem quer dominar o mercado.",
    "avatar": "/images/avatar.webp",
    "badges": [
      {
        "icon": "🚀",
        "text": "Estrategista Digital"
      },
      {
        "icon": "🏢",
        "text": "3 Empresas"
      }
    ],
    "cta": {
      "text": "Fale Comigo Agora",
      "href": "https://wa.me/5581985647633?text=Olá%20Renato!%20Vi%20seu%20link%20e%20gostaria%20de%20conversar.",
      "variant": "primary"
    }
  },

  "links": [
    {
      "id": "origo",
      "title": "Origo Company",
      "description": "Soluções estratégicas de alta performance para empresas que querem escalar",
      "href": "https://lp.origoprod.com",
      "icon": "Building2",
      "variant": "featured",
      "external": true,
      "order": 1,
      "active": true
    },
    {
      "id": "openova",
      "title": "Openova",
      "description": "Inovação digital e tecnologia para transformar seu negócio",
      "href": "https://openova.com.br",
      "icon": "Sparkles",
      "variant": "full",
      "external": true,
      "order": 2,
      "active": true
    },
    {
      "id": "whatsapp",
      "title": "Fale Comigo no WhatsApp",
      "description": "Atendimento direto e personalizado. Respondo rápido",
      "href": "https://wa.me/5581985647633?text=Olá%20Renato!%20Vi%20seu%20link%20e%20gostaria%20de%20conversar.",
      "icon": "MessageCircle",
      "variant": "full",
      "badge": "Online",
      "external": true,
      "order": 3,
      "active": true
    },
    {
      "id": "youtube",
      "title": "Canal do YouTube",
      "description": "Conteúdo estratégico sobre marketing digital e negócios",
      "href": "https://www.youtube.com/@reinatofarias",
      "icon": "Youtube",
      "variant": "half",
      "external": true,
      "order": 4,
      "active": true
    },
    {
      "id": "instagram",
      "title": "Eleve Agência",
      "description": "Marketing digital de alta performance para sua marca",
      "href": "https://www.instagram.com/elevebragencia/",
      "icon": "Instagram",
      "variant": "half",
      "external": true,
      "order": 5,
      "active": true
    }
  ],

  "products": [
    {
      "id": "estrategia-digital",
      "title": "Estratégia Digital Completa",
      "description": "Diagnóstico completo + plano de ação personalizado para transformar sua presença digital e gerar resultados mensuráveis.",
      "features": [
        "Análise completa de mercado e concorrência",
        "Estratégia digital personalizada",
        "Plano de ação detalhado",
        "Acompanhamento e otimização"
      ],
      "badge": "Destaque",
      "cta": {
        "text": "Quero Saber Mais",
        "href": "https://wa.me/5581985647633?text=Olá%20Renato!%20Tenho%20interesse%20na%20Estratégia%20Digital%20Completa.",
        "variant": "primary"
      },
      "featured": true,
      "order": 1,
      "active": true
    },
    {
      "id": "branding",
      "title": "Branding & Posicionamento",
      "description": "Construção de marca forte com identidade visual, narrativa e posicionamento estratégico no digital.",
      "features": [
        "Identidade visual completa",
        "Narrativa de marca",
        "Guia de posicionamento",
        "Estratégia de conteúdo"
      ],
      "cta": {
        "text": "Conhecer Serviço",
        "href": "https://wa.me/5581985647633?text=Olá%20Renato!%20Tenho%20interesse%20em%20Branding.",
        "variant": "secondary"
      },
      "featured": false,
      "order": 2,
      "active": true
    },
    {
      "id": "performance",
      "title": "Marketing de Performance",
      "description": "Campanhas de tráfego pago otimizadas para gerar leads qualificados e maximizar seu ROI.",
      "features": [
        "Google Ads & Meta Ads",
        "Otimização de conversão",
        "Relatórios detalhados",
        "Gestão contínua"
      ],
      "cta": {
        "text": "Quero Resultados",
        "href": "https://wa.me/5581985647633?text=Olá%20Renato!%20Tenho%20interesse%20em%20Marketing%20de%20Performance.",
        "variant": "secondary"
      },
      "featured": false,
      "order": 3,
      "active": true
    }
  ],

  "testimonials": [],

  "stats": [
    {
      "id": "empresas",
      "value": "3",
      "numericValue": 3,
      "label": "Empresas Fundadas",
      "order": 1
    },
    {
      "id": "clientes",
      "value": "+100",
      "numericValue": 100,
      "label": "Clientes Atendidos",
      "prefix": "+",
      "order": 2
    },
    {
      "id": "experiencia",
      "value": "10+",
      "numericValue": 10,
      "label": "Anos de Experiência",
      "suffix": "+",
      "order": 3
    }
  ],

  "about": {
    "text": "Sou Renato Farias, Estrategista Digital e fundador da Origo Company, Openova e Eleve Agência. Há mais de uma década, ajudo empresas e profissionais a transformarem sua presença digital em um motor de crescimento real.\n\nMinha missão é clara: criar estratégias que geram autoridade, atraem clientes qualificados e entregam resultados mensuráveis. Acredito que cada marca tem um potencial único — meu trabalho é desbloqueá-lo.",
    "highlights": [
      {
        "icon": "📍",
        "text": "Brasil"
      },
      {
        "icon": "🏢",
        "text": "Fundador Origo, Openova & Eleve"
      },
      {
        "icon": "🎯",
        "text": "Estratégia & Performance Digital"
      }
    ]
  },

  "social": [
    {
      "platform": "instagram",
      "href": "https://www.instagram.com/elevebragencia/",
      "ariaLabel": "Seguir Eleve Agência no Instagram",
      "order": 1,
      "active": true
    },
    {
      "platform": "youtube",
      "href": "https://www.youtube.com/@reinatofarias",
      "ariaLabel": "Inscrever-se no YouTube",
      "order": 2,
      "active": true
    }
  ],

  "seo": {
    "title": "Renato Farias — Estrategista Digital | Links Oficiais",
    "description": "Acesse todos os links, serviços e conteúdos de Renato Farias. Estrategista Digital, fundador da Origo Company, Openova e Eleve Agência. Fale comigo e transforme sua presença digital.",
    "keywords": [
      "Renato Farias",
      "estrategista digital",
      "Origo Company",
      "Openova",
      "Eleve Agência",
      "marketing digital",
      "estratégia digital",
      "branding digital"
    ],
    "ogImage": "/images/og-image.jpg",
    "canonical": "https://renatofarias.vercel.app",
    "locale": "pt_BR",
    "twitterHandle": ""
  },

  "theme": {
    "defaultMode": "dark",
    "primaryColor": "#6366F1",
    "secondaryColor": "#A855F7",
    "accentColor": "#06B6D4"
  },

  "footer": {
    "copyright": "© 2026 Renato Farias. Todos os direitos reservados.",
    "tagline": "Estratégia que transforma. Resultados que comprovam.",
    "cnpj": ""
  }
}
```

---

## Apêndice A: Checklist de Implementação

- [ ] Setup do projeto Next.js com TypeScript
- [ ] Configurar TailwindCSS com design tokens
- [ ] Configurar fontes (Inter + JetBrains Mono)
- [ ] Criar utilitários (cn, animations)
- [ ] Implementar componentes base (Button, Badge, SectionHeader)
- [ ] Implementar HeroSection
- [ ] Implementar LinksSection com LinkCards
- [ ] Implementar ProductsSection com ProductCards
- [ ] Implementar TestimonialsSection com TestimonialCards
- [ ] Implementar AboutSection
- [ ] Implementar SocialSection com SocialButtons
- [ ] Implementar FooterSection
- [ ] Adicionar animações Framer Motion
- [ ] Implementar hooks (useCountUp, useReducedMotion)
- [ ] Configurar SEO (metadata, OG, Schema.org)
- [ ] Implementar JSON de configuração
- [ ] Otimizar imagens
- [ ] Testes de responsividade (320px → 2560px)
- [ ] Testes de acessibilidade
- [ ] Lighthouse audit (Performance > 90)
- [ ] Deploy na Vercel
- [ ] Configurar domínio customizado
- [ ] Configurar Analytics

---

*Documento Spec-Driven gerado como parte do pacote completo de documentação do projeto Árvore de Links Premium. Pronto para entrega ao desenvolvedor.*
