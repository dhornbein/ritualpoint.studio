# Ritual Point Studio - AI Specification

## Project Overview

**Project Name:** Ritual Point Studio  
**Technology Stack:** Nuxt 3, Vue.js, TypeScript, Tailwind CSS, Sass  
**Repository:** ritualpoint.studio  
**Live Site:** https://ritualpoint.studio/  

### Purpose
A mystical art and divination website showcasing tarot readings, hand-poked tattoo art, and the Dark Moon Tarot deck. The site blends spiritual practices with artistic expression, serving as both a portfolio and business platform for Drew H's creative work.

### Current Architecture
- **Framework:** Nuxt 3 with Vue.js composition API
- **Styling:** Tailwind CSS with custom SCSS
- **Build System:** Vite (via Nuxt)
- **Deployment:** Static generation with `nuxt generate`
- **Assets:** Public directory with organized subdirectories for different content types

## Core Objectives

### 1. Testing Infrastructure (Priority: CRITICAL)
Currently the site lacks any testing framework. We need to establish:
- **Unit Testing:** Component logic and utility functions
- **Integration Testing:** Page functionality and navigation
- **E2E Testing:** User workflows (tarot readings, contact forms)
- **Visual Regression Testing:** Ensure design consistency

### 2. Navigation & Coherence (Priority: HIGH)
Improve site structure and user experience:
- Streamline navigation patterns
- Consistent layout across pages
- Clear information hierarchy
- Mobile-first responsive design

### 3. Reading Promotion (Priority: HIGH)
Enhance tarot reading services visibility:
- Prominent call-to-actions for readings
- Clear service offerings and pricing
- Booking integration improvements
- Lead generation optimization

### 4. Tattoo Gallery (Priority: CRITICAL - ASAP)
Create a comprehensive tattoo portfolio:
- Image gallery component
- Portfolio organization by style/theme
- Process documentation
- Booking flow integration

## File Structure & Patterns

### Components
```
components/
├── base/           # Reusable UI components (Button, Nav, Calendar, etc.)
├── tarot-card.vue  # Interactive tarot card component
├── tarot-reading.vue # Reading interface component
└── tattoo-certificate.vue # Tattoo documentation
```

### Pages Structure
```
pages/
├── index.vue              # Main landing page
├── dark-moon-tarot.vue    # Product showcase
├── reading/               # Tarot services
│   ├── index.vue         # Service overview
│   ├── free.vue          # Free micro readings
│   ├── private.vue       # Paid reading options
│   └── events.vue        # Event tarot services
├── tattoo/               # Tattoo services
│   ├── index.vue         # Portfolio & process
│   ├── consult.vue       # Booking consultation
│   └── redeem.vue        # Certificate redemption
└── dark-moon-zine/       # Digital publications
    ├── index.vue
    ├── 01.vue
    └── 02.vue
```

### Assets Organization
```
public/
├── dark-moon-tarot/      # Product images
├── deck-mock/            # Tarot card images (numbered system)
├── dmz/                  # Zine content by issue
├── tattoo/               # Portfolio images
└── img/                  # General site assets
```

## Design Patterns & Guidelines

### Component Conventions
- Use Vue 3 Composition API (`<script setup>`)
- Consistent prop definitions with TypeScript
- Scoped styles with SCSS
- Responsive design with Tailwind classes

### Naming Conventions
- Components: PascalCase (e.g., `TarotCard.vue`)
- Base components: Prefixed with `Base` (e.g., `BaseButton.vue`)
- Pages: kebab-case matching URL structure
- Assets: Organized by content type with descriptive names

### Styling Architecture
- **Base Styles:** `assets/css/main.scss`
- **Typography:** Custom fonts via Adobe Typekit
- **Color Scheme:** Dark theme (stone-900 background, white text)
- **Utilities:** Custom Tailwind utilities for common patterns

### State Management
- Page-level reactive data using `ref()` and `reactive()`
- No global state management currently (consider Pinia for complex features)
- Form handling with v-model bindings

## Development Workflow

### Before Starting Work
1. **Review Current Context:** Check existing components and patterns
2. **Understand Requirements:** Reference this spec and project notes
3. **Plan Testing:** Consider how new features will be tested
4. **Check Dependencies:** Ensure package.json is up to date

### Code Quality Standards
- **TypeScript:** Use where beneficial, especially for complex components
- **Comments:** Document complex logic and component purposes
- **Accessibility:** Include proper ARIA labels and semantic HTML
- **Performance:** Optimize images and implement lazy loading where appropriate

### Testing Requirements
**Unit Tests:**
- Component rendering and props
- Utility functions
- Form validation logic

**Integration Tests:**
- Navigation flows
- API integrations (Cal.com, email forms)
- Component interactions

**E2E Tests:**
- Complete user journeys
- Form submissions
- Mobile responsiveness

## Content Management

### Image Assets
- **Tarot Cards:** Standardized naming (e.g., `01_card.png`, `01_card_sm.png`)
- **Tattoo Portfolio:** Organized by client/style
- **Product Images:** High-quality with consistent lighting/backgrounds

### SEO & Meta Data
- Each page should have unique meta descriptions
- Open Graph tags for social sharing
- Structured data for business information

### Performance Considerations
- Image optimization (WebP format where supported)
- Lazy loading for gallery images
- Critical CSS inlining
- Static generation for better load times

## Integration Points

### External Services
- **Cal.com:** Booking integration for consultations and readings
- **Stripe:** Payment processing for services
- **Venmo:** Alternative payment method
- **Etsy:** Product sales integration
- **Patreon:** Subscriber content
- **Instagram:** Social media embedding

### Email & Forms
- Contact forms should integrate with existing email workflow
- Form validation and error handling
- Success/thank you page redirects

## Key Features to Develop

### Immediate Priorities

1. **Testing Suite Setup**
   - Install and configure Vitest
   - Set up component testing with Vue Test Utils
   - Implement E2E testing with Playwright
   - Create CI/CD pipeline for automated testing

2. **Tattoo Gallery (ASAP)**
   - Create responsive image gallery component
   - Implement filtering by style/category
   - Add lightbox functionality
   - Optimize images for web performance

3. **Navigation Enhancement**
   - Audit current navigation patterns
   - Implement breadcrumb navigation
   - Add search functionality
   - Improve mobile menu UX

4. **Reading Promotion**
   - Create prominent CTAs on landing page
   - Design service comparison table
   - Implement lead capture forms
   - Add testimonials section

### Future Enhancements
- Blog/content management system
- Client portal for booking management
- Advanced tarot reading features
- E-commerce integration for physical products

## Notes & Context

### Content References
- Detailed project goals and copy are in the attached Ritual Point Studio markdown file
- Current task priorities are outlined but may be outdated
- Site serves dual purpose: artistic portfolio and business platform

### Technical Debt
- No current testing infrastructure
- Inconsistent component patterns in some areas
- Image optimization could be improved
- Some hardcoded content that could be made dynamic

### Brand Voice & Tone
- Mystical but grounded
- Professional yet approachable
- Artistic and creative
- Inclusive and welcoming
- Balance between mystery and clarity

This specification should guide all development decisions and serve as a reference for maintaining consistency across the project.
