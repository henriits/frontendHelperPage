import ChecklistBlock from "../ChecklistBlock";

const bestPracticesChecklist = [
  {
    section: "✅ Developer Best Practices",
    items: [
      {
        label: "Follow DRY principles",
        note: "Avoid repeating logic, markup, or config — abstract shared code to reusable components or helpers",
      },
      {
        label: "Write readable, consistent code",
        note: "Use a clear structure, consistent formatting, and intuitive naming conventions",
      },
      {
        label: "Organize project by feature or domain",
        note: "Group related components, hooks, styles, and logic together to boost clarity and scalability",
      },
      {
        label: "Use code splitting & lazy loading",
        note: "Improve performance by deferring non-critical chunks via `React.lazy()` and `<Suspense>`",
      },
      {
        label: "Keep components small and focused",
        note: "Each component should do one thing well — break up complexity with composition",
      },
      {
        label: "Memoize and optimize state updates",
        note: "Use `useMemo`, `useCallback`, and selectors to avoid unnecessary re-renders",
      },
      {
        label: "Graceful error handling in place",
        note: "Implement error boundaries and friendly fallbacks — no silent failures",
      },
    ],
  },
];

const BestPracticesChecklistSection = () => (
  <>
    {bestPracticesChecklist.map(({ section, items }) => (
      <ChecklistBlock key={section} title={section} items={items} />
    ))}
  </>
);

export default BestPracticesChecklistSection;
