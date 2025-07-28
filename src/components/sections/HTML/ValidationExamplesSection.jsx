import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const examples = {
  Required: `<input type="text" required placeholder="Required field" />`,
  MinMax: `<input type="number" min="1" max="10" />`,
  Pattern: `<input type="text" pattern="[A-Za-z]{3,}" placeholder="Min 3 letters only" />`,
  CustomValidity: `<input id="customInput" />
<script>
  const input = document.getElementById("customInput");
  input.addEventListener("input", () => {
    if (input.value.includes("!")) {
      input.setCustomValidity("No exclamation marks allowed");
    } else {
      input.setCustomValidity("");
    }
  });
</script>`,
};

const ValidationExamplesSection = () => (
  <Section id="form-validation" title="Form Validation Examples">
    <p className="mb-4">
      HTML includes built-in validation like <code>required</code>,{" "}
      <code>min</code>, <code>max</code>, <code>pattern</code>, and even{" "}
      <code>setCustomValidity()</code> for custom rules.
    </p>

    {Object.entries(examples).map(([label, code]) => (
      <div key={label} className="mt-6 mb-6 border-t border-gray-700 pt-6">
        <p className="font-semibold mb-2">
          <strong>✅ {label}</strong>
        </p>
        <CodeBlock code={code} />
      </div>
    ))}
  </Section>
);

export default ValidationExamplesSection;
