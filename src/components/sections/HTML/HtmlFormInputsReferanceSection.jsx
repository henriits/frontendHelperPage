import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const inputs = {
  Text: {
    example: `<input type="text" placeholder="Your name" />`,
    preview: (
      <input type="text" placeholder="Your name" className="border p-2" />
    ),
  },

  Email: {
    example: `<input type="email" placeholder="Email address" required />`,
    preview: (
      <input
        type="email"
        placeholder="Email address"
        className="border p-2"
        required
      />
    ),
  },

  Password: {
    example: `<input type="password" placeholder="Enter password" />`,
    preview: (
      <input
        type="password"
        placeholder="Enter password"
        className="border p-2"
      />
    ),
  },

  Number: {
    example: `<input type="number" min="0" max="100" />`,
    preview: <input type="number" min="0" max="100" className="border p-2" />,
  },

  Date: {
    example: `<input type="date" />`,
    preview: <input type="date" className="border p-2" />,
  },

  Range: {
    example: `<input type="range" min="0" max="100" />`,
    preview: <input type="range" min="0" max="100" />,
  },

  Color: {
    example: `<input type="color" />`,
    preview: <input type="color" />,
  },

  Search: {
    example: `<input type="search" placeholder="Search..." />`,
    preview: (
      <input type="search" placeholder="Search..." className="border p-2" />
    ),
  },

  File: {
    example: `<input type="file" />`,
    preview: <input type="file" />,
  },

  Checkbox: {
    example: `<input type="checkbox" checked /> Agree to terms`,
    preview: (
      <label>
        <input type="checkbox" defaultChecked className="mr-1" />
        Agree to terms
      </label>
    ),
  },

  Radio: {
    example: `<input type="radio" name="plan" value="free" checked /> Free
<input type="radio" name="plan" value="pro" /> Pro`,
    preview: (
      <div className="space-y-1">
        <label>
          <input
            type="radio"
            name="plan"
            value="free"
            defaultChecked
            className="mr-1"
          />
          Free
        </label>
        <label>
          <input type="radio" name="plan" value="pro" className="mr-1" />
          Pro
        </label>
      </div>
    ),
  },

  Select: {
    example: `<select>
  <option value="">Choose</option>
  <option value="1">One</option>
  <option value="2">Two</option>
</select>`,
    preview: (
      <select className="border p-2">
        <option value="">Choose</option>
        <option value="1">One</option>
        <option value="2">Two</option>
      </select>
    ),
  },

  Textarea: {
    example: `<textarea rows="4" cols="30">Default text</textarea>`,
    preview: (
      <textarea rows="4" cols="30" className="border p-2">
        Default text
      </textarea>
    ),
  },

  Label: {
    example: `<label for="username">Username</label>
<input id="username" type="text" />`,
    preview: (
      <div>
        <label htmlFor="username" className="block">
          Username
        </label>
        <input id="username" type="text" className="border p-2" />
      </div>
    ),
  },

  Accessibility: {
    example: `<input type="text" aria-label="Phone number" />
<input type="text" aria-describedby="hint" />
<small id="hint">Include country code</small>`,
    preview: (
      <div>
        <input
          type="text"
          aria-label="Phone number"
          placeholder="Phone number"
          className="border p-2 mb-2"
        />
        <input
          type="text"
          aria-describedby="hint"
          placeholder="With hint"
          className="border p-2"
        />
        <small id="hint" className="block mt-1 text-sm text-gray-600">
          Include country code
        </small>
      </div>
    ),
  },

  Buttons: {
    example: `<button type="submit">Submit</button>
<button type="reset">Reset</button>`,
    preview: (
      <div className="space-x-2">
        <button
          type="submit"
          className="bg-blue-600 px-3 py-1 rounded text-white"
        >
          Submit
        </button>
        <button type="reset" className="bg-gray-300 px-3 py-1 rounded">
          Reset
        </button>
      </div>
    ),
  },
};

const HTMLFormInputsReferenceSection = () => (
  <Section id="html-inputs" title="HTML Form Inputs Reference">
    <p className="mb-4">
      Here's a reference for useful <code>&lt;input&gt;</code> types and related
      form elements. Includes syntax and rendered preview:
    </p>

    {Object.entries(inputs).map(([name, { example, preview }]) => (
      <div key={name} className="mt-6 mb-6 border-t border-gray-700 pt-6">
        <p className="font-semibold mb-2">
          <strong>🔸 {name}</strong>
        </p>
        <CodeBlock code={example} />
        <div className="bg-gray-100 rounded p-4 mt-2 text-black space-y-2">
          {preview}
        </div>
      </div>
    ))}
  </Section>
);

export default HTMLFormInputsReferenceSection;
