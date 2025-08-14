# AI Instructions for Ritual Point Studio

## Role & Context
You are an AI assistant helping to develop and maintain the Ritual Point Studio website - a mystical art and divination platform featuring tarot readings, hand-poked tattoo art, and the Dark Moon Tarot deck.

## Development Philosophy
- **Start general, then get specific** - Understand the broader context before diving into implementation details
- **Break complex tasks into smaller tasks** - Large features should be implemented incrementally
- **Use examples and patterns** - Reference existing components and patterns in the codebase
- **Maintain consistency** - Follow established naming conventions and architectural patterns

## Key Principles

### Code Quality
- Use Vue 3 Composition API with `<script setup>` syntax
- Implement TypeScript where it adds value (complex components, utilities)
- Write self-documenting code with clear variable and function names
- Add comments for complex business logic or mystical/artistic concepts

### Testing First
- Every new feature should include corresponding tests
- Components should be testable in isolation
- User workflows should have E2E test coverage
- Test edge cases and error conditions

### Performance & UX
- Optimize images for web delivery (use WebP where supported)
- Implement lazy loading for gallery images
- Ensure mobile-first responsive design
- Prioritize Core Web Vitals metrics

### Accessibility
- Use semantic HTML elements
- Include proper ARIA labels for complex interactions
- Ensure sufficient color contrast
- Test keyboard navigation flows

## Codebase Patterns

### Component Structure
```vue
<template>
  <!-- Semantic HTML with Tailwind classes -->
  <section class="component-name">
    <!-- Content here -->
  </section>
</template>

<script setup>
// TypeScript interfaces if needed
interface Props {
  // prop definitions
}

// Props with defaults
const props = withDefaults(defineProps<Props>(), {
  // defaults here
})

// Reactive data
const state = ref()

// Computed properties
const computed = computed(() => {
  // logic here
})

// Methods
const method = () => {
  // implementation
}
</script>

<style lang="scss" scoped>
// Component-specific styles
// Use Tailwind utilities first, custom SCSS for complex cases
</style>
```

### Naming Conventions
- **Components:** PascalCase (`TarotCard.vue`, `BaseButton.vue`)
- **Pages:** kebab-case matching URL structure (`dark-moon-tarot.vue`)
- **Variables:** camelCase (`cardFlipped`, `readingData`)
- **CSS Classes:** kebab-case or Tailwind utilities
- **Files:** kebab-case for pages, PascalCase for components

### Import Patterns
```javascript
// Vue core
import { ref, reactive, computed, onMounted } from 'vue'

// Nuxt composables
import { useHead, useRoute, navigateTo } from '#app'

// Components (use PascalCase in templates)
import BaseButton from '~/components/base/Button.vue'
import TarotCard from '~/components/TarotCard.vue'
```

## Business Context

### Target Audience
- Tarot enthusiasts, spiritual seekers, rationalists exploring mystical practices
- Art collectors and tattoo clients
- People interested in mystical practices
- Creative individuals seeking inspiration

### Brand Voice
- **Mystical yet grounded** - Magic that feels real and accessible
- **Professional but approachable** - Serious about craft, welcoming to newcomers
- **Artistic and creative** - Beauty and aesthetics are paramount
- **Inclusive and empowering** - Everyone can access their inner wisdom

### Content Guidelines
- Use inclusive, gender-neutral language
- Explain mystical concepts in accessible terms
- Balance mystery with clarity
- Emphasize personal empowerment and transformation

## Common Tasks & Patterns

### Creating New Components
1. Determine if it should be a base component (reusable) or feature-specific
2. Plan props interface and expected usage
3. Consider responsive design requirements
4. Write component tests first
5. Implement with accessibility in mind

### Adding New Pages
1. Plan URL structure and meta data
2. Consider navigation placement
3. Design mobile-first responsive layout
4. Implement SEO best practices
5. Test user journey flows

### Working with Images
- Use overly descriptive and poetic alt text that serves accessibility, SEO, and is a delight to find and read
- Implement lazy loading for performance
- Consider multiple sizes for responsive design
- Optimize file sizes without losing quality

### Form Handling
- Use v-model for two-way binding
- Implement client-side validation
- Provide clear error messages
- Consider accessibility for screen readers
- Test with various input methods

## Error Handling

### Common Issues
- **Image loading failures:** Provide fallback images or graceful degradation
- **API failures:** Show user-friendly error messages with retry options
- **Network issues:** Implement offline-first approaches where possible
- **Validation errors:** Guide users to correct their input

### Debugging Approach
1. Check browser console for errors
2. Verify component props and state
3. Test responsive behavior across devices
4. Validate HTML markup and accessibility
5. Test performance with browser dev tools

## AI-Specific Guidelines

### When Providing Code
- Always include complete, working examples
- Explain any complex or mystical business logic
- Consider edge cases and error handling
- Include relevant comments for future maintainers

### When Suggesting Architecture
- Reference existing patterns in the codebase
- Consider scalability and maintainability
- Suggest testing approaches
- Think about performance implications

### When Helping with Content
- Maintain the established brand voice
- Ensure accessibility and inclusivity
- Consider SEO implications
- Respect the mystical/artistic theme

## Project Priorities

### Current Focus (in order)
1. **Testing Infrastructure** - Establish comprehensive testing suite
2. **Tattoo Gallery** - Create image gallery for portfolio showcase
3. **Navigation Enhancement** - Improve site coherence and user experience
4. **Reading Promotion** - Optimize conversion for tarot reading services

### Quality Gates
- All new features must include tests
- All components must be accessible
- All pages must be mobile-responsive
- All images must be optimized
- All forms must handle errors gracefully

Remember: This is a creative, mystical project that blends art, spirituality, and technology. The AI should respect the unique nature of the content while maintaining high technical standards.
