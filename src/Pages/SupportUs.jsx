import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Navigate, useNavigate } from "react-router";

const SupportUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate()

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is 'Give and Grow'?",
      answer:
        "Give and Grow is a platform that empowers communities to raise funds for meaningful causes. Every donation helps create a positive impact.",
    },
    {
      question: "How can I make a donation?",
      answer:
        "You can donate by clicking the 'Donate Now' button and selecting your preferred payment method. Your support makes a difference!",
    },
    {
      question: "Is my donation secure?",
      answer:
        "Yes, all transactions are encrypted and secure. We prioritize your privacy and the safety of your data.",
    },
    {
      question: "Can I track how my donation is used?",
      answer:
        "Yes, we provide regular updates on the impact of your donation through detailed reports and success stories.",
    },
    {
      question: "Are donations tax-deductible?",
      answer:
        "Yes, in most cases donations are tax-deductible. Please check with your local tax laws or contact us for documentation.",
    },
  ];

  return (
    <div className="bg-base-100 py-20 px-6 lg:px-20">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>G&G || SUPPORT US</title>
      </Helmet>
        <h1 className="text-4xl font-bold text-primary mb-6">
          Support Us
        </h1>
        <p className="text-base mb-8">
          Your support fuels change. Together, we can make the world a better
          place. Join hands with "Give and Grow" to create a meaningful impact.
        </p>
        <button
          onClick={() => navigate('/AllCampaign')}
          className="px-6 py-3 bg-secondary text-white text-lg font-medium rounded-lg hover:bg-primary transition"
        >
          Donate Now
        </button>
      </div>

      {/* Why Support Us */}
      <div className="mt-12 flex flex-col items-center justify-center ">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Why Support "Give and Grow"?
        </h2>
        <p className="text-base mb-6">
          At "Give and Grow," we believe in the power of collective action.
          Your contributions directly support:
        </p>
        <ul className="list-disc list-inside space-y-3 text-base">
          <li>Providing education to underprivileged children.</li>
          <li>Ensuring access to clean water in remote areas.</li>
          <li>Funding innovative solutions to community challenges.</li>
          <li>Empowering small businesses to grow sustainably.</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-primary mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 focus:outline-none flex justify-between items-center"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-gray-600">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-100 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-medium text-secondary mb-4">
          Ready to Make a Difference?
        </h3>
        <button
          className="px-6 py-3 bg-primary text-white text-lg font-medium rounded-lg hover:bg-secondary transition"
        >
          Volunteer with Us
        </button>
      </div>
    </div>
  );
};

export default SupportUs;
