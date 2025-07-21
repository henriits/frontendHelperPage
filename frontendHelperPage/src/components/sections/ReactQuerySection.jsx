import Section from "../Section";
import CodeBlock from "../CodeBlock";

const examples = {
  install: `// Install React Query
npm install @tanstack/react-query`,

  setupProvider: `// main.jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

<React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
</React.StrictMode>;`,

  useQuery: `// useQuery — basic data fetching
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const { data, isLoading, error } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});`,

  loadingState: `// Show loading and errors
if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

return <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>;`,

  useMutation: `// useMutation — post request
import { useMutation } from "@tanstack/react-query";

const createUser = async (newUser) => {
  const res = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(newUser),
  });
  return res.json();
};

const { mutate, isPending } = useMutation({ mutationFn: createUser });
mutate({ name: "Henri" });`,
};

const ReactQuerySection = () => (
  <Section id="query" title="React Query Setup">
    <p className="mb-4">
      React Query simplifies async data handling—automated caching, smart
      loading states, and mutation helpers. Here's how to get started:
    </p>

    {Object.entries(examples).map(([label, code]) => (
      <div key={label} className="mt-6 mb-4">
        <p className="font-semibold mb-2">
          <strong>⚙️ {label}</strong>
        </p>
        <CodeBlock code={code} />
      </div>
    ))}
  </Section>
);

export default ReactQuerySection;
