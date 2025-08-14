# Ritual Point Studio - Features & Tasks

## Critical Priority Features (ASAP)

### 1. Testing Suite Implementation
**Status:** Not Started  
**Priority:** Critical  
**Description:** Establish comprehensive testing infrastructure for the entire application.

**Requirements:**
- Unit testing for components
- Integration testing for page flows
- E2E testing for user journeys
- Visual regression testing for design consistency

**Implementation Plan:**
- [ ] Install and configure Vitest for unit testing
- [ ] Set up Vue Test Utils for component testing
- [ ] Implement Playwright for E2E testing
- [ ] Create CI/CD pipeline with GitHub Actions
- [ ] Write test cases for existing critical components
- [ ] Document testing patterns and guidelines

**Definition of Done:**
- All new features require tests before merge
- Existing core functionality has test coverage
- Tests run automatically on PR/commit
- Documentation exists for writing and running tests

---

### 2. Tattoo Portfolio Gallery
**Status:** Not Started  
**Priority:** Critical (ASAP)  
**Description:** Create a comprehensive image gallery to showcase tattoo artwork and attract clients.

**Requirements:**
- Responsive image gallery component
  - We expect to use this component in multiple places, so it should be reusable
- Simple grid layout and one-up view
  - ability to zoom in on images, mouse wheel zoom, pinch-to-zoom on mobile
- Mobile-optimized viewing experience
  - mobile viewing experience should mirror common mobile photo app touch gestures and design patterns


**Implementation Plan:**
- [ ] Audit existing tattoo images in `/public/tattoo/`
- [ ] Design gallery component
- [ ] Implement image optimization and lazy loading
- [ ] Propose detail viewing solution
- [ ] Create solution for detailed viewing
- [ ] Add metadata system for categorization
- [ ] Integrate with booking flow

**Definition of Done:**
- Gallery displays all portfolio images
- Images are optimized for web performance
- Works seamlessly on mobile devices
- Includes clear call-to-action for bookings
- Loads quickly with lazy loading implementation

---

## High Priority Features

### 3. Navigation & Site Coherence
**Status:** In Progress  
**Priority:** High  
**Description:** Improve overall site structure and user experience for better navigation and content discovery.

**Requirements:**
- Consistent navigation patterns across all pages
- Breadcrumb navigation for deep pages
- Search functionality for content discovery
- Mobile menu improvements
- Clear information hierarchy

**Implementation Plan:**
- [ ] Audit current navigation patterns
- [ ] Design unified navigation component
- [ ] Implement breadcrumb system
- [ ] Add site search functionality
- [ ] Improve mobile menu UX
- [ ] Create site map for SEO

---

### 4. Reading Promotion & Conversion
**Status:** Partially Complete  
**Priority:** High  
**Description:** Optimize the site to better promote tarot reading services and convert visitors to clients.

**Requirements:**
- Prominent call-to-action placement
- Service comparison and pricing clarity
- Lead capture optimization
- Testimonials and social proof
- Booking flow streamlining

**Implementation Plan:**
- [ ] Design service comparison table
- [ ] Create testimonials component
- [ ] Optimize lead capture forms
- [ ] A/B test different CTA placements
- [ ] Improve booking integration with Cal.com
- [ ] Add follow-up email sequences

---

## Medium Priority Features

### 5. Content Management System
**Status:** Not Started  
**Priority:** Medium  
**Description:** Enable easier content updates and blog post management.

**Requirements:**
- Blog post creation and editing
- Image management system
- SEO optimization tools
- Draft and publishing workflow

### 6. E-commerce Integration
**Status:** Basic External Links  
**Priority:** Medium  
**Description:** Improve integration with existing sales platforms and potentially add native e-commerce.

**Requirements:**
- Better Etsy integration
- Stripe payment processing improvements
- Inventory management for physical products
- Order tracking and fulfillment

### 7. Client Portal
**Status:** Not Started  
**Priority:** Medium  
**Description:** Create a dedicated area for clients to manage bookings and access purchased content.

**Requirements:**
- User authentication system
- Booking management interface
- Access to purchased readings/content
- Communication tools

---

## Technical Debt & Improvements

### Code Quality
- [ ] Standardize component patterns across the codebase
- [ ] Implement consistent TypeScript usage
- [ ] Add JSDoc comments for complex functions
- [ ] Refactor large components into smaller, reusable pieces

### Performance Optimization
- [ ] Implement image optimization pipeline
- [ ] Add service worker for offline functionality
- [ ] Optimize bundle sizes and code splitting
- [ ] Implement better caching strategies

### Accessibility Improvements
- [ ] Audit all components for ARIA compliance
- [ ] Ensure keyboard navigation works throughout site
- [ ] Add screen reader testing
- [ ] Improve color contrast where needed

### SEO Enhancement
- [ ] Add structured data markup
- [ ] Implement sitemap generation
- [ ] Optimize meta descriptions and titles
- [ ] Add internal linking strategy

---

## Completed Features

### ✅ Basic Site Structure
- Nuxt 3 setup with Vue composition API
- Tailwind CSS integration
- Basic page routing and navigation
- Mobile-responsive design foundation

### ✅ Interactive Tarot Reading
- Free micro-reading component
- Card flip animations
- Email integration for readings
- Responsive card display

### ✅ Dark Moon Tarot Showcase
- Product page with gallery
- Purchase integration with Etsy
- Social media integration
- Brand-specific styling

### ✅ Basic Tattoo Process Pages
- Consultation booking integration
- Process explanation pages
- Contact methods and scheduling
- Portfolio image display (basic)

---

## Development Guidelines

### Before Starting Any Feature
1. Review the AI specification and instructions
2. Write tests first (TDD approach)
3. Consider mobile-first responsive design
4. Plan accessibility from the beginning
5. Think about SEO implications

### Code Review Checklist
- [ ] Tests written and passing
- [ ] Mobile responsive
- [ ] Accessible to screen readers
- [ ] Performance optimized
- [ ] Follows established patterns
- [ ] Proper error handling
- [ ] SEO considerations addressed

### Release Process
1. Feature branch development
2. Test coverage verification
3. Manual testing on multiple devices
4. Performance audit
5. Accessibility testing
6. Merge to main
7. Deploy to staging
8. Final verification
9. Production deployment

---

## Notes

### Content Priority
The attached Ritual Point markdown file contains detailed content strategy and copy, but task priorities may be outdated. Always verify current priorities with the project owner.

### External Dependencies
- Cal.com for booking management
- Stripe for payment processing
- Etsy for product sales
- Patreon for subscription content
- Various social media integrations

### Brand Considerations
All features should maintain the mystical, artistic brand while ensuring accessibility and usability for all visitors.
