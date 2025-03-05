import React from "react";
import "./Faq.css";

const Faqpage = () => {
  const faqs = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];
  return (
    <div className="Faq-box">
      <h1>Frequently Asked Question</h1>
      {faqs.map((faq, index) => {
        return <FaqComm faq={faq} index={index} />;
      })}
    </div>
  );
};
export default Faqpage;
