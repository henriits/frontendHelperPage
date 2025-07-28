import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const examples = {
  propDrilling: `// Prop Drilling — passing props through layers
const Grandparent = () => {
  const [count, setCount] = useState(0);
  return <Parent count={count} setCount={setCount} />;
};

const Parent = ({ count, setCount }) => {
  return <Child count={count} setCount={setCount} />;
};

const Child = ({ count, setCount }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`,

  context: `// React Context — for global shared state
const StateContext = createContext();

export const useStateStore = () => useContext(StateContext);

export const StateProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <StateContext.Provider value={{ count, setCount }}>
      {children}
    </StateContext.Provider>
  );
};`,

  zustand: `// Zustand — tiny global store
import { create } from "zustand"; 
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
}));`,

  redux: `// Redux Toolkit — structured state slice
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1 },
  },
});

export const { increment } = counterSlice.actions;

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});`,
};

const summaryTable = [
  ["🔧 Pattern / Tool", "Setup", "Boilerplate", "DevTools", "Best For"],
  [
    "Prop Drilling",
    "None",
    "None",
    "None",
    "Short hierarchies, direct parent-child communication",
  ],
  [
    "React Context",
    "Low",
    "Minimal",
    "None",
    "Small apps, avoiding prop drilling",
  ],
  [
    "Zustand",
    "Ultra Low",
    "Tiny API",
    "Yes",
    "Simple global state and selectors",
  ],
  [
    "Redux Toolkit",
    "Medium",
    "Structured",
    "Yes",
    "Complex state logic and debugging",
  ],
];

const StateManagementComparison = () => (
  <Section id="comparison" title="State Management Comparison">
    <p className="mb-4">
      Pick the right state tool for your app. Here's how{" "}
      <strong>React Context</strong>, <strong>Zustand</strong>, and{" "}
      <strong>Redux Toolkit</strong> compare:
    </p>

    <div className="overflow-auto mb-6">
      <table className="min-w-full text-sm text-white border border-gray-600">
        <thead>
          <tr className="bg-gray-800">
            {summaryTable[0].map((header) => (
              <th key={header} className="px-3 py-2 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {summaryTable.slice(1).map((row, i) => (
            <tr key={i} className="border-t border-gray-700 text-black">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {Object.entries(examples).map(([label, code]) => (
      <div key={label} className="mt-6 mb-4">
        <p className="font-semibold mb-2">
          <strong>🧩 {label}</strong>
        </p>
        <CodeBlock code={code} />
      </div>
    ))}
  </Section>
);

export default StateManagementComparison;
