import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const patterns = {
  LabelPairing: `<label for="email">Email:</label>
<input type="email" id="email" />`,

  AriaDescribedBy: `<input aria-describedby="hint" />
<small id="hint">Include area code</small>`,

  AriaInvalid: `<input aria-invalid="true" />`,

  RoleAlert: `<div role="alert">Please fix the errors above</div>`,

  ScreenReaderOnly: `<label class="sr-only" for="secret">Secret</label>
<input id="secret" type="text" />`,
};

const AccessibleFormPatternsSection = () => (
  <Section id="form-accessibility" title="Accessible Form Patterns">
    <p className="mb-4">
      Use proper semantics to support screen readers and keyboard users. Pair
      labels, use <code>aria-*</code> for context, and expose errors with clear
      roles.
    </p>

    {Object.entries(patterns).map(([label, code]) => (
      <div key={label} className="mt-6 mb-6 border-t border-gray-700 pt-6">
        <p className="font-semibold mb-2">
          <strong>🎛 {label}</strong>
        </p>
        <CodeBlock code={code} />
      </div>
    ))}
  </Section>
);

export default AccessibleFormPatternsSection;
