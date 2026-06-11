# ADR-001 — Framework Front-end: Next.js com App Router

**Status:** ✅ Aceito  
**Data:** 2026-06-10  
**Decisores:** Product Designer Sênior, Arquiteto Front-end  

---

## Contexto

Precisamos escolher um framework front-end para a Árvore de Links Premium que atenda os seguintes requisitos:

- Performance excepcional (< 2s de carregamento)
- SEO nativo e robusto
- Geração estática (SSG) para máxima velocidade
- Suporte a animações ricas
- Deploy simples e confiável
- Ecossistema maduro

## Decisão

**Adotar Next.js 14+ com App Router** como framework principal.

## Opções Consideradas

### Opção 1: Next.js 14 com App Router ✅ (Escolhida)

| Critério | Avaliação |
|---|---|
| Performance | ⭐⭐⭐⭐⭐ SSG + Edge Runtime |
| SEO | ⭐⭐⭐⭐⭐ Metadata API nativa |
| DX | ⭐⭐⭐⭐⭐ TypeScript first-class |
| Deploy | ⭐⭐⭐⭐⭐ Vercel zero-config |
| Ecossistema | ⭐⭐⭐⭐⭐ Maior comunidade React |

**Prós:**
- Server Components reduzem JS bundle
- Metadata API simplifica SEO e Open Graph
- Image Optimization nativo (next/image)
- Font Optimization nativo (next/font)
- Static Export possível para CDN
- Integração nativa com Vercel Analytics

**Contras:**
- Overengineering para uma single page (mitigado pela necessidade de SEO)
- Curva de aprendizado do App Router (mitigado por ser projeto novo)

### Opção 2: Vite + React ❌

| Critério | Avaliação |
|---|---|
| Performance | ⭐⭐⭐⭐ SPA, sem SSG nativo |
| SEO | ⭐⭐ Requer configuração manual |
| DX | ⭐⭐⭐⭐ Rápido, mas menos features |

**Descartada porque:** SEO é requisito crítico. SPA sem SSR/SSG prejudica indexação e Open Graph.

### Opção 3: Astro ❌

| Critério | Avaliação |
|---|---|
| Performance | ⭐⭐⭐⭐⭐ Zero JS por padrão |
| SEO | ⭐⭐⭐⭐⭐ SSG nativo |
| Animações | ⭐⭐⭐ Framer Motion requer islands |

**Descartada porque:** Integração com Framer Motion é limitada. O projeto requer interatividade rica e animações complexas que se beneficiam do React completo.

### Opção 4: HTML/CSS/JS Vanilla ❌

**Descartada porque:** Não escala, não tem otimização de imagens, SEO requer mais trabalho manual, sem type safety.

## Consequências

### Positivas
- SEO otimizado automaticamente via Metadata API
- Performance garantida com SSG
- Imagens otimizadas automaticamente
- Deploy zero-config na Vercel
- TypeScript integrado

### Negativas
- Bundle ligeiramente maior que Astro (aceitável)
- Dependência do ecossistema React (risco baixo)

### Riscos Residuais
- Atualizações breaking do App Router (mitigado por lock de versão)

---

# ADR-002 — Estilização: TailwindCSS

**Status:** ✅ Aceito  
**Data:** 2026-06-10  

---

## Contexto

Precisamos de um sistema de estilização que permita:
- Desenvolvimento rápido com design system
- Responsividade eficiente
- Customização profunda de tokens
- Bundle CSS otimizado

## Decisão

**Adotar TailwindCSS 3.4+** como framework de estilização principal.

## Opções Consideradas

### Opção 1: TailwindCSS ✅ (Escolhida)

**Prós:**
- Design system via `tailwind.config.ts` (cores, fontes, espaçamentos)
- Purge automático de CSS não utilizado
- Classes utilitárias aceleram o desenvolvimento
- Responsividade com prefixos (`sm:`, `md:`, `lg:`)
- Integração perfeita com Next.js
- Comunidade massiva e componentes prontos
- Dark mode nativo com `dark:` prefix

**Contras:**
- Classes longas no JSX (mitigado com `cn()` e componentização)
- Curva de aprendizado inicial (mitigada pela experiência do time)

### Opção 2: CSS Modules ❌

**Descartada porque:** Mais verboso, requer mais arquivos, não tem design tokens nativos.

### Opção 3: Styled Components ❌

**Descartada porque:** Runtime CSS-in-JS prejudica performance. Incompatível com Server Components do Next.js App Router.

### Opção 4: Vanilla CSS ❌

**Descartada porque:** Sem tree-shaking, sem design tokens estruturados, sem responsividade declarativa eficiente.

## Consequências

### Positivas
- CSS final < 10KB (purged)
- Design system consistente
- Dark/Light mode nativo
- Classes responsivas inline

### Negativas
- Dependência do PostCSS pipeline (risco baixo)

---

# ADR-003 — Animações: Framer Motion

**Status:** ✅ Aceito  
**Data:** 2026-06-10  

---

## Contexto

A página requer animações premium:
- Fade in ao carregar
- Slide up ao scroll
- Hover effects sofisticados
- Micro-interações nos botões/cards
- Stagger animations nos grupos de elementos

## Decisão

**Adotar Framer Motion 11+** como biblioteca de animações.

## Opções Consideradas

### Opção 1: Framer Motion ✅ (Escolhida)

**Prós:**
- API declarativa com `motion.div`
- `whileInView` para animações ao scroll
- `staggerChildren` para sequenciamento
- `AnimatePresence` para mount/unmount
- GPU-accelerated por padrão
- Gesture recognition (drag, hover, tap)
- Layout animations
- Bem documentado e mantido

**Contras:**
- Bundle ~30KB (mitigado por tree-shaking e lazy loading)
- Requer `'use client'` nos componentes animados

### Opção 2: CSS Animations + Intersection Observer ❌

**Descartada porque:** Verboso, sem stagger nativo, difícil de manter, sem gesture support.

### Opção 3: GSAP ❌

**Descartada porque:** Imperativo (não-React), licença comercial para features premium, bundle maior.

### Opção 4: React Spring ❌

**Descartada porque:** API mais complexa, menor comunidade, menos features de layout animation.

## Consequências

### Positivas
- Animações de nível production-grade
- Código limpo e declarativo
- Performance otimizada automaticamente

### Negativas
- Todos os componentes animados devem ser Client Components
- Bundle size adicional (~30KB gzipped)

### Mitigação
- Lazy load de componentes pesados
- `LazyMotion` para reduzir bundle inicial
- Componentes animados em arquivos separados com `'use client'`

---

# ADR-004 — Iconografia: Lucide Icons

**Status:** ✅ Aceito  
**Data:** 2026-06-10  

---

## Contexto

Precisamos de ícones consistentes, leves e personalizáveis.

## Decisão

**Adotar Lucide Icons** como biblioteca de ícones.

## Justificativa

| Critério | Lucide | Heroicons | React Icons |
|---|---|---|---|
| Tree-shaking | ✅ Sim | ✅ Sim | ❌ Parcial |
| Consistência visual | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ (multi-lib) |
| Customização (cor, size, stroke) | ✅ Total | ✅ Total | ⚠️ Parcial |
| Bundle por ícone | ~1KB | ~1KB | ~2-5KB |
| Estilo visual | Clean, moderno | Outline/Solid | Variado |
| Suporte TypeScript | ✅ | ✅ | ✅ |

**Lucide foi escolhido** por ser o fork mantido do Feather Icons com mais ícones (+1500), melhor suporte TypeScript, e estilo visual limpo que combina com a estética premium desejada.

---

# ADR-005 — Gerenciamento de Conteúdo: JSON Local + Supabase

**Status:** ✅ Aceito (Revisado)  
**Data:** 2026-06-10  

---

## Contexto

O conteúdo da página (links, textos, imagens) precisa ser facilmente editável sem alterar código. Adicionalmente, o projeto deve estar preparado para integração com Supabase para analytics de cliques e futura administração via painel.

## Decisão

**Abordagem Híbrida:** JSON local como source of truth para o conteúdo + **Supabase** para analytics de cliques, tracking de eventos e preparação para futuro painel admin.

## Arquitetura

```
┌─────────────────────────────────────────────────┐
│                  FLUXO DE DADOS                  │
├─────────────────────────────────────────────────┤
│                                                  │
│  JSON Local (config.json)                        │
│  └─ Source of truth para conteúdo               │
│  └─ Carregado em build time (SSG)               │
│  └─ Versionado com Git                          │
│                                                  │
│  Supabase                                        │
│  └─ Tabela: link_clicks (analytics)             │
│  └─ Tabela: page_views (analytics)              │
│  └─ Futuro: tabela de conteúdo administrável    │
│  └─ Edge Functions para API routes              │
│                                                  │
│  Vercel                                          │
│  └─ Deploy automático via GitHub                │
│  └─ Environment variables (SUPABASE_URL, KEY)   │
│                                                  │
└─────────────────────────────────────────────────┘
```

## Supabase Schema (Analytics)

```sql
-- Tracking de cliques nos links
CREATE TABLE link_clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  link_id TEXT NOT NULL,
  link_title TEXT,
  referrer TEXT,
  user_agent TEXT,
  ip_country TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Tracking de page views
CREATE TABLE page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  referrer TEXT,
  user_agent TEXT,
  ip_country TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index para queries de analytics
CREATE INDEX idx_link_clicks_created_at ON link_clicks(created_at);
CREATE INDEX idx_link_clicks_link_id ON link_clicks(link_id);
CREATE INDEX idx_page_views_created_at ON page_views(created_at);
```

## Consequências

### Positivas
- Conteúdo estático (máxima performance) + analytics em tempo real
- Type-safe com interface TypeScript
- Git history de todas as alterações de conteúdo
- Analytics próprio sem depender de GA/Meta Pixel
- Preparado para evolução (painel admin futuro)

### Negativas
- Dependência do Supabase para analytics (aceitável, tier gratuito generoso)
- Atualizar conteúdo ainda requer commit + deploy (aceitável)

---

# ADR-006 — Deploy e Hosting: Vercel + GitHub

**Status:** ✅ Aceito (Revisado)  
**Data:** 2026-06-10  

---

## Contexto

Precisamos de um pipeline de deploy com:
- CDN global
- HTTPS automático
- Deploy automático via Git (GitHub)
- Preview deploys
- Domínio customizado
- Analytics integrado
- Integração com Supabase

## Decisão

**Vercel** como plataforma de hosting com **GitHub** como repositório e trigger de CI/CD.

## Justificativa

- **Integração nativa** com Next.js (mesma empresa)
- **CDN Edge** global com < 50ms TTFB
- **Deploy automático** a cada push no GitHub
- **Preview URLs** para cada PR
- **Environment Variables** para keys do Supabase
- **Web Analytics** integrado (sem JS adicional)
- **Domínio customizado** com SSL automático
- **Tier gratuito** suficiente para o projeto

## Pipeline

```
GitHub Push → Vercel Build → Deploy
    │
    ├── main branch → Production
    └── feature/* → Preview URL
```

## Environment Variables (Vercel)

```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

---

# ADR-007 — Tipografia: Inter + JetBrains Mono

**Status:** ✅ Aceito  
**Data:** 2026-06-10  

---

## Contexto

A tipografia precisa transmitir profissionalismo, modernidade e ser altamente legível em telas.

## Decisão

| Uso | Fonte | Justificativa |
|---|---|---|
| Headings + Body | **Inter** | Projetada para telas, legibilidade excepcional, usada por Stripe, Linear, Notion |
| Monospace (badges/tech) | **JetBrains Mono** | Clean, moderna, diferenciação visual |

## Otimização

- Carregamento via `next/font/google` (zero layout shift)
- Subset: `latin` (reduz bundle)
- Display: `swap` (FOUT > FOIT)
- Variable font para reduzir requests

---

# ADR-008 — Backend as a Service: Supabase

**Status:** ✅ Aceito  
**Data:** 2026-06-10  

---

## Contexto

O projeto precisa de:
- Tracking de cliques nos links (analytics próprio)
- Tracking de page views
- Preparação para futuro painel administrativo
- Sem complexidade de backend próprio

## Decisão

**Adotar Supabase** como Backend as a Service (BaaS).

## Opções Consideradas

### Opção 1: Supabase ✅ (Escolhida)

| Critério | Avaliação |
|---|---|
| Facilidade de setup | ⭐⭐⭐⭐⭐ |
| SDK JavaScript | ⭐⭐⭐⭐⭐ |
| Integração Vercel | ⭐⭐⭐⭐⭐ |
| Tier gratuito | ⭐⭐⭐⭐⭐ (500MB, 50k rows) |
| Real-time | ⭐⭐⭐⭐⭐ |
| Row Level Security | ⭐⭐⭐⭐⭐ |

**Prós:**
- PostgreSQL completo (não NoSQL limitado)
- SDK `@supabase/supabase-js` leve e type-safe
- Row Level Security (RLS) para segurança
- Real-time subscriptions (futuro dashboard)
- Auth integrado (futuro painel admin)
- Storage para imagens (futuro upload de avatar)
- Edge Functions (futuro API routes)
- Tier gratuito generoso

**Contras:**
- Dependência de serviço externo (mitigado por ser stateless — se cair, a página funciona sem analytics)
- Latência adicional para tracking (mitigado por fire-and-forget, não bloqueia renderização)

### Opção 2: Firebase ❌

**Descartada porque:** NoSQL (Firestore) é menos flexível para queries analíticas. Ecosistema Google vs independência do Supabase.

### Opção 3: PlanetScale ❌

**Descartada porque:** MySQL, sem real-time nativo, sem auth integrado, tier gratuito descontinuado.

### Opção 4: Sem analytics ❌

**Descartada porque:** Não há como medir conversão e otimizar a página sem dados de cliques.

## Implementação

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tracking de cliques (fire-and-forget)
export async function trackClick(linkId: string, linkTitle: string) {
  await supabase.from('link_clicks').insert({
    link_id: linkId,
    link_title: linkTitle,
    referrer: document.referrer || null,
    user_agent: navigator.userAgent,
  });
}

// Tracking de page views
export async function trackPageView() {
  await supabase.from('page_views').insert({
    referrer: document.referrer || null,
    user_agent: navigator.userAgent,
  });
}
```

## Consequências

### Positivas
- Analytics próprio sem GA/Meta Pixel (privacidade)
- Dados de cliques em tempo real
- Base para futuro painel admin
- Zero custo no tier gratuito

### Negativas
- Dependência de serviço externo para analytics (aceitável, graceful degradation)

---

*ADRs gerados como parte do pacote de documentação do projeto Árvore de Links Premium — Renato Farias.*

