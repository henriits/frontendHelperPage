import Section from "../Section";
import CodeBlock from "../CodeBlock";

const examples = {
  map: `// .map() — transform items
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
// [2, 4, 6]`,

  filter: `// .filter() — keep matching items
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
// [2, 4]`,

  reduce: `// .reduce() — accumulate into a value
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
// 10`,

  find: `// .find() — first match
const users = [{ id: 1 }, { id: 2 }];
const user = users.find(u => u.id === 2);
// { id: 2 }`,

  findIndex: `// .findIndex() — index of first match
const nums = [4, 6, 7];
const index = nums.findIndex(n => n > 5);
// 1`,

  some: `// .some() — at least one match
const nums = [1, 2, 3];
const hasEven = nums.some(n => n % 2 === 0);
// true`,

  every: `// .every() — all must match
const nums = [2, 4, 6];
const allEven = nums.every(n => n % 2 === 0);
// true`,

  includes: `// .includes() — item present
const tags = ["react", "vite"];
const hasReact = tags.includes("react");
// true`,

  sort: `// .sort() — reorder array
const nums = [3, 1, 2];
const sorted = nums.sort((a, b) => a - b);
// [1, 2, 3]`,

  reverse: `// .reverse() — invert order
const nums = [1, 2, 3];
nums.reverse();
// [3, 2, 1]`,

  concat: `// .concat() — merge arrays
const a = [1, 2];
const b = [3, 4];
const merged = a.concat(b);
// [1, 2, 3, 4]`,

  slice: `// .slice() — copy portion
const nums = [1, 2, 3, 4];
const part = nums.slice(1, 3);
// [2, 3]`,

  splice: `// .splice() — change array in-place
const nums = [1, 2, 3];
nums.splice(1, 1, 99);
// [1, 99, 3]`,
};

const ArrayMethodsSection = () => (
  <Section id="array-methods" title="JavaScript Array Methods">
    <p className="mb-4">
      Common array methods every JavaScript developer should know. Each
      transforms or inspects data in different ways:
    </p>
    {Object.entries(examples).map(([method, code]) => (
      <div key={method} className="mt-6 mb-4">
        <p className="font-semibold mb-2">
          <strong>🧮 {method}</strong>
        </p>
        <CodeBlock code={code} />
      </div>
    ))}
  </Section>
);

export default ArrayMethodsSection;
