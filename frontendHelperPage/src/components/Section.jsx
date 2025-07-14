const Section = ({ id, title, children }) => (
  <section id={id} className="ml-72 p-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);
export default Section;
