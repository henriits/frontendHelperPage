import ChecklistBlock from "../ChecklistBlock";

const frontendEssentialsChecklist = [
  {
    section: "🎯 Frontend Essentials",
    items: [
      {
        label: "Responsive layout tested across viewports",
        note: "Use media queries, flexible containers, and Tailwind’s `sm:` / `md:` prefixes to ensure it works on mobile and desktop",
      },
      {
        label: "Proper use of semantic HTML",
        note: "Structure page with meaningful tags — `<main>`, `<section>`, `<article>`, `<aside>`, `<header>`, `<footer>`",
      },
      {
        label: "Accessible forms and controls",
        note: "Every input has a label, uses correct type, and exposes errors with ARIA or semantic roles",
      },
      {
        label: "Keyboard navigable UI",
        note: "Ensure users can reach and interact with all components using Tab, Enter, Space, and arrow keys",
      },
      {
        label: "Color contrast and readability are strong",
        note: "Test with accessibility tools or Tailwind contrast-safe color pairs — avoid light-on-light combos",
      },
      {
        label: "Images and media are responsive and lazy-loaded",
        note: 'Use `loading="lazy"`, `max-w-full`, `object-cover` to keep things mobile-safe and fast',
      },
      {
        label: "Text and headings use scalable, readable typography",
        note: "Use consistent `font-size`, `line-height`, `font-weight`, and heading hierarchy",
      },
      {
        label: "Client-side validation is in place",
        note: "Use native HTML validation (`required`, `type`, `pattern`) or custom logic before submission",
      },
      {
        label: "Fallbacks for media, fonts, and scripts",
        note: "Gracefully degrade using `<noscript>`, font stacks, and placeholder content",
      },
      {
        label: "Meta viewport is defined",
        note: 'Include `<meta name="viewport" content="width=device-width, initial-scale=1">` for mobile responsiveness',
      },
    ],
  },
];

const FrontendEssentialsSectionChecklist = () => (
  <>
    {frontendEssentialsChecklist.map(({ section, items }) => (
      <ChecklistBlock key={section} title={section} items={items} />
    ))}
  </>
);

export default FrontendEssentialsSectionChecklist;
