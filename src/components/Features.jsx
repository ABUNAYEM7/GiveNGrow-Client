import { Zoom } from "react-awesome-reveal";

const Features = () => {
  const features = [
    { title: "Transparent Donations", description: "Know exactly where your money goes." },
    { title: "Wide Reach", description: "Support campaigns from around the world." },
    { title: "Trusted Platform", description: "Built with reliability and trust in mind." },
  ];

  return (
    <div className="py-12 bg-base">
      <h2 className="text-4xl font-bold text-center text-primary mb-8">Our Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Zoom key={index}>
            <div className="w-11/12 md:w-full mx-auto p-6 bg-base-300 shadow-md rounded-lg text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Features;
