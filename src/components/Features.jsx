import React from "react";

const Features = () => {
  const featureList = [
    { title: "AI-Powered Automation", description: "Harness AI to streamline your workflow." },
    { title: "Seamless Integration", description: "Easily connects with your favorite tools." },
    { title: "Real-Time Insights", description: "Monitor progress with live analytics." },
  ];

  return (
    <section id="features" className="py-16 px-6 grid md:grid-cols-3 gap-8">
      {featureList.map((feature, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-semibold">{feature.title}</h3>
          <p className="text-gray-400 mt-2">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
