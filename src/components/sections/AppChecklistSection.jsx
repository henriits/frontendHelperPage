import ChecklistBlock from "../ChecklistBlock";

const appChecklist = [
  {
    section: "🧱 Architecture & Setup",
    items: [
      {
        label: "Project structure is modular and scalable",
        note: "Features are grouped logically; folders follow domain or atomic structure",
      },
      {
        label: "Linting and formatting are enforced",
        note: "Tools like ESLint and Prettier run via devtools or pre-commit hooks",
      },
      {
        label: "Version control best practices followed",
        note: "Commits are meaningful; feature branches and reviews are consistent",
      },
      {
        label: "Testing framework is integrated",
        note: "Jest, Vitest, or equivalent with unit and integration coverage",
      },
    ],
  },
  {
    section: "⚙️ Configuration & Deployment",
    items: [
      {
        label: "Environment configs are separated",
        note: "Use `.env` files for staging, production, development, etc.",
      },
      {
        label: "Production build is optimized",
        note: "Dead code eliminated, chunking applied, assets compressed",
      },
      {
        label: "CI/CD pipeline in place",
        note: "Automated testing and deployment (GitHub Actions, Vercel, Netlify, etc.)",
      },
      {
        label: "Monitoring and logging are set up",
        note: "Track errors and metrics (Sentry, LogRocket, or custom telemetry)",
      },
    ],
  },
  {
    section: "🔒 Security & Governance",
    items: [
      {
        label: "Secrets are securely stored",
        note: "Sensitive keys live in env variables or secure vaults — never committed",
      },
      {
        label: "Dependencies are audited",
        note: "Run `npm audit` or use tools to scan vulnerable packages regularly",
      },
      {
        label: "Authentication is protected",
        note: "JWT or session tokens are safely handled — logout and refresh flows tested",
      },
      {
        label: "Authorization rules are enforced",
        note: "UI and server respect role-based access — no privilege escalation",
      },
    ],
  },
];

const AppChecklistSection = () => (
  <>
    {appChecklist.map(({ section, items }) => (
      <ChecklistBlock key={section} title={section} items={items} />
    ))}
  </>
);

export default AppChecklistSection;
