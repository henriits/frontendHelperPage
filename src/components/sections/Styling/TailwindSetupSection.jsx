import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const TailwindSetupSection = () => {
  const installTailwind = `npm install tailwindcss @tailwindcss/vite`;

  const indexCss = `/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`;

  const mainImport = `// main.jsx
import "./index.css";`;

  const testComponent = `<div className="mt-6 mb-4 p-5 rounded-xl bg-blue-600 text-white text-3xl font-bold shadow-lg">
  Tailwind is working! 🎉
</div>`;

  const validationTips = `// 🧪 How to validate Tailwind setup:

1. Start dev server → npm run dev
2. Use <div> with Tailwind classes (e.g. className="text-red-500")
3. Check if styles apply in the browser
4. Hover over class names in editor — Tailwind IntelliSense should show suggestions (if extension is installed)
5. Inspect elements in DevTools — class names should appear in markup`;

  return (
    <Section id="tailwind" title="Tailwind CSS Setup">
      <p className="mb-4">
        Here’s the updated way to set up Tailwind CSS in a React + Vite project
        using the official plugin:
      </p>

      <p className="mt-6 mb-4">
        <strong>Install Tailwind & Plugin:</strong>
      </p>
      <CodeBlock code={installTailwind} />

      <p className="mt-6 mb-4">
        <strong>Add Tailwind to CSS:</strong>
      </p>
      <CodeBlock code={indexCss} />

      <p className="mt-6 mb-4">
        <strong>Import CSS in Entry Point:</strong>
      </p>
      <CodeBlock code={mainImport} />

      <p className="mt-6 mb-4">
        <strong>Test Tailwind in a Component:</strong>
      </p>
      <CodeBlock code={testComponent} />

      <p className="mt-6 mb-4">
        <strong>Tips to Confirm Tailwind Works:</strong>
      </p>
      <CodeBlock code={validationTips} />

      <div className="mt-6 mb-4 p-5 rounded-xl bg-blue-600 text-white text-3xl font-bold shadow-lg">
        Tailwind is working! 🎉
      </div>
    </Section>
  );
};

export default TailwindSetupSection;
