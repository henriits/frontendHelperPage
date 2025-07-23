import { useState } from "react";

const ChecklistBlock = ({ title, items }) => {
  const [checked, setChecked] = useState(
    () => items.map(() => false) // Initialize all items as unchecked
  );

  const toggleItem = (index) => {
    setChecked((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <section className="bg-white text-black rounded shadow p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start space-x-3">
            <button
              onClick={() => toggleItem(i)}
              className={`w-5 h-5 rounded-full border-2 ${
                checked[i] ? "bg-green-500 border-green-500" : "border-gray-400"
              } mt-1`}
              aria-label={checked[i] ? "Checked" : "Unchecked"}
            ></button>

            <div>
              <span
                className={`font-medium ${
                  checked[i] ? "line-through text-gray-500" : ""
                }`}
              >
                {item.label}
              </span>
              {item.note && (
                <span className="block text-sm text-gray-600 mt-1">
                  {item.note}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChecklistBlock;
