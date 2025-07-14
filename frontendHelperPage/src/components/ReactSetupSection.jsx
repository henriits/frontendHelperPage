import Section from "./Section";
import CodeBlock from "./CodeBlock";

const ReactSetupSection = () => {
  const viteCommand = `npm create vite@latest frontend-helper -- --template react`;

  const setupCommands = `cd frontend-helper
npm install
npm run dev`;

  const useEffectExample = `import { useEffect, useState } from "react";

const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch mock data on mount
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []); // empty array = run only once

  return (
    <div>
      <h2>Post Title:</h2>
      <p>{data ? data.title : "Loading..."}</p>
    </div>
  );
};

export default ExampleComponent;`;

  return (
    <Section id="react" title="React Setup">
      <p className="mb-4">
        Kickstart your React project using Vite with this command:
      </p>
      <CodeBlock code={viteCommand} />

      <p className="mt-6 mb-4">
        Then install dependencies and start the dev server:
      </p>
      <CodeBlock code={setupCommands} />

      <p className="mt-6 mb-4">
        Here’s a basic example of the <code>useEffect</code> hook:
      </p>
      <CodeBlock code={useEffectExample} />
    </Section>
  );
};

export default ReactSetupSection;
