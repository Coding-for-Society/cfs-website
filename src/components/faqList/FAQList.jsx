import { useState } from 'react';
import './style.css';

function FAQList(faqs) {
  // state to store the active index of the clicked question
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    // update activeIndex state based on the clicked index
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => handleClick(index)}>
            <div className="faq-icon">
              {activeIndex === index ? (
                <span>&#x25BC;</span>
              ) : (
                <span>&#x25B6;</span>
              )}
            </div>
            <div className="faq-text">{faq.question}</div>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default FAQList;
