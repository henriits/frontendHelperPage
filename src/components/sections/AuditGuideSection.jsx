import ChecklistBlock from "../ChecklistBlock";
const auditGuideChecklist = [
  {
    section: "🔍 Quality Assurance",
    items: [
      {
        label: "Visual consistency across browsers",
        note: "Test layout and design in Chrome, Firefox, Safari, Edge, and mobile views",
      },
      {
        label: "Interactive elements behave as expected",
        note: "Buttons, dropdowns, modals, sliders — all tested with real users or simulated flows",
      },
      {
        label: "Forms validated and testable",
        note: "Client-side and server-side validations verified — including error display and edge cases",
      },
      {
        label: "Accessibility features verified",
        note: "Run audits via Lighthouse and axe — ensure focus traps, ARIA roles, and keyboard behavior",
      },
    ],
  },
  {
    section: "🧪 Testing & Reliability",
    items: [
      {
        label: "Critical paths are covered by tests",
        note: "Login, navigation, data submission — verify unit/integration coverage or manual scripts",
      },
      {
        label: "Error states and edge cases handled gracefully",
        note: "Simulate common failure modes (server errors, timeouts, form corruption)",
      },
      {
        label: "404, 403, and fallback pages tested",
        note: "Ensure user is never stranded or confused when routes break or access fails",
      },
      {
        label: "User permissions and role logic respected",
        note: "Admin/edit/view states work as expected across roles or feature flags",
      },
    ],
  },
  {
    section: "📦 Deployment Review",
    items: [
      {
        label: "Build size is acceptable",
        note: "Audit bundles with Lighthouse or Webpack Analyzer — check for large third-party imports",
      },
      {
        label: "Static assets are compressed and cached",
        note: "Use gzip, brotli, and proper cache headers on fonts, images, and JS",
      },
      {
        label: "Environment variables are production-safe",
        note: "Check for accidental exposure — only public keys available to browser code",
      },
      {
        label: "Redirects, rewrites, and domain config are validated",
        note: "DNS, SSL, custom domains, rewrites all tested before launch",
      },
    ],
  },
];

const AuditGuideSection = () => (
  <>
    {auditGuideChecklist.map(({ section, items }) => (
      <ChecklistBlock key={section} title={section} items={items} />
    ))}
  </>
);

export default AuditGuideSection;
