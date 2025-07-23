const Section = ({ id, title, children }) => (
  <section id={id} className="ml-0 px-4 py-8 max-w-screen-lg w-full mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
    {children}
  </section>
);

export default Section;
