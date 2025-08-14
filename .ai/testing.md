# Ritual Point Studio - Testing Strategy

## Testing Philosophy

This project follows a **testing-first approach** where all new features require corresponding tests before implementation. Our testing strategy prioritizes user experience and business functionality while maintaining code quality and preventing regressions.

## Testing Pyramid

### Unit Tests (Foundation - 70%)
**Framework:** Vitest + Vue Test Utils  
**Scope:** Individual components, utilities, and business logic

**What to Test:**
- Component rendering with various props
- User interactions (clicks, form inputs)
- Component state changes
- Computed properties and reactive data
- Utility functions and helpers
- Error handling and edge cases

**Example Test Structure:**
```javascript
// components/__tests__/TarotCard.test.js
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TarotCard from '../TarotCard.vue'

describe('TarotCard', () => {
  it('renders card name correctly', () => {
    const wrapper = mount(TarotCard, {
      props: { cardName: 'The Fool', cardImage: '/deck-mock/00_card.png' }
    })
    expect(wrapper.text()).toContain('The Fool')
  })

  it('flips card when clicked', async () => {
    const wrapper = mount(TarotCard, {
      props: { flipOnClick: true }
    })
    await wrapper.find('.card').trigger('click')
    expect(wrapper.vm.isFlipped).toBe(true)
  })
})
```

### Integration Tests (Core - 20%)
**Framework:** Vitest + @nuxt/test-utils  
**Scope:** Page-level functionality, API integrations, navigation flows

**What to Test:**
- Page rendering and navigation
- Form submissions and validations
- API integrations (Cal.com, email forms)
- Component interactions within pages
- Route guards and redirects

**Example Test Structure:**
```javascript
// pages/__tests__/reading-index.test.js
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ReadingIndex from '../reading/index.vue'

describe('Reading Index Page', () => {
  it('displays all reading offerings', async () => {
    const component = await mountSuspended(ReadingIndex)
    expect(component.text()).toContain('Intuitive Coaching')
    expect(component.text()).toContain('Private Readings')
    expect(component.text()).toContain('Event Tarot Readings')
  })
})
```

### End-to-End Tests (Critical Paths - 10%)
**Framework:** Playwright  
**Scope:** Complete user journeys and business-critical workflows

**What to Test:**
- Complete booking flows
- Tarot reading experience
- Contact form submissions
- Mobile navigation
- Cross-browser compatibility
- Performance requirements

**Example Test Structure:**
```javascript
// tests/e2e/tarot-reading.spec.js
import { test, expect } from '@playwright/test'

test('user can complete free tarot reading', async ({ page }) => {
  await page.goto('/')
  
  // Navigate to free reading
  await page.click('text=Try a free reading')
  
  // Enter question
  await page.fill('input[placeholder*="question"]', 'What should I focus on today?')
  
  // Flip card
  await page.click('.tarot-card')
  
  // Verify reading appears
  await expect(page.locator('.reading-result')).toBeVisible()
  await expect(page.locator('.reading-result')).toContainText('represents')
})
```

## Test Configuration

### Vitest Setup
```javascript
// vitest.config.js
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '.nuxt/',
        'coverage/',
        '**/*.d.ts',
      ]
    }
  },
  resolve: {
    alias: {
      '~': new URL('./', import.meta.url).pathname,
      '@': new URL('./', import.meta.url).pathname
    }
  }
})
```

### Playwright Configuration
```javascript
// playwright.config.js
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})
```

## Testing Standards

### Component Testing Requirements
Every component should have tests covering:
- **Rendering:** Props display correctly
- **Interactions:** User actions work as expected
- **State:** Component state updates properly
- **Events:** Emitted events fire correctly
- **Edge Cases:** Error states and boundary conditions

### Page Testing Requirements
Every page should have tests covering:
- **SEO:** Meta tags and structured data
- **Navigation:** Links and routing work correctly
- **Content:** Key content displays properly
- **Forms:** Form validation and submission
- **Responsive:** Mobile layout functionality

### Business Logic Testing
Critical business flows must have comprehensive test coverage:
- **Tarot Reading Flow:** Question input → Card selection → Reading generation
- **Booking Process:** Service selection → Calendar → Payment → Confirmation
- **Contact Forms:** Validation → Submission → Success handling
- **Gallery Navigation:** Filtering → Image viewing → Performance

## Mock Data & Fixtures

### Test Data Structure
```javascript
// tests/fixtures/tarot-cards.js
export const mockTarotCards = [
  {
    id: '00',
    name: 'The Fool',
    img: '/deck-mock/00_card.png',
    description: 'New beginnings and infinite potential'
  },
  // ... more cards
]

// tests/fixtures/readings.js
export const mockReadingData = {
  question: 'What should I focus on today?',
  card: mockTarotCards[0],
  interpretation: 'The Fool suggests...'
}
```

### API Mocking
```javascript
// tests/mocks/cal-com.js
export const mockCalComAPI = {
  getAvailability: vi.fn().mockResolvedValue({
    slots: ['2024-01-15T10:00:00Z', '2024-01-15T11:00:00Z']
  }),
  bookAppointment: vi.fn().mockResolvedValue({
    id: 'booking-123',
    status: 'confirmed'
  })
}
```

## Continuous Integration

### GitHub Actions Workflow
```yaml
# .github/workflows/test.yml
name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test:unit
      - run: npm run test:e2e
      - run: npm run test:coverage
```

### Quality Gates
- **Minimum Coverage:** 80% for new code
- **No Failing Tests:** All tests must pass before merge
- **Performance Budget:** E2E tests verify Core Web Vitals
- **Accessibility Testing:** Automated a11y checks in CI

## Testing Best Practices

### Writing Effective Tests
1. **Test Behavior, Not Implementation:** Focus on user-facing functionality
2. **Use Descriptive Names:** Test names should explain what they verify
3. **Arrange-Act-Assert:** Structure tests with clear setup, action, and verification
4. **Test Edge Cases:** Include error states, empty data, and boundary conditions
5. **Keep Tests Isolated:** Each test should be independent and repeatable

### Mystical/Artistic Content Testing
When testing content related to tarot, art, or mystical concepts:
- **Verify Content Accuracy:** Ensure tarot card meanings are correctly displayed
- **Test Artistic Elements:** Verify images load and display properly
- **Respect Brand Voice:** Test that mystical language is preserved
- **Cultural Sensitivity:** Ensure inclusive and respectful language

### Performance Testing
- **Image Loading:** Test lazy loading and optimization
- **Animation Performance:** Verify smooth animations on various devices
- **Core Web Vitals:** Monitor LCP, FID, and CLS metrics
- **Bundle Size:** Track JavaScript bundle sizes

## Maintenance & Monitoring

### Regular Testing Tasks
- **Weekly:** Review test coverage reports
- **Monthly:** Update test data and fixtures
- **Quarterly:** Review and refactor test suite
- **After Major Changes:** Full regression testing

### Monitoring & Alerts
- **Failed Test Notifications:** Immediate alerts for CI failures
- **Coverage Drops:** Alerts when coverage decreases significantly
- **Performance Regressions:** Monitoring for slower test execution
- **Flaky Test Detection:** Identify and fix unreliable tests

This testing strategy ensures the mystical and artistic nature of Ritual Point Studio is preserved while maintaining high code quality and user experience standards.
