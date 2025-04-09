# Dog Lover - View different dog breeds online

> Search and find different dog breeds

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
- Static Site Generation - Since first screen page performance must be good, we should avoid render pages on frontend, and dog breeds likely won't change too often, prerender static page is the most reasonable choice.
- UI Variables (Design Token) - I treat variables in UI carefully, manage them through [Figma's documentation](https://help.figma.com/hc/en-us/articles/18490793776023-Update-1-Tokens-variables-and-styles). [How to Manage Digital Product Variables](https://www.webdong.dev/en/post/how-to-organize-your-digital-product/).
- Component Organization - Based on [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)


## Potential Improvements

In a team, I usually collaborate with others to avoid implement new behavior before plan. To avoid deviate from the actual user needs and limited viewpoint. So here's what I thought about the current project:

### requirement

- Dog has subbreed, How should the breed list, title, url to present?
- Breed Images show 50 random images
  - Why is 50 images? What if there's no enough image?
  - Random images might not be very accurate. Is it means that any image? or random image related to the breed?
- The first image of the carousel should be the one which is clicked: What should I put in the rest of carousel image? rest of images in Breed Images page?

### Code

- Dog API Image - Dog API not provide any image dimension info, the size and quality varies a lot, missing `alt` to describe image. Might [cause CLS](https://web.dev/articles/cls) and bad experience. Maybe we could measure dimension on rendering or on backend, then provide to frontend.
- Runtime check - Since 3rd data is never trustable, add something like [zod](https://zod.dev/) to validate data will add more protection to runtime.
- Fetch management - Some larger team and project might perfer something like [TanStackQuery](https://tanstack.com/query/latest) for asynchronous state management.
- Sprite Image - Every breed image is below 10kb, we should combine all the images to 1 to reduce request roundtrip.
- [List Virtualization](https://www.patterns.dev/vanilla/virtual-lists/) - Would help, if the list item is too much.

### UI

- Accessibility: Text color in placeholder is unreadable, we should run some test through standerd like [WCAG](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) color contrast.
- Better UI variable - Spacing and color is a bit weird and unorganize like `10.86px` on breeds item avatar padding. We should avoid [magic number](https://en.wikipedia.org/wiki/Magic_number_(programming)) in UI for better development and design experience.
- RWD - No UI, rely on magination not wireframe might cause problem.

### UX

- What if there's no search match result? or has no image? There's no such case to warn the user.
- What if search input is disabled when loading(Wireframe is not very clear about this, just guessing), it might not be clear that when will it ready or you just can't use it. - [Don’t Disable Form Controls](https://adrianroselli.com/2024/02/dont-disable-form-controls.html)
- Add mobile swipe support for carousel would be better.