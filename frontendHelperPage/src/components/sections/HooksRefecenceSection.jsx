import Section from "../Section";
import CodeBlock from "../CodeBlock";

const HooksReferenceSection = () => {
  const descriptions = {
    useState:
      "Track local component state—simple and essential for any React UI.",
    useEffect: "Handle side effects like API calls, subscriptions, or timers.",
    useRef:
      "Store a mutable value or DOM node across renders without triggering re-renders.",
    useMemo:
      "Optimize expensive calculations and avoid recomputation unless dependencies change.",
    useCallback:
      "Memoize functions to prevent unnecessary re-renders—especially when passing callbacks to children.",
    useReducer:
      "Manage complex state logic using a reducer pattern—great alternative to `useState` for deeply nested updates.",
    useTransition:
      "Deprioritize slow UI updates to keep the interface responsive and snappy.",
    useDeferredValue:
      "Delay updating non-critical state during heavy rendering to avoid jank.",
    useId:
      "Generate unique, consistent IDs for accessibility or keyed lists—especially for SSR.",
    useSyncExternalStore:
      "Safely subscribe to external store state, useful when bridging to Redux or Zustand.",
    useImperativeHandle:
      "Expose imperative methods to parent components—commonly used with `forwardRef`.",
    useLayoutEffect:
      "Run logic after DOM mutations but before browser paints—used for measurements or sync layout logic.",
    useDebugValue:
      "Label custom hooks in React DevTools—great for debugging internal values.",
    useOptimistic:
      "Temporarily update UI before server confirmation—makes async interactions feel instant.",
    useActionState:
      "Handle form-based server mutations with built-in async state management.",
    useFormStatus:
      "Expose the current status of a `<form>` (pending, method, etc.) in nested components.",
    useFormState:
      "Manage state updates triggered by server actions inside forms.",
    use: "Unwrap async data directly in Server Components—no need for local state or effects.",
  };

  const examples = {
    useState: `// useState
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`,

    useEffect: `// useEffect
import { useEffect } from "react";

useEffect(() => {
  console.log("Component mounted or updated");
}, []);`,

    useRef: `// useRef
import { useRef, useEffect } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input ref={inputRef} />;
};`,

    useMemo: `// useMemo
import { useMemo } from "react";

const ExpensiveCalc = ({ number }) => {
  const squared = useMemo(() => number * number, [number]);
  return <div>Squared: {squared}</div>;
};`,

    useCallback: `// useCallback
import { useCallback } from "react";

const MemoizedHandler = ({ onEvent }) => {
  const handleClick = useCallback(() => {
    onEvent("Clicked!");
  }, [onEvent]);

  return <button onClick={handleClick}>Notify</button>;
};`,

    useReducer: `// useReducer
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    default: return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>−</button>
    </div>
  );
};`,

    useTransition: `// useTransition (React 18+)
import { useTransition } from "react";

const [isPending, startTransition] = useTransition();

startTransition(() => {
  // Run async updates here
});`,

    useDeferredValue: `// useDeferredValue (React 18+)
import { useDeferredValue } from "react";

const deferredSearchTerm = useDeferredValue(searchTerm);`,

    useId: `// useId (React 18+)
import { useId } from "react";

const id = useId();`,

    useSyncExternalStore: `// useSyncExternalStore (React 18+)
import { useSyncExternalStore } from "react";

const state = useSyncExternalStore(subscribe, getSnapshot);`,

    useImperativeHandle: `// useImperativeHandle
import { useImperativeHandle, forwardRef, useRef } from "react";

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));
  return <input ref={inputRef} />;
});`,

    useLayoutEffect: `// useLayoutEffect
import { useLayoutEffect } from "react";

useLayoutEffect(() => {
  // Runs synchronously after layout
});`,

    useDebugValue: `// useDebugValue
import { useDebugValue } from "react";

useDebugValue(state, formatFn);`,

    useOptimistic: `// useOptimistic (React 19)
import { useOptimistic } from "react";

const [optimisticValue, update] = useOptimistic(value, reducer);`,

    useActionState: `// useActionState (React 19)
import { useActionState } from "react";

const [state, handleAction] = useActionState(async (prev, formData) => {
  const res = await fetch("/api", { method: "POST", body: formData });
  return await res.json();
}, { message: "" });`,

    useFormStatus: `// useFormStatus (React 19)
import { useFormStatus } from "react-dom";

const { pending, data, method } = useFormStatus();`,

    useFormState: `// useFormState (React 19)
import { useFormState } from "react-dom";

const [state, formAction] = useFormState(submitFn, initialState);`,

    use: `
import { cache } from "react";

export const fetchPosts = cache(async () => {
  const res = await fetch("https://..."); 
  return res.json();
});
    
    // use() — React 19 Server Component
import { use } from "react";
import { fetchPosts } from "../lib/fetchPosts"; // must return a Promise

export default function Posts() {
  const posts = use(fetchPosts()); // directly unwrap async result
  return (
    <ul className="space-y-2 text-white">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`,
  };

  return (
    <Section id="hooks" title="React Hooks Reference">
      <p className="mb-4">
        Full guide to all built-in React hooks—classic and newly introduced in
        React 18 & 19:
      </p>

      {Object.entries(examples).map(([hook, code]) => (
        <div key={hook} className="mt-6 mb-4">
          <p className="font-semibold mb-2">
            <strong>🔧 {hook}</strong> – {descriptions[hook]}
          </p>
          <CodeBlock code={code} />
        </div>
      ))}
    </Section>
  );
};

export default HooksReferenceSection;
