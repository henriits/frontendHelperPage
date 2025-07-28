import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const TailwindSetupSection = () => {
  const installTailwind = `npm install tailwindcss @tailwindcss/vite`;

  const indexCss = `/* index.css */
@import "tailwindcss`;

  const mainImport = `// main.jsx
import "./index.css";`;

  const testComponent = `
<div className="mt-6 mb-4 p-5 rounded-2xl bg-black text-white text-4xl font-bold ">
  Tailwind is working! 🎉
</div>`;

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
      <div className=" mt-6 mb-4 p-5 rounded-2xl  bg-black text-white text-4xl font-bold">
        Tailwind is working! 🎉
      </div>
      `
    </Section>
  );
};

export default TailwindSetupSection;
