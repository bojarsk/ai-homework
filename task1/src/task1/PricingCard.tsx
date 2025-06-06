import React from "react";

type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      tabIndex={0}
      className={`flex flex-col items-center w-full max-w-xs px-4 py-16 rounded-none outline-none
        ${
          isFeatured
            ? "bg-slate-700 text-white scale-105 z-10"
            : "bg-white text-slate-700"
        }
        shadow-lg transition-transform transition-shadow
        hover:shadow-2xl
        focus-visible:ring-4 focus-visible:ring-blue-400
      `}
    >
      <h2 className="text-lg font-semibold mb-2">{plan}</h2>
      <div className="text-4xl font-extrabold mb-6">{price}</div>
      <ul className="mb-8 w-full">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className={`py-3 px-12 border-b border-slate-300 text-center ${
              isFeatured ? "text-white" : "text-slate-700"
            }`}
          >
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-none font-bold tracking-wide uppercase transition
          focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none
          ${isFeatured ? "bg-slate-700 text-white" : "bg-white text-slate-700 "}
          hover:bg-opacity-90
        `}
      >
        Subscribe
      </button>
    </div>
  );
};

export default PricingCard;
