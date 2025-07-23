import Section from "../Section";
import CodeBlock from "../CodeBlock";

const tags = {
  Headings: {
    example: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>`,
    preview: (
      <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
      </div>
    ),
  },

  Text: {
    example: `<p>Paragraph</p>
<strong>Bold</strong>
<em>Italic</em>
<small>Small text</small>
<mark>Highlighted</mark>`,
    preview: (
      <p>
        <strong>Bold</strong>, <em>Italic</em>, <small>Small</small>,{" "}
        <mark>Highlighted</mark>
      </p>
    ),
  },

  Lists: {
    example: `<ul><li>Unordered</li></ul>
<ol><li>Ordered</li></ol>
<dl><dt>Term</dt><dd>Definition</dd></dl>`,
    preview: (
      <div>
        <ul>
          <li>Unordered</li>
        </ul>
        <ol>
          <li>Ordered</li>
        </ol>
        <dl>
          <dt>HTML</dt>
          <dd>HyperText Markup Language</dd>
        </dl>
      </div>
    ),
  },

  Media: {
    example: `<img src="image.jpg" />
<video controls><source src="video.mp4" /></video>
<audio controls><source src="audio.mp3" /></audio>`,
    preview: (
      <div className="space-y-2">
        <img src="https://picsum.photos/100" alt="sample" />
        <video width="160" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
        </video>
        <audio controls>
          <source src="https://www.w3schools.com/html/horse.mp3" />
        </audio>
      </div>
    ),
  },

  Table: {
    example: `<table>
  <thead><tr><th>Name</th><th>Age</th></tr></thead>
  <tbody><tr><td>Alice</td><td>24</td></tr></tbody>
</table>`,
    preview: (
      <table className="border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>24</td>
          </tr>
        </tbody>
      </table>
    ),
  },

  FormElements: {
    example: `<form>
  <fieldset>
    <legend>Personal Info</legend>
    <label>Name:</label>
    <input type="text" />
    <label>Email:</label>
    <input type="email" required />
  </fieldset>
  <button type="submit">Submit</button>
</form>`,
    preview: (
      <form className="space-y-2">
        <fieldset className="border p-2">
          <legend>Personal Info</legend>
          <label>
            Name: <input type="text" className="ml-2" />
          </label>
          <br />
          <label>
            Email: <input type="email" className="ml-2" required />
          </label>
        </fieldset>
        <button
          type="submit"
          className="bg-blue-600 px-3 py-1 text-white rounded"
        >
          Submit
        </button>
      </form>
    ),
  },

  SemanticLayout: {
    example: `<header>Top bar</header>
<nav>Main nav</nav>
<main>Main content</main>
<aside>Sidebar</aside>
<footer>Footer</footer>`,
    preview: (
      <div className="space-y-1">
        <header className="bg-gray-300 px-2">Top bar</header>
        <nav className="bg-gray-200 px-2">Main nav</nav>
        <main className="bg-white px-2">Main content</main>
        <aside className="bg-gray-100 px-2">Sidebar</aside>
        <footer className="bg-gray-300 px-2">Footer</footer>
      </div>
    ),
  },

  Interactive: {
    example: `<details>
  <summary>Toggle info</summary>
  <p>Hidden content</p>
</details>
<dialog open>This is a dialog</dialog>
<button>Click me</button>`,
    preview: (
      <div className="space-y-2">
        <details>
          <summary>Toggle info</summary>
          <p>Hidden content</p>
        </details>
        <dialog
          open
          className="static p-4 border bg-white text-black rounded shadow"
        >
          This is a dialog inside the section
        </dialog>

        <button className="bg-green-500 px-2 py-1 text-white rounded">
          Click me
        </button>
      </div>
    ),
  },

  DisplayTags: {
    example: `<div className="space-y-3 bg-white rounded p-4 border text-black">
        <div>
          <label htmlFor="output" className="block font-medium">
            Calculation Result:
          </label>
          <output id="output" className="text-green-600 font-bold">
            42
          </output>
        </div>

        <div>
          <label htmlFor="progress" className="block font-medium">
            Upload Progress:
          </label>
          <progress
            id="progress"
            value="70"
            max="100"
            className="w-full h-4"
          ></progress>
          <p className="text-sm text-gray-600">70% complete</p>
        </div>

        <div>
          <label htmlFor="meter" className="block font-medium">
            Battery Level:
          </label>
          <meter id="meter" value="0.75" min="0" max="1" className="w-full h-4">
            75%
          </meter>
          <p className="text-sm text-gray-600">75% charged</p>
        </div>
      </div>`,
    preview: (
      <div className="space-y-3 bg-white rounded p-4 border text-black">
        <div>
          <label htmlFor="output" className="block font-medium">
            Calculation Result:
          </label>
          <output id="output" className="text-green-600 font-bold">
            42
          </output>
        </div>

        <div>
          <label htmlFor="progress" className="block font-medium">
            Upload Progress:
          </label>
          <progress
            id="progress"
            value="70"
            max="100"
            className="w-full h-4"
          ></progress>
          <p className="text-sm text-gray-600">70% complete</p>
        </div>

        <div>
          <label htmlFor="meter" className="block font-medium">
            Battery Level:
          </label>
          <meter id="meter" value="0.75" min="0" max="1" className="w-full h-4">
            75%
          </meter>
          <p className="text-sm text-gray-600">75% charged</p>
        </div>
      </div>
    ),
  },

  Embed: {
    example: `<iframe src="https://example.com" />
<embed src="video.mp4" />
<object data="doc.pdf" />`,
    preview: (
      <div className="space-y-2">
        <div className="border border-gray-400 p-2 bg-white text-sm">
          <strong>Iframe Preview</strong>
          <br />
          [Blocked due to security policy]
        </div>
        <div className="border border-gray-400 p-2 bg-white text-sm">
          <strong>Embed Preview</strong>
          <br />
          [Simulated embedded media]
        </div>
        <div className="border border-gray-400 p-2 bg-white text-sm">
          <strong>Object Preview</strong>
          <br />
          [PDF or doc placeholder]
        </div>
      </div>
    ),
  },

  MetaPatterns: {
    example: `<template>
  <p>This content will be cloned dynamically.</p>
</template>
<noscript>
  <p>Please enable JavaScript.</p>
</noscript>`,
    preview: (
      <div className="space-y-2">
        <p>
          <em>&lt;template&gt;</em> is hidden until JS renders it
        </p>
        <noscript>
          <p>Please enable JavaScript.</p>
        </noscript>
      </div>
    ),
  },
};

const HTMLTagsReferenceSection = () => (
  <Section id="html-tags" title="HTML Tags Reference">
    <p className="mb-4">
      Common HTML tags used to build content, structure, and layout. Each
      includes syntax and a visual preview:
    </p>

    {Object.entries(tags).map(([name, { example, preview }]) => (
      <div key={name} className="mt-6 mb-6 border-t border-gray-700 pt-6">
        <p className="font-semibold mb-2">
          <strong>🔹 {name}</strong>
        </p>
        <CodeBlock code={example} />
        <div className="bg-gray-100 rounded p-4 mt-2 text-black">{preview}</div>
      </div>
    ))}
  </Section>
);

export default HTMLTagsReferenceSection;
