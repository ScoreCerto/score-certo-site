# ScoreCerto — Brand Palette & Design System

Padrão visual oficial extraído do logo ScoreCerto (versão verde sobre fundo escuro).
Aplicar consistentemente em interface web, materiais impressos e redes sociais.

---

## 1. Paleta Principal

| # | Nome | HEX | RGB | HSL | Pantone | Uso |
|---|------|-----|-----|-----|---------|-----|
| 1 | **Deep Navy** | `#0E1F2D` | 14, 31, 45 | 208° 53% 12% | **PANTONE 539 C** | Background principal, sidebar |
| 2 | **Forest Depth** | `#0F342E` | 15, 52, 46 | 170° 55% 13% | **PANTONE 5535 C** | Background secundário, gradiente |
| 3 | **Score Green** ⭐ | `#86BD45` | 134, 189, 69 | 86° 49% 51% | **PANTONE 7488 C** | Cor primária da marca, CTAs, links |
| 4 | **Growth Lime** | `#96C849` | 150, 200, 73 | 80° 53% 53% | **PANTONE 375 C** | Acento, estados de sucesso, highlights |
| 5 | **Pure White** | `#FFFFFF` | 255, 255, 255 | 0° 0% 100% | **PANTONE White** | Texto primário sobre fundos escuros |

## 2. Paleta Funcional (Health Score)

| Estado | HEX | HSL | Pantone | Aplicação |
|--------|-----|-----|---------|-----------|
| 🔴 **Risco / Churn** | `#F87255` | 10° 92% 65% | PANTONE 171 C | Clientes em risco (score 0–49) |
| 🟠 **Atenção** | `#F8A848` | 32° 92% 62% | PANTONE 144 C | Estado neutro (score 50–69) |
| 🟡 **Highlight** | `#F8C040` | 42° 92% 61% | PANTONE 1235 C | Destaques, badges, gauge médio |
| 🟢 **Saudável** | `#86BD45` | 86° 49% 51% | PANTONE 7488 C | Promotores (score 70–100) |

## 3. Neutros

| Nome | HEX | HSL | Pantone | Uso |
|------|-----|-----|---------|-----|
| Slate Mute | `#7A8B99` | 207° 13% 54% | PANTONE 430 C | Texto secundário, bordas, ícones inativos |
| Light Surface | `#F7F9FA` | 220° 20% 97% | PANTONE 11-4201 TPG | Background do conteúdo principal (modo claro) |

---

## 4. Gradientes Oficiais

```css
/* Brand background — usar em hero, sidebar, materiais escuros */
background: linear-gradient(135deg, #0E1F2D 0%, #0F342E 100%);

/* Primary CTA — botões e elementos de ação */
background: linear-gradient(135deg, #86BD45 0%, #96C849 100%);
```

---

## 5. Tipografia

- **Headings:** Inter / SF Pro Display — pesos **600–700**
- **Body:** Inter — pesos **400–500**
- **KPIs / Números:** Inter Tabular — `font-variant-numeric: tabular-nums`
- **Mínimo legível:** 14px (mobile), 16px (desktop)

---

## 6. Tokens CSS (já aplicados em `src/index.css`)

```css
--primary: 86 49% 51%;              /* Score Green */
--primary-glow: 80 53% 53%;         /* Growth Lime */
--sidebar-background: 208 53% 12%;  /* Deep Navy */
--sidebar-accent: 170 55% 18%;      /* Forest Depth */
--health-risk: 10 92% 65%;          /* Alert Coral */
--health-neutral: 32 92% 62%;       /* Signal Amber */
--health-healthy: 86 49% 51%;       /* Score Green */
--gradient-brand: linear-gradient(135deg, hsl(208 53% 12%), hsl(170 55% 13%));
--gradient-primary: linear-gradient(135deg, hsl(86 49% 51%), hsl(80 53% 53%));
```

---

## 7. Regras de Uso

✅ **Sempre**
- Logo verde sobre fundos `Deep Navy` ou `Forest Depth`
- CTAs em `Score Green` com texto `Deep Navy`
- Manter contraste WCAG AA mínimo (4.5:1 para texto)

❌ **Nunca**
- Cores fora da paleta sem aprovação
- Score Green sobre branco puro em texto pequeno (baixo contraste)
- Misturar gradientes não oficiais

---

*ScoreCerto Brand System v1.0*
