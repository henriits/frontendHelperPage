import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const ZustandSetupSection = () => {
  const installZustand = `npm install zustand`;

  const createStore = `// src/store/useCounterStore.js
import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;`;

  const useStoreExample = `// ExampleComponent.jsx
import useCounterStore from "./store/useCounterStore";

const ExampleComponent = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className="flex flex-col gap-4 items-center text-white text-xl">
      <div>Count: {count}</div>
      <div className="space-x-2">
        <button onClick={increment} className="px-4 py-2 bg-green-600 rounded">+</button>
        <button onClick={decrement} className="px-4 py-2 bg-red-600 rounded">−</button>
      </div>
    </div>
  );
};

export default ExampleComponent;`;

  return (
    <Section id="zustand" title="Zustand Setup">
      <p className="mb-4">
        Zustand is a minimalist, scalable state management library for React.
        Here's how to add it:
      </p>

      <p className="mt-6 mb-4">
        <strong>Install Zustand:</strong>
      </p>
      <CodeBlock code={installZustand} />

      <p className="mt-6 mb-4">
        <strong>Create a Store:</strong>
      </p>
      <CodeBlock code={createStore} />

      <p className="mt-6 mb-4">
        <strong>Use the Store in a Component:</strong>
      </p>
      <CodeBlock code={useStoreExample} />
    </Section>
  );
};

export default ZustandSetupSection;
