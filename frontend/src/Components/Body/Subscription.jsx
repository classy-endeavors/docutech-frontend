import { useState } from "react";
import data from "../data";
import { HoverCard } from "../Cards/HoverCard";
import { TogglePill } from "../Buttons/TogglePill";

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = data.plans || {
    monthly: [],
    annual: [],
  };

  const currentPlans = plans[billingCycle] || [];

  return (
    <section className="py-16 flex w-full flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Pick your plan. We make this part easy too.
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <TogglePill
            options={[
              { value: "monthly", label: "Monthly" },
              { value: "annual", label: "Annually" },
            ]}
            value={billingCycle}
            onChange={setBillingCycle}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentPlans.map((plan, index) => (
            <HoverCard
              key={index}
              plan={{
                name: plan.name,
                price: plan.price,
                minTotal: plan.minTotal,
                features: plan.features,
              }}
              currency={plans.currency}
              billingType={billingCycle === "monthly" ? "month" : "year"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
