import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const ReactSetupSection = () => {
  const viteVanilla = `npm create vite@latest frontend-helper -- --template react`;
  const viteTS = `npm create vite@latest frontend-helper-ts -- --template react-ts`;

  const setupCommandsVanilla = `cd frontend-helper
npm install
npm run dev`;

  const setupCommandsTS = `cd frontend-helper-ts
npm install
npm run dev`;

  return (
    <Section id="react" title="React Setup Options">
      <p className="mb-4">
        🔹 <strong>Vanilla React Setup</strong> (JavaScript):
      </p>
      <CodeBlock code={viteVanilla} />
      <CodeBlock code={setupCommandsVanilla} />

      <p className="mt-6 mb-4">
        🔸 <strong>React + TypeScript Setup</strong>:
      </p>
      <CodeBlock code={viteTS} />
      <CodeBlock code={setupCommandsTS} />
    </Section>
  );
};

export default ReactSetupSection;
