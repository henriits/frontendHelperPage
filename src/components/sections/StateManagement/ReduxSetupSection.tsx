import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const ReduxSetupSection = () => {
  const installRedux = `# Install Redux Toolkit and React Redux bindings
npm install @reduxjs/toolkit react-redux`;

  const storeSetup = `// 📦 store.js — create and export Redux store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // attach reducer
  },
});`;

  const counterSlice = `// ⚙️ counterSlice.js — state & actions for a counter
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;`;

  const providerUsage = `// 🏁 main.jsx — wrap the app with <Provider>
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);`;

  const usageInComponent = `// 🧮 Counter.jsx — interact with store
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-5 text-center">
      <h2 className="text-3xl mb-4">Count: {count}</h2>
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 bg-green-500 text-white rounded mr-2"
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        −
      </button>
    </div>
  );
};

export default Counter;`;

  return (
    <Section id="redux" title="Redux Setup with Toolkit">
      <p className="mb-4">
        Redux Toolkit streamlines global state management in React. Here’s a
        complete walkthrough with code separation and comments for clarity:
      </p>
      <div className="space-y-6">
        <CodeBlock code={installRedux} />
        <CodeBlock code={storeSetup} />
        <CodeBlock code={counterSlice} />
        <CodeBlock code={providerUsage} />
        <CodeBlock code={usageInComponent} />
      </div>
    </Section>
  );
};

export default ReduxSetupSection;
