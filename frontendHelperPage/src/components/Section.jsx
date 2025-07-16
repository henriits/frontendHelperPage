const Section = ({ id, title, children }) => (
  <section id={id} className="ml-72 px-6 py-10 max-w-5xl">
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    {children}
  </section>
);

export default Section;
