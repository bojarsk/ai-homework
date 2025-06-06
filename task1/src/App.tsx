import "./App.css";
import PricingCard from "./task1/PricingCard";

function App() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen bg-gray-50 p-4">
      <PricingCard
        plan="Standard"
        price="$100"
        features={[
          "50,000 Requests",
          "4 Contributors",
          "Up to 3GB storage space",
        ]}
      />
      <PricingCard
        plan="Pro"
        price="$200"
        features={[
          "100,000 Requests",
          "7 Contributors",
          "Up to 6GB storage space",
        ]}
        isFeatured={true}
      />
      <PricingCard
        plan="Expert"
        price="$500"
        features={[
          "200,000 Requests",
          "11 Contributors",
          "Up to 10GB storage space",
        ]}
      />
    </div>
  );
}

export default App;
