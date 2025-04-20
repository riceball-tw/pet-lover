# [Dog Lover](https://pet-lover-ecru.vercel.app/breeds) - View different dog breeds online

![Pet Lover Mockup](/src/public/pet-lover.jpg)

> Search and explore various dog breeds

## Documentation

- User Story - non-public
- Acceptance Criteria - non-public
- Wireframe - non-public
- [Dog Breeds/Images API](https://dog.ceo/dog-api/)

## Getting Started

```bash
# Install dependencies through npm
pnpm install
# Run dev server
pnpm dev

# Build and run your own docker image
docker build -t nextjs-docker .
docker run -p 3000:3000 nextjs-docker
```

## Technical choice

- [TypeScript](https://www.typescriptlang.org/) - For more type safety, better describe and document the program's behavior.
- [Next](https://nextjs.org/) - Since it's recommended on requirement. For it's isomorphic rendering and Image optimizing.
- [Tailwind CSS](https://tailwindcss.com/) - The leading utility-first CSS framework. Its unopinionated design and flexibility make it ideal for rapidly building and customizing projects.
- Static Site Generation - To ensure optimal first-screen performance, we should avoid client-side rendering. Since dog breed data is relatively static, prerendering pages as static content is the most reasonable choice.
- UI Variables (Design Token) - I manage UI variables thoughtfully, using [Figma's documentation](https://help.figma.com/hc/en-us/articles/18490793776023-Update-1-Tokens-variables-and-styles) as a guide. [How to Manage Digital Product Variables](https://www.webdong.dev/en/post/how-to-organize-your-digital-product/).
- Component Organization - Based on [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)


## Potential Improvements

When working in a team, I prefer to collaborate closely before implementing new features, to ensure alignment with actual user needs and avoid assumptions based on limited perspectives.

### Requirement

- Some breeds have sub-breeds — how should we present them in the breed list, title, and URL structure?
- Breed Images show 50 random images
  - Why 50 images? What happens if there aren't enough images?
  - Random images might not be very accurate. Does it mean any random image, or only random images related to the selected breed?
- The first image of the carousel should be the one which is clicked: What should I put in the rest of carousel image? rest of images in Breed Images page?

### Code

- Dog API Image - The Dog API doesn't provide any image dimension data, the size and quality varies a lot, missing `alt` to describe image. Might [cause CLS](https://web.dev/articles/cls) and bad experience. Maybe we could measure dimension on rendering or on backend, then provide to frontend.
- Runtime check - Since third-party data can't always be trusted, add something like [zod](https://zod.dev/) to validate data will add more protection to runtime.
- Fetch management - Some larger team and project might perfer something like [TanStackQuery](https://tanstack.com/query/latest) for asynchronous state management.
- Sprite Image - Each breed image is under 10kb — we could consider combining them into a sprite to reduce the number of requests.
- [List Virtualization](https://www.patterns.dev/vanilla/virtual-lists/) - Would help, if the list item is too much.

### UI

- Accessibility: The placeholder text color is difficult to read, we should run some test through standerd like [WCAG](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) color contrast.
- Better UI variable - Spacing and colors are slightly inconsistent and unorganized — for example, the `10.86px` padding on breed item avatars.. We should avoid [magic number](https://en.wikipedia.org/wiki/Magic_number_(programming)) in UI for better development and design experience.
- RWD - Without proper wireframes, relying solely on imagination may lead to design issues across different screen sizes.

### UX

- What happens if there are no search results or no images available?
- What if search input is disabled when loading(Wireframe is not very clear about this, just guessing), It might be unclear whether the input is temporarily disabled or simply non-functional - [Don’t Disable Form Controls](https://adrianroselli.com/2024/02/dont-disable-form-controls.html)
- Adding swipe support for mobile users would improve the carousel experience.
