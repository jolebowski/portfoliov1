import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Quels types de services proposez-vous ?',
      answer: 'Je propose des services de développement web, de développement mobile, ainsi que des solutions de maintenance et de mise à jour.'
    },
    {
      question: 'Combien de temps faut-il pour réaliser un projet ?',
      answer: 'Le délai dépend de la complexité du projet. En général, un site vitrine peut être livré en 7 jours, tandis qu\'une application mobile peut prendre plusieurs semaines.'
    },
    {
      question: 'Proposez-vous des services de maintenance ?',
      answer: 'Oui, j\'offre des services de maintenance mensuels pour assurer le bon fonctionnement de votre site ou application.'
    },
    {
      question: 'Comment puis-je vous contacter pour discuter de mon projet ?',
      answer: 'Vous pouvez me contacter via le formulaire de contact sur mon site ou directement par email pour discuter de votre projet.'
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Questions Fréquemment Posées</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
            <h3 
              className="text-lg font-bold text-gray-800 cursor-pointer flex justify-between items-center" 
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="ml-2">
                {openIndex === index ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-blue-600" />}
              </span>
            </h3>
            {openIndex === index && (
              <p className="text-gray-700 mt-2 border-t pt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-600">Si vous avez d'autres questions, n'hésitez pas à me contacter !</p>
      </div>
    </div>
  );
}

export default FAQ;