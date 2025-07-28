import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const examples = {
  install: `// Install Vitest & Testing Library
npm install -D vitest @testing-library/react @testing-library/jest-dom`,

  viteConfig: `// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});`,

  setupTests: `// setupTests.js
import "@testing-library/jest-dom";`,

  sampleTest: `// Button.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

test("calls onClick when clicked", async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  await userEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});`,

  cypressInstall: `// Install Cypress
npm install -D cypress`,

  cypressOpen: `// Open Cypress UI
npx cypress open`,

  cypressTest: `// cypress/e2e/app.cy.js
describe("Main page", () => {
  it("loads homepage and clicks button", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Click me").click();
  });
});`,
};

const TestResultPreview = () => (
  <div className="bg-gray-900 text-green-400 font-mono p-4 rounded mt-6">
    ✓ calls onClick when clicked{" "}
    <span className="text-sm text-green-500">✔ passed</span>
    <br />✓ renders button correctly{" "}
    <span className="text-sm text-green-500">✔ passed</span>
    <br />✕ should display title{" "}
    <span className="text-sm text-red-400">✖ failed</span>
    <br />
    <span className="text-red-400">Error: Expected "Hello" to equal "Hi"</span>
  </div>
);

const TestingSetupSection = () => (
  <Section id="testing" title="Testing Setup">
    <p className="mb-4">
      Set up fast, reliable testing for your React app. Vitest powers unit and
      component tests, while Cypress handles full end-to-end flows:
    </p>

    {Object.entries(examples).map(([title, code]) => (
      <div key={title} className="mt-6 mb-4">
        <p className="font-semibold mb-2">
          <strong>🧪 {title}</strong>
        </p>
        <CodeBlock code={code} />
      </div>
    ))}

    <p className="mt-10 mb-2 font-semibold text-white">
      <strong>🧾 Simulated Test Output</strong>
    </p>
    <TestResultPreview />
  </Section>
);

export default TestingSetupSection;
